import { Router } from "express"
import createMaterialController from "../controllers/materials/createMaterial.controller"
import updateMaterialController from "../controllers/materials/updateMaterial.controller"
import deleteMaterialController from "../controllers/materials/deleteMaterial.controller"
import ListMaterialCatalogController from "../controllers/materials/listMaterialCatalog.controller"


const materialsRoute = Router()

materialsRoute.post("", createMaterialController)

materialsRoute.get("", ListMaterialCatalogController)

materialsRoute.patch("/:id", updateMaterialController)

materialsRoute.delete("/:id", deleteMaterialController)

export default materialsRoute 