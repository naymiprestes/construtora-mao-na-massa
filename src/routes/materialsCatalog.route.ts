import { Router } from "express"
import createMaterialController from "../controllers/materialsCatalog/createMaterial.controller"
import updateMaterialController from "../controllers/materialsCatalog/updateMaterial.controller"
import deleteMaterialController from "../controllers/materialsCatalog/deleteMaterial.controller"
import ListMaterialCatalogController from "../controllers/materialsCatalog/listMaterialCatalog.controller"


const materialsRoute = Router()

materialsRoute.post("", createMaterialController)

materialsRoute.get("", ListMaterialCatalogController)

materialsRoute.patch("/:id", updateMaterialController)

materialsRoute.delete("/:id", deleteMaterialController)

export default materialsRoute 