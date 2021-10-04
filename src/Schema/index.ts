import { buildSchema, GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import { DELETE_USER, UPDATE_PASSWORD, USER_LOGIN, /* USER_PROFILE ,*/ USER_REGISTER } from "./Mutations/User";
import { GET_ALL_Content } from "./Queries/Content";
import { CREATE_CONTENT, DELETE_CONTENT } from "./Mutations/Content";
import { CREATE_Hospital, DELETE_Hospital } from "./Mutations/Hospital";
import { GET_ALL_Hospital } from "./Queries/Hospital";
import { CREATE_PROMOTION, DELETE_PROMOTION } from "./Mutations/Promotion";
import { GET_ALL_PROMOTION } from "./Queries/Promotion";
import { GET_ALL_Video } from "./Queries/Video";
import { CREATE_Video, DELETE_Video } from "./Mutations/Video";
import { GET_ALL_FORUM } from "./Queries/Forum";
import { ANSWER_FORUM, CREATE_FORUM } from "./Mutations/Forum";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getAllContent: GET_ALL_Content,
    getAllHospital: GET_ALL_Hospital,
    getAllPromotion: GET_ALL_PROMOTION,
    getAllVideo: GET_ALL_Video,
    getAllForum: GET_ALL_FORUM
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
    createPromotion: CREATE_PROMOTION,
    deletePromotion: DELETE_PROMOTION,
    deleteVideo: DELETE_Video,
    createVideo: CREATE_Video,
    createForum: CREATE_FORUM,
    answerForum: ANSWER_FORUM,
  },
});


export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});