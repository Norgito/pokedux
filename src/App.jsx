import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { getPokemonsWithDetails} from "./actions";
import { getPokemons } from "./api";
import { Col, Spin } from "antd";
import logo from "../src/assets/static/logo.svg";
import "./App.css";

const App = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));


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
      {loading ? <Col offset={0}>
        <Spin spinning size='large' />'
      </Col> :
        <PokemonList pokemons={pokemons} />}
        
    </div>
  );
};

export default App;
