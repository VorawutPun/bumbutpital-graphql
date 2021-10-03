import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const ForumType = new GraphQLObjectType({
  name: "Forum",
  fields: () => ({
    forumID: { type: GraphQLID },
    staffID: {type: GraphQLID},
    userID:{ type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    createAt: { type: GraphQLString },
    answer: { type: GraphQLString },
  }),
});