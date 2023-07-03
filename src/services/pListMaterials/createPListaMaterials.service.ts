import AppDataSource from "../../data-source"
import Materials from "../../entities/materials.entity"
import { PListMaterials } from "../../entities/pListMaterials.entity"
import AppError from "../../erros/appError"
import { IPListMaterials } from "../../interfaces/pListMaterials"
import Projects from "../../entities/projects.entity"
import ListMaterials from "../../entities/listMaterials.entity"

const createPListMaterialsServie = async (data: IPListMaterials, id: string) => {

  const fields = ['materials', 'materialsQuantity']

  fields.map((field) => {
    if (!Object.keys(data).includes(field)) {
      throw new AppError(400, `${field} is a required field`);
    }
  });

  const projectsRepository = AppDataSource.getRepository(Projects)
  const pListMaterialsRepository = AppDataSource.getRepository(PListMaterials)
  const materialsRepository = AppDataSource.getRepository(Materials)
  const listMaterialsRepository = AppDataSource.getTreeRepository(ListMaterials)

  const materials = await materialsRepository.findOneBy({id: data.materialsId})
  if(!materials) {
    throw new AppError(404, "materials not found")
  }

  const projects = await projectsRepository.findOneBy({id: id})

  if(!projects) {
    throw new AppError(404, "projects not found")
  }

  const newPListMaterials = new PListMaterials()
  newPListMaterials.listMaterials = projects.listMaterials
  newPListMaterials.materials = materials
  newPListMaterials.materialsQuantity = data.materialsQuantity

  pListMaterialsRepository.create(newPListMaterials)
  await pListMaterialsRepository.save(newPListMaterials)

  let listMaterials =  await listMaterialsRepository.findOneBy({id: projects.listMaterials.id})

  if(!listMaterials) {
    throw new AppError(404, "listMaterials not found")
  }

   const listMaterialsUpdated = await listMaterialsRepository.update(
   projects.listMaterials.id,
    {
      quantity: (listMaterials?.quantity + 1),
      subtotal: (listMaterials.subtotal + (materials.value * data.materialsQuantity))
    }
  )

  listMaterials =  await listMaterialsRepository.findOneBy({id: projects.listMaterials.id})
  
  if(!listMaterials) {
    throw new AppError(404, "listMaterials not found")
  }
  
  newPListMaterials.listMaterials = listMaterials

  return newPListMaterials

}

export default createPListMaterialsServie