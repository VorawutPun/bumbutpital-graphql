import { GraphQLID, GraphQLString } from "graphql";
import { PromotionLog } from "../../Entities/PromotionLog";
import { PromotionLogType } from "../TypeDefs/PromotionLog";
import { AccessType, MessageType } from "../TypeDefs/Messages";



export const KeepPromotion = {
  type: PromotionLogType,
  args: {
      userId:{ type: GraphQLString },
    usedpromotionId: { type: GraphQLString },
    keeppromotionId: { type: GraphQLString },
    status: { type: GraphQLString },

  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const {userId, usedpromotionId, keeppromotionId, status} = args;
    await PromotionLog.insert({
      userId: context.userId,
      usedpromotionId,
      keeppromotionId,
      status
    });
    return args;
  },
};

