import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Pokemon } from "@pokematch/common";

import { getAllPokemonNames } from "../../utils/pokemon-actions";

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
  const [pokemonsList, setPokemonsList] = useState<Partial<Pokemon>[]>([]);

  useEffect(() => {
    setUpPokemonNames().then((res) => {
      setPokemonsList(res);
    });
  }, []);

  return <> BATTLE MATCHER </>;
};
