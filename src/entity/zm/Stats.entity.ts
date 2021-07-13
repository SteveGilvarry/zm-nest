import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("EventId", ["EventId"], {})
@Index("MonitorId", ["MonitorId"], {})
@Index("ZoneId", ["ZoneId"], {})
@Entity("Stats", { schema: "zm" })
export class Stats {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("int", { name: "MonitorId", unsigned: true, default: () => "'0'" })
  MonitorId!: number;

  @Column("int", { name: "ZoneId", unsigned: true, default: () => "'0'" })
  ZoneId!: number;

  @Column("bigint", { name: "EventId", unsigned: true })
  EventId!: string;

  @Column("int", { name: "FrameId", unsigned: true, default: () => "'0'" })
  FrameId!: number;

  @Column("tinyint", {
    name: "PixelDiff",
    unsigned: true,
    default: () => "'0'",
  })
  PixelDiff!: number;

  @Column("int", { name: "AlarmPixels", unsigned: true, default: () => "'0'" })
  AlarmPixels!: number;

  @Column("int", { name: "FilterPixels", unsigned: true, default: () => "'0'" })
  FilterPixels!: number;

  @Column("int", { name: "BlobPixels", unsigned: true, default: () => "'0'" })
  BlobPixels!: number;

  @Column("smallint", { name: "Blobs", unsigned: true, default: () => "'0'" })
  Blobs!: number;

  @Column("int", { name: "MinBlobSize", unsigned: true, default: () => "'0'" })
  MinBlobSize!: number;

  @Column("int", { name: "MaxBlobSize", unsigned: true, default: () => "'0'" })
  MaxBlobSize!: number;

  @Column("smallint", { name: "MinX", unsigned: true, default: () => "'0'" })
  MinX!: number;

  @Column("smallint", { name: "MaxX", unsigned: true, default: () => "'0'" })
  MaxX!: number;

  @Column("smallint", { name: "MinY", unsigned: true, default: () => "'0'" })
  MinY!: number;

  @Column("smallint", { name: "MaxY", unsigned: true, default: () => "'0'" })
  MaxY!: number;

  @Column("smallint", { name: "Score", unsigned: true, default: () => "'0'" })
  Score!: number;
}
