import { Column, Entity, Index } from "typeorm";

@Index("Events_Hour_MonitorId_idx", ["MonitorId"], {})
@Index("Events_Hour_StartTime_idx", ["StartDateTime"], {})
@Entity("Events_Hour", { schema: "zm" })
export class EventsHour {
  @Column("int", { primary: true, name: "EventId", unsigned: true })
  EventId!: number;

  @Column("int", { name: "MonitorId", unsigned: true })
  MonitorId!: number;

  @Column("datetime", { name: "StartDateTime", nullable: true })
  StartDateTime!: Date | null;

  @Column("bigint", { name: "DiskSpace", nullable: true })
  DiskSpace!: string | null;
}
