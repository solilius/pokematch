import { Types, Ability, Stats, Move } from "..";

export interface Pokemon {
  id: number;
  name: string;
  species: string;
  stats: Stats;
  moves: Move[];
  abilities: Ability[];
  types: Types;
}