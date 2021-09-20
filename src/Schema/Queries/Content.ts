import { GraphQLList } from "graphql";
import { ContentType } from "../TypeDefs/Content";
import { Content} from "../../Entities/Content";

export const GET_ALL_Content = {
  type: new GraphQLList(ContentType),
  resolve() {
    return Content.find();
  },
};

