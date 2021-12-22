import React from "react";
import './Card.css'


const Card = (props) => {
  return <section className="card">
    <p>Nombre: {props.data.name}.</p>
    <p>Numero de Pokedex: {props.data.id}</p>
    <img src={props.data.img} alt="Pokemon imagen" />
    <p>Peso: {props.data.weight}Kg.</p>
  </section>;
};

export default Card;
