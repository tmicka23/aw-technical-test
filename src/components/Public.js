import React, { useContext } from 'react';
import userContext from '../context/UserContext';

const Public = () => {
  const user = useContext(userContext).state;
  return <p>{JSON.stringify(user)}</p>;
};

export default Public;
