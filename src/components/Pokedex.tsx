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
      setDisplayedPokemons(filteredPokemons.slice(0, 5));
    }
  }, [selectedCategory, pokemons]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="pokemon_container">
      <Sidebar
        onCategoryClick={handleCategoryClick}
        setDisplayedPokemons={setDisplayedPokemons}
      />
      <PokemonCollections
        pokemons={displayedPokemons}
        selectedCategory={selectedCategory}
        name="My Pokemon Collection"
      />
    </div>
  );
};

export default App;
