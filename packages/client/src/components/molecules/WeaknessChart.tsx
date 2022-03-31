import {
  Type,
  Types,
  calculateTypeResistenceMap,
} from "@pokematch/common";
import { useContext } from "react";
import styled from "styled-components";
import { PokemonsContext } from "../../contexts/pokemonsContext";
import { WeaknessPanel } from "../atoms/WeaknessPanel";

const Container = styled.div`
  display flex;
  width: 100%;
  justify-content: center;
`;

interface Props {
  types: Types;
}

export const WeaknessChart = ({ types }: Props) => {
  const { generation } = useContext(PokemonsContext);
  const { slot_1: typeA, slot_2: typeB } = types;
  const myTypeChart = calculateTypeResistenceMap({ typeA, typeB, generation });
console.log(myTypeChart);
  return (
    <Container>
      {Object.keys(myTypeChart).map((type: string) => (
        <WeaknessPanel key={type} type={type as Type} value={myTypeChart[type as Type]!} />
      ))}
    </Container>
  );
};
