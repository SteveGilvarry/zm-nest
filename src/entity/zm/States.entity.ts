import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Name", ["Name"], { unique: true })
@Entity("States", { schema: "zm" })
export class States {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("varchar", { name: "Name", unique: true, length: 64 })
  Name!: string;

  @Column("text", { name: "Definition" })
  Definition!: string;

  @Column("tinyint", { name: "IsActive", unsigned: true, default: () => "'0'" })
  IsActive!: number;
}
