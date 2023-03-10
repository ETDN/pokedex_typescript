import React, { useState } from "react";
import "../components/css/sidebar.css";
import { Pokemon } from "./interface";

interface Props {
  onCategoryClick: (category: string) => void;
  setDisplayedPokemons: (pokemons: Pokemon[]) => void;
}

function Sidebar(props: Props) {
  const { onCategoryClick, setDisplayedPokemons } = props;
  const [categories, setCategories] = useState<string[]>([
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ]);

  const handleClick = async (category: string) => {
    onCategoryClick(category);
    const result = await fetch(`https://pokeapi.co/api/v2/type/${category}`);
    const data = await result.json();
    const categoryPokemons = data.pokemon
      .slice(0, 5)
      .map((p: any) => p.pokemon);
    setDisplayedPokemons(categoryPokemons);
  };

  return (
    <div className="sidebar_container">
      <div className="top_Links">
        <div className="logo">
          <h1>Pokedex</h1>
        </div>
        <p className="categorie">Categories</p>
        <ul>
          {categories.map((category, index) => (
            <li key={index} onClick={() => handleClick(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
