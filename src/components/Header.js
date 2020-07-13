import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Audio Wizard
        </Link>
        <button className='btn btn-primary'>Mon compte</button>
      </div>
    </nav>
  );
};
export default Header;
