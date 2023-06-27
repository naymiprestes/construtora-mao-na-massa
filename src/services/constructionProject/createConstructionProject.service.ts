import AppDataSource from "../../data-source"
import ConstructionProject from "../../entities/constructionProject.entity"
import Engineer from "../../entities/engineers.entitiy"
import HouseData from "../../entities/houseData.entity"
import ListMaterials from "../../entities/listMaterials.entity"
import AppError from "../../erros/appError"
import { ICronstructionProject } from "../../interfaces/constructionProject"

const createConstructionProjectService = async (data: ICronstructionProject) => {

  const constructionProjectRepository = AppDataSource.getRepository(ConstructionProject)
  const houseDataRepository = AppDataSource.getTreeRepository(HouseData)
  const listMaterialsRepository = AppDataSource.getTreeRepository(ListMaterials)
  const engineerRepository = AppDataSource.getRepository(Engineer) 


  const engineer = await engineerRepository.findOneBy({id: data.engineerId})

  if(!engineer) {
    throw new AppError(404, "engineer not found")
  }

  const newHouseData = houseDataRepository.create(data.houseData)
  await houseDataRepository.save(newHouseData)

  const newListMaterials = listMaterialsRepository.create(data.listMaterials)
  await listMaterialsRepository.save(newListMaterials)

  const newConstructionProject = new ConstructionProject()
  newConstructionProject.description = data.description,
  newConstructionProject.engineer = engineer,
  newConstructionProject.houseData = newHouseData
  newConstructionProject.listMaterials = newListMaterials,

  constructionProjectRepository.create(newConstructionProject)
  await constructionProjectRepository.save(newConstructionProject)

  return newConstructionProject
}

export default createConstructionProjectService