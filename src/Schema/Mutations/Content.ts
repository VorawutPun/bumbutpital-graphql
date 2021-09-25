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
    updateTime: { type: GraphQLString },
    pictureUrl: { type: GraphQLString },
    createAt: { type: GraphQLString },
    appropiatePHQSeverity: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { contentID, title, description, updateTime, pictureUrl, createAt, appropiatePHQSeverity } = args;
    await Content.insert({
        contentID,
        title,
        description,
        updateTime,
        pictureUrl,
        createAt,
        appropiatePHQSeverity,
    });
    return args;
  },
};

export const DELETE_CONTENT = {
  type: MessageType,
  args: {
    contentID: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.contentID;
    await Content.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};
