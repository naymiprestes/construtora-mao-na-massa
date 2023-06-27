import { Request, Response } from "express"
import createEngineerService from "../../services/engineer/createEngineer.service"

const createEngineerController = async (req: Request, res: Response) => {

  const engineer = req.body

  const createEngineer = await createEngineerService(engineer)

  return res.status(201).json(createEngineer)
}

export default createEngineerController