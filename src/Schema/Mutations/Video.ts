import { GraphQLID, GraphQLString } from "graphql";
import { VideoType } from "../TypeDefs/Video";
import { MessageType } from "../TypeDefs/Messages";
import { Video } from "../../Entities/Video";

export const CREATE_Video = {
  type: VideoType,
  args: {
    staffID: { type: GraphQLString },
    appropiatePHQSeverity: { type: GraphQLString },
    title: { type: GraphQLString },
    pictureUrl: { type: GraphQLString },
    createAt: { type: GraphQLString },
    videoUrl: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { staffID, appropiatePHQSeverity, title, pictureUrl, createAt, videoUrl } = args;
    await Video.insert({
        staffID,
      appropiatePHQSeverity,
      title,
      pictureUrl,
      createAt,
      videoUrl,
    });
    return args;
  },
};

export const DELETE_Video = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Video.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};
