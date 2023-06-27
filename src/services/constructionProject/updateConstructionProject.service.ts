import AppDataSource from "../../data-source"
import ConstructionProject from "../../entities/constructionProject.entity"
import AppError from "../../erros/appError"
import { ICronstructionProjectUpdate } from "../../interfaces/constructionProject"


const updateConstructionProjectService = async (data: ICronstructionProjectUpdate, id: string) => {

  const constructionProjectRepository = AppDataSource.getRepository(ConstructionProject)

  const constructionProject = await constructionProjectRepository.findOneBy({id})

  if(!constructionProject) {
    throw new AppError(400, "construction project not exists")
  }

  await constructionProjectRepository.update(id, {
    description: data.description ? data.description : constructionProject.description,
    // engineer: data.engineerId ? data.engineerId : constructionProject.engineer,
    houseData: data.houseData ? data.houseData : constructionProject.houseData,
    listMaterials: data.listMaterials ? data.listMaterials : constructionProject.listMaterials

  })
}

export default updateConstructionProjectService