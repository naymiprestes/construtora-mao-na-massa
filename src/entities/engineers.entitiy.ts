import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Projects from "./projects.entity";

@Entity("engineer")
class Engineer {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({length: 127})
  name: string

  @Column({length: 15})
  CPF: string

  @Column({length: 25})
  CREA: string

  @Column({length: 20})
  cellphone: string

  @Column({length: 60})
  email: string

  @OneToMany(() => Projects, (projects) => projects.engineer)
  projects: Projects[]
}

export default Engineer