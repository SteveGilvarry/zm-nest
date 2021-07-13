import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Name", ["Name"], { unique: true })
@Entity("Manufacturers", { schema: "zm" })
export class Manufacturers {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("varchar", { name: "Name", unique: true, length: 64 })
  Name!: string;
}
