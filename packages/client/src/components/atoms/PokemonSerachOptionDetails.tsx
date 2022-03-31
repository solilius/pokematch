import styled from "styled-components";

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.b`
  padding-top: 10px;
  font-size: 18px;
`;

const Id = styled.i`
  padding-top: 4px;
  font-size: 16px;
  color: grey;
`;

interface Props {
  pokemonName: string;
  pokemonId: string;
}

export const PokemonSerachOptionDetails = ({
  pokemonId,
  pokemonName,
}: Props) => {
  return (
    <Details>
      <Name> {pokemonName} </Name>
      <Id> #{pokemonId} </Id>
    </Details>
  );
};
