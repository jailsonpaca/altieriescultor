"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./components/App"));

var _getData = _interopRequireDefault(require("./components/getData"));

(0, _getData["default"])().then(function (props) {
  (0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_App["default"], {
    props: props
  }), document.querySelector('#root')); //hydrate(<App props={props}/>,document.querySelector('#root'));
});