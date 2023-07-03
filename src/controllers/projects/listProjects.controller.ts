import { Request, Response } from "express"
import listProjectsService from "../../services/projects/listProjects.service"

const listProjectsController = async (req: Request, res: Response) => {

  const constructionProject = await listProjectsService()

  return res.status(200).json(constructionProject)
}

export default listProjectsController