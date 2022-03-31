import { Pokemon } from "@pokematch/common";
import { useContext } from "react";
import styled from "styled-components";
import { PokemonsContext } from "../../contexts/pokemonsContext";
import { generationToNumber } from "../../utils/actions/generation-to-number";
import { getTypesByGen } from "../../utils/actions/get-types-by-generation";
import { PokemonImage } from "../atoms/PokemonImage";
import { PokemonProfileDetails } from "./PokemonProfileDetails";
import { PokemonStats } from "./PokemonStats";
import { WeaknessChart } from "./WeaknessChart";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 2vh 2vw;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin-top: 8vh;
`;

interface Props {
  pokemon: Pokemon;
}

export const PokemonProfile = ({ pokemon }: Props) => {
  const { generation } = useContext(PokemonsContext);

  const { name, id, abilities, stats, types, species } = pokemon;

  const relevantTypes = getTypesByGen({ types: types, generation });
  const generationNumber = generationToNumber(generation);

  return (
    <Container>
      <ProfileRow>
        <PokemonProfileDetails
          name={name}
          id={id}
          abilities={abilities}
          types={relevantTypes}
          species={species}
          generation={generationNumber!}
        />
        <PokemonImage width={360} pokemonName={pokemon.name} />
      </ProfileRow>
      <Row>
        <WeaknessChart types={relevantTypes} />
      </Row>
      <Row>
        <PokemonStats stats={stats} />
      </Row>
    </Container>
  );
};
