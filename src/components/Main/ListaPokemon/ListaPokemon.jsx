import React from "react";
import { useContext } from 'react';
import {contextPintar} from "../../../context/contextPintar";


const ListaPokemon = () => {

  
  const {pintar} = useContext(contextPintar);

  return <div className='resultados'>
    {pintar()}
  </div>;
};

export default ListaPokemon;
