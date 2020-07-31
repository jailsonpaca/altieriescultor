"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getData;

var _firebase = require("./firebase");

function getData() {
  return Promise.all([// authenticate(),
  _firebase.db.collection("colecao").where('published', '==', true).get(), _firebase.db.collection("galeria").where('published', '==', true).get()]).then(function (responses) {
    if (responses) {
      //console.log("responses:");
      return {
        posts: responses[0].docs.map(function (doc) {
          return doc.data();
        }),
        galeria: responses[1].docs.map(function (doc) {
          return doc.data();
        })
      };
    }
  });
}