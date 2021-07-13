import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Name", ["Name"], {})
@Entity("Filters", { schema: "zm" })
export class Filters {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("varchar", { name: "Name", length: 64 })
  Name!: string;

  @Column("int", { name: "UserId", nullable: true, unsigned: true })
  UserId!: number | null;

  @Column("text", { name: "Query_json" })
  Query_json!: string;

  @Column("tinyint", {
    name: "AutoArchive",
    unsigned: true,
    default: () => "'0'",
  })
  AutoArchive!: number;

  @Column("tinyint", {
    name: "AutoUnarchive",
    unsigned: true,
    default: () => "'0'",
  })
  AutoUnarchive!: number;

  @Column("tinyint", {
    name: "AutoVideo",
    unsigned: true,
    default: () => "'0'",
  })
  AutoVideo!: number;

  @Column("tinyint", {
    name: "AutoUpload",
    unsigned: true,
    default: () => "'0'",
  })
  AutoUpload!: number;

  @Column("tinyint", {
    name: "AutoEmail",
    unsigned: true,
    default: () => "'0'",
  })
  AutoEmail!: number;

  @Column("text", { name: "EmailTo", nullable: true })
  EmailTo!: string | null;

  @Column("text", { name: "EmailSubject", nullable: true })
  EmailSubject!: string | null;

  @Column("text", { name: "EmailBody", nullable: true })
  EmailBody!: string | null;

  @Column("tinyint", {
    name: "AutoMessage",
    unsigned: true,
    default: () => "'0'",
  })
  AutoMessage!: number;

  @Column("tinyint", {
    name: "AutoExecute",
    unsigned: true,
    default: () => "'0'",
  })
  AutoExecute!: number;

  @Column("tinytext", { name: "AutoExecuteCmd", nullable: true })
  AutoExecuteCmd!: string | null;

  @Column("tinyint", {
    name: "AutoDelete",
    unsigned: true,
    default: () => "'0'",
  })
  AutoDelete!: number;

  @Column("tinyint", { name: "AutoMove", unsigned: true, default: () => "'0'" })
  AutoMove!: number;

  @Column("tinyint", { name: "AutoCopy", unsigned: true, default: () => "'0'" })
  AutoCopy!: number;

  @Column("smallint", {
    name: "AutoCopyTo",
    unsigned: true,
    default: () => "'0'",
  })
  AutoCopyTo!: number;

  @Column("smallint", {
    name: "AutoMoveTo",
    unsigned: true,
    default: () => "'0'",
  })
  AutoMoveTo!: number;

  @Column("tinyint", {
    name: "UpdateDiskSpace",
    unsigned: true,
    default: () => "'0'",
  })
  UpdateDiskSpace!: number;

  @Column("tinyint", {
    name: "Background",
    unsigned: true,
    default: () => "'0'",
  })
  Background!: number;

  @Column("tinyint", {
    name: "Concurrent",
    unsigned: true,
    default: () => "'0'",
  })
  Concurrent!: number;

  @Column("tinyint", { name: "LockRows", unsigned: true, default: () => "'0'" })
  LockRows!: number;
}
