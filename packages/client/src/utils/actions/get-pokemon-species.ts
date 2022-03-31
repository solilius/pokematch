import { Pokemon } from "@pokematch/common";
import axios from "axios";
import { SERVER_URL } from "../consts";

interface Options {
  species: string;
  withMoves: boolean;
}

export const getPokemonSpecies = async ({ species, withMoves }: Options): Promise<Pokemon[]> => {
  try {
    const { data } = await axios.get(`${SERVER_URL}/pokemons/${species}`, { params: { withMoves } });
    return data;
  } catch (error) {
    console.error('[getPokemon] Failed to get pokemons ');
    return [];
  }
}