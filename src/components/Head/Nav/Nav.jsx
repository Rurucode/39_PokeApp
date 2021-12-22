import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';
import inicio from "../../../assets/inicio.png";
import atrapa from "../../../assets/atrapa.png";
import crea from "../../../assets/crea.png";
import pokeballnav from "../../../assets/pokeballnav.png";


const Nav = () => {
  return <nav className="navegacion">
    <ul>
      <li><img className="logo" src={pokeballnav} alt="Logo" /></li>
      <li><Link to="/"><img className="inicio" src={inicio} alt="Inicio" /></Link></li>
      <li><Link to="/search"><img className="atrapa" src={atrapa} alt="Atrapa" /></Link></li>
      <li><Link to="/newpokemon"><img className="crea" src={crea} alt="Crea" /></Link></li>
    </ul>
  </nav>;

};

export default Nav;
