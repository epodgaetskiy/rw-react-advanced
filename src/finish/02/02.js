const setFirstnameActionCreator = (firstname) => ({
  type: "SET_FIRSTNAME",
  payload: {
    firstname: firstname
  }
});

const initialState = { firstname: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FIRSTNAME":
      state.firstname = action.payload.firstname;
      return state;
    default:
      return state;
  }
}

const createStore = (reducer) => {
  let state = reducer(undefined, {});
  return {
    dispatch: (action) => {
      state = reducer(state, action);
    },
    getState: () => state
  }
}

const store = createStore(reducer);
console.log(store.getState());

store.dispatch(setFirstnameActionCreator("Evgeniy"));

store.dispatch(setFirstnameActionCreator("Mary"));

console.log(store.getState());
