import { Request, Response } from "express"
import deleteConstructionProjectService from "../../services/constructionProject/deleteConstructionProject.service"

const deleteConstructionProjectController = async (req: Request, res: Response) => {

  const id = req.params.id

  const constructionProject = await deleteConstructionProjectService(id)

  return res.status(204).json(constructionProject)
}

export default deleteConstructionProjectController