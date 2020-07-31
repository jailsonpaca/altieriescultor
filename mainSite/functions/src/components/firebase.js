"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var firebase = _interopRequireWildcard(require("firebase/app"));

require("firebase/firestore");

//import "firebase/auth";
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD46nX4-Ks9WMiQ1hazUe2PZAkGX_Cq7kQ",
  authDomain: "altiereescultor.firebaseapp.com",
  databaseURL: "https://altiereescultor.firebaseio.com",
  projectId: "altiereescultor",
  storageBucket: "altiereescultor.appspot.com",
  messagingSenderId: "851171901718",
  appId: "1:851171901718:web:3f1bf7c3d4867dc7d25037",
  measurementId: "G-D5SPTWZ2H0"
}); //export const auth = firebaseApp.auth();

var db = firebaseApp.firestore();
exports.db = db;