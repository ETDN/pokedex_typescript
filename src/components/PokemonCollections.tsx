import { Pokemon } from "./interface";
import PokemonList from "./PokemonList";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";

interface Props {
  pokemons: Pokemon[];
  selectedCategory: string;
  name: string;
}

function PokemonCollections(props: Props) {
  const { pokemons, selectedCategory, name } = props;
  const [searchPoki, setSearchPoki] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPoki(event.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchPoki.toLowerCase())
  );

  return (
    <div className="pokemon_display">
      <div className="search_bar">
        <form>
          <input
            type="text"
            placeholder="Name"
            value={searchPoki}
            onChange={handleSearch}
          />
          <i className="search_icon">
            <FcSearch />
          </i>
        </form>
      </div>
      <div className="title">
        <h1 id="h1_collection">{name}</h1>
        <h3 className="selected_category">
          Selected Category: {selectedCategory || "All"}
        </h3>
      </div>
      <div className="pokemon_list">
        {filteredPokemons.map((pokemon) => {
          const key = selectedCategory
            ? `${Math.random()}-${selectedCategory}`
            : `${selectedCategory}-${Math.random()}`;
          return (
            <PokemonList
              key={key}
              name={pokemon.name}
              id={pokemon.id}
              image={pokemon.sprites?.front_default}
              type={pokemon.types && pokemon.types[0]?.type.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PokemonCollections;
