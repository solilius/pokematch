import { useCallback } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 25%;
  height: 36px;
  background-color: #70b1c4;
  border: 2px solid #609aab;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #74bacf;
  }

  &: active {
    background-color: #65a6ba;
  }
`;

interface Props {
  title: string;
  link: string;
}

export const InfoButton = ({ title, link }: Props) => {
  const onClick = useCallback(() => window.open(link, "_blank"), [link]);

  return <Button onClick={onClick}> {title} </Button>;
};
