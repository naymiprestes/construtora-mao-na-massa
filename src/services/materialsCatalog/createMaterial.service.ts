import AppDataSource from "../../data-source"
import ListMaterials from "../../entities/listMaterials.entity"
import Materials from "../../entities/materials.entity"
import AppError from "../../erros/appError"
import { IMaterialCatalog } from "../../interfaces/materialsCatalog"

const createMaterialService = async (material : IMaterialCatalog) => {

  const materialRepository = AppDataSource.getRepository(Materials)

  const newMaterial = new Materials()
  newMaterial.description = material.description
  newMaterial.unitMeasurement = material.unitMeasurement
  newMaterial.value = material.value

  materialRepository.create(newMaterial)
  await materialRepository.save(newMaterial)

  return newMaterial
}

export default createMaterialService