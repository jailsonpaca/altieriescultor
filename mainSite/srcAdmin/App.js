import React from 'react';
import { Admin, Resource} from 'react-admin';
import {FirebaseAuthProvider,FirebaseDataProvider} from 'react-admin-firebase';
import CustomLoginPage from './components/CustomLoginPage';
import {ListPost,CreatePost,EditPost} from './components/Post';
import {ListGaleria,CreateGaleria,EditGaleria} from './components/Galeria';
import GaleriaIcon from '@material-ui/icons/Book';
import './index.css';

const config = {
  apiKey: "AIzaSyD46nX4-Ks9WMiQ1hazUe2PZAkGX_Cq7kQ",
  authDomain: "altiereescultor.firebaseapp.com",
  databaseURL: "https://altiereescultor.firebaseio.com",
  projectId: "altiereescultor",
  storageBucket: "altiereescultor.appspot.com",
  messagingSenderId: "851171901718",
  appId: "1:851171901718:web:3f1bf7c3d4867dc7d25037",
  measurementId: "G-D5SPTWZ2H0"
};

const options = {
  logging: true,
};

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

const App = () => (
      <Admin dataProvider={dataProvider}
             loginPage={CustomLoginPage} 
             authProvider={authProvider}>
         <Resource name="galeria" options={{ label: 'Galeria' }} list={ListGaleria} edit={EditGaleria} create={CreateGaleria} icon={GaleriaIcon}/>
         <Resource name="colecao" options={{ label: 'Posts' }}   list={ListPost} edit={EditPost} create={CreatePost} />
      </Admin>
  );

export default App;