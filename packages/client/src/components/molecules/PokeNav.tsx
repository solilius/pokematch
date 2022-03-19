import { Link as ReactLink} from "react-router-dom";
import styled from "styled-components";

import{ ReactComponent as Pokeball } from '../../resources/pokeball.svg';
import { GenerationSelect } from './GenerationSelect';

const Navbar = styled.nav`
  position: fixed;
  top: 40px;
  width: 96vw;
  margin: 0 2vw;
  height: 5em;
  background-color: rgb(54, 54, 54);
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const Link = styled(ReactLink)`
  color: white;
  padding: 0 16px ;
  text-decoration: none;
  font-size: 1.3em;
  &:hover {
    transition: all .1s ease;
    transform: scale(1.05);
  }
`

export const PokeNav = () => {
  return (
    <Navbar>
      <Link to="/"> <Pokeball width="25px" fill="white"/> </Link>
      <Link to="/battle"> Battle </Link>
      <Link to="/team-builderr"> Team Builder </Link>
      <GenerationSelect />
    </Navbar>
  );
};