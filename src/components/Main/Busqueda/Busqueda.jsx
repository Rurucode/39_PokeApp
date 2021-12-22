import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import ListaPokemon from '../ListaPokemon/ListaPokemon';
import './Busqueda.css'
import {contextPintar} from "../../../context/contextPintar";
import {useDebounce} from "use-debounce"


const Busqueda = () => {

  const [pokemon, setPokemon] = useState("");
  const [pokemon2, setPokemon2] = useState([]);
  const [relleno] = useDebounce(pokemon, 1500);

  
  useEffect(() => { 
    if (relleno){
      const pokeAxios = async () => {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${relleno.toLowerCase()}`);
          const data = await response.data;
          console.log(data);

          const pokeInfo = {
            name: data.name,
            img: data.sprites.versions["generation-v"]["black-white"].animated.front_default || data.sprites.front_default,
            weight: data.weight,
            id: data.id
          }
          setPokemon2([...pokemon2, pokeInfo]);
    
        } catch (error) {
          console.log(error);
        }
      }
      if(pokemon2.every(elem => elem.name !== pokemon)){
        pokeAxios();
        setPokemon("")
    }

    } 
  },[relleno]);

  // {{},{},{}}
  // console.log (pokemon2.every(elem => elem.name !== pokemon)+ "-----------------")
  // const fun = pokemon2.every(elem =>{elem.name === pokemon)

  const handleChange = async (event) => {
    event.preventDefault()
    const pokeBuscado = event.target.value;
    setPokemon(pokeBuscado);
    // event.target.pokeBuscado.value = ""
  }

  const pintar = () => {
    return pokemon2.map((a,i)=> <Card data={pokemon2[i]} key={i}/>)
  }
  
  return <div>
    <form onSubmit={(event)=>{event.preventDefault()}}>
      <label htmlFor="pokeBuscado">Introduce el nombre del Pokémon que quieres buscar.</label><br></br>
      <input type="text" onChange={handleChange} id="pokeBuscado" name="pokeBuscado"/>
    </form>
    <contextPintar.Provider value={{pintar}}>
      <ListaPokemon/>
    </contextPintar.Provider> 

  </div>;

};

export default Busqueda;
