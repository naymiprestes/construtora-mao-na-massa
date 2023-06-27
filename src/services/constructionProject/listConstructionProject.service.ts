import AppDataSource from "../../data-source"
import ConstructionProject from "../../entities/constructionProject.entity"
import AppError from "../../erros/appError"

const listConstructionProjectService = async () => {

  const constructionProjectRepository = AppDataSource.getRepository(ConstructionProject)

  const constructionProject = await constructionProjectRepository.find()

  if(!constructionProject) {
    throw new AppError(400, "construction project not found")
  }

  return constructionProject
}

export default listConstructionProjectService