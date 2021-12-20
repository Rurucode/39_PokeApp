import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Busqueda = () => {

  const [pokemon, setPokemon] = useState("");
  const [pokemon2, setPokemon2] = useState("");
  
  const fetch = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.data;
      setPokemon2(data);

    } catch (error) {
      console.log(error);
    }
  }
  
  const handlesubmit = async (event) => {
    event.preventDefault()
    const pokeBuscado = event.target.pokeBuscado.value;
    setPokemon(pokeBuscado);
    fetch();
  }
  
  return <div>
    <form onSubmit={handlesubmit}>
      <label htmlFor="pokeBuscado"></label>
      <input type="text" id="pokeBuscado" name="pokeBuscado"/>
      <input type="submit" value="Buscar Pokemon"/>
    </form>
  </div>;
};

export default Busqueda;
