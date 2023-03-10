import React, { useEffect, useState } from "react";
import { Pokemon } from "../components/interface";

function Information() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPokemon, setCurrentPokemons] = useState<Pokemon[]>([]);

  return <div>Information</div>;
}

export default Information;
