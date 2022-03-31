import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { PokeHeader } from "./organisms/PokeHeader";
import { BattleMatcher } from "./pages/BattleMatcher";
import { NotFound } from "./pages/NotFound";
import { TeamBuilder } from "./pages/TeamBuilder";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const App = () => {
  return (
    <Router>
      <Container>
        <PokeHeader/>
        <Routes>
          <Route path="/" element={<BattleMatcher />} />
          <Route path="/battle" element={<BattleMatcher />} />
          <Route path="/team-builder" element={<TeamBuilder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
};
