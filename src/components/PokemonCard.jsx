import React from "react";
//import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import "../assets/styles/PokemonList.css";
import { setFavorite } from "../slices/DataSlice";
import { useDispatch } from "react-redux";

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typesString = types.map((elem) => elem.type.name).join(" ⇆ ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <>
      <div className="container ">
        <StarButton isFavorite={favorite} onClick={handleOnFavorite} />
        <p className="pokeName">{name.toUpperCase()}</p>
        <img src={image} alt={name} className="imageCard" />

        <Meta description={typesString.toUpperCase()} className='text-white pb-1' />
      </div>
    </>
  );
};

export default PokemonCard;
