import { GraphQLID, GraphQLString } from "graphql";
import { PromotionType } from "../TypeDefs/Promotion";
import { MessageType } from "../TypeDefs/Messages";
import { Promotion } from "../../Entities/Promotion";

export const CREATE_PROMOTION = {
  type: PromotionType,
  args: {
    hospitalId: { type: GraphQLString },
    userId: { type: GraphQLString },
    createAt: { type: GraphQLString },
    title: { type: GraphQLString },
    hospitalDetail: { type: GraphQLString },
    couponCode: { type: GraphQLString },
    Url: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const {
      hospitalId,
      userId,
      title,
      hospitalDetail,
      couponCode,
      Url,
    } = args;
    const now = Date();
    await Promotion.insert({
      hospitalId,
      userId,
      createAt: now,
      title,
      hospitalDetail,
      couponCode,
      Url,
    });
    return args;
  },
};

export const DELETE_PROMOTION = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const id = args.id;
    await Promotion.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};