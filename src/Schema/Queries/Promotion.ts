import { GraphQLID, GraphQLList } from "graphql";
import { PromotionType } from "../TypeDefs/Promotion";
import { Promotion } from "../../Entities/Promotion";
import { PromotionLog } from "../../Entities/PromotionLog";
import { PromotionLogType } from "../TypeDefs/PromotionLog";

export const GET_ALL_PROMOTION = {
  type: new GraphQLList(PromotionType),
  resolve(_: any, __: any, context: any) {
     if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return Promotion.find();
  },
};

export const GET_CURRENT_PROMOTION = {
  type: new GraphQLList(PromotionType),
  async resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const user = (await PromotionLog.findOne({
      where: { userId: context.userId },
    })) as PromotionLog;
    
    return Promotion.find({
      where:{promotionId: user.keeppromotionId , }
     
      
    },);
  },
};

export const GET_PROMOTIONLOG = {
  type: new GraphQLList(PromotionLogType),
  resolve(_: any, __: any, context: any) {
     if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return PromotionLog.find();
  },
};

