import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const promotioninhospitaldetail_cardType = new GraphQLObjectType({
  name: "promotioninhospitaldetail_card",
  fields: () => ({
    promotionId: { type: GraphQLID },
    hospitalId: { type: GraphQLString },
    userId: { type: GraphQLString },
    createAt: { type: GraphQLString },
    title: { type: GraphQLString },
    hospitalDetail: { type: GraphQLString },
    couponCode: { type: GraphQLString },
    Url: { type: GraphQLString },
  }),
});
