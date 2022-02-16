import { Schema, model } from 'mongoose';
import { Ability as AbilityInterface } from '@pokematch/common';

const schema = new Schema<AbilityInterface>({
  name: { type: String, required: true },
  effect: { type: String, required: true },
});

export const Ability =  model('Ability', schema);