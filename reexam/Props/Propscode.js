import React from 'react';

function Profile(props) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default Profile;
