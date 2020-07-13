import React, { useContext } from 'react';
import userContext from '../context/UserContext';
import '../styles/MainApp.css';

const Home = () => {
  const { state, handleSubmit } = useContext(userContext);

  return (
    <div className='container'>
      <h2 className='text-center'>Bienvenue !</h2>
      <p className='text-center'>
        Faisons connaissance, <br />
        vous êtes :
      </p>
      <form className='aw-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstname' className='form-label'>
            Prénom
          </label>
          <input
            type='text'
            className='form-control'
            name='firstname'
            placeholder='Jane/John'
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
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='gender'>
            Genre
          </label>
          <select
            className='form-select form-control'
            aria-label='gender'
            name='gender'>
            <option value='f'>Femme</option>
            <option value='m'>Homme</option>
          </select>
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
