import AppDataSource from "../../data-source"
import Materials from "../../entities/materials.entity"
import { IMaterials } from "../../interfaces/materials"

const createMaterialService = async (material : IMaterials) => {

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