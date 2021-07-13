import { Column, Entity, Index } from "typeorm";

@Index("Events_Month_MonitorId_idx", ["MonitorId"], {})
@Entity("Events_Archived", { schema: "zm" })
export class EventsArchived {
  @Column("int", { primary: true, name: "EventId", unsigned: true })
  EventId!: number;

  @Column("int", { name: "MonitorId", unsigned: true })
  MonitorId!: number;

  @Column("bigint", { name: "DiskSpace", nullable: true })
  DiskSpace!: string | null;
}
