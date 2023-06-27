import { Request, Response } from "express"
import createConstructionProjectService from "../../services/constructionProject/createConstructionProject.service"

const createConstructionProjectController = async (req: Request, res: Response) => {

  const data = req.body

  const constructionProject = createConstructionProjectService(data)

  return res.status(201).json(constructionProject)
}

export default createConstructionProjectController