import React from 'react';

export default props => {
  console.log('Body', props);
  return <React.Fragment>{props.children.map(item => item)}</React.Fragment>;
};
