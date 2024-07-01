import React from 'react';
import { NavLink } from 'react-router-dom';
function HomePage() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/signup">Sign up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
