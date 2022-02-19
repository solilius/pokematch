/** Pokemon's stats */
export interface Stats {
  /** Health points */
  hp: number;
  /** Used when attacking with physycal DamageClass move*/
  attack: number;
  /** Used when defending from physical DamageClass move */
  defense: number;
  /** Used when attacking with special DamageClass move*/
  spAttack: number;
  /** Used when defending from special DamageClass move */
  spDefense: number;
  /** Used to calculate who attack first */
  speed: number;
}
