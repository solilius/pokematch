import { Type, DamageClass } from "../types";

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
 moveLearnMethod: 'machine' | 'level-up' | 'tutor' | 'egg';
}

export interface Move {
  id: number;
  details: MoveDetails;
  versionDetails: VersionDetails[];
}
