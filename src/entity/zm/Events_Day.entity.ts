import { Column, Entity, Index } from "typeorm";

@Index("Events_Day_MonitorId_idx", ["MonitorId"], {})
@Index("Events_Day_StartTime_idx", ["StartDateTime"], {})
@Entity("Events_Day", { schema: "zm" })
export class EventsDay {
  @Column("int", { primary: true, name: "EventId", unsigned: true })
  EventId!: number;

  @Column("int", { name: "MonitorId", unsigned: true })
  MonitorId!: number;

  @Column("datetime", { name: "StartDateTime", nullable: true })
  StartDateTime!: Date | null;

  @Column("bigint", { name: "DiskSpace", nullable: true })
  DiskSpace!: string | null;
}
