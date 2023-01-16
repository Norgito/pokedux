import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { setPokemons } from "./actions";
import { getPokemons } from "./api";
import { getPokemonDetails } from "./api";
import { Col } from "antd";
import logo from "../src/assets/static/logo.svg";
import "./App.css";

const App = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      const pokemonsDetailed = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonsRes));
      dispatch(setPokemons(pokemonsDetailed));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default App;
