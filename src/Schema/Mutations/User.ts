import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { AccessType, MessageType } from "../TypeDefs/Messages";
import { Users } from "../../Entities/Users";
import { sign } from "jsonwebtoken";
import { compare, hash } from "bcryptjs";

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

    if (!verify|| staff.role != "staff") {
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
  },
  async resolve(parent: any, args: any) {
    const hashedPassword = await hash(args.password, 13);
    const { username, password, name, surname, email, phoneNumber } = args;
    await Users.insert({
      username,
      password: hashedPassword,
      name,
      surname,
      email,
      phoneNumber,
    });
    return args;
  },
};

export const ADD_PHQSCORE = {
  type: MessageType,
  args: {
    appropiatePHQSeverity: { type: GraphQLString },
    appropiatePHQSeverityScore: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: any) {
    // if (!context.isAuth) {
    //   throw new Error("Unauthenticated");
    // }
    const {  appropiatePHQSeverity ,appropiatePHQSeverityScore} = args;
    // const user = await Users.findOne({ id: id }); 
    // const user = context.id;
    await Users.update({ id: context.userId }, { appropiatePHQSeverity: appropiatePHQSeverity , appropiatePHQSeverityScore: appropiatePHQSeverityScore  });
    return { successful: true, message: "ANSWER" };
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
    // if (!context.isAuth) {
    //   throw new Error("Unauthenticated");
    // }
    const {  name , surname , email , phoneNumber} = args;
    // const user = await Users.findOne({ id: id }); 
    // const user = context.id;
    await Users.update({ id: context.userId }, { name : name , surname:surname ,email:email , phoneNumber:phoneNumber } ,);
    return { successful: true, message: "ANSWER" };
  },
};

export const PermissionPHQ9 = {
  type: MessageType,
  args: {
    permissionPHQSeverity: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: any) {
    // if (!context.isAuth) {
    //   throw new Error("Unauthenticated");
    // }
    const { permissionPHQSeverity } = args;
    // const user = await Users.findOne({ id: id }); 
    // const user = context.id;
    await Users.update({ id: context.userId }, { permissionPHQSeverity: permissionPHQSeverity });
    return { successful: true, message: "ANSWER" };
  },
};





