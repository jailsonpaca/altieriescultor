"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Post;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _fi = require("react-icons/fi");

var _reactImageLightbox = _interopRequireDefault(require("react-image-lightbox"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

function Post(props) {
  console.log("--------------POST----------------");
  var slideImgs;

  if (props.imgs) {
    slideImgs = Object.values(props.imgs);
    console.log(slideImgs);
  }

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      photoIndex = _useState4[0],
      setIndex = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "PostClass"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "imgPost",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadImage, {
    alt: props.title,
    className: "imgPreviewPost",
    src: props.small
  }), isOpen && slideImgs && /*#__PURE__*/_react["default"].createElement(_reactImageLightbox["default"], {
    mainSrc: slideImgs[photoIndex],
    nextSrc: slideImgs[photoIndex + 1],
    prevSrc: slideImgs[photoIndex - 1],
    onCloseRequest: function onCloseRequest() {
      return setOpen(false);
    },
    onMovePrevRequest: function onMovePrevRequest() {
      if (photoIndex - 1 < 0) {
        setIndex(slideImgs.imgs.length - 1);
      } else {
        setIndex(photoIndex - 1);
      }
    },
    onMoveNextRequest: function onMoveNextRequest() {
      if (photoIndex + 1 === slideImgs.imgs.length) {
        setIndex(0);
      } else {
        setIndex(photoIndex + 1);
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_fi.FiZoomIn, {
    className: "lupaPost",
    size: "15%"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, /*#__PURE__*/_react["default"].createElement(_fi.FiCalendar, {
    size: "3%",
    className: "calendar"
  }), " ", props.data), /*#__PURE__*/_react["default"].createElement("h1", null, props.title), /*#__PURE__*/_react["default"].createElement("p", null, props.text))), /*#__PURE__*/_react["default"].createElement("hr", {
    className: "divider"
  }));
}