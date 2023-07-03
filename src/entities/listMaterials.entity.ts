import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { PListMaterials } from "./pListMaterials.entity";

@Entity("list_materials")
class ListMaterials {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({default: 0} )
  subtotal: number

  @Column({default: 0})
  quantity: number

  @OneToMany(() => PListMaterials, (plistMaterials) => plistMaterials.listMaterials)
  pListMaterials: PListMaterials[]
}

export default ListMaterials