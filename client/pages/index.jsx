import React from 'react';
import Home from './Home';
import Firebase, { FirebaseContext } from './components/Firebase';

export default () => {
  const sections = [
    {
      url: '#',
      text: 'Nosotros'
    },
    {
      url: '#',
      text: 'Consulte'
    },
    {
      url: '#',
      text: 'Asesorías'
    }
  ];
  return (
    <FirebaseContext.Provider value={Firebase}>
      <Home items={sections} />
    </FirebaseContext.Provider>
  );
};
