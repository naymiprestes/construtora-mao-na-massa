import AppDataSource from "../../data-source";
import Engineer from "../../entities/engineers.entitiy";
import HouseData from "../../entities/houseData.entity";
import ListMaterials from "../../entities/listMaterials.entity";
import Projects from "../../entities/projects.entity";
import AppError from "../../erros/appError";
import { IRegisterProjects } from "../../interfaces/projects";

const createProjectsService = async (data: IRegisterProjects) => {
  const projectsRepository = AppDataSource.getRepository(Projects);
  const engineerRepository = AppDataSource.getRepository(Engineer);
  const houseDataRepository = AppDataSource.getRepository(HouseData);
  const listMaterialsRepository = AppDataSource.getRepository(ListMaterials);

  const engineer = await engineerRepository.findOneBy({
    name: data.engineer.name,
  });

  if (!engineer) {
    throw new AppError(404, "engineer not found");
  }

  const newHouseData = houseDataRepository.create(data.houseData);
  await houseDataRepository.save(newHouseData);

  const listMaterials = listMaterialsRepository.create();
  await listMaterialsRepository.save(listMaterials);

  const newProjects = new Projects();
  newProjects.description = data.description;
  newProjects.engineer = engineer;
  newProjects.houseData = newHouseData;
  newProjects.listMaterials = listMaterials;

  const projects = projectsRepository.create(newProjects);
  return await projectsRepository.save(projects);
};

export default createProjectsService;
