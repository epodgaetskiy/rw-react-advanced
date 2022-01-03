const initialState = { firstname: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FIRSTNAME":
      state.firstname = action.payload.firstname;
      return { ...state };
    default:
      return state;
  }
}

const createStore = (reducer) => {
  let state = reducer(undefined, {});
  const subcribers = [];
  return {
    dispatch: (action) => {
      state = reducer(state, action);
      subcribers.forEach(s => s());
    },
    getState: () => state,
    subcribe: (callback) => {
      subcribers.push(callback);
    }
  }
}

export const store = createStore(reducer);

