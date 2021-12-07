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
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    if (!args.title) {
      throw new Error("Please fill title.");
    }
    const { contentID, title, description, pictureUrl, appropiatePHQSeverity } =
      args;
    const now = Date();
    await Content.insert({
      userId: context.userId,
      contentID,
      title,
      description,
      pictureUrl,
      appropiatePHQSeverity,
      updateTime: now,
      createAt: now,
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

export const UPDATE_CONTENT = {
  type: ContentType,
  args: {
    contentID: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    pictureUrl: { type: GraphQLString },
    appropiatePHQSeverity: { type: GraphQLString },
  },
  async resolve(_: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const { contentID } = args;
    const now = Date();
    console.log(args);
    await Content.update({ contentID }, { updateTime: now, ...args });
    return args;
  },
};
