import React from 'react';
import Home from './Home';
import checkMobile from '../Services/checkIfMobile';

const EntryPoint = props => {
  const { ifMobile } = props;
  return <Home ifMobile={ifMobile} />;
};

EntryPoint.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const ifMobile = checkMobile(userAgent);
  return { ifMobile };
};

export default EntryPoint;
