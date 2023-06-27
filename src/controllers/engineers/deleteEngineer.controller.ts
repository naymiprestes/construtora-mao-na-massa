import { Request, Response } from "express"
import deleteEngineerService from "../../services/engineer/deleteEngineer.service"

const deleteEngineerController = async (req: Request, res: Response) => {

  const id = req.params.id
  
  const deleteEngineer = await deleteEngineerService(id)

  return res.status(204).json(deleteEngineer) 
}

export default deleteEngineerController