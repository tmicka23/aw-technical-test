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
        Accueil
      </Link>
      <Link
        to='/mon-compte'
        className={
          pathname === '/mon-compte'
            ? 'list-group-item list-group-item-action active'
            : 'list-group-item list-group-item-action'
        }>
        Mon compte
      </Link>
      <Link
        to='/page-publique'
        className={
          pathname === '/page-publique'
            ? 'list-group-item list-group-item-action active'
            : 'list-group-item list-group-item-action'
        }>
        Ma page publique
      </Link>
    </aside>
  );
};

export default Sidebar;
