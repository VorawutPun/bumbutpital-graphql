import { Hospital } from './../../Entities/Hospital';
import { GraphQLID, GraphQLString } from "graphql";
import { HospitalType } from "../TypeDefs/Hospital";
import { MessageType } from "../TypeDefs/Messages";
import { Promotion } from '../../Entities/Promotion';

export const CREATE_Hospital = {
  type: HospitalType,
  args: {
    hospitalName: { type: GraphQLString },
    hospitalDescription: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    if (!args.hospitalName) {
      throw new Error("Please enter hospitalName");
    }

    const { hospitalName, hospitalDescription, imageUrl } = args;
    await Hospital.insert({
      userId: context.userId,
      hospitalName,
      hospitalDescription,
      imageUrl,
    });
    return args;
  },
};

export const DELETE_Hospital = {
  type: MessageType,
  args: {
    hospitalID: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.hospitalID;
    const promotionList = await Promotion.find({where: {hospitalId: id}, select: ["promotionId"]})
    for await (const promotion of promotionList) {
      await Promotion.delete(promotion.promotionId)
    }
    await Hospital.delete(id);
    return { successful: true, message: "DELETE WORKED" };
  },
};

export const UPDATE_HOSPITAL = {
  type: HospitalType,
  args: {
    hospitalID: { type: GraphQLID },
    hospitalName: { type: GraphQLString },
    hospitalDescription: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
  },
  async resolve(_: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const {hospitalID} = args;
    await Hospital.update({hospitalID},{...args});
    return args;
  },
};


