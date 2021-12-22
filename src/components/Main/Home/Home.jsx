import React from "react";
import './Home.css'
import titulo from '../../../assets/pokemonTitle.png'

const Home = () => {

  return <div className="divHomefoto">
    <img className="homeFoto" src={titulo} alt="Titulo foto" />
  </div>;
};

export default Home;
