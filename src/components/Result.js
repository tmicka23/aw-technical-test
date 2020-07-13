import React, { useContext } from 'react';
import userContext from '../context/UserContext';
import { Link } from 'react-router-dom';

const Result = () => {
  const { state } = useContext(userContext);
  const name = `${state.firstname} ${state.lastname.toUpperCase()}`;
  return (
    <div className='card'>
      <div className='card-header'>{name}</div>
      <div className='card-body'>
        <h5 className='card-title'>
          Genre : {state.gender === 'm' ? 'Homme' : 'Femme'}
        </h5>
        <Link to='/' className='btn btn-primary'>
          Accueil
        </Link>
      </div>
    </div>
  );
};

export default Result;
