import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Devices", { schema: "zm" })
export class Devices {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("tinytext", { name: "Name" })
  Name!: string;

  @Column("enum", { name: "Type", enum: ["X10"], default: () => "'X10'" })
  Type!: "X10";

  @Column("varchar", { name: "KeyString", length: 32 })
  KeyString!: string;
}
