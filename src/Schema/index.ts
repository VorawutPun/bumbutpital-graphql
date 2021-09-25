import { buildSchema, GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import { DELETE_USER, UPDATE_PASSWORD, USER_LOGIN, /* USER_PROFILE ,*/ USER_REGISTER } from "./Mutations/User";
import { GET_ALL_Content } from "./Queries/Content";
import { CREATE_CONTENT, DELETE_CONTENT } from "./Mutations/Content";
import { CREATE_Hospital, DELETE_Hospital } from "./Mutations/Hospital";
import { GET_ALL_Hospital } from "./Queries/Hospital";
import { CREATE_promotioninhospitaldetail_card, DELETE_promotioninhospitaldetail_card } from "./Mutations/promotioninhospitaldetail_card";
import { GET_ALL_promotioninhospitaldetail_card } from "./Queries/promotioninhospitaldetail_card";
import { GET_ALL_Video } from "./Queries/Video";
import { CREATE_Video, DELETE_Video } from "./Mutations/Video";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getAllContent: GET_ALL_Content,
    getAllHospital: GET_ALL_Hospital,
    getAllpromotioninhospitaldetail_card: GET_ALL_promotioninhospitaldetail_card,
    getAllVideo: GET_ALL_Video
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
    createContent: CREATE_CONTENT,
    userLogin: USER_LOGIN,
    userRegister: USER_REGISTER,
    deleteContent: DELETE_CONTENT,
    createHospital: CREATE_Hospital,
    deleteHospital: DELETE_Hospital,
    createpromotioninhospitaldetail_card: CREATE_promotioninhospitaldetail_card,
    deletepromotioninhospitaldetail_card: DELETE_promotioninhospitaldetail_card,
    deleteVideo: DELETE_Video,
    createVideo: CREATE_Video
  },
});


export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
