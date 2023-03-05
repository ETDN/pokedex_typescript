import React, { useEffect, useState } from "react";
import "./components/pokemon.css";
import axios from "axios";
import PokemonCollections from "./components/PokemonCollections";
import { Pokemon } from "./components/interface";
import Sidebar from "./components/Sidebar";

interface Pokemons {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const result = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );

      console.log(result.data.results);
      result.data.results.forEach(async (pokemon: Pokemons) => {
        const poki = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poki.data]); //sread opearator, so everytime a pokemon is added, it will not crash others
      });
    };
    getPokemon();
  }, []);

  console.log(pokemons);

  return (
    <div className="App">
      <div className="pokemon_container">
        Pokemon
        <Sidebar />
        {/* <PokemonCollections pokemons={pokemons} /> */}
      </div>
    </div>
  );
};

export default App;
