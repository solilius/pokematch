import { Schema, model } from 'mongoose';
import { TrainedPokemon as TrainedPokemonInterface } from '@pokematch/common';
import { schema as PokemonSchema } from './pokemon';
import { schema as MoveSchema } from './move';

const schema = new Schema<TrainedPokemonInterface>({
  ...PokemonSchema.obj,
  trainerId: { type: String, required: true },
  isActiveMember: { type: Boolean, required: true },
  lastUpdate: { type: Date, required: true },
  currentMoves: {
    move_1: { type: MoveSchema, required: true },
    move_2: { type: MoveSchema },
    move_3: { type: MoveSchema },
    move_4: { type: MoveSchema },
  }
});

export const TrainedPokemon = model('TrainedPokemon', schema);
