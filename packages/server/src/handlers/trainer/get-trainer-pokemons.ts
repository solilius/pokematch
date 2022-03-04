import { StatusCodes } from '@pokematch/common';
import { Request, Response } from 'express';
import { TrainedPokemon } from '../../db/models/trainedPokemon'

export const getTrainerPokemons = async (
  req: Request,
  res: Response
) => {
  try {
    const { trainerId } = req.params;

    // get trainer's last 6 active trained pokemons
    const pokemons = await TrainedPokemon
      .find({ trainerId, isActiveMember: true })
      .sort({ lastUpdate: "desc" })
      .limit(6);

    res.json(pokemons);
  } catch (error) {
    console.error(error);

    res.status(StatusCodes.ServerError).send({ status: " failed" });
  }
}
