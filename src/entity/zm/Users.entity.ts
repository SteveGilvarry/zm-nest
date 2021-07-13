import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UC_Username", ["Username"], { unique: true })
@Entity("Users", { schema: "zm" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("varchar", { name: "Username", unique: true, length: 32 })
  Username!: string;

  @Column("varchar", { name: "Password", length: 64 })
  Password!: string;

  @Column("varchar", { name: "Language", nullable: true, length: 8 })
  Language!: string | null;

  @Column("tinyint", { name: "Enabled", unsigned: true, default: () => "'1'" })
  Enabled!: number;

  @Column("enum", {
    name: "Stream",
    enum: ["None", "View"],
    default: () => "'None'",
  })
  Stream!: "None" | "View";

  @Column("enum", {
    name: "Events",
    enum: ["None", "View", "Edit"],
    default: () => "'None'",
  })
  Events!: "None" | "View" | "Edit";

  @Column("enum", {
    name: "Control",
    enum: ["None", "View", "Edit"],
    default: () => "'None'",
  })
  Control!: "None" | "View" | "Edit";

  @Column("enum", {
    name: "Monitors",
    enum: ["None", "View", "Edit"],
    default: () => "'None'",
  })
  Monitors!: "None" | "View" | "Edit";

  @Column("enum", {
    name: "Groups",
    enum: ["None", "View", "Edit"],
    default: () => "'None'",
  })
  Groups!: "None" | "View" | "Edit";

  @Column("enum", {
    name: "Devices",
    enum: ["None", "View", "Edit"],
    default: () => "'None'",
  })
  Devices!: "None" | "View" | "Edit";

  @Column("enum", {
    name: "Snapshots",
    enum: ["None", "View", "Edit"],
    default: () => "'None'",
  })
  Snapshots!: "None" | "View" | "Edit";

  @Column("enum", {
    name: "System",
    enum: ["None", "View", "Edit"],
    default: () => "'None'",
  })
  System!: "None" | "View" | "Edit";

  @Column("varchar", { name: "MaxBandwidth", nullable: true, length: 16 })
  MaxBandwidth!: string | null;

  @Column("text", { name: "MonitorIds", nullable: true })
  MonitorIds!: string | null;

  @Column("bigint", {
    name: "TokenMinExpiry",
    unsigned: true,
    default: () => "'0'",
  })
  TokenMinExpiry!: string;

  @Column("tinyint", {
    name: "APIEnabled",
    unsigned: true,
    default: () => "'1'",
  })
  APIEnabled!: number;

  @Column("varchar", { name: "HomeView", length: 64 })
  HomeView!: string;
}
