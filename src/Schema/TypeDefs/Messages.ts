import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";

export const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    accessToken: { type: GraphQLString },
  }),
});

export const AccessType = new GraphQLObjectType({
  name: "accessToken",
  fields: () => ({
    accessToken: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
});