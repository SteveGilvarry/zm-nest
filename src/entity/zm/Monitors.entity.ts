import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Monitors_ServerId_idx", ["ServerId"], {})
@Entity("Monitors", { schema: "zm" })
export class Monitors {
  @PrimaryGeneratedColumn({ type: "int", name: "Id", unsigned: true })
  Id!: number;

  @Column("varchar", { name: "Name", length: 64 })
  Name!: string;

  @Column("text", { name: "Notes", nullable: true })
  Notes!: string | null;

  @Column("int", { name: "ServerId", nullable: true, unsigned: true })
  ServerId!: number | null;

  @Column("smallint", {
    name: "StorageId",
    unsigned: true,
    default: () => "'0'",
  })
  StorageId!: number;

  @Column("enum", {
    name: "Type",
    enum: [
      "Local",
      "Remote",
      "File",
      "Ffmpeg",
      "Libvlc",
      "cURL",
      "NVSocket",
      "VNC",
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
    | "NVSocket"
    | "VNC";

  @Column("enum", {
    name: "Function",
    enum: ["None", "Monitor", "Modect", "Record", "Mocord", "Nodect"],
    default: () => "'Monitor'",
  })
  Function!: "None" | "Monitor" | "Modect" | "Record" | "Mocord" | "Nodect";

  @Column("tinyint", { name: "Enabled", unsigned: true, default: () => "'1'" })
  Enabled!: number;

  @Column("tinyint", {
    name: "DecodingEnabled",
    unsigned: true,
    default: () => "'1'",
  })
  DecodingEnabled!: number;

  @Column("varchar", { name: "LinkedMonitors", nullable: true, length: 255 })
  LinkedMonitors!: string | null;

  @Column("set", { name: "Triggers", enum: ["X10"] })
  Triggers!: "X10"[];

  @Column("varchar", { name: "ONVIF_URL", length: 255 })
  ONVIF_URL!: string;

  @Column("varchar", { name: "ONVIF_Username", length: 64 })
  ONVIF_Username!: string;

  @Column("varchar", { name: "ONVIF_Password", length: 64 })
  ONVIF_Password!: string;

  @Column("varchar", { name: "ONVIF_Options", length: 64 })
  ONVIF_Options!: string;

  @Column("tinytext", { name: "Device" })
  Device!: string;

  @Column("tinyint", { name: "Channel", unsigned: true, default: () => "'0'" })
  Channel!: number;

  @Column("int", { name: "Format", unsigned: true, default: () => "'0'" })
  Format!: number;

  @Column("tinyint", { name: "V4LMultiBuffer", nullable: true, unsigned: true })
  V4LMultiBuffer!: number | null;

  @Column("tinyint", {
    name: "V4LCapturesPerFrame",
    nullable: true,
    unsigned: true,
  })
  V4LCapturesPerFrame!: number | null;

  @Column("varchar", { name: "Protocol", nullable: true, length: 16 })
  Protocol!: string | null;

  @Column("varchar", { name: "Method", nullable: true, length: 16 })
  Method!: string | null;

  @Column("varchar", { name: "Host", nullable: true, length: 64 })
  Host!: string | null;

  @Column("varchar", { name: "Port", length: 8 })
  Port!: string;

  @Column("varchar", { name: "SubPath", length: 64 })
  SubPath!: string;

  @Column("varchar", { name: "Path", nullable: true, length: 255 })
  Path!: string | null;

  @Column("varchar", { name: "SecondPath", nullable: true, length: 255 })
  SecondPath!: string | null;

  @Column("varchar", { name: "Options", nullable: true, length: 255 })
  Options!: string | null;

  @Column("varchar", { name: "User", nullable: true, length: 64 })
  User!: string | null;

  @Column("varchar", { name: "Pass", nullable: true, length: 64 })
  Pass!: string | null;

  @Column("smallint", { name: "Width", unsigned: true, default: () => "'0'" })
  Width!: number;

  @Column("smallint", { name: "Height", unsigned: true, default: () => "'0'" })
  Height!: number;

  @Column("tinyint", { name: "Colours", unsigned: true, default: () => "'1'" })
  Colours!: number;

  @Column("int", { name: "Palette", unsigned: true, default: () => "'0'" })
  Palette!: number;

  @Column("enum", {
    name: "Orientation",
    enum: [
      "ROTATE_0",
      "ROTATE_90",
      "ROTATE_180",
      "ROTATE_270",
      "FLIP_HORI",
      "FLIP_VERT",
    ],
    default: () => "'ROTATE_0'",
  })
  Orientation!:
    | "ROTATE_0"
    | "ROTATE_90"
    | "ROTATE_180"
    | "ROTATE_270"
    | "FLIP_HORI"
    | "FLIP_VERT";

  @Column("int", {
    name: "Deinterlacing",
    unsigned: true,
    default: () => "'0'",
  })
  Deinterlacing!: number;

  @Column("varchar", { name: "DecoderHWAccelName", nullable: true, length: 64 })
  DecoderHWAccelName!: string | null;

  @Column("varchar", {
    name: "DecoderHWAccelDevice",
    nullable: true,
    length: 255,
  })
  DecoderHWAccelDevice!: string | null;

  @Column("tinyint", { name: "SaveJPEGs", default: () => "'3'" })
  SaveJPEGs!: number;

  @Column("tinyint", { name: "VideoWriter", default: () => "'0'" })
  VideoWriter!: number;

  @Column("int", {
    name: "OutputCodec",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  OutputCodec!: number | null;

  @Column("varchar", { name: "Encoder", nullable: true, length: 32 })
  Encoder!: string | null;

  @Column("enum", {
    name: "OutputContainer",
    nullable: true,
    enum: ["auto", "mp4", "mkv"],
    default: () => "'auto'",
  })
  OutputContainer!: "auto" | "mp4" | "mkv" | null;

  @Column("text", { name: "EncoderParameters", nullable: true })
  EncoderParameters!: string | null;

  @Column("tinyint", { name: "RecordAudio", default: () => "'0'" })
  RecordAudio!: number;

  @Column("tinyint", { name: "RTSPDescribe", nullable: true, unsigned: true })
  RTSPDescribe!: number | null;

  @Column("mediumint", { name: "Brightness", default: () => "'-1'" })
  Brightness!: number;

  @Column("mediumint", { name: "Contrast", default: () => "'-1'" })
  Contrast!: number;

  @Column("mediumint", { name: "Hue", default: () => "'-1'" })
  Hue!: number;

  @Column("mediumint", { name: "Colour", default: () => "'-1'" })
  Colour!: number;

  @Column("varchar", {
    name: "EventPrefix",
    length: 32,
    default: () => "'Event-'",
  })
  EventPrefix!: string;

  @Column("varchar", { name: "LabelFormat", nullable: true, length: 64 })
  LabelFormat!: string | null;

  @Column("smallint", { name: "LabelX", unsigned: true, default: () => "'0'" })
  LabelX!: number;

  @Column("smallint", { name: "LabelY", unsigned: true, default: () => "'0'" })
  LabelY!: number;

  @Column("smallint", {
    name: "LabelSize",
    unsigned: true,
    default: () => "'1'",
  })
  LabelSize!: number;

  @Column("smallint", {
    name: "ImageBufferCount",
    unsigned: true,
    default: () => "'100'",
  })
  ImageBufferCount!: number;

  @Column("smallint", {
    name: "MaxImageBufferCount",
    unsigned: true,
    default: () => "'0'",
  })
  MaxImageBufferCount!: number;

  @Column("smallint", {
    name: "WarmupCount",
    unsigned: true,
    default: () => "'25'",
  })
  WarmupCount!: number;

  @Column("smallint", {
    name: "PreEventCount",
    unsigned: true,
    default: () => "'10'",
  })
  PreEventCount!: number;

  @Column("smallint", {
    name: "PostEventCount",
    unsigned: true,
    default: () => "'10'",
  })
  PostEventCount!: number;

  @Column("int", {
    name: "StreamReplayBuffer",
    unsigned: true,
    default: () => "'1000'",
  })
  StreamReplayBuffer!: number;

  @Column("smallint", {
    name: "AlarmFrameCount",
    unsigned: true,
    default: () => "'1'",
  })
  AlarmFrameCount!: number;

  @Column("int", {
    name: "SectionLength",
    unsigned: true,
    default: () => "'600'",
  })
  SectionLength!: number;

  @Column("int", {
    name: "MinSectionLength",
    unsigned: true,
    default: () => "'10'",
  })
  MinSectionLength!: number;

  @Column("smallint", {
    name: "FrameSkip",
    unsigned: true,
    default: () => "'0'",
  })
  FrameSkip!: number;

  @Column("smallint", {
    name: "MotionFrameSkip",
    unsigned: true,
    default: () => "'0'",
  })
  MotionFrameSkip!: number;

  @Column("decimal", {
    name: "AnalysisFPSLimit",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  AnalysisFPSLimit!: string | null;

  @Column("smallint", {
    name: "AnalysisUpdateDelay",
    unsigned: true,
    default: () => "'0'",
  })
  AnalysisUpdateDelay!: number;

  @Column("decimal", { name: "MaxFPS", nullable: true, precision: 5, scale: 3 })
  MaxFPS!: string | null;

  @Column("decimal", {
    name: "AlarmMaxFPS",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  AlarmMaxFPS!: string | null;

  @Column("smallint", {
    name: "FPSReportInterval",
    unsigned: true,
    default: () => "'250'",
  })
  FPSReportInterval!: number;

  @Column("tinyint", {
    name: "RefBlendPerc",
    unsigned: true,
    default: () => "'6'",
  })
  RefBlendPerc!: number;

  @Column("tinyint", {
    name: "AlarmRefBlendPerc",
    unsigned: true,
    default: () => "'6'",
  })
  AlarmRefBlendPerc!: number;

  @Column("tinyint", {
    name: "Controllable",
    unsigned: true,
    default: () => "'0'",
  })
  Controllable!: number;

  @Column("int", { name: "ControlId", nullable: true, unsigned: true })
  ControlId!: number | null;

  @Column("varchar", { name: "ControlDevice", nullable: true, length: 255 })
  ControlDevice!: string | null;

  @Column("varchar", { name: "ControlAddress", nullable: true, length: 255 })
  ControlAddress!: string | null;

  @Column("decimal", {
    name: "AutoStopTimeout",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  AutoStopTimeout!: string | null;

  @Column("tinyint", {
    name: "TrackMotion",
    unsigned: true,
    default: () => "'0'",
  })
  TrackMotion!: number;

  @Column("smallint", { name: "TrackDelay", nullable: true, unsigned: true })
  TrackDelay!: number | null;

  @Column("tinyint", { name: "ReturnLocation", default: () => "'-1'" })
  ReturnLocation!: number;

  @Column("smallint", { name: "ReturnDelay", nullable: true, unsigned: true })
  ReturnDelay!: number | null;

  @Column("tinyint", {
    name: "ModectDuringPTZ",
    unsigned: true,
    default: () => "'0'",
  })
  ModectDuringPTZ!: number;

  @Column("smallint", {
    name: "DefaultRate",
    unsigned: true,
    default: () => "'100'",
  })
  DefaultRate!: number;

  @Column("smallint", {
    name: "DefaultScale",
    unsigned: true,
    default: () => "'100'",
  })
  DefaultScale!: number;

  @Column("enum", {
    name: "DefaultCodec",
    enum: ["auto", "MP4", "MJPEG"],
    default: () => "'auto'",
  })
  DefaultCodec!: "auto" | "MP4" | "MJPEG";

  @Column("int", {
    name: "SignalCheckPoints",
    unsigned: true,
    default: () => "'0'",
  })
  SignalCheckPoints!: number;

  @Column("varchar", {
    name: "SignalCheckColour",
    length: 32,
    default: () => "'#0000BE'",
  })
  SignalCheckColour!: string;

  @Column("varchar", { name: "WebColour", length: 32, default: () => "'red'" })
  WebColour!: string;

  @Column("tinyint", { name: "Exif", unsigned: true, default: () => "'0'" })
  Exif!: number;

  @Column("smallint", { name: "Sequence", nullable: true, unsigned: true })
  Sequence!: number | null;

  @Column("int", { name: "TotalEvents", nullable: true })
  TotalEvents!: number | null;

  @Column("tinyint", { name: "ZoneCount", default: () => "'0'" })
  ZoneCount!: number;

  @Column("bigint", { name: "TotalEventDiskSpace", nullable: true })
  TotalEventDiskSpace!: string | null;

  @Column("int", { name: "Refresh", nullable: true, unsigned: true })
  Refresh!: number | null;

  @Column("decimal", {
    name: "Latitude",
    nullable: true,
    precision: 10,
    scale: 8,
  })
  Latitude!: string | null;

  @Column("decimal", {
    name: "Longitude",
    nullable: true,
    precision: 10,
    scale: 8,
  })
  Longitude!: string | null;

  @Column("tinyint", { name: "RTSPServer", width: 1, default: () => "'0'" })
  RTSPServer!: boolean;

  @Column("varchar", { name: "RTSPStreamName", length: 255 })
  RTSPStreamName!: string;

  @Column("enum", {
    name: "Importance",
    nullable: true,
    enum: ["Not", "Less", "Normal"],
  })
  Importance!: "Not" | "Less" | "Normal" | null;
}
