import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("MonitorPresets", { schema: "zm" })
export class MonitorPresets {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("varchar", { name: "Name", length: 64 })
  Name!: string;

  @Column("enum", {
    name: "Type",
    enum: [
      "Local",
      "Remote",
      "File",
      "Ffmpeg",
      "Libvlc",
      "cURL",
      "WebSite",
      "NVSocket",
    ],
    default: () => "'Local'",
  })
  Type!:
    | "Local"
    | "Remote"
    | "File"
    | "Ffmpeg"
    | "Libvlc"
    | "cURL"
    | "WebSite"
    | "NVSocket";

  @Column("tinytext", { name: "Device", nullable: true })
  Device!: string | null;

  @Column("tinytext", { name: "Channel", nullable: true })
  Channel!: string | null;

  @Column("int", { name: "Format", nullable: true, unsigned: true })
  Format!: number | null;

  @Column("varchar", { name: "Protocol", nullable: true, length: 16 })
  Protocol!: string | null;

  @Column("varchar", { name: "Method", nullable: true, length: 16 })
  Method!: string | null;

  @Column("varchar", { name: "Host", nullable: true, length: 64 })
  Host!: string | null;

  @Column("varchar", { name: "Port", nullable: true, length: 8 })
  Port!: string | null;

  @Column("varchar", { name: "Path", nullable: true, length: 255 })
  Path!: string | null;

  @Column("varchar", { name: "SubPath", nullable: true, length: 64 })
  SubPath!: string | null;

  @Column("smallint", { name: "Width", nullable: true, unsigned: true })
  Width!: number | null;

  @Column("smallint", { name: "Height", nullable: true, unsigned: true })
  Height!: number | null;

  @Column("int", { name: "Palette", nullable: true, unsigned: true })
  Palette!: number | null;

  @Column("decimal", { name: "MaxFPS", nullable: true, precision: 5, scale: 2 })
  MaxFPS!: string | null;

  @Column("tinyint", {
    name: "Controllable",
    unsigned: true,
    default: () => "'0'",
  })
  Controllable!: number;

  @Column("varchar", { name: "ControlId", nullable: true, length: 16 })
  ControlId!: string | null;

  @Column("varchar", { name: "ControlDevice", nullable: true, length: 255 })
  ControlDevice!: string | null;

  @Column("varchar", { name: "ControlAddress", nullable: true, length: 255 })
  ControlAddress!: string | null;

  @Column("smallint", {
    name: "DefaultRate",
    unsigned: true,
    default: () => "'100'",
  })
  DefaultRate!: number;

  @Column("smallint", {
    name: "DefaultScale",
    unsigned: true,
    default: () => "'100'",
  })
  DefaultScale!: number;
}
