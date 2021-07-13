import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Servers_Name_idx", ["Name"], {})
@Entity("Servers", { schema: "zm" })
export class Servers {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("text", { name: "Protocol", nullable: true })
  Protocol!: string | null;

  @Column("text", { name: "Hostname", nullable: true })
  Hostname!: string | null;

  @Column("int", { name: "Port", nullable: true, unsigned: true })
  Port!: number | null;

  @Column("text", { name: "PathToIndex", nullable: true })
  PathToIndex!: string | null;

  @Column("text", { name: "PathToZMS", nullable: true })
  PathToZMS!: string | null;

  @Column("text", { name: "PathToApi", nullable: true })
  PathToApi!: string | null;

  @Column("varchar", { name: "Name", length: 64 })
  Name!: string;

  @Column("int", { name: "State_Id", nullable: true, unsigned: true })
  State_Id!: number | null;

  @Column("enum", {
    name: "Status",
    enum: ["Unknown", "NotRunning", "Running"],
    default: () => "'Unknown'",
  })
  Status!: "Unknown" | "NotRunning" | "Running";

  @Column("decimal", {
    name: "CpuLoad",
    nullable: true,
    precision: 5,
    scale: 1,
  })
  CpuLoad!: string | null;

  @Column("bigint", { name: "TotalMem", nullable: true, unsigned: true })
  TotalMem!: string | null;

  @Column("bigint", { name: "FreeMem", nullable: true, unsigned: true })
  FreeMem!: string | null;

  @Column("bigint", { name: "TotalSwap", nullable: true, unsigned: true })
  TotalSwap!: string | null;

  @Column("bigint", { name: "FreeSwap", nullable: true, unsigned: true })
  FreeSwap!: string | null;

  @Column("tinyint", { name: "zmstats", width: 1, default: () => "'0'" })
  zmstats!: boolean;

  @Column("tinyint", { name: "zmaudit", width: 1, default: () => "'0'" })
  zmaudit!: boolean;

  @Column("tinyint", { name: "zmtrigger", width: 1, default: () => "'0'" })
  zmtrigger!: boolean;

  @Column("tinyint", {
    name: "zmeventnotification",
    width: 1,
    default: () => "'0'",
  })
  zmeventnotification!: boolean;
}
