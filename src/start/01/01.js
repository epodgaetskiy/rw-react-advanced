import React, { useState } from 'react';

const UserFirstName = ({ user }) => {
  return <p>firstname: {user.firstname}</p>
}

const UserProfile = ({ user }) => {
  return (
    <div>
      <UserFirstName user={user} />
    </div>
  )
}

const FieldFirstName = ({ user, setUser }) => {
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
  const [user, setUser] = useState({ firstname: 'Evgeniy' });
  return (
    <div>
      <UserProfile user={user} />
      <FieldFirstName user={user} setUser={setUser} />
    </div>
  )
};

export default App;
