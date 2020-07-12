import React from 'react';

const Header = () => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          Audio Wizard
        </a>
        <div className='d-flex'>
          <button className='btn btn-primary'>Mon compte</button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
