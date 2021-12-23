import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const PromotionLogType = new GraphQLObjectType({
  name: "promotionlog",
  fields: () => ({
    promotionloguserId: { type: GraphQLID },
    userId: { type: GraphQLString },
    usedpromotionId: { type: GraphQLString },
    keeppromotionId: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});