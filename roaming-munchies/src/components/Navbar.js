import React from 'react';
import { NavLink } from 'react-router-dom'; // If using React Router for navigation
import { useAuth0 } from '@auth0/auth0-react';
import search from "../images/search.svg";



function Navbar() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav class="navbar">
      <ul>
        <li>
          <NavLink exact to="/search" activeClassName="active-link">
            <img src={search} alt="search" />
          </NavLink>
        </li>
      </ul>
      <div>
        {isAuthenticated ? (
          <>
            <NavLink to="/profile"><img class="profile-pic" alt="profile pic" src={user.picture} width="50px" height="50px" /></NavLink>
          </>
        ) : (
          <>
            <button className='login' onClick={() => loginWithRedirect()}>Login</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
