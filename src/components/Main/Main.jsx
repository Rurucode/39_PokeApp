import React from "react";
import { Route, Routes } from "react-router-dom";
import Busqueda from "./Busqueda/Busqueda";
import ListaPokemon from "./ListaPokemon/ListaPokemon";
import Home from "./Home/Home";
import Newformpokemon from "./newformpokemon/newformpokemon";


const Main = () => {
  return <div className="main">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search" element={<Busqueda/>} />
      <Route path="/lista" element={<ListaPokemon/>} />
      <Route path="/newpokemon" element={<Newformpokemon/>} />

      
    </Routes>
  </div>;
};

export default Main;
