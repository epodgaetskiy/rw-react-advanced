import { useState, createContext, useContext, useEffect } from 'react';

const StoreContext = createContext(null);
const StateContext = createContext(null);

export const Provider = ({ children, store }) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subcribe(() => {
      setState(store.getState());
    });
  }, [store]);

  return (
    <StoreContext.Provider value={store}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </StoreContext.Provider>
  )
}

export const useStore = () => {
  const store = useContext(StoreContext);
  return store;
}

export const useSelector = (selector) => {
  const state = useContext(StateContext);
  const value = selector(state);
  return value;
}

export const useDispatch = () => {
  const store = useStore();
  return store.dispatch;
}
