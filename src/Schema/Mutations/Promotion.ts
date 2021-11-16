import { GraphQLID, GraphQLString } from "graphql";
import { PromotionType } from "../TypeDefs/Promotion";
import { MessageType } from "../TypeDefs/Messages";
import { Promotion } from "../../Entities/Promotion";
import { PromotionLog } from "../../Entities/PromotionLog";
import { PromotionLogType } from "../TypeDefs/PromotionLog";

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
    expiredDate: { type: GraphQLString },
    secret: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: any) {
    // if (!context.isAuth) {
    //   throw new Error("Unauthenticated");
    // }
    const {
      hospitalId,
      userId,
      title,
      hospitalDetail,
      couponCode,
      Url,
      expiredDate,
      secret
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
      expiredDate,
    });
    return args;
  },
};

export const DELETE_PROMOTION = {
  type: MessageType,
  args: {
    promotionId: { type: GraphQLID },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const id = args.promotionId;
    await Promotion.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};

