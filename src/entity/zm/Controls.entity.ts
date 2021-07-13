import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Controls", { schema: "zm" })
export class Controls {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("varchar", { name: "Name", length: 64 })
  Name!: string;

  @Column("enum", {
    name: "Type",
    enum: [
      "Local",
      "Remote",
      "File",
      "Ffmpeg",
      "Libvlc",
      "cURL",
      "WebSite",
      "NVSocket",
    ],
    default: () => "'Local'",
  })
  Type!:
    | "Local"
    | "Remote"
    | "File"
    | "Ffmpeg"
    | "Libvlc"
    | "cURL"
    | "WebSite"
    | "NVSocket";

  @Column("varchar", { name: "Protocol", nullable: true, length: 64 })
  Protocol!: string | null;

  @Column("tinyint", { name: "CanWake", unsigned: true, default: () => "'0'" })
  CanWake!: number;

  @Column("tinyint", { name: "CanSleep", unsigned: true, default: () => "'0'" })
  CanSleep!: number;

  @Column("tinyint", { name: "CanReset", unsigned: true, default: () => "'0'" })
  CanReset!: number;

  @Column("tinyint", {
    name: "CanReboot",
    unsigned: true,
    default: () => "'0'",
  })
  CanReboot!: number;

  @Column("tinyint", { name: "CanZoom", unsigned: true, default: () => "'0'" })
  CanZoom!: number;

  @Column("tinyint", {
    name: "CanAutoZoom",
    unsigned: true,
    default: () => "'0'",
  })
  CanAutoZoom!: number;

  @Column("tinyint", {
    name: "CanZoomAbs",
    unsigned: true,
    default: () => "'0'",
  })
  CanZoomAbs!: number;

  @Column("tinyint", {
    name: "CanZoomRel",
    unsigned: true,
    default: () => "'0'",
  })
  CanZoomRel!: number;

  @Column("tinyint", {
    name: "CanZoomCon",
    unsigned: true,
    default: () => "'0'",
  })
  CanZoomCon!: number;

  @Column("int", { name: "MinZoomRange", nullable: true, unsigned: true })
  MinZoomRange!: number | null;

  @Column("int", { name: "MaxZoomRange", nullable: true, unsigned: true })
  MaxZoomRange!: number | null;

  @Column("int", { name: "MinZoomStep", nullable: true, unsigned: true })
  MinZoomStep!: number | null;

  @Column("int", { name: "MaxZoomStep", nullable: true, unsigned: true })
  MaxZoomStep!: number | null;

  @Column("tinyint", {
    name: "HasZoomSpeed",
    unsigned: true,
    default: () => "'0'",
  })
  HasZoomSpeed!: number;

  @Column("int", { name: "MinZoomSpeed", nullable: true, unsigned: true })
  MinZoomSpeed!: number | null;

  @Column("int", { name: "MaxZoomSpeed", nullable: true, unsigned: true })
  MaxZoomSpeed!: number | null;

  @Column("tinyint", { name: "CanFocus", unsigned: true, default: () => "'0'" })
  CanFocus!: number;

  @Column("tinyint", {
    name: "CanAutoFocus",
    unsigned: true,
    default: () => "'0'",
  })
  CanAutoFocus!: number;

  @Column("tinyint", {
    name: "CanFocusAbs",
    unsigned: true,
    default: () => "'0'",
  })
  CanFocusAbs!: number;

  @Column("tinyint", {
    name: "CanFocusRel",
    unsigned: true,
    default: () => "'0'",
  })
  CanFocusRel!: number;

  @Column("tinyint", {
    name: "CanFocusCon",
    unsigned: true,
    default: () => "'0'",
  })
  CanFocusCon!: number;

  @Column("int", { name: "MinFocusRange", nullable: true, unsigned: true })
  MinFocusRange!: number | null;

  @Column("int", { name: "MaxFocusRange", nullable: true, unsigned: true })
  MaxFocusRange!: number | null;

  @Column("int", { name: "MinFocusStep", nullable: true, unsigned: true })
  MinFocusStep!: number | null;

  @Column("int", { name: "MaxFocusStep", nullable: true, unsigned: true })
  MaxFocusStep!: number | null;

  @Column("tinyint", {
    name: "HasFocusSpeed",
    unsigned: true,
    default: () => "'0'",
  })
  HasFocusSpeed!: number;

  @Column("int", { name: "MinFocusSpeed", nullable: true, unsigned: true })
  MinFocusSpeed!: number | null;

  @Column("int", { name: "MaxFocusSpeed", nullable: true, unsigned: true })
  MaxFocusSpeed!: number | null;

  @Column("tinyint", { name: "CanIris", unsigned: true, default: () => "'0'" })
  CanIris!: number;

  @Column("tinyint", {
    name: "CanAutoIris",
    unsigned: true,
    default: () => "'0'",
  })
  CanAutoIris!: number;

  @Column("tinyint", {
    name: "CanIrisAbs",
    unsigned: true,
    default: () => "'0'",
  })
  CanIrisAbs!: number;

  @Column("tinyint", {
    name: "CanIrisRel",
    unsigned: true,
    default: () => "'0'",
  })
  CanIrisRel!: number;

  @Column("tinyint", {
    name: "CanIrisCon",
    unsigned: true,
    default: () => "'0'",
  })
  CanIrisCon!: number;

  @Column("int", { name: "MinIrisRange", nullable: true, unsigned: true })
  MinIrisRange!: number | null;

  @Column("int", { name: "MaxIrisRange", nullable: true, unsigned: true })
  MaxIrisRange!: number | null;

  @Column("int", { name: "MinIrisStep", nullable: true, unsigned: true })
  MinIrisStep!: number | null;

  @Column("int", { name: "MaxIrisStep", nullable: true, unsigned: true })
  MaxIrisStep!: number | null;

  @Column("tinyint", {
    name: "HasIrisSpeed",
    unsigned: true,
    default: () => "'0'",
  })
  HasIrisSpeed!: number;

  @Column("int", { name: "MinIrisSpeed", nullable: true, unsigned: true })
  MinIrisSpeed!: number | null;

  @Column("int", { name: "MaxIrisSpeed", nullable: true, unsigned: true })
  MaxIrisSpeed!: number | null;

  @Column("tinyint", { name: "CanGain", unsigned: true, default: () => "'0'" })
  CanGain!: number;

  @Column("tinyint", {
    name: "CanAutoGain",
    unsigned: true,
    default: () => "'0'",
  })
  CanAutoGain!: number;

  @Column("tinyint", {
    name: "CanGainAbs",
    unsigned: true,
    default: () => "'0'",
  })
  CanGainAbs!: number;

  @Column("tinyint", {
    name: "CanGainRel",
    unsigned: true,
    default: () => "'0'",
  })
  CanGainRel!: number;

  @Column("tinyint", {
    name: "CanGainCon",
    unsigned: true,
    default: () => "'0'",
  })
  CanGainCon!: number;

  @Column("int", { name: "MinGainRange", nullable: true, unsigned: true })
  MinGainRange!: number | null;

  @Column("int", { name: "MaxGainRange", nullable: true, unsigned: true })
  MaxGainRange!: number | null;

  @Column("int", { name: "MinGainStep", nullable: true, unsigned: true })
  MinGainStep!: number | null;

  @Column("int", { name: "MaxGainStep", nullable: true, unsigned: true })
  MaxGainStep!: number | null;

  @Column("tinyint", {
    name: "HasGainSpeed",
    unsigned: true,
    default: () => "'0'",
  })
  HasGainSpeed!: number;

  @Column("int", { name: "MinGainSpeed", nullable: true, unsigned: true })
  MinGainSpeed!: number | null;

  @Column("int", { name: "MaxGainSpeed", nullable: true, unsigned: true })
  MaxGainSpeed!: number | null;

  @Column("tinyint", { name: "CanWhite", unsigned: true, default: () => "'0'" })
  CanWhite!: number;

  @Column("tinyint", {
    name: "CanAutoWhite",
    unsigned: true,
    default: () => "'0'",
  })
  CanAutoWhite!: number;

  @Column("tinyint", {
    name: "CanWhiteAbs",
    unsigned: true,
    default: () => "'0'",
  })
  CanWhiteAbs!: number;

  @Column("tinyint", {
    name: "CanWhiteRel",
    unsigned: true,
    default: () => "'0'",
  })
  CanWhiteRel!: number;

  @Column("tinyint", {
    name: "CanWhiteCon",
    unsigned: true,
    default: () => "'0'",
  })
  CanWhiteCon!: number;

  @Column("int", { name: "MinWhiteRange", nullable: true, unsigned: true })
  MinWhiteRange!: number | null;

  @Column("int", { name: "MaxWhiteRange", nullable: true, unsigned: true })
  MaxWhiteRange!: number | null;

  @Column("int", { name: "MinWhiteStep", nullable: true, unsigned: true })
  MinWhiteStep!: number | null;

  @Column("int", { name: "MaxWhiteStep", nullable: true, unsigned: true })
  MaxWhiteStep!: number | null;

  @Column("tinyint", {
    name: "HasWhiteSpeed",
    unsigned: true,
    default: () => "'0'",
  })
  HasWhiteSpeed!: number;

  @Column("int", { name: "MinWhiteSpeed", nullable: true, unsigned: true })
  MinWhiteSpeed!: number | null;

  @Column("int", { name: "MaxWhiteSpeed", nullable: true, unsigned: true })
  MaxWhiteSpeed!: number | null;

  @Column("tinyint", {
    name: "HasPresets",
    unsigned: true,
    default: () => "'0'",
  })
  HasPresets!: number;

  @Column("tinyint", {
    name: "NumPresets",
    unsigned: true,
    default: () => "'0'",
  })
  NumPresets!: number;

  @Column("tinyint", {
    name: "HasHomePreset",
    unsigned: true,
    default: () => "'0'",
  })
  HasHomePreset!: number;

  @Column("tinyint", {
    name: "CanSetPresets",
    unsigned: true,
    default: () => "'0'",
  })
  CanSetPresets!: number;

  @Column("tinyint", { name: "CanMove", unsigned: true, default: () => "'0'" })
  CanMove!: number;

  @Column("tinyint", {
    name: "CanMoveDiag",
    unsigned: true,
    default: () => "'0'",
  })
  CanMoveDiag!: number;

  @Column("tinyint", {
    name: "CanMoveMap",
    unsigned: true,
    default: () => "'0'",
  })
  CanMoveMap!: number;

  @Column("tinyint", {
    name: "CanMoveAbs",
    unsigned: true,
    default: () => "'0'",
  })
  CanMoveAbs!: number;

  @Column("tinyint", {
    name: "CanMoveRel",
    unsigned: true,
    default: () => "'0'",
  })
  CanMoveRel!: number;

  @Column("tinyint", {
    name: "CanMoveCon",
    unsigned: true,
    default: () => "'0'",
  })
  CanMoveCon!: number;

  @Column("tinyint", { name: "CanPan", unsigned: true, default: () => "'0'" })
  CanPan!: number;

  @Column("int", { name: "MinPanRange", nullable: true })
  MinPanRange!: number | null;

  @Column("int", { name: "MaxPanRange", nullable: true })
  MaxPanRange!: number | null;

  @Column("int", { name: "MinPanStep", nullable: true })
  MinPanStep!: number | null;

  @Column("int", { name: "MaxPanStep", nullable: true })
  MaxPanStep!: number | null;

  @Column("tinyint", {
    name: "HasPanSpeed",
    unsigned: true,
    default: () => "'0'",
  })
  HasPanSpeed!: number;

  @Column("int", { name: "MinPanSpeed", nullable: true })
  MinPanSpeed!: number | null;

  @Column("int", { name: "MaxPanSpeed", nullable: true })
  MaxPanSpeed!: number | null;

  @Column("tinyint", {
    name: "HasTurboPan",
    unsigned: true,
    default: () => "'0'",
  })
  HasTurboPan!: number;

  @Column("int", { name: "TurboPanSpeed", nullable: true })
  TurboPanSpeed!: number | null;

  @Column("tinyint", { name: "CanTilt", unsigned: true, default: () => "'0'" })
  CanTilt!: number;

  @Column("int", { name: "MinTiltRange", nullable: true })
  MinTiltRange!: number | null;

  @Column("int", { name: "MaxTiltRange", nullable: true })
  MaxTiltRange!: number | null;

  @Column("int", { name: "MinTiltStep", nullable: true })
  MinTiltStep!: number | null;

  @Column("int", { name: "MaxTiltStep", nullable: true })
  MaxTiltStep!: number | null;

  @Column("tinyint", {
    name: "HasTiltSpeed",
    unsigned: true,
    default: () => "'0'",
  })
  HasTiltSpeed!: number;

  @Column("int", { name: "MinTiltSpeed", nullable: true })
  MinTiltSpeed!: number | null;

  @Column("int", { name: "MaxTiltSpeed", nullable: true })
  MaxTiltSpeed!: number | null;

  @Column("tinyint", {
    name: "HasTurboTilt",
    unsigned: true,
    default: () => "'0'",
  })
  HasTurboTilt!: number;

  @Column("int", { name: "TurboTiltSpeed", nullable: true })
  TurboTiltSpeed!: number | null;

  @Column("tinyint", {
    name: "CanAutoScan",
    unsigned: true,
    default: () => "'0'",
  })
  CanAutoScan!: number;

  @Column("tinyint", {
    name: "NumScanPaths",
    unsigned: true,
    default: () => "'0'",
  })
  NumScanPaths!: number;
}
