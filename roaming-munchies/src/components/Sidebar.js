import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // If using React Router for navigation
import homeOutlined from '../images/homeOutlined.svg'
import homeFilled from '../images/homeFilled.svg';
import exploreInactive from '../images/exploreInactive.svg'
import exploreActive from '../images/exploreActive.svg';


function isRouteActive(location, route) {
    return location.pathname === route;
  }

function Sidebar() {
  const location = useLocation();

  return (
    <nav class="sidebar">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            {isRouteActive(location, '/') ? (
              <img src={homeFilled} alt="home" />
            ) : (
                <img src={homeOutlined} alt="home" />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/explore" activeClassName="active-link">
            {isRouteActive(location, '/explore') ? (
              <img src={exploreActive} alt="home" />
            ) : (
                <img src={exploreInactive} alt="home" />
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
