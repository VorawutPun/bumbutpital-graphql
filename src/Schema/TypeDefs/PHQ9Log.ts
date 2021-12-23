import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const PHQ9LogType = new GraphQLObjectType({
  name: "PHQ9Log",
  fields: () => ({
    PHQ9LogID: { type: GraphQLString },
    userID: { type: GraphQLString },
    appropiatePHQSeverityLog: { type: GraphQLString },
    appropiatePHQSeverityScoreLog: { type: GraphQLString },
    date: { type: GraphQLString }
  }),
});