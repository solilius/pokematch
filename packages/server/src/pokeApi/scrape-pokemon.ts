import axios from 'axios';

import envs from '../utils/envs';
import {
  Pokemon as PokemonInterface,
  Stats,
  Types,
  Ability,
  Move,
  VersionGroup,
  Type,
  Generation,
} from '@pokematch/common';
import { Pokemon } from '../db/models/pokemon';
import { getAbility } from './scrape-ability';

interface AbilityResponse {
  ability: { name: string };
  is_hidden: boolean;
}

interface ResponsePokemon {
  name: string;
  species: { name: string };
  id: number;
  moves: {
    move: { name: string };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: { name: string }
      version_group: { name: VersionGroup };
    }[];
  }[];
  stats: {
    base_stat: number;
    stat: { name: string };
  }[];
  abilities: AbilityResponse[];
  types: {
    slot: number;
    type: { name: Type };
  }[];
  past_types?: {
    generation: { name: Generation };
    types: {
      slot: number;
      type: { name: Type };
    }[];
  }[];
}

const formatStats = ({ stats }: ResponsePokemon): Stats => {
  return {
    hp: stats.find(s => s.stat.name === 'hp')?.base_stat,
    attack: stats.find(s => s.stat.name === 'attack')?.base_stat,
    defense: stats.find(s => s.stat.name === 'defense')?.base_stat,
    spAttack: stats.find(s => s.stat.name === 'special-attack')?.base_stat,
    spDefense: stats.find(s => s.stat.name === 'special-defense')?.base_stat,
    speed: stats.find(s => s.stat.name === 'speed')?.base_stat,
  }
}

const formatMoves = ({ moves }: ResponsePokemon): Move[] => {
  const notIncludedVersion = [
    VersionGroup.Colosseum,
    VersionGroup.XD,
    VersionGroup.LetsGo,
  ]

  return moves.map(m => ({
    name: m.move.name,
    versionDetails: m.version_group_details
      .filter(m => !Object.values(notIncludedVersion).includes(m.version_group.name))
      .map(v => ({
        level: v.level_learned_at,
        moveLearnMethod: v.move_learn_method.name,
        versionGroup: v.version_group.name,
      })),
  }));
}

const processAbility = async ({ ability, is_hidden }: AbilityResponse): Promise<Ability> => {
  const { effect, name } = await getAbility(ability.name);

  return {
    name,
    effect,
    isHidden: is_hidden,
  };
}

const getAbilities = async ({ abilities }: ResponsePokemon): Promise<Ability[]> => {
  const formatedabilities: Ability[] = await Promise.all(abilities.map(processAbility));

  return formatedabilities;
}

const formatTypes = ({ types, past_types }: ResponsePokemon): Types => {
  const formatedTypes: Types = {
    slot1: types[0].type.name,
    slot2: types[1]?.type.name,
  }

  if (past_types?.length === 0) {
    formatedTypes.pastTypes = past_types.map(m => ({
      generation: m.generation.name,
      slot1: m.types[0].type.name,
      slot2: m.types[1]?.type.name,
    }))
  }

  return formatedTypes;
}

const formatPokemon = async (response: ResponsePokemon): Promise<PokemonInterface> => {

  return {
    name: response.name,
    species: response.species.name,
    id: response.id,
    stats: formatStats(response),
    moves: formatMoves(response),
    abilities: await getAbilities(response),
    types: formatTypes(response),
  }
}

const getAllPokemonNames = async (): Promise<string[]> => {
  const { data } = await axios.get(`${envs.pokemonApi}/pokemon?limit=1000`);
  return data.results.map((m: { name: string }) => m.name);
}

const getPokemon = async (name: string): Promise<ResponsePokemon> => {
  return (await axios.get(`${envs.pokemonApi}/pokemon/${name}`)).data;
}

export const scrapeAllPokemons = async () => {
  const pokemonNames = await getAllPokemonNames();

  for (let  pokemonName of pokemonNames) {
    try {
      const pokemon = await getPokemon(pokemonName);
      const formatedPokemom = await formatPokemon(pokemon);
      await Pokemon.create(formatedPokemom);
      console.log(`${formatedPokemom.id} :: ${pokemonName}`);
    } catch (error) {
      console.error(error);
    }
  }
}
