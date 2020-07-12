import React from 'react';
import '../styles/SideBar.css';

const Sidebar = () => {
  return (
    <aside className='list-group aw-sidebar'>
      <a
        href='#'
        className='list-group-item list-group-item-action active'
        aria-current='true'>
        Accueil
      </a>
      <a href='#' className='list-group-item list-group-item-action'>
        Mon compte
      </a>
      <a href='#' className='list-group-item list-group-item-action'>
        Ma page publique
      </a>
    </aside>
  );
};

export default Sidebar;
