import * as firebase from 'firebase/app'
import 'firebase/firestore';
//import "firebase/auth";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD46nX4-Ks9WMiQ1hazUe2PZAkGX_Cq7kQ",
    authDomain: "altiereescultor.firebaseapp.com",
    databaseURL: "https://altiereescultor.firebaseio.com",
    projectId: "altiereescultor",
    storageBucket: "altiereescultor.appspot.com",
    messagingSenderId: "851171901718",
    appId: "1:851171901718:web:3f1bf7c3d4867dc7d25037",
    measurementId: "G-D5SPTWZ2H0"
});
 
//export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();


