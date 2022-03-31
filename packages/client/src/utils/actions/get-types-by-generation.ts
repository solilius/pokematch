import { Generation , Types } from "@pokematch/common";
import { generationToNumber } from "./generation-to-number";

interface Props {
  types: Types;
  generation: Generation;
}

export const getTypesByGen = ({ types, generation }: Props): Types => {
  const { slot_1, slot_2, pastTypes } = types;
  const currentGenNumber = generationToNumber(generation);

  // if we got the current gen number and past gens we need check what types to return
  // otherwise return default types
  if (currentGenNumber && pastTypes && pastTypes.length > 0) {

    // run through pastTypes and return the relevant types
    for (let pastGen of pastTypes) {
      const gen = generationToNumber(pastGen.generation);

      // if the current generation is equal or smaller than the past types we are checking return them
      // we are going from the bottom up so we miss the types if they were change more than once
      if (gen && currentGenNumber <= gen) {
        const { slot_1, slot_2 } = pastGen;

        return { slot_1, slot_2 }
      }
    }
  }

  return { slot_1, slot_2 };
}