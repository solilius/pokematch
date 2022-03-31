import { useCallback } from "react";
import styled from "styled-components";

import { PokemonIdentity } from "../../interfaces/PokemonIdentity";
import { formatId, formatName } from "../../utils/actions/format";
import { PokemonSerachOptionDetails } from "./PokemonSerachOptionDetails";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 10px 0 0 20px;
  cursor: pointer;
  border-bottom: 1px solid #f7f7f7;
  
  &:hover {
    transition: all 0.1s ease;
    background-color: #f7f7f7;
  }

  nth-child(even) {
    background-color: Lightgreen;
  }
`;

interface Props {
  pokemon: PokemonIdentity;
  onSelect: (pokemon: PokemonIdentity) => void;
}

export const PokemonOption = ({ pokemon, onSelect }: Props) => {
  const id = formatId(pokemon.id!);
  const name = formatName(pokemon.name);

  const onPokemonClicked = useCallback(
    () => onSelect(pokemon),
    [pokemon, onSelect]
  );

  return (
    <Container onClick={onPokemonClicked}>
      <PokemonSerachOptionDetails pokemonName={name} pokemonId={id} />
      <img
        height={120}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
        alt={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
    </Container>
  );
};
