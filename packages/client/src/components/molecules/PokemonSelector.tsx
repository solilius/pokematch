import { useEffect, useState } from "react";
import styled from "styled-components";

import { PokemonOption } from "../atoms/PokemonOption";
import { PokemonIdentity } from "../../interfaces/PokemonIdentity";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`;

const Selector = styled.input`
  border-radius: 5px;
  height: 4vh;
  width: 300px;
  font-size: 18px;
  padding: 0 20px;
  border: 1px solid;
`;

const OptionsContainer = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  width: 340px;
  position: relative;
  top: 0;
  border: 1px solid #9C9C9C;
  border-top: 0;
`;

interface Props {
  pokemonsList: PokemonIdentity[];
  onPokemonSelected: (pokemon: PokemonIdentity) => void;
}

export const PokemonSelector = ({ pokemonsList, onPokemonSelected }: Props) => {
  const [displayOptions, setDisplayOptions] = useState(false);
  const [options, setOptions] = useState(pokemonsList);
  const [searchTerm, setSearchTerm] = useState("");

  const onSerachTermChanged = ({ target }: { target: { value: string } }) => {
    setSearchTerm(target.value.toLowerCase());
  };

  const onPokemonChanged = (pokemon: PokemonIdentity) => {
    onPokemonSelected(pokemon);
    setSearchTerm(pokemon.name);
    setDisplayOptions(false);
  };

  useEffect(() => {
    setOptions(pokemonsList.filter((p) => p.name.includes(searchTerm)));
  }, [searchTerm, setOptions, pokemonsList]);

  return (
    <Container>
      <Selector
        value={searchTerm}
        spellCheck={false}
        onChange={onSerachTermChanged}
        onClick={() => setDisplayOptions(!displayOptions)}
        placeholder="Enter Pokemom's name"
      />
      {displayOptions && (
        <OptionsContainer>
          {options?.map((p) => (
            <PokemonOption key={p.id} pokemon={p} onSelect={onPokemonChanged} />
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
};
