import { Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity("house_data")
class HouseData {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  buildingArea: number

  @Column()
  numberRooms: number

  @Column()
  numberBathrooms: number

  @Column()
  amountFloors: number 
}

export default HouseData