import { Request, Response } from "express"
import updateEngineerService from "../../services/engineer/updateEngineer.service"

const updateEngineerController = async (req: Request, res: Response) => {

  const data = req.body
  const id = req.params.id

  const updateEngineer = await updateEngineerService(data, id)

  return res.status(200).json(updateEngineer)
}

export default updateEngineerController