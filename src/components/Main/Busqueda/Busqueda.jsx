import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';

const Busqueda = () => {

  const [pokemon, setPokemon] = useState("");
  const [pokemon2, setPokemon2] = useState([]);
  
  useEffect(() => { 
    if (pokemon){
      const pokeAxios = async () => {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
          const data = await response.data;
          console.log(data);

          const pokeInfo = {
            name: data.name,
            img: data.sprites.versions["generation-v"]["black-white"].animated.front_default || data.sprites.front_default,
            weight: data.weight
          }
          setPokemon2([...pokemon2, pokeInfo]);
    
        } catch (error) {
          console.log(error);
        }
      }
      pokeAxios();
      setPokemon("")

    } 
  },[pokemon]);

  const handlesubmit = async (event) => {
    event.preventDefault()
    const pokeBuscado = event.target.pokeBuscado.value;
    setPokemon(pokeBuscado);
    event.target.pokeBuscado.value = ""
  }

  const pintar = () => {
    return pokemon2.map((a,i)=> <Card data={pokemon2[i]} key={i}/>)
  }
  
  return <div>
    <form onSubmit={handlesubmit}>
      <label htmlFor="pokeBuscado"></label>
      <input type="text" id="pokeBuscado" name="pokeBuscado"/>
      <input type="submit" value="Buscar Pokemon"/>
    </form>
    {pintar()}
  </div>;

};

export default Busqueda;
