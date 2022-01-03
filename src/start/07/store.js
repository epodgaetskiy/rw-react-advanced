const userReducer = (state = { firstname: "Evgeniy" }, action) => {
  switch (action.type) {
    case "SET_FIRSTNAME":
      state.firstname = action.payload.firstname;
      return { ...state };
    default:
      return state;
  }
}

const postReducer = (state = { content: "" }, action) => {
  switch (action.type) {
    case "SET_CONTENT":
      state.content = action.payload.content;
      return { ...state };
    default:
      return state;
  }
}

const combineReducers = (reducers) => (state, action) => {
  let nextState = {};
  const reducerKeys = Object.keys(reducers);
  reducerKeys.forEach(key => {
    const reducer = reducers[key];
    nextState[key] = reducer(state[key], action);
  })

  return nextState;
}


const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
})

const createStore = (reducer) => {
  let currentState = {};

  const subcribers = [];

  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    subcribers.forEach(s => s());
  };

  dispatch({ type: 'INIT' });
  
  return {
    dispatch: (action) => {
      currentState = reducer(currentState, action);

      subcribers.forEach(s => s());
    },
    getState: () => currentState,
    subcribe: (callback) => {
      subcribers.push(callback);
    }
  }
}

export const store = createStore(rootReducer);

