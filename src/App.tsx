import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { GetPokemon } from "./redux/actions/PokemonAction";
import { RootStore } from "./redux/store";

const App = () => {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");

  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = () => dispatch(GetPokemon(pokemonName));

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      <div>
        {pokemonState.pokemon && (
          <div>
            <img src={pokemonState.pokemon.sprites.front_default} alt="" />
            {pokemonState.pokemon.abilities.map((ability) => (
              <p>{ability.ability.name}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
