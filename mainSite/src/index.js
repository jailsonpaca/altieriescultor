import React from 'react';
import {render,hydrate} from 'react-dom';
import App from './components/App';
import getData from './components/getData';

getData().then(props=>{
  render(<App props={props} />,document.querySelector('#root'));
 //hydrate(<App props={props}/>,document.querySelector('#root'));
}); 


