import { Router } from "express"
import listProjectsController from "../controllers/projects/listProjects.controller"
import updateProjectsController from "../controllers/projects/updateProjects.controller"
import deleteProjectsController from "../controllers/projects/deleteProjects.controller"
import createProjectsController from "../controllers/projects/createProjects.controller"
import createPListaMaterialsController from "../controllers/pListMaterials/createPListMaterials.controller"
import listProjectsDetailsController from "../controllers/projects/listProjectsDetails.controller"


const constructionProjectRoute = Router()

constructionProjectRoute.post("", createProjectsController)

constructionProjectRoute.post("/:id/list-materials/add", createPListaMaterialsController)

constructionProjectRoute.get("", listProjectsController)

constructionProjectRoute.get("/:id", listProjectsDetailsController)

constructionProjectRoute.patch("/:id", updateProjectsController)

constructionProjectRoute.delete("/:id", deleteProjectsController)

export default constructionProjectRoute 