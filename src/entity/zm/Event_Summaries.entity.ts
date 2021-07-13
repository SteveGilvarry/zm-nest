import { Column, Entity } from "typeorm";

@Entity("Event_Summaries", { schema: "zm" })
export class EventSummaries {
  @Column("int", { primary: true, name: "MonitorId", unsigned: true })
  MonitorId!: number;

  @Column("int", { name: "TotalEvents", nullable: true })
  TotalEvents!: number | null;

  @Column("bigint", { name: "TotalEventDiskSpace", nullable: true })
  TotalEventDiskSpace!: string | null;

  @Column("int", { name: "HourEvents", nullable: true })
  HourEvents!: number | null;

  @Column("bigint", { name: "HourEventDiskSpace", nullable: true })
  HourEventDiskSpace!: string | null;

  @Column("int", { name: "DayEvents", nullable: true })
  DayEvents!: number | null;

  @Column("bigint", { name: "DayEventDiskSpace", nullable: true })
  DayEventDiskSpace!: string | null;

  @Column("int", { name: "WeekEvents", nullable: true })
  WeekEvents!: number | null;

  @Column("bigint", { name: "WeekEventDiskSpace", nullable: true })
  WeekEventDiskSpace!: string | null;

  @Column("int", { name: "MonthEvents", nullable: true })
  MonthEvents!: number | null;

  @Column("bigint", { name: "MonthEventDiskSpace", nullable: true })
  MonthEventDiskSpace!: string | null;

  @Column("int", { name: "ArchivedEvents", nullable: true })
  ArchivedEvents!: number | null;

  @Column("bigint", { name: "ArchivedEventDiskSpace", nullable: true })
  ArchivedEventDiskSpace!: string | null;
}
