import { GraphQLList } from "graphql";
import { VideoType } from "../TypeDefs/Video";
import { Video } from "../../Entities/Video";

export const GET_ALL_Video = {
  type: new GraphQLList(VideoType),
  resolve() {
    return Video.find();
  },
};
