import styled from "styled-components";

const ImageContainer = styled.div`
  height: ${(props) => props.theme.height}vh;
  over-flow: hidden;
`;

interface Props {
  pokemonName: string;
  width: number;
  height?: number;
}

export const PokemonImage = ({ pokemonName, width, height }: Props) => {
  ImageContainer.defaultProps = {
    theme: {
      height,
    },
  };
  return (
    <ImageContainer>
      <img
        width={width}
        src={`https://img.pokemondb.net/artwork/${pokemonName}.jpg`}
        alt={`pokemon not found`}
      />
    </ImageContainer>
  );
};
