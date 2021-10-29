import express, { Express, NextFunction } from "express";

import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./Schema";
import { Users } from "./Entities/Users";
import { Content } from "./Entities/Content";
import { verify } from "jsonwebtoken";
import { Hospital } from "./Entities/Hospital";
import { Promotion } from "./Entities/Promotion";
import { Video } from "./Entities/Video";
import { Forum } from "./Entities/Forum";
import { PromotionLog } from "./Entities/PromotionLog";
import { KeepPromotion } from "./Schema/Mutations/PromotionLog";


const main = async () => {
  const loggingMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
  
    const token = (req.headers as any)?.authorization?.split(" ")[1];

    if (!token) {
      (req as any).isAuth = false;
      return next();
    }

    try {
      const decoded = verify(token, "MySecretKey");
      console.log(decoded);
      (req as any).isAuth = true;
      (req as any).userId = (decoded as any).userId;
    } catch (err) {
      (req as any).isAuth = false;
    }
     
    return next();
  };

  const app: Express = express();

  await createConnection({
    // host:"bumbut_database",
    type: "mysql",
    // database: "bumbut_database",
    database:"graphql",
    username: "root",
    // password: "root_punbewtae",
    password:"",
    logging: true,
    synchronize: true,
    entities: [Content, Users, Hospital, Promotion, Video, Forum , PromotionLog ],
  });


  app.use(cors());
  app.use(loggingMiddleware as any)
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
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
