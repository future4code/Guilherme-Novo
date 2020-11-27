import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./Componentes/index";
import { BASE_URL } from "./Componentes/request";
import Css from "./Componentes/Css";


function App() {
  const [pokeList, setPokelist] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const getUsers = () => {
    axios
      .get(`${BASE_URL}?limit=151`)
      .then((response) => setPokelist(response.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, [pokeList]);

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
