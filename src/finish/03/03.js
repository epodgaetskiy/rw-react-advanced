import React from 'react';
import { UserProvider, useUser, useDispatch } from './UserContext';
import { setFirstnameActionCreator } from './actions';

const UserFirstName = () => {
  const { user } = useUser();
  return (
    <p>firstname: {user.firstname}</p>
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
  const { user } = useUser();
  const dispatch = useDispatch();
  return (
    <div>
      <input
        name="firstname"
        value={user.firstname}
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
      <UserProvider>
        <UserProfile />
        <FieldFirstName />
      </UserProvider>
      
    </div>
  )
};

export default App;
