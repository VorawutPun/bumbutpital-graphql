import { buildSchema, GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS, GET_CURENT_USER } from "./Queries/User";
import {
  ADD_PHQSCORE,
  DELETE_USER,
  EDIT_PROFILE,

  PermissionPHQ9,

  UPDATE_PASSWORD,
  USER_LOGIN,
  
  /* USER_PROFILE ,*/ USER_REGISTER,
} from "./Mutations/User";
import { GET_ALL_CONTENT, GET_SMART_CONTENT, GET_SMART_CONTENT_DEPRESSION, GET_SMART_CONTENT_HEALTH, GET_SMART_CONTENT_Mild_Depression, GET_SMART_CONTENT_Minimal_Depression, GET_SMART_CONTENT_Moderately_severe_Depression, GET_SMART_CONTENT_Moderate_Depression, GET_SMART_CONTENT_Severe_Depression } from "./Queries/Content";
import { CREATE_CONTENT, DELETE_CONTENT } from "./Mutations/Content";
import { CREATE_Hospital, DELETE_Hospital } from "./Mutations/Hospital";
import { GET_ALL_Hospital } from "./Queries/Hospital";
import { CREATE_PROMOTION, DELETE_PROMOTION } from "./Mutations/Promotion";
import { GET_ALL_PROMOTION } from "./Queries/Promotion";
import { GET_ALL_Video, GET_SMART_VIDEO, GET_SMART_VIDEO_DEPRESSION, GET_SMART_VIDEO_HEALTH, GET_SMART_VIDEO_Minimal_Depression ,GET_SMART_VIDEO_Mild_Depression, GET_SMART_VIDEO_Moderate_Depression, GET_SMART_VIDEO_Moderately_severe_Depression, GET_SMART_VIDEO_Severe_Depression} from "./Queries/Video";
import { CREATE_Video, DELETE_Video } from "./Mutations/Video";
import { GET_ALL_FORUM, GET_CURENT_FORUM } from "./Queries/Forum";
import { ANSWER_FORUM, CREATE_FORUM } from "./Mutations/Forum";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getAllContent: GET_ALL_CONTENT,
    getAllHospital: GET_ALL_Hospital,
    getAllPromotion: GET_ALL_PROMOTION,
    getAllVideo: GET_ALL_Video,
    getAllForum: GET_ALL_FORUM,
    getCurrentUser: GET_CURENT_USER,
    getSmartContent: GET_SMART_CONTENT,
    getSmartVideo: GET_SMART_VIDEO,
    getSmartVideoDepression: GET_SMART_VIDEO_DEPRESSION,
    getSmartVideoHealth: GET_SMART_VIDEO_HEALTH,
    getSmartContentHealth: GET_SMART_CONTENT_HEALTH,
    getSmartContentDepression: GET_SMART_CONTENT_DEPRESSION,
    getcurrentForum: GET_CURENT_FORUM,
    getMinimalContent: GET_SMART_CONTENT_Minimal_Depression,
    getMildContent:  GET_SMART_CONTENT_Mild_Depression,
    getModerateContent: GET_SMART_CONTENT_Moderate_Depression,
    getModeratelySeverContent: GET_SMART_CONTENT_Moderately_severe_Depression,
    getSevereContent:GET_SMART_CONTENT_Severe_Depression,
    getMinimalVideo: GET_SMART_VIDEO_Minimal_Depression,
    getMildVideo:  GET_SMART_VIDEO_Mild_Depression,
    getModerateVideo: GET_SMART_VIDEO_Moderate_Depression,
    getModeratelySeverVideo: GET_SMART_VIDEO_Moderately_severe_Depression,
    getSevereVideo:GET_SMART_VIDEO_Severe_Depression

  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
    addPHQScore: ADD_PHQSCORE,
    userLogin: USER_LOGIN,
    userRegister: USER_REGISTER,
    createContent: CREATE_CONTENT,
    deleteContent: DELETE_CONTENT,
    createHospital: CREATE_Hospital,
    deleteHospital: DELETE_Hospital,
    createPromotion: CREATE_PROMOTION,
    deletePromotion: DELETE_PROMOTION,
    deleteVideo: DELETE_Video,
    createVideo: CREATE_Video,
    createForum: CREATE_FORUM,
    answerForum: ANSWER_FORUM,
    permissionphq9:PermissionPHQ9,

    editprofile: EDIT_PROFILE
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
