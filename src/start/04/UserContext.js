import { useState, createContext, useContext, useEffect } from 'react';
import { store } from './store';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(store.getState());

  useEffect(() => {
    store.subcribe(() => {
      setUser(store.getState());
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
}

export const useDispatch = () => {
  return store.dispatch;
}
