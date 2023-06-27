import AppDataSource from "../../data-source"
import Engineer from "../../entities/engineers.entitiy"
import AppError from "../../erros/appError"
import { IEngineerUpdate } from "../../interfaces/engineers"


const updateEngineerService = async (data: IEngineerUpdate, id: string ) => {

  const engineersRepository = AppDataSource.getRepository(Engineer)

  const engineer = await engineersRepository.findOneBy({id})

  if(!engineer) {
    throw new AppError(404, "engineer not found")
  }

  await engineersRepository.update( id, {
    name: data.name ? data.name : engineer.name,
    CPF: data.cpf ? data.cpf : engineer.CPF,
    CREA: data.crea ? data.crea : engineer.CREA,
    cellphone: data.cellphone ? data.cellphone : engineer.cellphone,
    email: data.email ? data.email : engineer.email
  })

  const updateEngineer = await engineersRepository.findOneBy({id})

  return updateEngineer
}

export default updateEngineerService