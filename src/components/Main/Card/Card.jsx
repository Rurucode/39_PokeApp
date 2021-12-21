import React from "react";

const Card = (props) => {
  return <section>
    <p>Nombre: {props.data.name}</p>
    <img src={props.data.img} alt="Pokemon imagen" />
    <p>Peso: {props.data.weight}</p>
  </section>;
};

export default Card;
