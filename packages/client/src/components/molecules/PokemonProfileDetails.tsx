import { Ability, Types } from "@pokematch/common";
import styled from "styled-components";
import {
  capitalizeFirstLetter,
  formatId,
  formatName,
} from "../../utils/actions/format";
import { POKEMON_DB_URL } from "../../utils/consts";
import { InfoButton } from "../atoms/InfoButton";
import { TypeBadge } from "../atoms/TypeBadge";

const Container = styled.div`
  color: white;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Table = styled.table`
  color: white;
  font-size: 22px;
`;

const TBody = styled.tbody`
  text-align: left;
`;

const Row = styled.tr`
  margin: 2px 2px;
`;

const Line = styled.tr`
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #f0f0f0;
  width: 90%;
  margin: 5%;
`;

const Title = styled.th`
  font-weight: 100;
`;

const Cell = styled.td``;

const TypesContainer = styled.span`
  display: flex;
`;

const AbilityName = styled.th`
  font-weight: 400;
  font-size: 18px;
  text-align: left;
`;

const Hidden = styled.span`
  font-weight: 100;
  font-size: 16px;
`;

const AbilityEffect = styled.td`
  font-weight: 100;
  font-size: 16px;
  padding-left: 8px;
`;

const ButtosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

interface Props {
  name: string;
  species: string;
  id: number;
  types: Types;
  generation: number;
  abilities: Ability[];
}

export const PokemonProfileDetails = ({
  name,
  id,
  types,
  abilities,
  species,
  generation,
}: Props) => {
  return (
    <Container>
      <Table>
        <TBody>
          <Row>
            <Title> Name </Title>
            <Cell> {formatName(name)} </Cell>
          </Row>
          <Line />
          <Row>
            <Title> Pokedex </Title>
            <Cell> #{formatId(id)} </Cell>
          </Row>
          <Row>
            <Title> Types </Title>
            <Cell>
              <TypesContainer>
                <TypeBadge type={types.slot_1} />
                {types.slot_2 && <TypeBadge type={types.slot_2} />}
              </TypesContainer>
            </Cell>
          </Row>
          <Row>
            <Title> Abilities: </Title>
          </Row>
          {abilities.map((a) => (
            <Row key={a.name}>
              <AbilityName>
                {capitalizeFirstLetter(a.name)}
                {a.isHidden && <Hidden> (Hidden)</Hidden>}
              </AbilityName>
              <AbilityEffect>{a.effect}</AbilityEffect>
            </Row>
          ))}
        </TBody>
      </Table>
      <ButtosContainer>
        <InfoButton
          title="Moves"
          link={`${POKEMON_DB_URL}/pokedex/${species}/moves/${generation}`}
        />
        <InfoButton
          title="Locations"
          link={`${POKEMON_DB_URL}/pokedex/${species}#dex-locations`}
        />
        <InfoButton
          title="Evolutions"
          link={`${POKEMON_DB_URL}/pokedex/${species}#dex-evolution`}
        />
      </ButtosContainer>
    </Container>
  );
};
