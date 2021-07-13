import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Storage", { schema: "zm" })
export class Storage {
  @PrimaryGeneratedColumn({ type: "smallint", name: "Id", unsigned: true })
  Id!: number;

  @Column("varchar", { name: "Path", length: 64 })
  Path!: string;

  @Column("varchar", { name: "Name", length: 64 })
  Name!: string;

  @Column("enum", {
    name: "Type",
    enum: ["local", "s3fs"],
    default: () => "'local'",
  })
  Type!: "local" | "s3fs";

  @Column("varchar", { name: "Url", nullable: true, length: 255 })
  Url!: string | null;

  @Column("bigint", { name: "DiskSpace", nullable: true })
  DiskSpace!: string | null;

  @Column("enum", {
    name: "Scheme",
    enum: ["Deep", "Medium", "Shallow"],
    default: () => "'Medium'",
  })
  Scheme!: "Deep" | "Medium" | "Shallow";

  @Column("int", { name: "ServerId", nullable: true, unsigned: true })
  ServerId!: number | null;

  @Column("tinyint", { name: "DoDelete", width: 1, default: () => "'1'" })
  DoDelete!: boolean;

  @Column("tinyint", { name: "Enabled", width: 1, default: () => "'1'" })
  Enabled!: boolean;
}
