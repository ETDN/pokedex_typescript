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
    <div className="pokemon_display">
      <div className="title">
        <h2>{name}</h2>
      </div>
      <div className="pokemon_infos">
        <p>Selected Category: {selectedCategory || "All"}</p>
      </div>
      <div className="pokemon_list">
        {pokemons.map((pokemon) => {
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
