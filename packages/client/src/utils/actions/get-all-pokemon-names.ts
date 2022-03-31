import axios from 'axios';

import { SERVER_URL } from '../consts';
import { PokemonIdentity } from '../../interfaces/PokemonIdentity';

export const getAllPokemonNames = async (): Promise<PokemonIdentity[]> => {
  try {
    const { data } =  await axios.get(`${SERVER_URL}/pokemons`);
    return data;
  } catch (error) {
    console.error('[getAllPokemonNames] Failed to get all pokemon names');
    return [];
  }
}
