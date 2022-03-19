import { Select, MenuItem, SelectChangeEvent, InputLabel, FormControl } from "@mui/material";
import { Generation } from "@pokematch/common";

import { useContext } from "react";
import { PokemonsContext } from "../../contexts/pokemonsContext";

const GenerationValues = {
  [Generation.I]: "Generation 1 [R/B/G/Y]",
  [Generation.II]: "Generation 2 [S/G/C]",
  [Generation.III]: "Generation 3 [R/S/E/FR/LG]",
  [Generation.IV]: "Generation 4 [D/P/PL/SS/HG]",
  [Generation.V]: "Generation 5 [B/W/B2/W2]",
  [Generation.VI]: "Generation 6 [X/Y/OR/AS]",
  [Generation.VII]: "Generation 7 [S/M]",
  [Generation.VIII]: "Generation 8 [SW/SH/BD/SP]",
};

export const GenerationSelect = () => {
  const { setGeneration } = useContext(PokemonsContext);

  return (
    <FormControl>
      <InputLabel id="generation-label">Select a Generation</InputLabel>
      <Select
        labelId="generation-label"
        variant="filled"
        onChange={({ target }: SelectChangeEvent) => setGeneration(target.value as Generation)}
      >
        {Object.values(Generation).map((g) => (
          <MenuItem value={g}>{GenerationValues[g as Generation]}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
