import React from 'react';

const FirebaseContext = React.createContext(null);

// HOC TO PLUG FIREBASE
export const withFirebase = Component => props => {
  console.log('firebase');
  return (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );
};

export default FirebaseContext;
