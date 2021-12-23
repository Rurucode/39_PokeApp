import React from "react";
import { useContext } from 'react';
import {contextPintar} from "../../../context/contextPintar";
import './ListaPokemon.css'

const ListaPokemon = () => {

  
  const {pintar} = useContext(contextPintar);

  return <div className="padreresultados">
    <div className='resultados'>
      {pintar()}
    </div>
  </div>
};

export default ListaPokemon;
