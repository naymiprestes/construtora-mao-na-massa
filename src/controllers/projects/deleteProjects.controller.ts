import { Request, Response } from "express"
import deleteProjectsService from "../../services/projects/deleteProjects.service"

const deleteProjectsController = async (req: Request, res: Response) => {

  const id = req.params.id

  const constructionProject = await deleteProjectsService(id)

  return res.status(204).json(constructionProject)
}

export default deleteProjectsController