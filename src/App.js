import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <SideBar />
      <Home />
    </div>
  );
};

export default App;
