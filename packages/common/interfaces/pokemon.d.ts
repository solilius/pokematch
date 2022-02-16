import { Type, Ability, Location, Stats, Move, Location, Types } from "../";

export interface Pokemon {
  name: string;
  id: number;
  stats: Stats;
  moves: Move[];
  abilities: Ability[];
  locations: Location[]
  types: Types;
}