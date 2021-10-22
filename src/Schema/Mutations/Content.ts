import { GraphQLID, GraphQLString } from "graphql";
import { ContentType } from "../TypeDefs/Content";
import { MessageType } from "../TypeDefs/Messages";
import { Content } from "../../Entities/Content";

export const CREATE_CONTENT = {
  type: ContentType,
  args: {
    contentID: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    pictureUrl: { type: GraphQLString },
    appropiatePHQSeverity: { type: GraphQLString },
    contenttype: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const { contentID, title, description, pictureUrl, appropiatePHQSeverity ,contenttype} =
      args;
    const now = Date();
    await Content.insert({
      contentID,
      title,
      description,
      pictureUrl,
      appropiatePHQSeverity,
      updateTime: now,
      createAt: now,
      contenttype
    });
    return args;
  },
};

export const DELETE_CONTENT = {
  type: MessageType,
  args: {
    contentID: { type: GraphQLID },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const id = args.contentID;
    await Content.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};
