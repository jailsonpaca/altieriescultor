"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ImgGaleria;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _fi = require("react-icons/fi");

var _reactImageLightbox = _interopRequireDefault(require("react-image-lightbox"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

function ImgGaleria(props) {
  var galeria = props.galeria;
  console.log("--------------GALERIA----------------");
  console.log(galeria.imgsmall);
  console.log(galeria.imgs);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      photoIndex = _useState4[0],
      setIndex = _useState4[1];

  function handleSetOpen() {
    console.log("TE");
    setOpen(true);
  }

  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, galeria.published && galeria.imgsmall && /*#__PURE__*/_react["default"].createElement("div", {
    className: "imgGaleria",
    onClick: handleSetOpen
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadImage, {
    alt: galeria.name,
    className: "imgPreview",
    src: galeria.imgsmall
  })), /*#__PURE__*/_react["default"].createElement(_fi.FiZoomIn, {
    className: "lupa",
    size: "15%"
  }), isOpen && galeria.imgs && /*#__PURE__*/_react["default"].createElement(_reactImageLightbox["default"], {
    imageTitle: galeria.imgs[photoIndex].title,
    mainSrc: galeria.imgs[photoIndex].src,
    nextSrc: photoIndex + 1 === galeria.imgs.length ? galeria.imgs[galeria.imgs.length - 1].src : galeria.imgs[photoIndex + 1].src,
    prevSrc: photoIndex === 0 ? galeria.imgs[0].src : galeria.imgs[photoIndex - 1].src,
    onCloseRequest: function onCloseRequest() {
      return setOpen(false);
    },
    onMovePrevRequest: function onMovePrevRequest() {
      if (photoIndex - 1 < 0) {
        setIndex(galeria.imgs.length - 1);
      } else {
        setIndex(photoIndex - 1);
      }
    },
    onMoveNextRequest: function onMoveNextRequest() {
      if (photoIndex + 1 === galeria.imgs.length) {
        setIndex(0);
      } else {
        setIndex(photoIndex + 1);
      }
    }
  })));
}