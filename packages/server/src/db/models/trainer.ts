import { Schema, model } from 'mongoose';
import { Trainer as TrainerInterface } from '@pokematch/common';

const schema = new Schema<TrainerInterface>({
  id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  lastLogin: { type: Date, required: true },
  displayedName: { type: String },
});

export const Trainer =  model('Trainer', schema);