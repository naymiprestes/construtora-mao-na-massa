import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import Engineer from "./engineers.entitiy"
import HouseData from "./houseData.entity"
import ListMaterials from "./listMaterials.entity"

@Entity("project")
class Projects {
  
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({length: 300})
  description: string

  @ManyToOne(() => Engineer, {eager: true})
  engineer: Engineer

  @OneToOne(() => HouseData, {eager: true}) @JoinColumn()
  houseData: HouseData

  @OneToOne(() => ListMaterials, {eager:true}) @JoinColumn()
  listMaterials: ListMaterials
}

export default Projects