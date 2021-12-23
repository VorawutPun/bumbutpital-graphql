import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const OnlyUserName = new GraphQLObjectType({
  name: "OnlyUserName",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
  }),
});
