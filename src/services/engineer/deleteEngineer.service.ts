import AppDataSource from "../../data-source"
import Engineer from "../../entities/engineers.entitiy"
import AppError from "../../erros/appError"

const deleteEngineerService = async (id: string) => {

  const engineerRepository = AppDataSource.getRepository(Engineer)

  const engineer = await engineerRepository.findOneBy({id})

  if(!engineer) {
    throw new AppError(404, "engineer not found")
  }

  await engineerRepository.delete(id)
}

export default deleteEngineerService