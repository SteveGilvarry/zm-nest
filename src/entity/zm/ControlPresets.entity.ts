import { Column, Entity } from "typeorm";

@Entity("ControlPresets", { schema: "zm" })
export class ControlPresets {
  @Column("int", {
    primary: true,
    name: "MonitorId",
    unsigned: true,
    default: () => "'0'",
  })
  MonitorId!: number;

  @Column("int", {
    primary: true,
    name: "Preset",
    unsigned: true,
    default: () => "'0'",
  })
  Preset!: number;

  @Column("varchar", { name: "Label", length: 64 })
  Label!: string;
}
