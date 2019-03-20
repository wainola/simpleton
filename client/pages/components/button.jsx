import React from 'react';

export default ({ title, className, handleClick }) => (
  <button onClick={evt => handleClick(evt)} className={className} type="button">
    {title}
  </button>
);
