import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Materials from "./materials.entity"
import ListMaterials from "./listMaterials.entity"

@Entity("list_materials_materials")
export class PListMaterials {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  materialsQuantity: number

  @ManyToOne(() => Materials, {eager: true})
  materials: Materials

  @ManyToOne(() => ListMaterials)
  listMaterials: ListMaterials
}