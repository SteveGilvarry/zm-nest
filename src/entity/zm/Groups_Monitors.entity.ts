import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Groups_Monitors_GroupId_idx", ["GroupId"], {})
@Index("Groups_Monitors_MonitorId_idx", ["MonitorId"], {})
@Entity("Groups_Monitors", { schema: "zm" })
export class GroupsMonitors {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("int", { name: "GroupId", unsigned: true })
  GroupId!: number;

  @Column("int", { name: "MonitorId", unsigned: true })
  MonitorId!: number;
}
