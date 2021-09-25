import express, { Express, NextFunction } from "express";

import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./Schema";
import { Users } from "./Entities/Users";
import { Content } from "./Entities/Content";
import { MiddlewareFn } from "type-graphql";
import { verify } from "jsonwebtoken";
import { ApolloServer, gql } from "apollo-server-express";
import { Hospital } from "./Entities/Hospital";
import { promotioninhospitaldetail_card } from "./Entities/promotioninhospitaldetail_card";
import { Video } from "./Entities/Video";

const main = async () => {
  const loggingMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
      const token = (req.headers as any).authorization.replace("Bearer","").replace(" ", "");
      console.log(token, "token");

      if (!token) {
        throw new Error("Not authenticated");
      }

      try {
        const decoded = verify(token, "MySecretKey");
        console.log(decoded);
      } catch (err) {
        console.log(err);
        throw new Error("Not authenticated");
      }
      return next();
  };

  const app: Express = express();

  await createConnection({
    type: "mysql",
    database: "bumbutpital",
    username: "root",
    password: "iFlame",
    logging: true,
    synchronize: false,
    entities: [Content,Users,Hospital,promotioninhospitaldetail_card,Video],
  });

  var root = {
    user: function (args: any, request: any) {
      console.log(request)
      return request.ip;
    }
  };

  app.use(cors());
  app.use(loggingMiddleware as any)
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
