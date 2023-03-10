import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import "../assets/styles/PokemonList.css";
import { setFavorite } from '../slices/DataSlice'
import { useDispatch } from "react-redux";

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typesString = types.map((elem) => elem.type.name).join(' ⇆ ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name.toUpperCase()}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typesString.toUpperCase()} />
    </Card>
  );
};

export default PokemonCard;
