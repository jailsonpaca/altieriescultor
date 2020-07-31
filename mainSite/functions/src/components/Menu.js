"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Menu;

var _react = _interopRequireWildcard(require("react"));

var _reactBurgerMenu = require("react-burger-menu");

function Menu() {
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "barMenu"
  }), /*#__PURE__*/_react["default"].createElement(_reactBurgerMenu.slide, null, /*#__PURE__*/_react["default"].createElement("a", {
    id: "inicioL",
    className: "menu-item",
    href: "/#inicio"
  }, "In\xEDcio"), /*#__PURE__*/_react["default"].createElement("a", {
    id: "sobreL",
    className: "menu-item",
    href: "/#sobre"
  }, "Sobre"), /*#__PURE__*/_react["default"].createElement("a", {
    id: "galeriaL",
    className: "menu-item",
    href: "/#galeria"
  }, "Galeria"), /*#__PURE__*/_react["default"].createElement("a", {
    id: "noticiasL",
    className: "menu-item",
    href: "/#noticias"
  }, "Not\xEDcias"), /*#__PURE__*/_react["default"].createElement("a", {
    id: "localizacaoL",
    className: "menu-item",
    href: "/#localizacao"
  }, "Localiza\xE7\xE3o"), /*#__PURE__*/_react["default"].createElement("a", {
    id: "contatoL",
    className: "menu-item",
    href: "/#contato"
  }, "Contato")));
}