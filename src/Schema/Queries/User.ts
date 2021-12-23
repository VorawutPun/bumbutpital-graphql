import { GraphQLFloat, GraphQLID, GraphQLInt, GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";
import { userInfo } from "os";
import { OnlyUserName } from "../TypeDefs/OnlyUserName";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    return Users.find();
  },
};

export const GET_ONLY_USERNAME = {
  type: new GraphQLList(OnlyUserName),
  resolve(_: any, __: any, context: any) {
    //  if (!context.isAuth) {
    //   throw new Error('Unauthenticated');
    // }
    return Users.find();
  },
};

export const GET_USER = {
  type: new GraphQLList(UserType),
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const user = await Users.findByIds(args.id);
    if (user) {
      return user;
    } else {
      throw new Error("Post not found");
    }
  },
};

export const GET_CURENT_USER = {
  type: new GraphQLList(UserType),
  resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    return Users.find({ where: { id: context.userId } });
  },
};

export const COUNT_USER = {
  type: GraphQLInt,
  async resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const countUser = await Users.count({ where: { role: "User" } });
    return countUser;
  },
};
