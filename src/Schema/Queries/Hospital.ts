import { GraphQLID, GraphQLList } from "graphql";
import { HospitalType } from "../TypeDefs/Hospital";
import {  Hospital} from "../../Entities/Hospital";

export const GET_ALL_Hospital = {
  type: new GraphQLList(HospitalType),
  resolve(_: any, __: any, context: any) {
     if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return Hospital.find();
  },
};

export const GET_HOSPITAL = {
  type: new GraphQLList(HospitalType),
  args: {
    hospitalID: { type: GraphQLID },
  },
  async resolve(_: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const hospital = await Hospital.findByIds(args.hospitalID);
    if (hospital) {
      return hospital;
    } else {
      throw new Error("Post not found");
    }
  },
};
