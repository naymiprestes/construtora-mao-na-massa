import { Request, Response } from "express"
import listEngineerService from "../../services/engineer/listEngineer.service"

const listEngineerController = async (req: Request, res: Response) => {

  const engineer = await listEngineerService()

  return res.status(200).json(engineer)
}

export default listEngineerController