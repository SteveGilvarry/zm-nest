import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ParentId", ["ParentId"], {})
@Entity("Groups", { schema: "zm" })
export class Groups {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("varchar", { name: "Name", length: 64 })
  Name!: string;

  @Column("int", { name: "ParentId", nullable: true, unsigned: true })
  ParentId!: number | null;
}
