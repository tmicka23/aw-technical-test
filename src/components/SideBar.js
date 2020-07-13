import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/SideBar.css';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className='list-group aw-sidebar'>
      <Link
        to='/'
        className={
          pathname === '/'
            ? 'list-group-item list-group-item-action active'
            : 'list-group-item list-group-item-action'
        }>
        Mon Nom
      </Link>
      <Link
        to='/genre'
        className={
          pathname === '/genre'
            ? 'list-group-item list-group-item-action active'
            : 'list-group-item list-group-item-action'
        }>
        Mon Genre
      </Link>
      <Link
        to='/resultat'
        className={
          pathname === '/resultat'
            ? 'list-group-item list-group-item-action active'
            : 'list-group-item list-group-item-action'
        }>
        Résultat
      </Link>
    </aside>
  );
};

export default Sidebar;
