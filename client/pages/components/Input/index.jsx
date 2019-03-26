import React from 'react';

export default ({ title, placeholder, type, handleChange, className }) => {
  console.log('input');

  return (
    <React.Fragment>
      <h5>{title}</h5>
      <input type={type} placeholder={placeholder} onChange={handleChange} className={className} />
    </React.Fragment>
  );
};
