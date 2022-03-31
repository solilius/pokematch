import { StatusCodes } from '@pokematch/common';
import { Request, Response } from 'express';
import { Pokemon } from '../../db/models/pokemon'
import { removeProp } from '../../utils/remove-prop';

export const getPokemon = async (
  req: Request,
  res: Response
) => {
  try {
    const { species } = req.params;
    
    if (!species) {
      throw new Error('No Pokemon spicies was provided');
    }

    const withMoves = req.query.withMoves === 'true' ? 1 : 0;
    
    const pokemons = await Pokemon.find({ species }, { moves: withMoves});
    const trimmedPokemons = pokemons.map(p => removeProp(p, '_id')) ;

    res.json(trimmedPokemons);
  } catch (error) {
    console.error(error);

    res.status(StatusCodes.ServerError).send({ status: " failed" });
  }
}
