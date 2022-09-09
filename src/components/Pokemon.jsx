import React, { useEffect, useState } from "react";
import axios from 'axios';

const Pokemon = props => {
  const [pokemon, setPokemon] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const handleClicked = ()=>{
    if(isClicked === true){
      setIsClicked(false)
    }
    else{
      setIsClicked(true)
    }
  }

  useEffect(() =>{
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setPokemon(response.data.results);
      })}, []);
  return (
    <div>
      <button onClick={handleClicked}>Fetch Pokemon</button>
      <ul>
        {isClicked && pokemon &&
          pokemon.map((poke, idx) => {
            return <li key={idx}>{poke.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Pokemon;
