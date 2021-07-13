import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Snapshots", { schema: "zm" })
export class Snapshots {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("varchar", { name: "Name", nullable: true, length: 64 })
  Name!: string | null;

  @Column("text", { name: "Description", nullable: true })
  Description!: string | null;

  @Column("int", { name: "CreatedBy", nullable: true })
  CreatedBy!: number | null;

  @Column("datetime", { name: "CreatedOn", nullable: true })
  CreatedOn!: Date | null;
}
