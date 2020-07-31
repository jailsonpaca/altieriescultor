"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Footer;

var _react = _interopRequireDefault(require("react"));

var _ti = require("react-icons/ti");

function Footer() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Siga-me nas redes sociais:"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "inline-block"
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    style: {
      "float": "left",
      textDecoration: "none",
      color: "white",
      display: "inline-block"
    },
    href: "https://www.instagram.com/niltonaltieri/"
  }, /*#__PURE__*/_react["default"].createElement(_ti.TiSocialInstagram, {
    style: {
      "float": "left"
    },
    className: "instagram",
    size: "20%"
  }), /*#__PURE__*/_react["default"].createElement("h2", {
    style: {
      textAlign: "justify",
      marginLeft: "25%"
    }
  }, "niltonaltieri")), /*#__PURE__*/_react["default"].createElement("a", {
    style: {
      "float": "right",
      textDecoration: "none",
      color: "white",
      display: "inline-block"
    },
    href: "https://www.facebook.com/casadoescultorbr/"
  }, /*#__PURE__*/_react["default"].createElement(_ti.TiSocialFacebookCircular, {
    style: {
      "float": "left"
    },
    className: "facebook",
    size: "20%"
  }), /*#__PURE__*/_react["default"].createElement("h2", {
    style: {
      textAlign: "justify",
      marginLeft: "25%"
    }
  }, "Casa do Escultor"))), /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      marginTop: "5%"
    }
  }, "Copyright \xA9 2020 Casa do Escultor, todos direitos reservados"));
}

;