import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";
import Materials from "./materials.entity";

@Entity("list_materials")
class ListMaterials {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  subtotal: number

  @Column()
  quantity: number

  @ManyToMany(() => Materials, (material) => material.listMaterials)
  @JoinTable()
  material: Materials[]
}

export default ListMaterials