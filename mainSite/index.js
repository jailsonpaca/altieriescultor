import * as functions from "firebase-functions";
import React from 'react';
import {renderToString,renderToNodeStream} from 'react-dom/server';
import App from './src/components/App';
//import {App as Admin} from './srcAdmin/App';
import getData from './src/components/getData';
import express from 'express';
import fs from 'fs';


const index=fs.readFileSync(__dirname + '/index.html','utf8');
const app=express();

app.get('/',(req,res)=>{
  
  getData().then(props=>{
        const html=  renderToString(<App props={props}/>);
        //const html=  renderToNodeStream(<App props={props}/>);
        const finalHtml=index.replace('<!-- ::APP:: -->',html);
        res.set('Cache-Control','public, max-age=31536000, s-maxage=31536000');
        res.send(finalHtml);
  })
});
const indexAdmin=fs.readFileSync(__dirname + '/admin/index.html','utf8');

app.get('/admin',(req,res)=>{
        //const html=  renderToString(<Admin />);
        //const html=  renderToNodeStream(<App props={props}/>);
        res.set('Cache-Control','public, max-age=31536000, s-maxage=31536000');
        res.send(indexAdmin);
});


export const ssrapp = functions.https.onRequest(app);

