import React from 'react';
import './style.scss';

export default props => {
  console.log('Body', props);
  const [Header, MainContent, Footer] = props.children;
  return (
    <React.Fragment>
      <div className="flex-grid">
        <div className="col">{Header}</div>
        <div className="col">{MainContent}</div>
        <div className="col">{Footer}</div>
      </div>
    </React.Fragment>
  );
};
