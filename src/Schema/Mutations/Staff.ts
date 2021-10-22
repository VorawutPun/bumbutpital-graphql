import { GraphQLID, GraphQLString } from "graphql";
import { StaffType } from "../TypeDefs/Staff";
import { AccessType, MessageType } from "../TypeDefs/Messages";
import { sign } from "jsonwebtoken";
import { compare, hash } from "bcryptjs";
import { Staff } from "../../Entities/Staff";

export const UPDATE_STAFF_PASSWORD = {
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
    const staff = await Staff.findOne({ username: username });

    if (!staff) {
      throw new Error("USERNAME DOESNT EXIST");
    }
    const staffPassword = staff?.password;

    if (oldPassword === staffPassword) {
      await Staff.update({ username: username }, { password: newPassword });

      return { successful: true, message: "PASSWORD UPDATED" };
    } else {
      throw new Error("PASSWORDS DO NOT MATCH!");
    }
  },
};

export const DELETE_STAFF = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const id = args.id;
    await Staff.delete(id);

    return { successful: true, message: "DELETE WORKED" };
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
    const staff = await Staff.findOne({ username: username });

    if (!staff) {
      throw new Error("Username does not exist!");
    }
    const verify = await compare(password, staff.password);

    if (!verify) {
      throw new Error("Bad password");
    }

    return {
      accessToken: sign({ staffid: staff.Staffid }, "MySecretKey"),
    };
  },
};

export const STAFF_REGISTER = {
  type: StaffType,
  args: {
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    role:{ type:GraphQLString}
  },
  async resolve(parent: any, args: any) {
    const hashedPassword = await hash(args.password, 13);
    const { username, password, name, surname, email, phoneNumber,role } = args;
    await Staff.insert({
      username,
      password: hashedPassword,
      name,
      surname,
      email,
      phoneNumber,
      role
    });
    return args;
  },
};