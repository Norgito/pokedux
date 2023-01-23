import axios from "axios";

const API_GEN1 = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const API_GEN2 = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151';

export const getPokemonsGen1 = () => {
    return axios
        .get(API_GEN1)
        .then((response) => response.data.results)
        .catch((error) => console.error(error));
}
export const getPokemonsGen2 = () => {
    return axios
        .get(API_GEN2)
        .then((response) => response.data.results)
        .catch((error) => console.error(error));
}



export const getPokemonDetails = (pokemon) => {
    return axios.get(pokemon.url)
        .then(res => res.data)
        .catch((err) => console.log(err));
}