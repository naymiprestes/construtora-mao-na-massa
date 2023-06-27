import { Router } from "express";
import createEngineerController from "../controllers/engineers/createEngineer.controller";
import listEngineerController from "../controllers/engineers/listEngineer.controller";
import updateEngineerController from "../controllers/engineers/updateEngineer.controller";
import deleteEngineerController from "../controllers/engineers/deleteEngineer.controller";

const engineerRoute = Router();

engineerRoute.post("", createEngineerController);

engineerRoute.get("", listEngineerController);

engineerRoute.patch("/:id", updateEngineerController);

engineerRoute.delete("/:id", deleteEngineerController);

export default engineerRoute;
