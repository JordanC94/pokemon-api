import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPoke = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((response) => {
        setPokemon(response.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={() => fetchPoke()}>Fetch Pokemon</button>
      <ul>
        {pokemon &&
          pokemon.map((poke, idx) => {
            return <li key={idx}>{poke.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Pokemon;
