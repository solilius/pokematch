import styled from "styled-components";

const Graph = styled.div`
  height: 65%;
  background-color: ${(props) => props?.theme?.color};
  width: ${(props) => props?.theme?.width}%;
  ovewrflow-x: hidden;
`;

interface Props {
  color: string;
  width: number;
}

export const StatGraph = ({color, width}: Props) => {
  Graph.defaultProps = {
    theme: {color, width}
  };

  return <Graph></Graph>;
};
