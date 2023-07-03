import { Request, Response } from "express"
import updateProjectsService from "../../services/projects/updateProjects.service"

const updateProjectsController = async (req: Request, res: Response) => {

  const data = req.body
  const id = req.params.body

  const constructionProject = updateProjectsService(data, id)

  return res.status(200).json(constructionProject)
}

export default updateProjectsController