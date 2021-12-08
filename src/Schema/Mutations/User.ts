import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { AccessType, MessageType } from "../TypeDefs/Messages";
import { Users } from "../../Entities/Users";
import { sign } from "jsonwebtoken";
import { PHQ9Log } from "../../Entities/PHQ9Log";
// import { PHQ9LogType } from "../TypeDefs/PHQ9Log";
import { compare, hash } from "bcryptjs";
import { MixType } from "../TypeDefs/Mix";

const nodeMailer = require("nodemailer");

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    username: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const { username, oldPassword, newPassword } = args;
    const user = await Users.findOne({ username: username });

    if (!user) {
      throw new Error("USERNAME DOESNT EXIST");
    }
    const userPassword = user?.password;

    if (oldPassword === userPassword) {
      await Users.update({ username: username }, { password: newPassword });

      return { successful: true, message: "PASSWORD UPDATED" };
    } else {
      throw new Error("PASSWORDS DO NOT MATCH!");
    }
  },
};

export const DELETE_USER = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const id = args.id;
    await Users.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};

export const USER_LOGIN = {
  type: AccessType,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, password } = args;
    const user = await Users.findOne({ username: username });

    if (!user) {
      throw new Error("Username does not exist!");
    }
    const verify = await compare(password, user.password);

    if (!verify) {
      throw new Error("Bad password");
    }

    return {
      accessToken: sign({ userId: user.id }, "MySecretKey"),
    };
  },
};

export const STAFF_LOGIN = {
  type: AccessType,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, password } = args;
    const staff = await Users.findOne({ username: username });
    if (!staff) {
      throw new Error("Username does not exist!");
    }

    const verify = await compare(password, staff.password);

    if (
      !verify ||
      (staff.role != "System Administrator" &&
        staff.role != "Ministry of Public Health Staff")
    ) {
      throw new Error("Bad password");
    }
    return {
      accessToken: sign({ userId: staff.id }, "MySecretKey"),
    };
  },
};

export const USER_REGISTER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    role: { type: GraphQLString },
    createAt: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const now = Date();
    const hashedPassword = await hash(args.password, 13);
    const { username, password, name, surname, email, phoneNumber,role , createAt } = args;
      args;
    const staff = await Users.findOne({ username: username });

    console.log(role);

    if (role === "Ministry of Public Health Staff") {
      const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
          user: "bumbutpital@gmail.com",
          pass: "bewtaepun123",
        },
      });
      await transporter.sendMail({
        from: "Bumbutpital System <bumbutpital@gmail.com>",
        to: email,
        subject: "Your Bumbutpital application account ",
        html: `<table style="width:100%;background-color:#f1f1f1;padding-top:30px" cellpadding="10" cellspacing="0" border="0" align="center">
        <tbody>
         <tr>
          <td align="center">
           <h1>BUMBUTPITAL</h1>
          </td>
         </tr>
         <tr>
          <td style="font-family:Helvetica,Arial,sans-serif;font-size:11px" align="center">
           <table style="width:100%;max-width:600px;background-color:#ffffff;border-width:1px;border-color:#d1d1d1;border-radius:3px" cellpadding="20" cellspacing="0" align="center">
            <tbody>
             <tr>
              <td style="font-size:16px" align="left">
              <h2>Hi, Welcome to BUMBUTPITAL family!</h2>
              <h3>Username and Password</h3>
              <p>Username : ${username}</p>
              <p>Password : ${password}</p>
              <hr>
              <p><a href="http://localhost:3000/login">Login Here</a></p>
            </td>
             </tr>
            </tbody>
           </table>
           <p style="padding-top:30px;margin-bottom:0">Delivered by BUMBUTPITAL</p>
          </td>
         </tr>
        </tbody>
       </table>`,
      });
    }

    if (staff) {
      // throw new Error("Username already exist.");
      return { message: "Please enter your password." };
    }
    await Users.insert({
      username,
      password: hashedPassword,
      name,
      surname,
      email,
      phoneNumber,
      role,
      createAt: now
    });
    return args;
  },
};

export const ADD_PHQSCORE = {
  type: MixType,
  args: {
    userID: { type: GraphQLString },
    appropiatePHQSeverityLog: { type: GraphQLString },
    appropiatePHQSeverityScoreLog: { type: GraphQLString },
    date: { type: GraphQLString },
    appropiatePHQSeverity: { type: GraphQLString },
    appropiatePHQSeverityScore: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const now = Date();
    const {
      appropiatePHQSeverity,
      appropiatePHQSeverityScore,
      appropiatePHQSeverityLog,
      appropiatePHQSeverityScoreLog,
    } = args;
    // const user = await Users.findOne({ id: id });
    // const user = context.id;
    await Users.update(
      { id: context.userId },
      {
        appropiatePHQSeverity: appropiatePHQSeverity,
        appropiatePHQSeverityScore: appropiatePHQSeverityScore,
      }
    );
    await PHQ9Log.insert({
      userID: context.userId,
      appropiatePHQSeverityLog,
      appropiatePHQSeverityScoreLog,
      date: now,
    });
    return args;
  },
};

export const EDIT_PROFILE = {
  type: MessageType,
  args: {
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const { name, surname, email, phoneNumber } = args;
    await Users.update(
      { id: context.userId },
      { name: name, surname: surname, email: email, phoneNumber: phoneNumber }
    );
    return { successful: true, message: "ANSWER" };
  },
};

export const PermissionPHQ9 = {
  type: MessageType,
  args: {
    permissionPHQSeverity: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const { permissionPHQSeverity } = args;
    // const user = await Users.findOne({ id: id });
    // const user = context.id;
    await Users.update(
      { id: context.userId },
      { permissionPHQSeverity: permissionPHQSeverity }
    );
    return { successful: true, message: "ANSWER" };
  },
};
