import React, { useContext } from 'react';
import userContext from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import '../styles/MainApp.css';

const Home = () => {
  const { handleSubmit, state } = useContext(userContext);
  const history = useHistory();

  return (
    <div className='container'>
      <h2 className='text-center'>Bienvenue !</h2>
      <p className='text-center'>
        Faisons connaissance, <br />
        vous êtes :
      </p>
      <form
        className='aw-form'
        onSubmit={(e) => {
          handleSubmit(e);
          history.push('/genre');
        }}>
        <div className='form-group'>
          <label htmlFor='firstname' className='form-label'>
            Prénom
          </label>
          <input
            type='text'
            className='form-control'
            name='firstname'
            placeholder='Jane/John'
            defaultValue={state.firstname}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastname' className='form-label'>
            Nom
          </label>
          <input
            type='text'
            className='form-control'
            name='lastname'
            placeholder='Doe'
            defaultValue={state.lastname}
          />
        </div>
        <div className='col-12 mt-3'>
          <button className='btn btn-primary' type='submit'>
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
