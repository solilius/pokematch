import { Stats } from "@pokematch/common";
import styled from "styled-components";
import {
  calcGraphColor,
  calcGraphWidth,
} from "../../utils/actions/stat-graph-calculation";
import { StatGraph } from "../atoms/StatGraph";

const Container = styled.table`
  background-color: white;
  width: 100%;
  text-align: left;
  height: 250px;
  border-radius: 4px;
  background-color: #888;
`;

const Row = styled.tr`
  background-color: white;
`;

const Title = styled.th`
  width: 15%;
  padding-left: 2%;
`;

const Cell = styled.th`
  width: 10%;
  text-align: center;
`;

const GraphContainer = styled.th`
  padding-left: 2%;
`;

const statsMap: { [key in string]: string } = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  spDefense: "Sp. Defense",
  spAttack: "Sp. Attack",
  speed: "Speed",
};

interface Props {
  stats: Stats;
}

export const PokemonStats = ({ stats }: Props) => {
  return (
    <Container>
      <tbody>
      {Object.keys(stats).map((stat) => {
        const value = stats[stat as keyof Stats];
        return (
          <Row key={stat}>
            <Title>{statsMap[stat]}:</Title>
            <Cell>{value}</Cell>
            <GraphContainer>
              <StatGraph
                color={calcGraphColor(value)}
                width={calcGraphWidth(value)}
              />
            </GraphContainer>
          </Row>
        );
      })}
      </tbody>
    </Container>
  );
};
