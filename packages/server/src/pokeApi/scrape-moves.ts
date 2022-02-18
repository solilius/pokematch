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
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string
    }
  }[],
  effect_entries?: {
    short_effect: string,
    language: {
      name: string
    }
  }[],
}

const getEffect = ({ effect_entries, flavor_text_entries }: ResponseMove): string => {
  return effect_entries?.find(e => e.language.name === 'en')?.short_effect ||
    flavor_text_entries?.find(e => e.language.name === 'en')?.flavor_text;
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
    effect: getEffect(response),
    effectChance: response.effect_chance,
  }
}

const getAllMoveNames = async (): Promise<string[]> => {
  const { data } = await axios.get(`${envs.pokemonApi}/move?limit=1000`);
  return data.results.map((m: { name: string }) => m.name);
}

const getMove = async (name: string): Promise<ResponseMove> => {
  return (await axios.get(`${envs.pokemonApi}/move/${name}`)).data;
}

export const scrapeAllMoves = async () => {
  const moveNames = await getAllMoveNames();

  for (let moveName of moveNames) {
    try {
      const move = await getMove(moveName);
      const formatedMove = formatMove(move);
      await Move.create(formatedMove);
      console.log(`${moveName}`);
    } catch (error) {
      console.error(error);
    }
  }
}
