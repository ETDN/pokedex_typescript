import React, { useEffect, useState } from "react";
import "./css/sidebar.css";
import axios from "axios";
import { Pokemon } from "../components/interface";
import PokemonCollections from "./PokemonCollections";

interface Pokemons {
  type: string;
  name: string;
}

function Sidebar() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const result = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );

      console.log(result.data.results);
      result.data.results.forEach(async (pokemon: Pokemons) => {
        const poki = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`
        );
        setPokemons((p) => [...p, poki.data]);
      });
    };
    getPokemon();
  }, []);

  console.log(pokemons);

  // Create an array of all types of Pokemons
  const allTypes = Array.from(
    new Set(
      pokemons.flatMap((pokemon) => pokemon.types.map((type) => type.type.name))
    )
  );

  return (
    <div className="sidebar_container">
      <div className="top_Links">
        <div className="logo">
          <h1>Pokedex</h1>
        </div>
        <p className="categorie">Categories</p>
        <ul>
          {allTypes.map((type) => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
