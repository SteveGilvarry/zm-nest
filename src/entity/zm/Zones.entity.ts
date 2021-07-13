import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("MonitorId", ["MonitorId"], {})
@Entity("Zones", { schema: "zm" })
export class Zones {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("int", { name: "MonitorId", unsigned: true, default: () => "'0'" })
  MonitorId!: number;

  @Column("varchar", { name: "Name", length: 64 })
  Name!: string;

  @Column("enum", {
    name: "Type",
    enum: [
      "Active",
      "Inclusive",
      "Exclusive",
      "Preclusive",
      "Inactive",
      "Privacy",
    ],
    default: () => "'Active'",
  })
  Type!:
    | "Active"
    | "Inclusive"
    | "Exclusive"
    | "Preclusive"
    | "Inactive"
    | "Privacy";

  @Column("enum", {
    name: "Units",
    enum: ["Pixels", "Percent"],
    default: () => "'Pixels'",
  })
  Units!: "Pixels" | "Percent";

  @Column("tinyint", {
    name: "NumCoords",
    unsigned: true,
    default: () => "'0'",
  })
  NumCoords!: number;

  @Column("tinytext", { name: "Coords" })
  Coords!: string;

  @Column("int", { name: "Area", unsigned: true, default: () => "'0'" })
  Area!: number;

  @Column("int", {
    name: "AlarmRGB",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  AlarmRGB!: number | null;

  @Column("enum", {
    name: "CheckMethod",
    enum: ["AlarmedPixels", "FilteredPixels", "Blobs"],
    default: () => "'Blobs'",
  })
  CheckMethod!: "AlarmedPixels" | "FilteredPixels" | "Blobs";

  @Column("smallint", {
    name: "MinPixelThreshold",
    nullable: true,
    unsigned: true,
  })
  MinPixelThreshold!: number | null;

  @Column("smallint", {
    name: "MaxPixelThreshold",
    nullable: true,
    unsigned: true,
  })
  MaxPixelThreshold!: number | null;

  @Column("int", { name: "MinAlarmPixels", nullable: true, unsigned: true })
  MinAlarmPixels!: number | null;

  @Column("int", { name: "MaxAlarmPixels", nullable: true, unsigned: true })
  MaxAlarmPixels!: number | null;

  @Column("tinyint", { name: "FilterX", nullable: true, unsigned: true })
  FilterX!: number | null;

  @Column("tinyint", { name: "FilterY", nullable: true, unsigned: true })
  FilterY!: number | null;

  @Column("int", { name: "MinFilterPixels", nullable: true, unsigned: true })
  MinFilterPixels!: number | null;

  @Column("int", { name: "MaxFilterPixels", nullable: true, unsigned: true })
  MaxFilterPixels!: number | null;

  @Column("int", { name: "MinBlobPixels", nullable: true, unsigned: true })
  MinBlobPixels!: number | null;

  @Column("int", { name: "MaxBlobPixels", nullable: true, unsigned: true })
  MaxBlobPixels!: number | null;

  @Column("smallint", { name: "MinBlobs", nullable: true, unsigned: true })
  MinBlobs!: number | null;

  @Column("smallint", { name: "MaxBlobs", nullable: true, unsigned: true })
  MaxBlobs!: number | null;

  @Column("smallint", {
    name: "OverloadFrames",
    unsigned: true,
    default: () => "'0'",
  })
  OverloadFrames!: number;

  @Column("smallint", {
    name: "ExtendAlarmFrames",
    unsigned: true,
    default: () => "'0'",
  })
  ExtendAlarmFrames!: number;
}
