import React, { useState } from 'react';

if (process.browser) {
  require('./styles.scss');
}

const LoadComplete = ({ isComplete }) => {
  return (
    <div className={`circle-loader ${isComplete ? 'load-complete' : ''}`.trim()}>
      <div className={`checkmark draw ${isComplete ? 'completed' : ''}`.trim()} />
    </div>
  );
};
export default LoadComplete;
