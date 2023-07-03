import { Request, Response } from "express"
import deleteMaterialService from "../../services/materials/deleteMaterial.service"

const deleteMaterialController = async (req: Request, res: Response) => {

  const id = req.params.id

  const material = await deleteMaterialService(id)

  return res.status(204).json(material)
}

export default deleteMaterialController