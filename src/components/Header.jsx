import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from './Icon';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  return (
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          {icons.Iconmenu()}
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About me</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <Link to="/" class="btn btn-ghost text-xl">My Page</Link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
    <div class="navbar-end">
      <ThemeSwitch />
    </div>
  </div>
  );
};

export default Header;