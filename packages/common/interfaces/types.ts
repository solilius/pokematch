import { Generation, Type, TypeRelations } from "../";

export interface Types {
  slot1: Type;
  slot2?: Type;
  typeResistenceChart?: TypeRelations;
  pastTypes?: {
    generation: Generation;
    slot1: Type;
    slot2?: Type;
  }[]
}
