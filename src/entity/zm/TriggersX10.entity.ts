import { Column, Entity } from "typeorm";

@Entity("TriggersX10", { schema: "zm" })
export class TriggersX10 {
  @Column("int", {
    primary: true,
    name: "MonitorId",
    unsigned: true,
    default: () => "'0'",
  })
  MonitorId!: number;

  @Column("varchar", { name: "Activation", nullable: true, length: 32 })
  Activation!: string | null;

  @Column("varchar", { name: "AlarmInput", nullable: true, length: 32 })
  AlarmInput!: string | null;

  @Column("varchar", { name: "AlarmOutput", nullable: true, length: 32 })
  AlarmOutput!: string | null;
}
