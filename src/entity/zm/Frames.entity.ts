import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("EventId_idx", ["EventId"], {})
@Index("TimeStamp", ["TimeStamp"], {})
@Index("Type", ["Type"], {})
@Entity("Frames", { schema: "zm" })
export class Frames {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Id", unsigned: true })
  Id!: string;

  @Column("bigint", { name: "EventId", unsigned: true })
  EventId!: string;

  @Column("int", { name: "FrameId", unsigned: true, default: () => "'0'" })
  FrameId!: number;

  @Column("enum", {
    name: "Type",
    enum: ["Normal", "Bulk", "Alarm"],
    default: () => "'Normal'",
  })
  Type!: "Normal" | "Bulk" | "Alarm";

  @Column("timestamp", {
    name: "TimeStamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  TimeStamp!: Date;

  @Column("decimal", {
    name: "Delta",
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  Delta!: string;

  @Column("smallint", { name: "Score", unsigned: true, default: () => "'0'" })
  Score!: number;
}
