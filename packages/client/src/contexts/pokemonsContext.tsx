import React, { useEffect, useState } from "react";
import { Generation, Pokemon, Trainer, TypeChart } from "@pokematch/common";

interface ContextData {
  generation: Generation;
  trainer: Trainer;
  pokemonTeam: Pokemon[];
  enemyPokemon?: Pokemon;
  setTrainer: (trainer: Trainer) => void;
  setPokemonTeam: (pokemonTeam: Pokemon[]) => void;
  setEnemyPokemon: (enemyPokemon: Pokemon) => void;
  setGeneration: (generation: Generation) => void;
}

export const PokemonsContext = React.createContext<ContextData>(
  {} as ContextData
);

export const PokemonsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [trainer, setTrainer] = useState<Trainer>({} as Trainer);
  const [typeChart, setTypeChart] = useState<TypeChart>({} as TypeChart);
  const [pokemonTeam, setPokemonTeam] = useState<Pokemon[]>([]);
  const [enemyPokemon, setEnemyPokemon] = useState<Pokemon>();
  const [generation, setGeneration] = useState(Generation.VIII);

  useEffect(() => {
    // get team pokemons
  }, [trainer]);

  useEffect(() => {
    // calc the types and charts again
  }, [generation]);
  
  const value: ContextData = {
    generation,
    trainer,
    pokemonTeam,
    enemyPokemon,
    setTrainer,
    setPokemonTeam,
    setEnemyPokemon,
    setGeneration,
  };

  return (
    <PokemonsContext.Provider value={value}>
      {children}
    </PokemonsContext.Provider>
  );
};
