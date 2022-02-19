import { Type, DamageClass, VersionGroup } from "../types";

/** Move's information */
export interface MoveDetails {
  /** Misplayed name of the move */
  name: string;
  /** Power of the move */
  power?: number;
  /** Heigher priority move will attack first, regardless of pokemons speed */
  priority: number;
  /** Value 70 = 70% to hit, if undefined it's 100% to hit*/
  accuracy?: number;
  /** What pokemon/s the attack will effect */
  target: string;
  /** Physical damage, Special damage, or status effect */
  damageClass: DamageClass;
  /** Move type*/
  type: Type;
  /** Times the move can be used */
  pp: number;
  /** Effect of the move*/
  effect: string;
  /** Chance for an extra effect to take place, undefined = 0% */
  effectChance?: number;
}

/** Move learing methods */
export interface VersionDetails {
  /** VersionDetails is relevant for this version group */
  versionGroup: VersionGroup;
  /** Level the move can be learned */
  level: number;
  /** Method of learning the move */
  moveLearnMethod: string;
}

/** Pokemon's Move */
export interface Move {
  /** Displayed name of the move */
  name: string;
  /** Move details */
  details?: MoveDetails;
  /** List of  move's prerequisites for each game */
  versionDetails: VersionDetails[];
}
