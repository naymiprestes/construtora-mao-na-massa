import { DataSource } from "typeorm"
import "dotenv/config"
import ConstructionProject from "./entities/constructionProject.entity"
import Engineer from "./entities/engineers.entitiy"
import HouseData from "./entities/houseData.entity"
import ListMaterials from "./entities/listMaterials.entity"
import Materials from "./entities/materials.entity"
import { CreateEngineers1687747121508 } from "./migrations/1687747121508-createEngineers"


const AppDataSource = new DataSource({
  type: "postgres",
  port: Number(process.env.PORT),
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  logging: true,
  synchronize: false,
  entities: [ConstructionProject, Engineer, HouseData, ListMaterials, Materials],
  migrations: [CreateEngineers1687747121508]
})

export default AppDataSource