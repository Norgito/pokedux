import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { Col, Spin } from "antd";
import logo from "../src/assets/static/logo.svg";
import "./App.css";
import { fetchPokemonsWithDetails } from "./slices/DataSlice";

const App = () => {
  const pokemons = useSelector((state) => state.data.pokemonsFiltered, shallowEqual);

  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? <Col offset={0}>
        <Spin spinning size='large' />'
      </Col> :
        <PokemonList pokemons={pokemons} />}
        
    </div>
  );
};

export default App;
