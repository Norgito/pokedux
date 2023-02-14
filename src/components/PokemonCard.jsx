import React from "react";
//import { Card } from "antd";
import StarButton from "./StarButton";
import "../assets/styles/PokemonList.css";
import { setFavorite } from "../slices/DataSlice";
import { useDispatch } from "react-redux";
import { PokemonTypeColor } from "../utils/PokemonTypeColor";

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <>
      <div className="container ">
        <StarButton isFavorite={favorite} onClick={handleOnFavorite} />
        <p className="pokeName">{name.toUpperCase()}</p>
        <img src={image} alt={name} className="imageCard" />
        
        <section className='flex justify-center mt-5 gap-3 mb-6'>
            {
              types.map(type => (
                <p
                  className={`text-xl text-white p-1 rounded-md ${PokemonTypeColor[type.type.name]} `}>
                  {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                </p>
              ))
            }
          </section>

      </div>
    </>
  );
};

export default PokemonCard;
