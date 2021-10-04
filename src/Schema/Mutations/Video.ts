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
    videoUrl: { type: GraphQLString },
    videoType: { type: GraphQLString }
  },
  async resolve(parent: any, args: any, context: any) {
    // if (!context.isAuth) {
    //   throw new Error("Unauthenticated");
    // }
    const {
      staffID,
      appropiatePHQSeverity,
      title,
      pictureUrl,
      videoUrl,
      videoType
    } = args;
    const now = Date();
    await Video.insert({
      staffID,
      appropiatePHQSeverity,
      title,
      pictureUrl,
      createAt: now,
      videoUrl,
      videoType
    });
    return args;
  },
};

export const DELETE_Video = {
  type: MessageType,
  args: {
    videoID: { type: GraphQLID },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const id = args.videoID;
    await Video.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};
