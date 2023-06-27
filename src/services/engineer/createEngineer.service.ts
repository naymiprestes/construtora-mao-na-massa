import AppDataSource from "../../data-source"
import Engineer from "../../entities/engineers.entitiy"
import AppError from "../../erros/appError"
import { IEngineerRequest } from "../../interfaces/engineers"


const createEngineerService = async ({name, cpf, crea, cellphone, email } : IEngineerRequest) => {
  
  const engineerRepository = AppDataSource.getRepository(Engineer)

  const cpfAlreadyExists = await engineerRepository.findOneBy({CPF: cpf})

  if (cpfAlreadyExists) {
    throw new AppError(400, "CPF already exists");
  }

  const creaAlreadyExists = await engineerRepository.findOneBy({CREA: crea})

  if (creaAlreadyExists) {
    throw new AppError(400, "CREA already exists");
  }

  const cellphoneAlreadyExists = await engineerRepository.findOneBy({cellphone: cellphone})

  if (cellphoneAlreadyExists) {
    throw new AppError(400, "cellphone already exists");
  }

  const emailAlreadyExists = await engineerRepository.findOneBy({email: email})

  if (emailAlreadyExists) {
    throw new AppError(400, "email already exists");
  }

  const newEngineer = new Engineer()
  newEngineer.name = name
  newEngineer.CPF = cpf
  newEngineer.CREA = crea
  newEngineer.cellphone = cellphone
  newEngineer.email = email

  const engineer =  engineerRepository.create(newEngineer)
  await engineerRepository.save(engineer);
  
  return engineer
}

export default createEngineerService