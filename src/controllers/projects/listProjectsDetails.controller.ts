import { Request, Response } from "express"
import listProjectsDetailsService from "../../services/projects/listProjectsDetails.service"

const listProjectsDetailsController = async (req: Request, res: Response) => {

  const id = req.params.id

  const projects = await listProjectsDetailsService(id)

  return res.status(200).json(projects)
}

export default listProjectsDetailsController