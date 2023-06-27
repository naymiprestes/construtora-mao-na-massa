import { Request, Response } from "express"
import listConstructionProjectService from "../../services/constructionProject/listConstructionProject.service"

const listConstructionProjectController = async (req: Request, res: Response) => {

  const constructionProject = await listConstructionProjectService()

  return res.status(200).json(constructionProject)
}

export default listConstructionProjectController