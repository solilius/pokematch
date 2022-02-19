import { Generation, Type, TypeRelations } from "../types";

/** Pokemon Types information*/
export interface Types {
  /** Type 1 */
  slot1: Type;
  /** Type 2, might no exist */
  slot2?: Type;
  /** Type resistence map */
  typeResistenceMap?: TypeRelations;
  pastTypes?: {
    /** Genrations of the old types */
    generation: Generation;
    /** past type 1 */
    slot1: Type;
    /** past type 2 */
    slot2?: Type;
  }[]
}
