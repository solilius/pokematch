import { Type } from "@pokematch/common";
import { useCallback } from "react";
import styled from "styled-components";
import { getTypeColor } from "../../utils/actions/get-color";
import { POKEMON_DB_URL } from "../../utils/consts";

const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 66px;
  height: 30px;
  margin: 4px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  background-color: ${(props) => props.color};
  text-shadow: 1px 1px 2px rgb(0 0 0 / 40%);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    transition: 0.1s;
    opacity: 0.8;
  }
`;

interface Props {
  type: Type;
}

export const TypeBadge = ({ type }: Props) => {
  const onClicked = useCallback(
    () => window.open(`${POKEMON_DB_URL}/type/${type}`, "_blank"),
    [type]
  );

  return (
    <Container onClick={onClicked} color={getTypeColor(type)}>
      {type.toUpperCase()}
    </Container>
  );
};
