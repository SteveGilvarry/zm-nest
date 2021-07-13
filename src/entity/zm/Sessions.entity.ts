import { Column, Entity } from "typeorm";

@Entity("Sessions", { schema: "zm" })
export class Sessions {
  @Column("char", { primary: true, name: "id", length: 32 })
  id!: string;

  @Column("int", { name: "access", nullable: true, unsigned: true })
  access!: number | null;

  @Column("text", { name: "data", nullable: true })
  data!: string | null;
}
