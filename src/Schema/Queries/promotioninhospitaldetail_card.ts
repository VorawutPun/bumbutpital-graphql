import { GraphQLList } from "graphql";
import { promotioninhospitaldetail_cardType } from "../TypeDefs/promotioninhospitaldetail_card";
import {  promotioninhospitaldetail_card} from "../../Entities/promotioninhospitaldetail_card";

export const GET_ALL_promotioninhospitaldetail_card = {
  type: new GraphQLList(promotioninhospitaldetail_cardType),
  resolve(_: any, __: any, context: any) {
     if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return promotioninhospitaldetail_card.find();
  },
};

