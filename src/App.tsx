import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const [pokemons, setPokemons] = useState([])

function App() {
  return (
    <div className="App">
      <header className="pokemon-header">Pokemon</header>
    </div>
  );
}

export default App;
