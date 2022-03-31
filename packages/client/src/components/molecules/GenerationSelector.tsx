import { useContext } from "react";
import styled from "styled-components";
import { Generation } from "@pokematch/common";

import { PokemonsContext } from "../../contexts/pokemonsContext";

const Selector = styled.select`
  border-radius: 5px;
  height: 40%;
`;

const GenerationValues = {
  [Generation.I]: "Generation 1 - [ R/ B/ G/ Y ]",
  [Generation.II]: "Generation 2 - [ S/ G/ C ]",
  [Generation.III]: "Generation 3 - [ R/ S/ E/ FR/ LG ]",
  [Generation.IV]: "Generation 4 - [ D/ P/ PL/ SS/ HG ]",
  [Generation.V]: "Generation 5 - [ B/ W/ B2/ W2 ]",
  [Generation.VI]: "Generation 6 - [ X/ Y/ OR/ AS ]",
  [Generation.VII]: "Generation 7 - [ S/ M ]",
  [Generation.VIII]: "Generation 8 - [ SW/ SH/ BD/ SP ]",
};

export const GenerationSelector = () => {
  const { generation, setGeneration } = useContext(PokemonsContext);

  return (
    <Selector
      value={generation}
      onChange={({ target }: { target: { value: string } }) =>
        setGeneration(target.value as Generation)
      }
    >
      {Object.values(Generation).map((g) => (
        <option key={g} value={g}>
          {GenerationValues[g as Generation]}
        </option>
      ))}
    </Selector>
  );
};
