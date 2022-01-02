import React from 'react';
import { UserProvider, useUser } from './UserContext';

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
  const { user, setUser } = useUser();
  return (
    <div>
      <input
        name="firstname"
        value={user.firstname}
        onChange={(event) => {
          setUser({
            firstname: event.target.value
          })
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
