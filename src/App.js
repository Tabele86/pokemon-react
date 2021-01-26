import "./App.css";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import React, { useEffect, useState, useMemo } from "react";
import Toggle from './Toggle';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [text, setText] = useState([]);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemon, idx) => {
          return { ...pokemon, idx: idx + 1 };
        });
        setPokemon({ ...data, results });
      });
  }, []);

  useMemo(() => {
    if (!text) {
      setFilteredPokemon([]);
      return;
    }

    setFilteredPokemon(() =>
      pokemon.results?.filter((pokemon) => pokemon.name.includes(text))
    );
  }, [pokemon.results, text]);

  return (
    <Router>
      <div className="p-14">
        <div className="flex flex-col items-center">
          <Link to="/">
            <header className="text-4xl text-red-700">Pokémon Gallery</header>
          </Link>
        </div>
        {/* <div className="w-full flex justify-center">
          <Toggle />
        </div> */}
        <div className="w-full flex justify-center">
          <input
            onChange={($event) => setText($event.target.value)}
            placeholder="Enter Pokémon here"
            type="text"
            className="mt-10 p-2 border-blue-500 border-2"
          />
        </div>
        <Switch>
          <Route path="/about/:slug">
            <About/>
          </Route>
          <Route path="/">
            <Home pokemon={filteredPokemon} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;