import { GraphQLString } from "graphql";
import { PromotionLog } from "../../Entities/PromotionLog";
import { PromotionLogType } from "../TypeDefs/PromotionLog";

export const KeepPromotion = {
  type: PromotionLogType,
  args: {
    usedpromotionId: { type: GraphQLString },
    keeppromotionId: { type: GraphQLString },
    status: { type: GraphQLString },

  },
  async resolve(_: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const {usedpromotionId, keeppromotionId, status} = args;
    await PromotionLog.insert({
      userId: context.userId,
      usedpromotionId,
      keeppromotionId,
      status
    });
    return args;
  },
};


