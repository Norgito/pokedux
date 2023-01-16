export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

// Add a personalized pokemon to the list

/*export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: "diegotor" }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
};*/

// Add number to the list of pokemons
/*export const number = (store) => (next) => (numberAction) => {
  const counted = numberAction.action.payload.map((pokemon, i) => ({
    ...pokemon,
    name: `${[i + 1]}. ${pokemon.name}`,
  }));
  const updatedAction = {
    ...numberAction,
    action: { ...numberAction.action, payload: counted },
  };
  next(updatedAction);
};*/

//Add Capitalized letter to each pokemon name

export const nameUpperCase = (store) => (next) => (upperAction) => {
    const upper = [...upperAction.action.payload.map(
        pokemon => ({
            ...pokemon,
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        })
    )
    ]
    const updateUpperAction = {
        ...upperAction,
        action: { ...upperAction.action, payload: upper}
    }
    next(updateUpperAction);
}