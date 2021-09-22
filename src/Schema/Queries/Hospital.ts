import { GraphQLList } from "graphql";
import { HospitalType } from "../TypeDefs/Hospital";
import {  Hospital} from "../../Entities/Hospital";

export const GET_ALL_Hospital = {
  type: new GraphQLList(HospitalType),
  resolve() {
    return Hospital.find();
  },
};

