import React from "react";
import { Route, Routes } from "react-router-dom";
import Busqueda from "./Busqueda/Busqueda";
import ListaPokemon from "./ListaPokemon/ListaPokemon";
import Home from "./Home/Home";


const Main = () => {
  return <div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/busqueda" element={<Busqueda/>} />
      <Route path="/lista" element={<ListaPokemon/>} />
      
    </Routes>
  </div>;
};

export default Main;
