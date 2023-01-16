import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Searcher from "./components/Searcher";
import { Col } from "antd";
import PokemonList from "./components/PokemonList";
import { getPokemons } from "./api";
import { setPokemons as setPokemonsActions } from "./actions";
import logo from "../src/assets/static/logo.svg";
import "./App.css";

const App = ({ pokemons, setPokemons }) => {
  console.log("🚀 ~ file: App.jsx:12 ~ App ~ pokemons", pokemons)
  
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      setPokemons(pokemonsRes);
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
