import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./Schema";
import { Users } from "./Entities/Users";
import { Content } from "./Entities/Content";
import { Hospital } from "./Entities/Hospital";
import { promotioninhospitaldetail_card } from "./Entities/promotioninhospitaldetail_card";
import { Video } from "./Entities/Video";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "graphql",
    username: "root",
    password: "",
    logging: true,
    synchronize: false,
    entities: [Content,Users,Hospital,promotioninhospitaldetail_card,Video],
  });

  const app = express();
  app.use(cors());
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
