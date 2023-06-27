import AppDataSource from "../../data-source"
import Engineer from "../../entities/engineers.entitiy"

const listEngineerService = async () => {

  const engineerRepository = AppDataSource.getRepository(Engineer)

  const engineers = await engineerRepository.find()

  return engineers
}

export default listEngineerService