"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _app["default"];
  }
});
exports.storage = void 0;

var _app = _interopRequireDefault(require("@firebase/app"));

require("@firebase/storage");

var config = {
  apiKey: "AIzaSyD46nX4-Ks9WMiQ1hazUe2PZAkGX_Cq7kQ",
  authDomain: "altiereescultor.firebaseapp.com",
  databaseURL: "https://altiereescultor.firebaseio.com",
  projectId: "altiereescultor",
  storageBucket: "altiereescultor.appspot.com",
  messagingSenderId: "851171901718",
  appId: "1:851171901718:web:3f1bf7c3d4867dc7d25037",
  measurementId: "G-D5SPTWZ2H0"
};

if (!_app["default"].apps.length) {
  _app["default"].initializeApp(config);
}

var storage = _app["default"].storage();

exports.storage = storage;