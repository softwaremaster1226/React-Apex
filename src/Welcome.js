import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './Context.js';

const Welcome = () => {
  const { name } = useContext(AppContext);
  const [headerText, setHeaderText] = useState('');

  // Set initial welcome text
  useEffect(() => {
    setHeaderText(' to begin please import the Instructions module');
  }, []);

  return (
    <>
      <span>Welcome, {name !== '' ? name : headerText}.</span>
    </>
  );
};

export default Welcome;