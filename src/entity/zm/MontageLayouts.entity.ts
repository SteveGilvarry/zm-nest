import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("MontageLayouts", { schema: "zm" })
export class MontageLayouts {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("text", { name: "Name" })
  Name!: string;

  @Column("longtext", { name: "Positions", nullable: true })
  Positions!: string | null;
}
