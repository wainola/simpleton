import React from 'react';

export default ({ title, placeholder, type, handleChange, className }) => (
  <input
    type={type}
    title={title}
    placeholder={placeholder}
    onChange={evt => handleChange(evt)}
    className={className}
  />
);
