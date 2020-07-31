"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UrlPost;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

function UrlPost(_ref) {
  var _ref$record = _ref.record,
      record = _ref$record === void 0 ? {} : _ref$record,
      source = _ref.source;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      imgs = _useState2[0],
      setImgs = _useState2[1];

  (0, _react.useEffect)(function () {
    if (record[source]) {
      if ((0, _typeof2["default"])(record[source]) !== 'object') {
        var ar = [record[source]];
        setImgs(ar);
      } else {
        setImgs(Object.values(record[source]));
      }
    }
  }, [record, source]);
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, imgs.map(function (e, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "urlPost",
      key: i
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: e
    }, i));
  }));
}