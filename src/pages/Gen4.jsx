import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Header, PokemonList } from "../index";
import { Col, Spin } from "antd";
import "../App.css";
import { fetchPokemonsWithDetails4 } from "../slices/DataSlice";

const Gen4 = () => {
  const pokemons = useSelector(
    (state) => state.data.pokemonsFiltered,
    shallowEqual
  );

  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails4());
  }, []);

  return (
    <div className="min-h-screen dark:bg-gray-800 bg-white text-center pt-4">
      <Header />
      {loading ? (
        <Col offset={0}>
          <Spin spinning size="large" />'
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
};

export default Gen4;
