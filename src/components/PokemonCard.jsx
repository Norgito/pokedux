import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";
import '../assets/styles/PokemonList.css'

const PokemonCard = ({ name, stats }) => {
  return (
      <Card
          title={name}
          cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Ditto" />}
          extra={<StarOutlined/>}
      >
      <Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
