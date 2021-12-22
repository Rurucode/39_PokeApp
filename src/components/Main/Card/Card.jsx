import React from "react";
import './Card.css'


const Card = (props) => {
  return <section className="card">
    <div className="datos">
      <p className=".key">Nombre: <span>{props.data.name}.</span></p>
      <p className=".key">ID Pokedex: <span>{props.data.id}</span></p>
      <p className=".key">Peso: <span>{props.data.weight}Kg.</span></p>
    </div>
    <div className="foto">
      <img src={props.data.img} alt="Pokemon imagen" />
    </div>
  </section>;
};

export default Card;
