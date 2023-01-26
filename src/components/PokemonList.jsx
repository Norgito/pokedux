import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList mt-5 ">
      {pokemons.map((poke) => {
        return (
          <PokemonCard
            name={poke.name}
            key={poke.name}
            types={poke.types}
            id={poke.id}
            favorite={poke.favorite}
            image={poke.sprites.other.home.front_default}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
