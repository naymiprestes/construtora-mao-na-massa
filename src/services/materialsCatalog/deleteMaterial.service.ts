import AppDataSource from "../../data-source"
import Materials from "../../entities/materials.entity"
import AppError from "../../erros/appError"

const deleteMaterialService = async (id: string) => {

  const materialRepsitory = AppDataSource.getRepository(Materials)

  const material = await materialRepsitory.findOneBy({id})

  if(!material) {
    throw new AppError(404, "material not found")
  }

  await materialRepsitory.delete(id)
}

export default deleteMaterialService