import { GraphQLInt, GraphQLList } from "graphql";
import { PHQ9Log } from "../../Entities/PHQ9Log";
import { PHQ9LogType } from "../TypeDefs/PHQ9Log";

export const GET_ALL_PHQ9Log = {
  type: new GraphQLList(PHQ9LogType),
  resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return PHQ9Log.find();
  },
};

export const GET_CURENT_PHQ9Log = {
    type: new GraphQLList(PHQ9LogType),
    resolve(_: any, __: any, context: any) {
       if (!context.isAuth) {
        throw new Error('Unauthenticated');
      }
      return PHQ9Log.find({where:{userID:context.userId}});
    },
  };