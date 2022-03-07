import axios from 'axios';
import { Pokemon } from '@pokematch/common';
import { SERVER_URL } from './consts';

export const getAllPokemonNames = async (): Promise<Partial<Pokemon>[]> => {
  try {
    return axios.get(`${SERVER_URL}/pokemons`);
  } catch (error) {
    console.error('[getAllPokemonNames] Failed to get all pokemon names');
    return [];
  }
}