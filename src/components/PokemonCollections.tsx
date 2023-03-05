import React from 'react'
import { Pokemon } from './interface'
import PokemonList from './PokemonList'

interface Props{
    pokemons: Pokemon[]
}

function PokemonCollections(props:Props) {
    const {pokemons} = props

  return (
    <section className='container'>PokemonCollections
    {pokemons.map((pokemon)=>{
        return(<PokemonList key={pokemon.id} name={pokemon.name} id={pokemon.id} image={pokemon.sprites.front_default} type={pokemon.types[0].type.name}/>
       )
    })}
    </section>
  )
}

export default PokemonCollections