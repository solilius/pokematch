import { StatusCodes } from '@pokematch/common';
import { Request, Response } from 'express';
import { Pokemon } from '../../db/models/pokemon'

export const getAllPokemons = async (
  _req: Request,
  res: Response
) => {
  try {
    const pokemons = await Pokemon.find({}, { name: 1, id: 1, _id: 0 });
    res.json(pokemons);
  } catch (error) {
    console.error(error);

    res.status(StatusCodes.ServerError).send({ status: " failed" });
  }
}
