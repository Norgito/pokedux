import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/type";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };

    case SET_FAVORITE:
      const newPokemonList = [...state.pokemons];
      const pokemonIndex = newPokemonList.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      );

      if (pokemonIndex < 0) {
        return state;
      }

      newPokemonList[pokemonIndex].favorite =
        !newPokemonList[pokemonIndex].favorite;
      return { ...state, pokemons: newPokemonList };

    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
