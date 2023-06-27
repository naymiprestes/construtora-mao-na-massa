
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm"
import ListMaterials from "./listMaterials.entity"

@Entity("materials")
class Materials {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({length: 500})
  description: string

  @Column({length: 10})
  unitMeasurement: string

  @Column()
  value: number

  @ManyToMany(() => ListMaterials, (listMaterials) => listMaterials.material)
  listMaterials: ListMaterials[]
}

export default Materials