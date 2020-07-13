import React, { useState } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Gender from './components/Gender';
import Result from './components/Result';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import userContext from './context/UserContext';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    gender: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.firstname) {
      setState({
        ...state,
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
      });
    } else {
      setState({
        ...state,
        gender: e.target.gender.value,
      });
    }
  };
  return (
    <userContext.Provider value={{ state, handleSubmit: handleSubmit }}>
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
                <Route exact path='/genre' component={Gender} />
                <Route exact path='/resultat' component={Result} />
              </div>
            </Switch>
          </div>
        </div>
      </Router>
    </userContext.Provider>
  );
};

export default App;
