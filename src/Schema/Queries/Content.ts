import { GraphQLList } from "graphql";
import { ContentType } from "../TypeDefs/Content";
import { Content } from "../../Entities/Content";
import { Users } from "../../Entities/Users";

export const GET_ALL_CONTENT= {
  type: new GraphQLList(ContentType),
  resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return Content.find();
  },
};

export const GET_SMART_CONTENT = {
  type: new GraphQLList(ContentType),
 async resolve(_: any, __: any, context: any)  {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    const user = await Users.findOne({where:{id: context.userId}}) as Users
    return Content.find({where: {appropiatePHQSeverity:user.appropiatePHQSeverity}});
  },
};

export const GET_SMART_CONTENT_HEALTH = {
  type: new GraphQLList(ContentType),
 async resolve(_: any, __: any, context: any)  {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    const user = await Users.findOne({where:{id: context.userId}}) as Users
    return Content.find({where: {appropiatePHQSeverity:user.appropiatePHQSeverity , contenttype: "Health" }});
  },
};

export const GET_SMART_CONTENT_DEPRESSION = {
  type: new GraphQLList(ContentType),
 async resolve(_: any, __: any, context: any)  {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    const user = await Users.findOne({where:{id: context.userId}}) as Users
    return Content.find({where: {appropiatePHQSeverity:user.appropiatePHQSeverity , contenttype: "Depression"}});
  },
};