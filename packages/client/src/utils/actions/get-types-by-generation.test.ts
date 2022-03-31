import { Generation, Type } from '@pokematch/common';
import { getTypesByGen } from './get-types-by-generation';

describe('Get Types by Generation', () => {

  it("recieved pokemon without past types -> returns current types", () => {
    const generation = Generation.I;

    const types = {
      slot_1: Type.Normal
    }


    const res = { slot_1: Type.Normal }

    expect(getTypesByGen({ types, generation })).toEqual(res);
  });

  it("recieved pokemon with past types but current gen is heigher -> returns current types", () => {
    const generation = Generation.IV;

    const types = {
      slot_1: Type.Normal,
      pastTypes: [{
        generation: Generation.II,
        slot_1: Type.Ghost,
      }]
    }

    const res = { slot_1: Type.Normal }

    expect(getTypesByGen({ types, generation })).toEqual(res);
  });

  it("recieved pokemon with past types and the current gen is lower -> returns the past types", () => {
    const generation = Generation.I;

    const types = {
      slot_1: Type.Normal,
      pastTypes: [{
        generation: Generation.II,
        slot_1: Type.Ghost,
      }]
    }

    const res = { slot_1: Type.Ghost }

    expect(getTypesByGen({ types, generation })).toEqual(res);
  });

  it("recieved pokemon with 2 past types and the current gen is lower or equal to the first -> returns first past types", () => {
    const generation = Generation.II;

    const types = {
      slot_1: Type.Normal,
      pastTypes: [{
        generation: Generation.II,
        slot_1: Type.Ghost,
      }, {
        generation: Generation.IV,
        slot_1: Type.Fairy,
      }]
    }

    const res = { slot_1: Type.Ghost }

    expect(getTypesByGen({ types, generation })).toEqual(res);
  });

  it("recieved pokemon with 2 past types and the current gen is heigher then the first and lower or equal to the second ->  returns second past types", () => {
    const generation = Generation.III;

    const types = {
      slot_1: Type.Normal,
      pastTypes: [{
        generation: Generation.II,
        slot_1: Type.Ghost,
      }, {
        generation: Generation.IV,
        slot_1: Type.Fairy,
      }]
    }

    const res = { slot_1: Type.Fairy }

    expect(getTypesByGen({ types, generation })).toEqual(res);
  });

  it("recieved pokemon with 2 past types and the current gen is heigher then both ->  returns current types", () => {
    const generation = Generation.VIII;

    const types = {
      slot_1: Type.Normal,
      pastTypes: [{
        generation: Generation.II,
        slot_1: Type.Ghost,
      }, {
        generation: Generation.IV,
        slot_1: Type.Fairy,
      }]
    }

    const res = { slot_1: Type.Normal }

    expect(getTypesByGen({ types, generation })).toEqual(res);
  });
});
