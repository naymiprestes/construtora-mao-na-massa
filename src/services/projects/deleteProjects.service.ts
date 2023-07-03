import AppDataSource from "../../data-source"
import Projects from "../../entities/projects.entity"
import AppError from "../../erros/appError"

const deleteProjectsService = async (id: string) => {

  const constructionProjectRepository = AppDataSource.getRepository(Projects)

  const constructionProject = constructionProjectRepository.findOneBy({id})

  if(!constructionProject) {
    throw new AppError(400, "construction project not exists")
  }

  await constructionProjectRepository.delete(id)

}

export default deleteProjectsService