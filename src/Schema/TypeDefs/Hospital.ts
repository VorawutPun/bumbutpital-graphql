import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const HospitalType = new GraphQLObjectType({
  name: "Hospital",
  fields: () => ({
    hospitalID: { type: GraphQLID },
    hospitalName: { type: GraphQLString },
    hospitalDescription: { type: GraphQLString },
    imageUrl: { type: GraphQLString }
  }),
});