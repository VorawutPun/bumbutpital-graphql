import { GraphQLID, GraphQLString } from "graphql";
import { HospitalType } from "../TypeDefs/Hospital";
import { MessageType } from "../TypeDefs/Messages";
import { Hospital } from "../../Entities/Hospital";

export const CREATE_Hospital = {
  type: HospitalType,
  args: {
    staffID: { type: GraphQLString },
    hospitalName: { type: GraphQLString },
    hospitalDescription: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const { staffID, hospitalName, hospitalDescription, imageUrl } =
      args;
    await Hospital.insert({
      staffID,
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
    const id = args.HospitalID;
    await Hospital.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};
