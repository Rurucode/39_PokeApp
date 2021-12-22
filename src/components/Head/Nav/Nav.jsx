import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return <nav>
    <ul>
      <li><Link to="/"><h4>Home</h4></Link></li>
      <li><Link to="/search"><h4>Busqueda Pokemon.</h4></Link></li>
      <li><Link to="/newpokemon"><h4>Crea tu Pokémon.</h4></Link></li>
    </ul>
  </nav>;

};

export default Nav;
