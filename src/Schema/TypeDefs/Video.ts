import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const VideoType = new GraphQLObjectType({
  name: "Video",
  fields: () => ({
    videoID: { type: GraphQLID },
    appropiatePHQSeverity: { type: GraphQLString },
    title: { type: GraphQLString },
    pictureUrl: { type: GraphQLString },
    createAt: { type: GraphQLString },
    videoUrl: { type: GraphQLString },
  }),
});
