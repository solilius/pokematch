import { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Pokemon } from "@pokematch/common";

import { getAllPokemonNames } from "../../utils/actions/get-all-pokemon-names";
import { TeamColumn as TeamColumnComponent } from "../organisms/TeamColumn";
import { OppnentColumn as OppnentColumnComponent } from "../organisms/OppnentColumn";
import { PokemonIdentity } from "../../interfaces/PokemonIdentity";

const MatchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85vh;
`;

const TeamColumn = styled(TeamColumnComponent)`
 flex-grow: 1;
`;

const OppnentColumn = styled(OppnentColumnComponent)`
 flex-grow: 1;
`;

const setUpPokemonNames = async () => {
  const pokemonsList = await getAllPokemonNames();
  if (pokemonsList?.length <= 0) {
    Swal.fire({
      icon: "error",
      title: "Failed to load pokemon names, try to refresh the page",
    });
  }

  return pokemonsList;
};

export const BattleMatcher = () => {
  const [pokemonsList, setPokemonsList] = useState<PokemonIdentity[]>([]);
  const [opponentPokemon, setOpponentPokemon] = useState<Pokemon>();

  useEffect(() => {
    setUpPokemonNames().then((res) => {
      setPokemonsList(res);
    });
  }, []);

  return (
    <MatchContainer>
      <TeamColumn
        opponentPokemon={opponentPokemon}
        pokemonsList={pokemonsList}
      />
      <OppnentColumn
        onPokemonChanged={setOpponentPokemon}
        pokemonsList={pokemonsList}
      />
    </MatchContainer>
  );
};
