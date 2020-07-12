import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='row aw-layout'>
        <div className='col-md-3 aw-layout-sidebar'>
          <SideBar />
        </div>
        <div className='col-md-9 aw-layout-main'>
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
