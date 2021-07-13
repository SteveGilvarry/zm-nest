import { Column, Entity } from "typeorm";

@Entity("Config", { schema: "zm" })
export class Config {
  @Column("smallint", { name: "Id", unsigned: true, default: () => "'0'" })
  Id!: number;

  @Column("varchar", { primary: true, name: "Name", length: 32 })
  Name!: string;

  @Column("text", { name: "Value" })
  Value!: string;

  @Column("tinytext", { name: "Type" })
  Type!: string;

  @Column("text", { name: "DefaultValue", nullable: true })
  DefaultValue!: string | null;

  @Column("tinytext", { name: "Hint", nullable: true })
  Hint!: string | null;

  @Column("tinytext", { name: "Pattern", nullable: true })
  Pattern!: string | null;

  @Column("tinytext", { name: "Format", nullable: true })
  Format!: string | null;

  @Column("tinytext", { name: "Prompt", nullable: true })
  Prompt!: string | null;

  @Column("text", { name: "Help", nullable: true })
  Help!: string | null;

  @Column("varchar", { name: "Category", length: 32 })
  Category!: string;

  @Column("tinyint", { name: "Readonly", unsigned: true, default: () => "'0'" })
  Readonly!: number;

  @Column("text", { name: "Requires", nullable: true })
  Requires!: string | null;
}
