import axios from "axios";

const API_GEN1 = "https://pokeapi.co/api/v2/pokemon?limit=151";
const API_GEN2 = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151";
const API_GEN3 = "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251";
const API_GEN4 = "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386";
const API_GEN5 = "https://pokeapi.co/api/v2/pokemon?limit=156&offset=493";

export const getGen1 = () => {
  return axios
    .get(API_GEN1)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};
export const getGen2 = () => {
  return axios
    .get(API_GEN2)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};
export const getGen3 = () => {
  return axios
    .get(API_GEN3)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};
export const getGen4 = () => {
  return axios
    .get(API_GEN4)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};
export const getGen5 = () => {
  return axios
    .get(API_GEN5)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

export const getPokemonDetails = (pokemon) => {
  return axios
    .get(pokemon.url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
