import express from 'express';
import { getTrainerPokemons } from '../handlers/trainer/get-trainer-pokemons';

export const router = express.Router();

router.route("/pokemons/:trainerId").get(getTrainerPokemons);

