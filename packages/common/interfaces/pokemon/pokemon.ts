import { Types, Ability, Stats, Move } from "./";

/** Pokemon's data */
export interface Pokemon {
  /** Pokemon id */
  id: number;
  /** Pokemon name */
  name: string;
  /** Pokemon species (mega-gengar is under gengar's species) */
  species: string;
  /** Pokemon stats */
  stats: Stats;
  /** List of moves the pokemon can learn */
  moves: Move[];
  /** List of abilities the pokemon can have */
  abilities: Ability[];
  /** Types and past types of the pokemon and type chart*/
  types: Types;
}