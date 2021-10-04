import { GraphQLList } from "graphql";
import { VideoType } from "../TypeDefs/Video";
import { Video } from "../../Entities/Video";
import { Users } from "../../Entities/Users";

export const GET_ALL_Video = {
  type: new GraphQLList(VideoType),
  resolve(_: any, __: any, context: any) {
     if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return Video.find();
  },
};

export const GET_SMART_VIDEO_DEPRESSION = {
  type: new GraphQLList(VideoType),
 async resolve(_: any, __: any, context: any)  {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    const user = await Users.findOne({where:{id: context.userId }}) as Users
    return Video.find({where: {appropiatePHQSeverity:user.appropiatePHQSeverity , VideoType:"Depression"}});
  },
};

export const GET_SMART_VIDEO_HEALTH = {
  type: new GraphQLList(VideoType),
 async resolve(_: any, __: any, context: any)  {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    const user = await Users.findOne({where:{id: context.userId }}) as Users
    return Video.find({where: {appropiatePHQSeverity:user.appropiatePHQSeverity , VideoType:"Health"}});
  },
};

export const GET_SMART_VIDEO = {
  type: new GraphQLList(VideoType),
 async resolve(_: any, __: any, context: any)  {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    const user = await Users.findOne({where:{id: context.userId }}) as Users
    return Video.find({where: {appropiatePHQSeverity:user.appropiatePHQSeverity }});
  },
};
