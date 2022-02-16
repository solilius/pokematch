import axios from 'axios';
import { DamageClass, MoveDetails, Type } from '@pokematch/common';

import envs from '../utils/envs';
import { Move } from '../db/models/move';

interface ResponseMove {
  name: string;
  power?: number;
  priority: number;
  accuracy?: number;
  pp: number;
  effect_chance: number;
  target: { name: string };
  type: { name: Type };
  damage_class: { name: DamageClass };
  effect_entries: {
    short_effect: string,
    language: {
      name: string
    }
  }[],
}

const formatMove = (response: ResponseMove): MoveDetails => {
  return {
    name: response.name,
    power: response.power,
    priority: response.priority,
    accuracy: response.accuracy,
    target: response.target.name,
    damageClass: response.damage_class.name,
    type: response.type.name,
    pp: response.pp,
    effect: response.effect_entries.find(e => e.language.name === 'en').short_effect,
    effectChance: response.effect_chance,
  }
}

const getAllMoveNames = async (): Promise<string[]> => {
  const { data } = await axios.get(`${envs.pokemonApi}/move?limit=1000`);
  return data.map((m: { name: string }) => m.name);
}

const getMove = async (name: string): Promise<ResponseMove> => {
  return (await axios.get(`${envs.pokemonApi}/move/${name}`)).data;
}

export const scrapeAllMoves = async () => {
  const moveNames = await getAllMoveNames();
  for (let [index, moveName] of moveNames) {
    try {
      const move = await getMove(moveName);
      const formatedMove = formatMove(move);
      await Move.create(formatedMove);
      console.log(`${index} :: ${moveName}`);
    } catch (error) {
      console.error(error);
    }
  }
}
