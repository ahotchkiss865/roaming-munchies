import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();

  // If the user is not authenticated, show a message or redirect to login.
  if (!isAuthenticated) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div class="profile">
      <h2>User Profile</h2>
      <img src={user.picture} alt={user.name} />
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
      {/* Display additional user information here */}
    </div>
  );
}

export default Profile;
