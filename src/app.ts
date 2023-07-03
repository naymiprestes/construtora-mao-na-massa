import express from "express";
import "reflect-metadata";
import "express-async-errors";
import engineerRoute from "./routes/engineer.route";
import materialsRoute from "./routes/materials.route";
import constructionProjectRoute from "./routes/projects.route";

import cors from "cors"
import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  
  const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };
  app.use(cors());
  app.use(express.json());
  app.use("/engineers", engineerRoute);
  app.use("/materials", materialsRoute);
  app.use("/projects", constructionProjectRoute);
  app.use(handleErrorMiddleware)
  next();
});


export default app;
