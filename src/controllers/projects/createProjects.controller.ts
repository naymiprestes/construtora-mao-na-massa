import { Request, Response } from "express"
import createProjectsService from "../../services/projects/createProjects.service"

const createProjectsController = async (req: Request, res: Response) => {

  const data = req.body

  const constructionProject = await createProjectsService(data)

  return res.status(201).json(constructionProject)
}

export default createProjectsController