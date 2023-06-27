import Materials from "../../entities/materials.entity"

export interface IHouseDataRequest {
  buildingArea: number
  numberRooms: number
  numberBathrooms: number
  amountFloors: number
}

export interface IListMaterialsRequest {
  subtotal: number
  quantity: number
  materialsId: IListMaterialsRequest
}

export interface ICronstructionProject {
  description: string
  quantity: number
  subtotal: number

  houseData: IHouseDataRequest
  listMaterials: IListMaterialsRequest
  engineerId: string
}

export interface ICronstructionProjectUpdate {
  description?: string
  quantity?: number
  subtotal?: number

  houseData?: IHouseDataRequest
  listMaterials?: IListMaterialsRequest
  engineerId?: string
}