import { GraphQLList } from "graphql";
import { StaffType } from "../TypeDefs/Staff";
import { Staff } from "../../Entities/Staff";
export const GET_ALL_STAFF = {
  type: new GraphQLList(StaffType),
  resolve(_: any, __: any, context: any) {
     if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return Staff.find();
  },
};

export const GET_CURRENT_STAFF = {
  type: new GraphQLList(StaffType),
  resolve(_: any, __: any, context: any) {
     if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return Staff.find({where:{staffId:context.staffId}});
  },
};
