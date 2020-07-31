"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UrlGaleriaEdit;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDropzone = require("react-dropzone");

function UrlGaleriaEdit(_ref) {
  var _ref$record = _ref.record,
      record = _ref$record === void 0 ? {} : _ref$record,
      source = _ref.source,
      setImgState = _ref.setImgState,
      acceptMultiple = _ref.acceptMultiple,
      label = _ref.label,
      placeholder = _ref.placeholder,
      validate = _ref.validate,
      removeImage = _ref.removeImage;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      imgs = _useState2[0],
      setImgs = _useState2[1];

  (0, _react.useEffect)(function () {
    var isCancelled = false;

    function setImagens() {
      var ar;

      if (record[source]) {
        if ((0, _typeof2["default"])(record[source]) !== 'object') {
          ar = [record[source]];

          if (!isCancelled) {
            setImgs(ar);
          }
        } else {
          ar = Object.values(record[source]);

          if (!isCancelled) {
            setImgs(ar);
          }
        }
      }

      console.log(record);
    }

    setImagens();
    return function () {
      isCancelled = true;
    };
  }, [record, source]);
  var onDrop = (0, _react.useCallback)(function (acceptedFiles) {
    var ar = imgs;
    console.log(ar);
    acceptedFiles.forEach(function (file) {
      if (acceptMultiple) {
        ar.push(URL.createObjectURL(file));
      } else {
        ar = [URL.createObjectURL(file)];
      }
    });
    setImgs(ar);

    if (setImgState) {
      setImgState(ar);
    }

    if (typeof validate !== 'undefined') {
      validate(ar);
    }

    console.log(ar);
  }, [imgs, validate, setImgState, acceptMultiple]);

  function removeImg(i) {
    var ar = imgs;
    removeImage(imgs[i]);
    ar.splice(i, 1);
    setImgs(ar);

    if (setImgState) {
      setImgState(ar);
    }
  }

  var _useDropzone = (0, _reactDropzone.useDropzone)({
    accept: 'image/*',
    multiple: acceptMultiple,
    noClick: true,
    onDrop: onDrop
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      open = _useDropzone.open,
      isDragActive = _useDropzone.isDragActive;

  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
    className: "MuiFormLabel-root MuiInputLabel-root  "
  }, /*#__PURE__*/_react["default"].createElement("span", null, label)), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, getRootProps(), {
    className: "UrlPostEditContainer"
  }), /*#__PURE__*/_react["default"].createElement("input", getInputProps()), isDragActive ? /*#__PURE__*/_react["default"].createElement("p", null, placeholder) : /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("p", null, placeholder), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: open
  }, "Clique para selecionar")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "preview"
  }, (0, _typeof2["default"])(imgs) === 'object' && imgs.map(function (e, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "imageContainer",
      key: i
    }, /*#__PURE__*/_react["default"].createElement("img", {
      alt: "imagem",
      src: e.src,
      className: "imgEdit"
    }), acceptMultiple ? /*#__PURE__*/_react["default"].createElement("input", {
      className: "imgGaleriaTitle",
      type: "text",
      placeholder: "T\xEDtulo para a imagem",
      value: e.title
    }) : '', /*#__PURE__*/_react["default"].createElement("span", {
      className: "btnDeleteImage",
      onClick: function onClick() {
        return removeImg(i);
      }
    }, "X"));
  }))));
}