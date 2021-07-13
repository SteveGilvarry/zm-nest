import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ManufacturerId", ["ManufacturerId", "Name"], { unique: true })
@Entity("Models", { schema: "zm" })
export class Models {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("varchar", { name: "Name", length: 64 })
  Name!: string;

  @Column("int", { name: "ManufacturerId", nullable: true })
  ManufacturerId!: number | null;
}
