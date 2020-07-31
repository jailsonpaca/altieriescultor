// LoginPage.js
import React from "react";
import { Login, LoginForm } from "react-admin";
import Button from '@material-ui/core/Button';
//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//import firebase from 'firebase';
//import ForgotPasswordButton from './CustomForgotPassword'

/* Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '#/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};*/

//const SignInScreen = () => <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>;

const CustomLoginForm = props => (
  <div>
    <div style={{fontFamily: "monospace", marginLeft: '15px'}}>
      <p>Digite seu email e senha cadastrados</p>
    </div>
    <LoginForm {...props} />
    <a href="https://altieriescultor.com/" className="goToSite">IR PARA O SITE</a>
  </div>
);

const CustomLoginPage = props => (
  <Login {...props}>
    <CustomLoginForm {...props}/>
  </Login>
);

export default CustomLoginPage;