import React from 'react';

export const Input = ({ type, title, name, placeholder, handleChange = undefined }) => (
  <React.Fragment>
    <span className="input-title">{title}</span>
    <input type={type} name={name} placeholder={placeholder} onChange={handleChange} />
  </React.Fragment>
);

export default Input;
