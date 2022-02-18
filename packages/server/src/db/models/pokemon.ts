import { Schema, model } from 'mongoose';
import {
  Pokemon as PokemonInterface,
  Ability,
  Move,
  Stats,
  Types,
  Generation,
  VersionGroup,
  Type
} from '@pokematch/common';

const statsSchema = new Schema<Stats>({
  hp: { type: Number, required: true },
  attack: { type: Number, required: true },
  defense: { type: Number, required: true },
  spDefense: { type: Number, required: true },
  spAttack: { type: Number, required: true },
  speed: { type: Number, required: true },
});

const moveSchema = new Schema<Move>({
  name: { type: String, required: true },
  versionDetails: [{
    versionGroup: { type: String, enum: VersionGroup, required: true },
    level: { type: Number, required: true },
    moveLearnMethod: { type: String, required: true },
  }],
});

const abilitySchema = new Schema<Ability>({
  name: { type: String, required: true },
  effect: { type: String, required: true },
});

const typesSchema = new Schema<Types>({
  slot1: { type: String, enum: Type, required: true },
  slot2: { type: String, enum: Type },
  pastTypes: [{
    generation: { type: String, enum: Generation },
    slot1: { type: String, enum: Type },
    slot2: { type: String, enum: Type }
  }]
});

const schema = new Schema<PokemonInterface>({
  name: { type: String, required: true },
  id: { type: Number, required: true },
  species: { type: String, required: true },
  stats: { type: statsSchema, required: true },
  moves: { type: [moveSchema], required: true },
  abilities: { type: [abilitySchema], required: true },
  types: { type: typesSchema, required: true },
});

export const Pokemon = model('Pokemon', schema);