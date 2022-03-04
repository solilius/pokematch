import { Schema, model } from 'mongoose';
import { DamageClass, MoveDetails, Type } from '@pokematch/common';

export const schema = new Schema<MoveDetails>({
  name: { type: String, required: true },
  priority: { type: Number, required: true },
  target: { type: String, required: true },
  damageClass: { type: String, enum: DamageClass, required: true },
  type: { type: String, enum: Type, required: true },
  pp: { type: Number, required: true },
  effect: { type: String, required: true },
  power: { type: Number },
  accuracy: { type: Number },
  effectChance: { type: Number },
});

export const Move = model('Move', schema);