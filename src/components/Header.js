import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Audio Wizard
        </Link>
        <Link className='btn btn-primary' to='/mon-compte'>
          Mon compte
        </Link>
      </div>
    </nav>
  );
};
export default Header;
