import React from 'react';
import Home from './Home';
import Firebase, { FirebaseContext } from './components/Firebase';

export default () => {
  return (
    <FirebaseContext.Provider value={Firebase}>
      <Home />
    </FirebaseContext.Provider>
  );
};
