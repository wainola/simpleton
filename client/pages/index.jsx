import React from 'react';
import Home from './Home';

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
  return <Home items={sections} />;
};
