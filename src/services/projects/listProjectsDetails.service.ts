import AppDataSource from "../../data-source"
import ListMaterials from "../../entities/listMaterials.entity"
import Projects from "../../entities/projects.entity"
import AppError from "../../erros/appError"

const listProjectsDetailsService = async (id: string) => {

  const projectsRepository = AppDataSource.getRepository(Projects)
  const listMaterialsRepository = AppDataSource.getRepository(ListMaterials)

  const projects = await projectsRepository.findOneBy({id: id})

  if(!projects) {
    throw new AppError(400, "construction project not found")
  }

  const listMaterials = await listMaterialsRepository.findOne({
    where: {id: projects.listMaterials.id},   
    relations: {pListMaterials: true}
  })

  if(!listMaterials) {
    throw new AppError(400, "list materials not found")
  }

  projects.listMaterials = listMaterials

  return projects
}

export default listProjectsDetailsService