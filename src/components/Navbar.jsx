import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
        Projects
      </NavLink>
      <NavLink to="/tasks" className={({ isActive }) => (isActive ? 'active' : '')}>
        Tasks
      </NavLink>
      <NavLink to="/analytics" className={({ isActive }) => (isActive ? 'active' : '')}>
        Analytics
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
