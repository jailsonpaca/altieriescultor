"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactAdmin = require("react-admin");

var _StyledFirebaseAuth = _interopRequireDefault(require("react-firebaseui/StyledFirebaseAuth"));

var _firebase = _interopRequireDefault(require("firebase"));

// LoginPage.js
//import ForgotPasswordButton from './CustomForgotPassword'
// Configure FirebaseUI.
var uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '#/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [_firebase["default"].auth.GoogleAuthProvider.PROVIDER_ID]
};

var SignInScreen = function SignInScreen() {
  return /*#__PURE__*/_react["default"].createElement(_StyledFirebaseAuth["default"], {
    uiConfig: uiConfig,
    firebaseAuth: _firebase["default"].auth()
  });
};

var CustomLoginForm = function CustomLoginForm(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontFamily: "monospace",
      marginLeft: '15px'
    }
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Email: test@example.com"), /*#__PURE__*/_react["default"].createElement("p", null, "Senha: password")), /*#__PURE__*/_react["default"].createElement(_reactAdmin.LoginForm, props));
};

var CustomLoginPage = function CustomLoginPage(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAdmin.Login, props, /*#__PURE__*/_react["default"].createElement(CustomLoginForm, props));
};

var _default = CustomLoginPage;
exports["default"] = _default;