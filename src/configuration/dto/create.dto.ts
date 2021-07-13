import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, MaxLength } from 'class-validator';

export class CreateConfigurationDto {
  @ApiPropertyOptional({ example: '1' })
  @IsNumber()
  public Id!: number;

  @ApiPropertyOptional({ example: 'LOG_LEVEL_SYSLOG' })
  @IsString()
  @MaxLength(32)
  public Name!: string;

  @ApiPropertyOptional({ example: 'Warning' })
  @IsString()
  public Value!: string;

  @ApiPropertyOptional({ example: 'LOG_LEVEL_SYSLOG' })
  @IsString()
  public Type!: string;

  @IsString()
  @IsOptional()
  public DefaultValue!: string;

  @IsString()
  @IsOptional()
  public Hint!: string;

  @IsString()
  @IsOptional()
  public Pattern!: string;

  @IsString()
  @IsOptional()
  public Format!: string;

  @IsString()
  @IsOptional()
  public Prompt!: string;

  @IsString()
  @IsOptional()
  public Help!: string;

  @IsString()
  @MaxLength(32)
  public Category!: string;

  @IsNumber()
  public Readonly!: number;

  @IsString()
  @IsOptional()
  public Requires!: string;
}
/*
  @Column("smallint", { name: "Id", unsigned: true, default: () => "'0'" })
  @Column("varchar", { primary: true, name: "Name", length: 32 })
  @Column("text", { name: "Value" })
  @Column("tinytext", { name: "Type" })
  @Column("text", { name: "DefaultValue", nullable: true })
  @Column("tinytext", { name: "Hint", nullable: true })
  @Column("tinytext", { name: "Pattern", nullable: true })
  @Column("tinytext", { name: "Format", nullable: true })
  @Column("tinytext", { name: "Prompt", nullable: true })
  @Column("text", { name: "Help", nullable: true })
  @Column("varchar", { name: "Category", length: 32 })
  @Column("tinyint", { name: "Readonly", unsigned: true, default: () => "'0'" })
  @Column("text", { name: "Requires", nullable: true })
*/
