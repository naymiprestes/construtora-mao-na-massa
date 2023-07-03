import AppDataSource from "../../data-source"
import Materials from "../../entities/materials.entity"
import AppError from "../../erros/appError"
import { IMaterials } from "../../interfaces/materials"

const updateMaterialService = async (data: IMaterials, id: string) => {

  const materialRepository = AppDataSource.getRepository(Materials)

  const material = await materialRepository.findOneBy({id})

  if(!material) {
    throw new AppError(400, "material catalog not found")
  }

  await materialRepository.update(id, {
    description: data.description ? data.description : material.description,
    unitMeasurement: data.unitMeasurement ? data.unitMeasurement : material.unitMeasurement,
    value: data.value ? data.value : material.value
  })

  const updateMaterial = await materialRepository.findOneBy({id})

  return updateMaterial
}

export default updateMaterialService