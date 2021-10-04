import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const ForumType = new GraphQLObjectType({
  name: "Forum",
  fields: () => ({
    forumID: { type: GraphQLString },
    staffID: {type: GraphQLString},
    userID:{ type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    createAt: { type: GraphQLString },
    answer: { type: GraphQLString },
  }),
});