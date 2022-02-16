import { Ability } from '@pokematch/common';
import axios from 'axios';
import envs from '../utils/envs';

interface ResponseAblity {
  name: string;
  effect_entries: {
    short_effect: string;
    language: { name: string };
  }[]
}

const formatAbility = (response: ResponseAblity): Ability => {
  const { short_effect } = response.effect_entries.find(a => a.language.name === 'en');

  return {
    name: response.name,
    effect: short_effect
  }
}

export const getAbility = async (name: string): Promise<Ability> => {
  try {
    const { data } = await axios.get(`${envs.pokemonApi}/ability/${name}`);

    return formatAbility(data);
  } catch (error) {
    console.log(`[getAbility] Failed to get ${name}`, error);
  }
}