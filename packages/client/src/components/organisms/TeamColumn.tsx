import { Pokemon } from "@pokematch/common";
import { useEffect } from "react";
import styled from "styled-components";

import { PokemonIdentity } from "../../interfaces/PokemonIdentity";

const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 85vh;
`;

interface Props {
  opponentPokemon?: Pokemon;
  pokemonsList: PokemonIdentity[];
}

export const TeamColumn = ({ pokemonsList, opponentPokemon }: Props) => {
  useEffect(() => {
  }, [opponentPokemon]);

  return <Container></Container>;
};
