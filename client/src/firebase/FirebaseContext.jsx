// src/firebase/FirebaseContext.jsx
import React, { createContext, useContext } from 'react';
import Firebase from './Firebase';

const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  const firebase = new Firebase();
  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  return useContext(FirebaseContext);
};
