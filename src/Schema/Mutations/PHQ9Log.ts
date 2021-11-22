import { GraphQLID, GraphQLString } from "graphql";
import { PHQ9Log } from "../../Entities/PHQ9Log";
import { PHQ9LogType } from "../TypeDefs/PHQ9Log";
import { AccessType, MessageType } from "../TypeDefs/Messages";



export const ADD_PHQ9Log = {
  type: PHQ9LogType,
  args: {
    userID:{ type: GraphQLString },
    appropiatePHQSeverityLog: { type: GraphQLString },
    appropiatePHQSeverityScoreLog: { type: GraphQLString },
    date: { type: GraphQLString },

  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const now = Date();
    const { appropiatePHQSeverityLog, appropiatePHQSeverityScoreLog} = args;
    await PHQ9Log.insert({
      userID: context.userId,
      appropiatePHQSeverityLog,
      appropiatePHQSeverityScoreLog,
      date: now
    });
    return args;
  },
};