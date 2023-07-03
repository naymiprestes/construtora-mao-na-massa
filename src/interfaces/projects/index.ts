import { IEngineer } from "../engineers";
import { IListMaterialsRequest } from "../listMaterials";
export interface IHouseDataRequest {
  buildingArea: number;
  numberRooms: number;
  numberBathrooms: number;
  amountFloors: number;
}

export interface IProjects {
  description: string;
  houseData: IHouseDataRequest;
  engineerId: string;
  listMaterialsId: string;
}

export interface IRegisterProjects {
  description: string;
  engineer: IEngineer;
  houseData: IHouseDataRequest;
  lisMaterials: IListMaterialsRequest;
}

export interface IProjectsUpdate {
  description?: string;
  houseData?: IHouseDataRequest;
  engineerId?: string;
}
