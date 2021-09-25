import { GraphQLID, GraphQLString } from "graphql";
import { HospitalType } from "../TypeDefs/Hospital";
import { MessageType } from "../TypeDefs/Messages";
import { Hospital } from "../../Entities/Hospital";

export const CREATE_Hospital = {
  type: HospitalType,
  args: {
    hospitalID: { type: GraphQLID },
    staffID: { type: GraphQLString },
    hospitalName: { type: GraphQLString },
    hospitalDescription: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
 
  },
  async resolve(parent: any, args: any) {
    const { hospitalID, staffID, hospitalName, hospitalDescription, imageUrl } = args;
    await Hospital.insert({
        hospitalID,
        staffID,
        hospitalName,
        hospitalDescription,
        imageUrl
    });
    return args;
  },
};


export const DELETE_Hospital = {
  type: MessageType,
  args: {
    HospitalID: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.HospitalID;
    await Hospital.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};
