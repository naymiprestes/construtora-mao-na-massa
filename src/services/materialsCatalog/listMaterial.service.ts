import AppDataSource from "../../data-source"
import Materials from "../../entities/materials.entity"

const listMaterialCatalogService = async () => {

  const materialRepository = AppDataSource.getRepository(Materials) 

  const material = await materialRepository.find()

  return material
}

export default listMaterialCatalogService