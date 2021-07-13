import { Column, Entity } from "typeorm";

@Entity("Monitor_Status", { schema: "zm" })
export class MonitorStatus {
  @Column("int", { primary: true, name: "MonitorId", unsigned: true })
  MonitorId!: number;

  @Column("enum", {
    name: "Status",
    enum: ["Unknown", "NotRunning", "Running", "Connected", "Signal"],
    default: () => "'Unknown'",
  })
  Status!: "Unknown" | "NotRunning" | "Running" | "Connected" | "Signal";

  @Column("decimal", {
    name: "CaptureFPS",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  CaptureFPS!: string;

  @Column("decimal", {
    name: "AnalysisFPS",
    precision: 5,
    scale: 2,
    default: () => "'0.00'",
  })
  AnalysisFPS!: string;

  @Column("int", { name: "CaptureBandwidth", default: () => "'0'" })
  CaptureBandwidth!: number;

  @Column("bigint", { name: "DayEventDiskSpace", nullable: true })
  DayEventDiskSpace!: string | null;
}
