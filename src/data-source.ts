import { DataSource } from "typeorm";
import "dotenv/config";
import Engineer from "./entities/engineers.entitiy";
import HouseData from "./entities/houseData.entity";
import ListMaterials from "./entities/listMaterials.entity";
import Materials from "./entities/materials.entity";
import Projects from "./entities/projects.entity";
import { PListMaterials } from "./entities/pListMaterials.entity";
import { InitialMigration1688388331398 } from "./migrations/1688388331398-InitialMigration";

const AppDataSource = new DataSource({
  type: "postgres",
  port: Number(process.env.PORT),
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  logging: true,
  synchronize: false,
  entities: [
    Projects,
    Engineer,
    HouseData,
    ListMaterials,
    Materials,
    PListMaterials,
  ],
  migrations: [InitialMigration1688388331398],
});

export default AppDataSource;
