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

export const GET_SMART_VIDEO_Mild_Depression = {
  type: new GraphQLList(VideoType),
 async resolve(_: any, __: any, context: any)  {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }

    return Video.find({where: {appropiatePHQSeverity:"Mild Depression" }});
  },
};
export const GET_SMART_VIDEO_Moderate_Depression = {
  type: new GraphQLList(VideoType),
 async resolve(_: any, __: any, context: any)  {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }

    return Video.find({where: {appropiatePHQSeverity:"Moderate Depression" }});
  },
};
export const GET_SMART_VIDEO_Moderately_severe_Depression = {
  type: new GraphQLList(VideoType),
 async resolve(_: any, __: any, context: any)  {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }

    return Video.find({where: {appropiatePHQSeverity:"Moderately severe Depression" }});
  },
};
export const GET_SMART_VIDEO_Severe_Depression = {
  type: new GraphQLList(VideoType),
 async resolve(_: any, __: any, context: any)  {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }

    return Video.find({where: {appropiatePHQSeverity:"Severe Depression" }});
  },
};
export const GET_SMART_VIDEO_Minimal_Depression = {
  type: new GraphQLList(VideoType),
 async resolve(_: any, __: any, context: any)  {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }

    return Video.find({where: {appropiatePHQSeverity:"Minimal Depression" }});
  },
};
