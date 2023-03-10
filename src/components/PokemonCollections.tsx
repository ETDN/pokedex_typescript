import "../components/pokemon.css";
import { Pokemon } from "./interface";
import PokemonList from "./PokemonList";

interface Props {
  pokemons: Pokemon[];
  selectedCategory: string;
  name: string;
}

function PokemonCollections(props: Props) {
  const { pokemons, selectedCategory, name } = props;

  return (
    <div className="pokemon_list">
      <h2>{name}</h2>
      <p className="pokemon_infos">
        Selected Category: {selectedCategory || "All"}
      </p>
      {pokemons.map((pokemon) => {
        return (
          <PokemonList
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.sprites.front_default}
            type={pokemon.types[0].type.name}
          />
        );
      })}
    </div>
  );
}

export default PokemonCollections;
