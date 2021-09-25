import { GraphQLList } from "graphql";
import { promotioninhospitaldetail_cardType } from "../TypeDefs/promotioninhospitaldetail_card";
import {  promotioninhospitaldetail_card} from "../../Entities/promotioninhospitaldetail_card";

export const GET_ALL_promotioninhospitaldetail_card = {
  type: new GraphQLList(promotioninhospitaldetail_cardType),
  resolve() {
    return promotioninhospitaldetail_card.find();
  },
};

