import { GraphQLID, GraphQLString } from "graphql";
import { ContentType } from "../TypeDefs/Content";
import { Forum } from "../../Entities/Forum";

export const CREATE_FORUM = {
  type: ContentType,
  args: {
    forumID: { type: GraphQLID },
    staffID: {type: GraphQLID},
    userID:{ type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    createAt: { type: GraphQLString },
    answer: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const { forumID,staffID, title, description,answer} =
      args;
    const now = Date();
    await Forum.insert({
      forumID,
      staffID,
      title,
      description,
      answer,
      createAt: now,
    });
    return args;
  },
};