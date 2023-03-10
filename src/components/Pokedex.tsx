import React, { useEffect, useState } from "react";
import "./pokemon.css";
import axios from "axios";
import PokemonCollections from "./PokemonCollections";
import { Pokemon } from "./interface";
import Sidebar from "./Sidebar";
import Test from "./Test";
import PokemonList from "./PokemonList";

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [displayedPokemons, setDisplayedPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const result = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );

      const pokemonsData = await Promise.all(
        result.data.results.map(async (pokemon: any) => {
          const poki = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          return poki.data;
        })
      );

      setPokemons(pokemonsData);
    };
    getPokemon();
  }, []);

  useEffect(() => {
    if (selectedCategory === "") {
      setDisplayedPokemons(pokemons);
    } else {
      const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.types.some((type) => type.type.name === selectedCategory)
      );
      setDisplayedPokemons(filteredPokemons);
    }
    console.log("Selected Category:", selectedCategory);
  }, [selectedCategory, pokemons]);

  return (
    <div className="pokemon_container">
      <Sidebar />
      <PokemonCollections
        pokemons={displayedPokemons}
        selectedCategory={selectedCategory}
        name="Pokemons"
      />
      {/* <PokemonList key={pokemon.id} pokemon={pokemon} /> */}
    </div>
  );
};

export default App;
