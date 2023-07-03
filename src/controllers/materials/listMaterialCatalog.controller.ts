import { Request, Response } from "express"
import listMaterialCatalogService from "../../services/materials/listMaterial.service"

const ListMaterialCatalogController = async (req: Request, res: Response) => {

  const material = await listMaterialCatalogService()

  return res.status(200).json(material)
}

export default ListMaterialCatalogController