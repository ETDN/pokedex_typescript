import React, { useEffect, useState } from "react";
import "./css/sidebar.css";
import axios from "axios";
import { Pokemon } from "../components/interface";

interface Pokemons {
  type: string;
  name: string;
}

function Sidebar() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const getPokemon = async () => {
      const result = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
      );

      const pokemonsData = await Promise.all(
        result.data.results.map(async (pokemon: Pokemons) => {
          const poki = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`
          );
          return poki.data;
        })
      );

      setPokemons(pokemonsData);
    };

    getPokemon();
  }, []);

  // Create an array of all types of Pokemons
  const allTypes = Array.from(
    new Set(
      pokemons.flatMap((pokemon) => pokemon.types.map((type) => type.type.name))
    )
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="sidebar_container">
      <div className="top_Links">
        <div className="logo">
          <h1>Pokedex</h1>
        </div>
        <p className="categorie">Categories</p>
        <ul>
          {allTypes.map((type) => (
            <li key={type}>
              <a href="#" onClick={() => handleCategoryClick(type)}>
                {type}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
