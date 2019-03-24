import React from 'react';

export default props => {
  console.log('Body', props);
  const [Header, MainContent, Footer] = props.children;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="header">{Header}</div>
          <div className="main-content">{MainContent}</div>
          <div className="footer">{Footer}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
