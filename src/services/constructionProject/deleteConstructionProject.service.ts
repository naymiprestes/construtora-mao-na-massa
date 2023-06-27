import AppDataSource from "../../data-source"
import ConstructionProject from "../../entities/constructionProject.entity"
import AppError from "../../erros/appError"

const deleteConstructionProjectService = async (id: string) => {

  const constructionProjectRepository = AppDataSource.getRepository(ConstructionProject)

  const constructionProject = constructionProjectRepository.findOneBy({id})

  if(!constructionProject) {
    throw new AppError(400, "construction project not exists")
  }

  await constructionProjectRepository.delete(id)

}

export default deleteConstructionProjectService