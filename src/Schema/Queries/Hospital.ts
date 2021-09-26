import { GraphQLList } from "graphql";
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

