import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const StaffType = new GraphQLObjectType({
  name: "Staff",
  fields: () => ({
    staffId: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    role: {type:GraphQLString}
    
  }),
  
});
