import { GraphQLList } from "graphql";
import { Forum } from "../../Entities/Forum";
import { Users } from "../../Entities/Users";
import { ForumType } from "../TypeDefs/Forum";

export const GET_ALL_FORUM = {
  type: new GraphQLList(ForumType),
  resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return Forum.find();
  },
};

