import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const PromotionType = new GraphQLObjectType({
  name: "promotion",
  fields: () => ({
    promotionId: { type: GraphQLID },
    hospitalId: { type: GraphQLString },
    userId: { type: GraphQLString },
    createAt: { type: GraphQLString },
    title: { type: GraphQLString },
    hospitalDetail: { type: GraphQLString },
    couponCode: { type: GraphQLString },
    Url: { type: GraphQLString },
    expiredDate: {type: GraphQLString},
  }),
});
