import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Account from './components/Account';
import Public from './components/Public';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='row aw-layout'>
          <div className='col-md-3 aw-layout-sidebar'>
            <SideBar />
          </div>
          <Switch>
            <div className='col-md-9 aw-layout-main'>
              <Route exact path='/' component={Home} />
              <Route exact path='/mon-compte' component={Account} />
              <Route exact path='/page-publique' component={Public} />
            </div>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
