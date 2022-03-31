import { Pokemon } from "@pokematch/common";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

import { PokemonIdentity } from "../../interfaces/PokemonIdentity";
import { getPokemonSpecies } from "../../utils/actions/get-pokemon-species";
import { PokemonProfile } from "../molecules/PokemonProfile";
import { PokemonSelector } from "../molecules/PokemonSelector";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

interface Props {
  onPokemonChanged: (pokemon: Pokemon) => void;
  pokemonsList: PokemonIdentity[];
}

export const OppnentColumn = ({ pokemonsList, onPokemonChanged }: Props) => {
  const [opponentPokemon, setOpponentPokemon] = useState<Pokemon>();

  const onPokemonSelected = async ({ name }: PokemonIdentity) => {
    const pokemons: Pokemon[] = await getPokemonSpecies({
      species: name,
      withMoves: false,
    });

    if (pokemons?.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Failed to load opponent's pokemon",
      });

      return;
    }

    setOpponentPokemon(pokemons[0]);
  };

  useEffect(() => {
    onPokemonChanged(opponentPokemon!);
  }, [opponentPokemon, onPokemonChanged]);

  return (
    <Container>
      <PokemonSelector
        pokemonsList={pokemonsList}
        onPokemonSelected={onPokemonSelected}
      />
      {opponentPokemon ? (
        <PokemonProfile pokemon={opponentPokemon} />
      ) : (
        <>select pokemon</>
      )}
      <></>
    </Container>
  );
};
