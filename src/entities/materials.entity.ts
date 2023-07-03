
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { PListMaterials } from "./pListMaterials.entity"

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

  @OneToMany(() => PListMaterials, (plistMaterials) => plistMaterials.materials)
  pListMaterials: PListMaterials[]
}

export default Materials