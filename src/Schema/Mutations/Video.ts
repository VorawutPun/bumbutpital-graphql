import { GraphQLID, GraphQLString } from "graphql";
import { VideoType } from "../TypeDefs/Video";
import { MessageType } from "../TypeDefs/Messages";
import { Video } from "../../Entities/Video";

export const CREATE_Video = {
  type: VideoType,
  args: {
    appropiatePHQSeverity: { type: GraphQLString },
    title: { type: GraphQLString },
    pictureUrl: { type: GraphQLString },
    videoUrl: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const {
      appropiatePHQSeverity,
      title,
      pictureUrl,
      videoUrl,
    } = args;
    const now = Date();
    await Video.insert({
      userId:context.userId,
      appropiatePHQSeverity,
      title,
      pictureUrl,
      createAt: now,
      videoUrl,
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

export const UPDATE_VIDEO = {
  type: VideoType,
  args: {
    videoID: { type: GraphQLID },
    staffID: { type: GraphQLString },
    appropiatePHQSeverity: { type: GraphQLString },
    title: { type: GraphQLString },
    pictureUrl: { type: GraphQLString },
    videoUrl: { type: GraphQLString },
  },
  async resolve(_: any, args: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const {videoID} = args;
    console.log(args)
    await Video.update({videoID},{...args});
    return args;
  },
};

