import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const ContentType = new GraphQLObjectType({
  name: "Content",
  fields: () => ({
    contentID: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    updateTime: { type: GraphQLString },
    pictureUrl: { type: GraphQLString },
    createAt: { type: GraphQLString },
    appropiatePHQSeverity: { type: GraphQLString },
    contenttype: { type: GraphQLString },
  }),
});