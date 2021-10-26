import { GraphQLID, GraphQLList } from "graphql";
import { ContentType } from "../TypeDefs/Content";
import { Content } from "../../Entities/Content";
import { Users } from "../../Entities/Users";

export const GET_ALL_CONTENT = {
  type: new GraphQLList(ContentType),
  resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    return Content.find();
  },
};

export const GET_CONTENT = {
  type: new GraphQLList(ContentType),
  args: {
    contentID: { type: GraphQLID },
  },
  async resolve(_: any, args: any, context: any) {
    // if (!context.isAuth) {
    //   throw new Error("Unauthenticated");
    // }
    const content = await Content.findByIds(args.contentID);
    if (content) {
      return content;
    } else {
      throw new Error("Post not found");
    }
  },
};

//Mobew
export const GET_SMART_CONTENT = {
  type: new GraphQLList(ContentType),
  async resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const user = (await Users.findOne({
      where: { id: context.userId },
    })) as Users;
    return Content.find({
      where: { appropiatePHQSeverity: user.appropiatePHQSeverity },
    });
  },
};

export const GET_SMART_CONTENT_HEALTH = {
  type: new GraphQLList(ContentType),
  async resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const user = (await Users.findOne({
      where: { id: context.userId },
    })) as Users;
    return Content.find({
      where: {
        appropiatePHQSeverity: user.appropiatePHQSeverity,
        contenttype: "Health",
      },
    });
  },
};

export const GET_SMART_CONTENT_DEPRESSION = {
  type: new GraphQLList(ContentType),
  async resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }
    const user = (await Users.findOne({
      where: { id: context.userId },
    })) as Users;
    return Content.find({
      where: {
        appropiatePHQSeverity: user.appropiatePHQSeverity,
        contenttype: "Depression",
      },
    });
  },
};

export const GET_SMART_CONTENT_Mild_Depression = {
  type: new GraphQLList(ContentType),
  async resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }

    return Content.find({
      where: { appropiatePHQSeverity: "Mild Depression" },
    });
  },
};
export const GET_SMART_CONTENT_Moderate_Depression = {
  type: new GraphQLList(ContentType),
  async resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }

    return Content.find({
      where: { appropiatePHQSeverity: "Moderate Depression" },
    });
  },
};
export const GET_SMART_CONTENT_Moderately_severe_Depression = {
  type: new GraphQLList(ContentType),
  async resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }

    return Content.find({
      where: { appropiatePHQSeverity: "Moderately severe Depression" },
    });
  },
};
export const GET_SMART_CONTENT_Severe_Depression = {
  type: new GraphQLList(ContentType),
  async resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }

    return Content.find({
      where: { appropiatePHQSeverity: "Severe Depression" },
    });
  },
};
export const GET_SMART_CONTENT_Minimal_Depression = {
  type: new GraphQLList(ContentType),
  async resolve(_: any, __: any, context: any) {
    if (!context.isAuth) {
      throw new Error("Unauthenticated");
    }

    return Content.find({
      where: { appropiatePHQSeverity: "Minimal Depression" },
    });
  },
};
