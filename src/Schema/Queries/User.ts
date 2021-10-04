import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve(_: any, __: any, context: any) {
     if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return Users.find();
  },
};

export const GET_CURENT_USER = {
  type: new GraphQLList(UserType),
  resolve(_: any, __: any, context: any) {
     if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return Users.find({where:{id:context.userId}});
  },
};
