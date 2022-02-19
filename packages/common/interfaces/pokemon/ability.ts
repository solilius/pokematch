  /** Pokemon's ability */
export interface Ability {
  /** Ability name */
  name: string;
  /** Ability effect in the battle/outside */
  effect: string;
  /** Is the ability can be found normaly or only from an egg */
  isHidden?: boolean;
}
