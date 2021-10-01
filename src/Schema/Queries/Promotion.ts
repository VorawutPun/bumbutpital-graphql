import { GraphQLList } from "graphql";
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

