import { Type, DamageClass, VersionGroup } from "../types";

export interface MoveDetails {
  name: string;
  power?: number;
  priority: number;
  accuracy?: number;
  target: string;
  damageClass: DamageClass;
  type: Type;
  pp: number;
  effect: string;
  effectChance?: number;
}

export interface VersionDetails {
  versionGroup: VersionGroup;
  level: number;
  moveLearnMethod: string;
}

export interface Move {
  name: string;
  details?: MoveDetails;
  versionDetails: VersionDetails[];
}