import { Router } from "express"
import createConstructionProjectController from "../controllers/constructionProject/createConstructionProject.controller"
import listConstructionProjectController from "../controllers/constructionProject/listConstructionProject.controller"
import updateConstructionProjectController from "../controllers/constructionProject/updateConstructionproject.controller"
import deleteConstructionProjectController from "../controllers/constructionProject/deleteConstruction.controller"


const constructionProjectRoute = Router()

constructionProjectRoute.post("", createConstructionProjectController)

constructionProjectRoute.get("", listConstructionProjectController)

constructionProjectRoute.patch("/:id", updateConstructionProjectController)

constructionProjectRoute.delete("/:id", deleteConstructionProjectController)

export default constructionProjectRoute 