import { GraphQLID, GraphQLList } from "graphql";
import { PromotionType } from "../TypeDefs/Promotion";
import { Promotion } from "../../Entities/Promotion";

export const GET_ALL_PROMOTION = {
  type: new GraphQLList(PromotionType),
  resolve(_: any, __: any, context: any) {
     if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return Promotion.find();
  },
};

export const GET_PROMOTION = {
  type: new GraphQLList(PromotionType),
  args: {
    promotionId: { type: GraphQLID },
  },
  async resolve(_: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const promotion = await Promotion.findByIds(args.promotionId);
    if (promotion) {
      return promotion;
    } else {
      throw new Error("Post not found");
    }
  },
};