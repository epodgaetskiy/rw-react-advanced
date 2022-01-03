import { useState, createContext, useContext, useEffect } from 'react';
import { store } from './store';

const StateContext = createContext(null);

export const Provider = ({ children }) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subcribe(() => {
      setState(store.getState());
    });
  }, []);

  return (
    <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
  )
}

export const useSelector = (selector) => {
  const state = useContext(StateContext);
  const value = selector(state);
  return value;
}

export const useDispatch = () => {
  return store.dispatch;
}
