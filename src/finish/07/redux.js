export const combineReducers = (reducers) => (state, action) => {
  let nextState = {};

  const reducerKeys = Object.keys(reducers);
  reducerKeys.forEach(key => {
    const reducer = reducers[key];
    nextState[key] = reducer(state[key], action);
  })
  return nextState;
}

export const createStore = (reducer) => {
  let currentState = {};

  const subcribers = [];

  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    subcribers.forEach(s => s());
  };

  dispatch({ type: 'INIT' });
  
  return {
    dispatch,
    getState: () => currentState,
    subcribe: (callback) => {
      subcribers.push(callback);
    }
  }
}
