"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrapp = void 0;

var functions = _interopRequireWildcard(require("firebase-functions"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./src/components/App"));

var _getData = _interopRequireDefault(require("./src/components/getData"));

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

//import {App as Admin} from './srcAdmin/App';
var index = _fs["default"].readFileSync(__dirname + '/index.html', 'utf8');

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  (0, _getData["default"])().then(function (props) {
    var html = (0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_App["default"], {
      props: props
    })); //const html=  renderToNodeStream(<App props={props}/>);

    var finalHtml = index.replace('<!-- ::APP:: -->', html);
    res.set('Cache-Control', 'public, max-age=31536000, s-maxage=31536000');
    res.send(finalHtml);
  });
});

var indexAdmin = _fs["default"].readFileSync(__dirname + '/admin/index.html', 'utf8');

app.get('/admin', function (req, res) {
  //const html=  renderToString(<Admin />);
  //const html=  renderToNodeStream(<App props={props}/>);
  res.set('Cache-Control', 'public, max-age=31536000, s-maxage=31536000');
  res.send(indexAdmin);
});
var ssrapp = functions.https.onRequest(app);
exports.ssrapp = ssrapp;