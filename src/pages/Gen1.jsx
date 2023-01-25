import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { PokemonList } from "../index";
import { Col, Spin } from "antd";
import "../App.css";
import { fetchPokemonsWithDetails1 } from "../slices/DataSlice";

const Gen1 = () => {
  const pokemons = useSelector(
    (state) => state.data.pokemonsFiltered,
    shallowEqual
  );

  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails1());
  }, []);

  return (
    <>
      {loading ? (
        <Col offset={0}>
          <Spin spinning size="large" />'
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </>
  );
};

export default Gen1;
