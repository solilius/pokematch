import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Pokeball } from "../../resources/pokeball.svg";
import { GenerationSelector } from "../molecules/GenerationSelector";

const Container = styled.div`
  padding: 3vh 2vw;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  height: 8vh;
  padding: 0 20px;
  background-color: rgb(54, 54, 54);
  border-radius: 8px;
`;

const Selector = styled(GenerationSelector)`
  position: absolute;
  right: 20px;
`;

const Link = styled(ReactLink)`
  color: white;
  padding: 0 16px;
  text-decoration: none;
  font-size: 1.3em;
  &:hover {
    transition: all 0.1s ease;
    transform: scale(1.05);
  }
`;

export const PokeHeader = () => {
  return (
    <Container>
      <Navbar>
        <Link to="/">
          <Pokeball width="25px" fill="white" />
        </Link>
        <Link to="/battle"> Battle </Link>
        <Link to="/team-builder"> Team Builder </Link>
        <Selector />
      </Navbar>
    </Container>
  );
};
