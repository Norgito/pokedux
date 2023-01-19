import { fromJS, setIn, get, getIn } from "immutable";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/type";

const initialState = fromJS({
  pokemons: [],
  loading: false,
});

export const pokemonsReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      // return { ...state, pokemons: action.payload };
      return setIn(state, ["pokemons"], fromJS(action.payload));

    case SET_LOADING:
      return setIn(state, ["loading"], action.payload);

    case SET_FAVORITE:
      const pokemonIndex = get(state, "pokemons").findIndex(
        (pokemon) => pokemon.get("id") === action.payload.pokemonId
      );
      if (pokemonIndex < 0) {
        return state;
      }

      const isFavorite = getIn(state, ["pokemons", pokemonIndex, "favorite"]);
      return setIn(state, ["pokemons", pokemonIndex, "favorite"], !isFavorite);
    default:
      return state;
  }
};
