import React from 'react';

export const Input = ({ title, placeholder, type, handleChange, className, descriptor }) => {
  return (
    <React.Fragment>
      <h5>{title}</h5>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className={className}
        data-descriptor={descriptor.toLowerCase()}
      />
    </React.Fragment>
  );
};

export default Input;
