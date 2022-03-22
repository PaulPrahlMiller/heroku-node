import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <nav className='navbar'>
      <ul className='navbar-items'>
        <li className='navbar-item'>Play</li>
        <li className='navbar-item'>Create</li>
        <li className='navbar-item'>Quizzes</li>
      </ul>
      <ul className='navbar-items' id='nav-auth-items'>
        {isAuth ? (
          <li className='navbar-item'>Logout</li>
        ) : (
          <li className='navbar-item'>Login</li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
