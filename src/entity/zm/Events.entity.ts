import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Events_EndTime_DiskSpace_idx", ["EndDateTime", "DiskSpace"], {})
@Index("Events_StorageId_idx", ["StorageId"], {})
@Index("MonitorId", ["MonitorId"], {})
@Index("StartTime", ["StartDateTime"], {})
@Entity("Events", { schema: "zm" })
export class Events {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Id", unsigned: true })
  Id!: string;

  @Column("int", { name: "MonitorId", unsigned: true, default: () => "'0'" })
  MonitorId!: number;

  @Column("smallint", {
    name: "StorageId",
    unsigned: true,
    default: () => "'0'",
  })
  StorageId!: number;

  @Column("smallint", {
    name: "SecondaryStorageId",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  SecondaryStorageId!: number | null;

  @Column("varchar", { name: "Name", length: 64 })
  Name!: string;

  @Column("varchar", { name: "Cause", length: 32 })
  Cause!: string;

  @Column("datetime", { name: "StartDateTime", nullable: true })
  StartDateTime!: Date | null;

  @Column("datetime", { name: "EndDateTime", nullable: true })
  EndDateTime!: Date | null;

  @Column("smallint", { name: "Width", unsigned: true, default: () => "'0'" })
  Width!: number;

  @Column("smallint", { name: "Height", unsigned: true, default: () => "'0'" })
  Height!: number;

  @Column("decimal", {
    name: "Length",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  Length!: string;

  @Column("int", { name: "Frames", nullable: true, unsigned: true })
  Frames!: number | null;

  @Column("int", { name: "AlarmFrames", nullable: true, unsigned: true })
  AlarmFrames!: number | null;

  @Column("varchar", { name: "DefaultVideo", length: 64 })
  DefaultVideo!: string;

  @Column("tinyint", { name: "SaveJPEGs", nullable: true })
  SaveJPEGs!: number | null;

  @Column("int", { name: "TotScore", unsigned: true, default: () => "'0'" })
  TotScore!: number;

  @Column("smallint", {
    name: "AvgScore",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  AvgScore!: number | null;

  @Column("smallint", {
    name: "MaxScore",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  MaxScore!: number | null;

  @Column("tinyint", { name: "Archived", unsigned: true, default: () => "'0'" })
  Archived!: number;

  @Column("tinyint", { name: "Videoed", unsigned: true, default: () => "'0'" })
  Videoed!: number;

  @Column("tinyint", { name: "Uploaded", unsigned: true, default: () => "'0'" })
  Uploaded!: number;

  @Column("tinyint", { name: "Emailed", unsigned: true, default: () => "'0'" })
  Emailed!: number;

  @Column("tinyint", { name: "Messaged", unsigned: true, default: () => "'0'" })
  Messaged!: number;

  @Column("tinyint", { name: "Executed", unsigned: true, default: () => "'0'" })
  Executed!: number;

  @Column("text", { name: "Notes", nullable: true })
  Notes!: string | null;

  @Column("int", { name: "StateId", unsigned: true })
  StateId!: number;

  @Column("enum", {
    name: "Orientation",
    enum: [
      "ROTATE_0",
      "ROTATE_90",
      "ROTATE_180",
      "ROTATE_270",
      "FLIP_HORI",
      "FLIP_VERT",
    ],
    default: () => "'ROTATE_0'",
  })
  Orientation!:
    | "ROTATE_0"
    | "ROTATE_90"
    | "ROTATE_180"
    | "ROTATE_270"
    | "FLIP_HORI"
    | "FLIP_VERT";

  @Column("bigint", { name: "DiskSpace", nullable: true, unsigned: true })
  DiskSpace!: string | null;

  @Column("enum", {
    name: "Scheme",
    enum: ["Deep", "Medium", "Shallow"],
    default: () => "'Deep'",
  })
  Scheme!: "Deep" | "Medium" | "Shallow";

  @Column("tinyint", { name: "Locked", width: 1, default: () => "'0'" })
  Locked!: boolean;
}
