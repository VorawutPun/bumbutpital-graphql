import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const MixType = new GraphQLObjectType({
  name: "Mix",
  fields: () => ({
    PHQ9LogID: { type: GraphQLString },
    userID: { type: GraphQLString },
    appropiatePHQSeverityLog: { type: GraphQLString },
    appropiatePHQSeverityScoreLog: { type: GraphQLString },
    date: { type: GraphQLString },
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    appropiatePHQSeverity: { type: GraphQLString },
    permissionPHQSeverity: { type: GraphQLString },
    appropiatePHQSeverityScore: { type: GraphQLString },
    role: { type: GraphQLString },
  }),
});