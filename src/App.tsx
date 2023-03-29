import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import PokemonInfo from "./components/PokemonInfo";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route
          path="/pokemon/:id/:name/:type/:image"
          element={<PokemonInfo />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import "./components/pokemon.css";
// import axios from "axios";
// import PokemonCollections from "./components/PokemonCollections";
// import { Pokemon } from "./components/interface";
// import Sidebar from "./components/Sidebar";
// import { Link, useLocation } from "react-router-dom";

// interface Pokemons {
//   name: string;
//   url: string;
// }

// interface Category {
//   name: string;
//   url: string;
// }

// interface Response {
//   results: Pokemon[] | Category[];
// }

// const App: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const getPokemon = async () => {
//       const result = await axios.get(
//         "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
//       );

//       console.log(result.data.results);
//       result.data.results.forEach(async (pokemon: Pokemons) => {
//         const poki = await axios.get(
//           `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
//         );
//         setPokemons((p) => [...p, poki.data]); //sread opearator, so everytime a pokemon is added, it will not crash others
//       });
//     };
//     getPokemon();
//   }, []);

//   console.log(pokemons);

//   return (
//     <div className="App">
//       <div className="pokemon_container">
//         Pokemon
//         <Sidebar />
//         <PokemonCollections pokemons={pokemons} />
//       </div>
//     </div>
//   );
// };

// export default App;
