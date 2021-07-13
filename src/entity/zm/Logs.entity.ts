import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Logs_Level_idx", ["Level"], {})
@Index("Logs_TimeKey_idx", ["TimeKey"], {})
@Index("TimeKey", ["TimeKey"], {})
@Entity("Logs", { schema: "zm" })
export class Logs {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("decimal", { name: "TimeKey", precision: 16, scale: 6 })
  TimeKey!: string;

  @Column("varchar", { name: "Component", length: 32 })
  Component!: string;

  @Column("int", { name: "ServerId", nullable: true, unsigned: true })
  ServerId!: number | null;

  @Column("int", { name: "Pid", nullable: true })
  Pid!: number | null;

  @Column("tinyint", { name: "Level" })
  Level!: number;

  @Column("char", { name: "Code", length: 3 })
  Code!: string;

  @Column("text", { name: "Message" })
  Message!: string;

  @Column("varchar", { name: "File", nullable: true, length: 255 })
  File!: string | null;

  @Column("smallint", { name: "Line", nullable: true, unsigned: true })
  Line!: number | null;
}
