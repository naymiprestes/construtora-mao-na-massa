import { Request, Response } from "express"
import updateMaterialService from "../../services/materialsCatalog/updateMaterial.service"

const updateMaterialController = async (req: Request, res: Response) => {

  const data = req.body
  const id = req.params.id

  const material = await updateMaterialService(data, id)

  return res.status(200).json(material)
}

export default updateMaterialController