import React, { useContext } from 'react';
import userContext from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import '../styles/MainApp.css';

const Gender = () => {
  const { handleSubmit, state } = useContext(userContext);
  const history = useHistory();

  return (
    <div className='container'>
      <h2 className='text-center'>Mon profile</h2>
      <p className='text-center'>Éditer :</p>
      <form
        className='aw-form'
        onSubmit={(e) => {
          handleSubmit(e);
          history.push('/resultat');
        }}>
        <div className='form-group'>
          <label className='form-label' htmlFor='gender'>
            Genre
          </label>
          <select
            className='form-select form-control'
            aria-label='gender'
            name='gender'
            defaultValue={state.gender}>
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

export default Gender;
