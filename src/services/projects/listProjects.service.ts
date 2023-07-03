import AppDataSource from "../../data-source"
import Projects from "../../entities/projects.entity"
import AppError from "../../erros/appError"

const listProjectsService = async () => {

  const constructionProjectRepository = AppDataSource.getRepository(Projects)

  const constructionProject = await constructionProjectRepository.find()

  if(!constructionProject) {
    throw new AppError(400, "construction project not found")
  }

  return constructionProject
}

export default listProjectsService