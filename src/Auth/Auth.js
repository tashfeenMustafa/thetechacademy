import React from 'react';

import * as firebase from 'firebase';
import { FirebaseAuth } from 'react-firebaseui';

// Configure Firebase
var config = {
    apiKey: "AIzaSyBIA2RUYDYGz-_TR4KFUQVaIW0sCSrfOV0",
    authDomain: "thetechacademy-3a475.firebaseapp.com",
    databaseURL: "https://thetechacademy-3a475.firebaseio.com",
    projectId: "thetechacademy-3a475",
    storageBucket: "thetechacademy-3a475.appspot.com",
    messagingSenderId: "634996502934"
};
firebase.initializeApp(config);

// Configure FirebaseUI
const uiConfig = {
  callbacks: {
    // Function call on successful sign up
    signInSuccess: function(currentUser, credential, redirectUrl) {
        console.log(currentUser + ' ' + credential + ' ' + redirectUrl);
        return true;
    },
    uiShown: function() {

    }

  },
  // Popup signin flow rather than redirect flow
  signInFlow: 'popup',
  //Redirect to /admin after sign in is  successful
  signInSuccessUrl: '/admin',
  // Only displaying Google Sign In options
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
}

class Auth extends React.Component {
  render () {
    return (
      <div>
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
}

export default Auth;
