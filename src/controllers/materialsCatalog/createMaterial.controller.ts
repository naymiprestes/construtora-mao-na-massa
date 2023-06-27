import { Request, Response } from "express"
import createMaterialService from "../../services/materialsCatalog/createMaterial.service"

const createMaterialController = async(req: Request, res: Response) => {

  const data = req.body

  const material = await createMaterialService(data)

  return res.status(201).json(material)
}
export default createMaterialController