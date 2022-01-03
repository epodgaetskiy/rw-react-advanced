import React from 'react';
import { Provider, useSelector, useDispatch } from './react-store';
import { setFirstnameActionCreator } from './actions';
import { store } from './store';

const UserFirstName = () => {
  const firstname = useSelector((state) => state.firstname);
  return (
    <p>firstname: {firstname}</p>
  )
}

const UserProfile = () => {
  return (
    <div>
      <UserFirstName />
    </div>
  )
}

const FieldFirstName = () => {
  const firstname = useSelector((state) => state.firstname);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        name="firstname"
        value={firstname}
        onChange={(event) => {
          dispatch(setFirstnameActionCreator(event.target.value))
        }}
      />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <UserProfile />
        <FieldFirstName />
      </Provider>
    </div>
  )
};

export default App;
