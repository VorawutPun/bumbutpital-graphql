import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from "./Mutations/User";
import { GET_ALL_Content } from "./Queries/Content";
import { CREATE_CONTENT, DELETE_CONTENT } from "./Mutations/Content";
import { CREATE_Hospital } from "./Mutations/Hospital";
import { GET_ALL_Hospital } from "./Queries/Hospital";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getAllContent: GET_ALL_Content,
    getAllHospital: GET_ALL_Hospital
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
    createContent: CREATE_CONTENT,
    deleteContent: DELETE_CONTENT,
    createHospital: CREATE_Hospital
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
