import React from "react";
import { useForm } from "react-hook-form";
import './newformpokemon.css'


const Newformpokemon = () => {

  const { register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);


  return <div className="formPadre">
    <form onSubmit={handleSubmit(onSubmit)} className="creacion">
        <img className="fondoForm" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/24814fec-42f9-4c5c-bda3-998389c5afaa/d5xdzaj-2d65639c-ccd9-4b97-952a-202b399e6bfb.png" alt="Fondo" />
        

        <label htmlFor="title"><p>Introduce el nombre del Pokémon.</p>
          <input type="text" id="title" name="title" required="required" {...register("title")}/><br />
        </label><br/>
        
        <label htmlFor="id">
          <p>Id del Pokémon</p>
          <input type="text" id="id" name="id" required="required" {...register("id")}/><br/> 
        </label><br/>

        <label htmlFor="url">
          <p>Introduce la url de la imagen.</p>
          <input type="text" id="url" name="url" required="required" {...register("url")} /><br />        
        </label><br/>
        
        <label htmlFor="peso">
          <p>Introduce el peso del Pokémon.</p>
          <input type="text" id="peso" name="peso" required="required" {...register("peso")} /><br />
        </label><br/>

        <input className="submit" type="submit" value="Añadir Pokémon"/><br/>
      </form> 
  </div>;
};

export default Newformpokemon;
