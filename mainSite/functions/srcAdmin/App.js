"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactAdmin = require("react-admin");

var _reactAdminFirebase = require("react-admin-firebase");

var _CustomLoginPage = _interopRequireDefault(require("./components/CustomLoginPage"));

var _Post = require("./components/Post");

var _Galeria = require("./components/Galeria");

var _Book = _interopRequireDefault(require("@material-ui/icons/Book"));

require("./index.css");

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
var options = {
  logging: true
};
var dataProvider = (0, _reactAdminFirebase.FirebaseDataProvider)(config, options);
var authProvider = (0, _reactAdminFirebase.FirebaseAuthProvider)(config, options);

var App = function App() {
  return /*#__PURE__*/_react["default"].createElement(_reactAdmin.Admin, {
    dataProvider: dataProvider,
    loginPage: _CustomLoginPage["default"],
    authProvider: authProvider
  }, /*#__PURE__*/_react["default"].createElement(_reactAdmin.Resource, {
    name: "galeria",
    options: {
      label: 'Galeria'
    },
    list: _Galeria.ListGaleria,
    edit: _Galeria.EditGaleria,
    create: _Galeria.CreateGaleria,
    icon: _Book["default"]
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.Resource, {
    name: "colecao",
    options: {
      label: 'Posts'
    },
    list: _Post.ListPost,
    edit: _Post.EditPost,
    create: _Post.CreatePost
  }));
};

var _default = App;
exports["default"] = _default;