import AppDataSource from "../../data-source"
import Projects from "../../entities/projects.entity"
import AppError from "../../erros/appError"
import { IProjectsUpdate } from "../../interfaces/projects"

const updateProjectsService = async (data: IProjectsUpdate, id: string) => {

  const constructionProjectRepository = AppDataSource.getRepository(Projects)

  const constructionProject = await constructionProjectRepository.findOneBy({id})

  if(!constructionProject) {
    throw new AppError(400, "construction project not exists")
  }

  await constructionProjectRepository.update(id, {
    description: data.description ? data.description : constructionProject.description,
    // engineer: data.engineerId ? data.engineerId : constructionProject.engineer,
    houseData: data.houseData ? data.houseData : constructionProject.houseData,
    // listMaterials: data.listMaterials ? data.listMaterials : constructionProject.listMaterials

  })
}

export default updateProjectsService