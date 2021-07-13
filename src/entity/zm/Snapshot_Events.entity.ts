import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("EventId", ["EventId"], {})
@Index("Snapshot_Events_SnapshotId_idx", ["SnapshotId"], {})
@Entity("Snapshot_Events", { schema: "zm" })
export class SnapshotEvents {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("int", { name: "SnapshotId", unsigned: true })
  SnapshotId!: number;

  @Column("bigint", { name: "EventId", unsigned: true })
  EventId!: string;
}
