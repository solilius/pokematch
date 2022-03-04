import { Ability } from '@pokematch/common';
import axios from 'axios';
import envs from '../utils/envs';

interface ResponseAblity {
  name: string;
  flavor_text_entries: {
    language: { name: string };
    flavor_text: string;
  }[];
  effect_entries: {
    short_effect: string;
    language: { name: string };
  }[]
}

const formatAbility = (response: ResponseAblity): Ability => {
  // sometimes the effect_entries is undefined so we use the flavor_text instead
  const effect =  response.effect_entries.find(a => a.language.name === 'en')?.short_effect || 
  response.flavor_text_entries.find(a => a.language.name === 'en').flavor_text;

  return {
    effect,
    name: response.name,
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