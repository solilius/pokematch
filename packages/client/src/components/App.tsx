import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokeHeader } from "./organisms/PokeHeader";
import { BattleMatcher } from "./pages/BattleMatcher";
import { NotFound } from "./pages/NotFound";
import { TeamBuilder } from "./pages/TeamBuilder";

export const App = () => {
  return (
    <Router>
      <PokeHeader />
      <Routes>
        <Route path="/" element={<BattleMatcher />} />
        <Route path="/battle" element={<BattleMatcher />} />
        <Route path="/team-builder" element={<TeamBuilder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
