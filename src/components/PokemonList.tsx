import React from "react";

interface Props {
  name: string;
  id: number;
  image: string;
  type: string;
}

function PokemonList(props: Props) {
  const { name, id, image, type } = props;
  return (
    <div>
      <section className={`pokemon_list_container ${type}`}>
        <p className="pokemon_name"> # {id}</p>
        <p className="pokemon_name">{name}</p>
        <img src={image} alt={name}></img>
        <p className="pokemon_name">Type : {type}</p>
      </section>
    </div>
  );
}

export default PokemonList;
