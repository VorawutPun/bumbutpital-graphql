import { GraphQLID, GraphQLString } from "graphql";
import { promotioninhospitaldetail_cardType } from "../TypeDefs/promotioninhospitaldetail_card";
import { MessageType } from "../TypeDefs/Messages";
import { promotioninhospitaldetail_card } from "../../Entities/promotioninhospitaldetail_card";

export const CREATE_promotioninhospitaldetail_card = {
  type: promotioninhospitaldetail_cardType,
  args: {
    hospitalId: { type: GraphQLString },
    userId: { type: GraphQLString },
    createAt: { type: GraphQLString },
    title: { type: GraphQLString },
    hospitalDetail: { type: GraphQLString },
    couponCode: { type: GraphQLString },
    Url: { type: GraphQLString },
  },
  async resolve(parent: any, args: any,context:any) {
        if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const { hospitalId, userId, createAt, title, hospitalDetail, couponCode , Url } = args;
    await promotioninhospitaldetail_card.insert({
        hospitalId,
      userId,
      createAt,
      title,
      hospitalDetail,
      couponCode,
      Url
    });
    return args;
  },
};



export const DELETE_promotioninhospitaldetail_card = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any,context:any) {
        if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const id = args.id;
    await promotioninhospitaldetail_card.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};
