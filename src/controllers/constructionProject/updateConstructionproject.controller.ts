import { Request, Response } from "express"
import updateConstructionProjectService from "../../services/constructionProject/updateConstructionProject.service"


const updateConstructionProjectController = async (req: Request, res: Response) => {

  const data = req.body
  const id = req.params.body

  const constructionProject = updateConstructionProjectService(data, id)

  return res.status(200).json(constructionProject)
}

export default updateConstructionProjectController