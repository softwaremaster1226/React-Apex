import React, { createContext, useState } from 'react';
import DefaultData from './data.json';

const initialState = {
  name: '',
  data: '',
  updateName: () => {},
  updateData: () => {},
}

export const AppContext = createContext(initialState);

const ErrorJson = {
  error: {
    message: 'Invalid Json Data',
  },
}

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({
    name: '',
    data: DefaultData ? JSON.stringify(DefaultData) : '',
  })

  const updateName = (name) => {
    setState(prev => ({
      data: prev.data,
      name,
    }));
  }

  const updateData = (data) => {
    try {
      const json = JSON.parse(data);
      setState(prev => ({
        name: prev.name,
        data: JSON.stringify(json),
      }));
    } catch (e) {
      console.log('in catch');
      console.log(e);
      setState(prev => ({
        name: prev.name,
        data: JSON.stringify(ErrorJson),
      }));
    }
  }

  const contextValue = {
    name: state.name,
    data: state.data,
    updateName,
    updateData,
  }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>

}

export default AppContextProvider;