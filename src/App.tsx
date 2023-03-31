import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import PokemonInfo from "./components/PokemonInfo";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id/:name/:type" element={<PokemonInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
