import express from 'express';
import { getAllPokemons, getPokemon } from '../handlers/pokemon';

export const router = express.Router();

router.route("/").get(getAllPokemons);
router.route("/:species").get(getPokemon);
