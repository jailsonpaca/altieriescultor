"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateGaleria = exports.EditGaleria = exports.ListGaleria = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireWildcard(require("react"));

var _reactAdmin = require("react-admin");

var _UrlGaleria = _interopRequireDefault(require("./UrlGaleria"));

var _UrlGaleriaEdit = _interopRequireDefault(require("./UrlGaleriaEdit"));

var _core = require("@material-ui/core");

var _lab = require("@material-ui/lab");

var _firebaseLoad = require("./firebaseLoad");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function urlToFile(_x) {
  return _urlToFile.apply(this, arguments);
}

function _urlToFile() {
  _urlToFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(url) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", fetch(url).then(function (r) {
              return r.blob();
            }));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _urlToFile.apply(this, arguments);
}

var validateGaleria = function validateGaleria(values) {
  var errors = {};

  if (!values.name) {
    errors.name = ['É necessário preencher o nome'];
  }

  return errors;
};

var ListGaleria = function ListGaleria(props) {
  console.log(props);
  return /*#__PURE__*/_react["default"].createElement(_reactAdmin.List, (0, _extends2["default"])({}, props, {
    title: "Galeria"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.Datagrid, {
    rowClick: "edit"
  }, /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextField, {
    source: "id"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextField, {
    source: "name",
    label: "Nome"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.ImageField, {
    source: "imgsmall",
    label: "Capa"
  }), /*#__PURE__*/_react["default"].createElement(_UrlGaleria["default"], {
    source: "imgs",
    label: "Imagens"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.BooleanField, {
    source: "published",
    label: "Publicado"
  })));
};

exports.ListGaleria = ListGaleria;

var EditGaleria = function EditGaleria(props) {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      openMessage = _useState4[0],
      setOpenMessage = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      success = _useState6[0],
      setSuccess = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      imgs = _useState8[0],
      setImgs = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      imgsmall = _useState10[0],
      setImgsmall = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      removedImgs = _useState12[0],
      setRemovedImgs = _useState12[1];

  console.log(props);

  function validateImages(value) {
    console.log(value);

    if (typeof value !== 'undefined') {
      console.log("IMAGENS VALIDADAS");
      setImgs(value);
    } else {
      setMessage('Insira alguma imagem no Post!');
      setOpenMessage(true);
    }
  }

  function removeImg(src) {
    var ar = removedImgs;
    ar.push(src);
    setRemovedImgs(ar);
  }

  function removeFromDB(srcs) {
    if (Array.isArray(srcs)) {
      srcs.forEach(function (src) {
        if (src.search('blob:') === -1) {
          var source = _firebaseLoad.storage.refFromURL(src);

          source["delete"]().then(function () {
            setMessage('Delete Success!');
            setSuccess(true);
            setOpenMessage(true);
          }, function (err) {
            setMessage('Delete error: ' + err);
            setSuccess(false);
            setOpenMessage(true);
          });
        }
      });
    } else if (typeof srcs !== 'undefined' && srcs.search('blob:') === -1) {
      console.log(srcs);

      var source = _firebaseLoad.storage.refFromURL(srcs);

      source["delete"]().then(function () {
        setMessage('Delete Success!');
        setSuccess(true);
        setOpenMessage(true);
      }, function (err) {
        setMessage('Delete error: ' + err);
        setSuccess(false);
        setOpenMessage(true);
      });
    }
  }

  var SaveWithImagesButton = function SaveWithImagesButton(props) {
    var _useUpdate = (0, _reactAdmin.useUpdate)('galeria'),
        _useUpdate2 = (0, _slicedToArray2["default"])(_useUpdate, 1),
        update = _useUpdate2[0];

    var redirectTo = (0, _reactAdmin.useRedirect)();
    var notify = (0, _reactAdmin.useNotify)();
    var basePath = props.basePath;
    var handleSave = (0, _react.useCallback)( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(values, redirect) {
        var imgsmall, imgs, id, name, small, ar, index, uploadTask;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                removeFromDB(removedImgs);
                imgsmall = values.imgsmall;
                console.log(imgsmall);

                if (imgsmall === undefined || imgsmall === '') {
                  console.log('ttttt');
                  imgsmall = props.imgsmall;
                }

                imgs = props.imgs;

                if (imgs.length === 0) {
                  imgs = values.imgs;
                }

                console.log(imgs);
                id = values.id;
                name = values.name;
                _context3.next = 11;
                return urlToFile(imgsmall);

              case 11:
                small = _context3.sent;
                ar = {
                  imgs: imgs,
                  imgsmall: imgsmall
                }, index = 0;

                if (imgsmall.search('blob:') === 0) {
                  console.log("tese 1");
                  uploadTask = _firebaseLoad.storage.ref("/galeria/".concat(id, "/imgsmall/").concat(name)).put(small);
                  uploadTask.on('state_changed', function (snapshot) {
                    var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                    console.log('Upload is ' + progress + '% done for imgsmall');
                    setMessage('Upload is ' + progress + '% done for imgsmall');
                    setSuccess(true);
                    setOpenMessage(true);
                  }, function (error) {
                    setMessage('Upload error: ' + error + ' for imgsmall');
                    setSuccess(false);
                    setOpenMessage(true);
                  }, function () {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                      console.log('File available at', downloadURL);
                      ar.imgsmall = downloadURL;
                      var index = 0,
                          isEnter = 0;
                      imgs.forEach( /*#__PURE__*/function () {
                        var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e, i) {
                          var img, uploadTask2;
                          return _regenerator["default"].wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (!(e.search('blob:') === 0)) {
                                    _context.next = 7;
                                    break;
                                  }

                                  isEnter++;
                                  _context.next = 4;
                                  return urlToFile(e);

                                case 4:
                                  img = _context.sent;
                                  uploadTask2 = _firebaseLoad.storage.ref("/galeria/".concat(id, "/imgs/").concat(name, "-").concat(i)).put(img);
                                  uploadTask2.on('state_changed', function (snapshot) {
                                    var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                                    console.log('Upload is ' + progress + '% done for imgs');
                                    setMessage('Upload is ' + progress + '% done for imgs');
                                    setSuccess(true);
                                    setOpenMessage(true);
                                  }, function (error) {
                                    setMessage('Upload error: ' + error + ' for imgs');
                                    setSuccess(false);
                                    setOpenMessage(true);
                                  }, function () {
                                    uploadTask2.snapshot.ref.getDownloadURL().then(function (downloadURL2) {
                                      console.log('File available at', downloadURL2);
                                      ar.imgs.push({
                                        src: downloadURL2,
                                        title: e.title
                                      });

                                      if (index === imgs.length - 1) {
                                        if (ar != null) {
                                          console.log(ar);
                                          update({
                                            payload: {
                                              id: id,
                                              data: _objectSpread(_objectSpread({}, values), {}, {
                                                imgs: ar.imgs,
                                                imgsmall: ar.imgsmall
                                              })
                                            }
                                          }, {
                                            onSuccess: function onSuccess(_ref3) {
                                              var newRecord = _ref3.data;
                                              notify('ra.notification.updated', 'info', {
                                                smart_count: 1
                                              });
                                              redirectTo(redirect, basePath, newRecord.id, newRecord);
                                            }
                                          });
                                        }
                                      }
                                    });
                                  });

                                case 7:
                                  index++;

                                case 8:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        return function (_x4, _x5) {
                          return _ref2.apply(this, arguments);
                        };
                      }());
                      console.log(isEnter);

                      if (isEnter === 0) {
                        if (ar != null) {
                          console.log(ar);
                          update({
                            payload: {
                              id: id,
                              data: _objectSpread(_objectSpread({}, values), {}, {
                                imgs: ar.imgs,
                                imgsmall: ar.imgsmall
                              })
                            }
                          }, {
                            onSuccess: function onSuccess(_ref4) {
                              var newRecord = _ref4.data;
                              notify('ra.notification.updated', 'info', {
                                smart_count: 1
                              });
                              redirectTo(redirect, basePath, newRecord.id, newRecord);
                            }
                          });
                        }
                      }
                    });
                  });
                } else {
                  imgs.forEach( /*#__PURE__*/function () {
                    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(e, i) {
                      var img, uploadTask2;
                      return _regenerator["default"].wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              console.log(e.search('blob:'));

                              if (!(e.search('blob:') === 0)) {
                                _context2.next = 7;
                                break;
                              }

                              _context2.next = 4;
                              return urlToFile(e);

                            case 4:
                              img = _context2.sent;
                              uploadTask2 = _firebaseLoad.storage.ref("/galeria/".concat(id, "/imgs/").concat(name, "-").concat(i)).put(img);
                              uploadTask2.on('state_changed', function (snapshot) {
                                var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                                console.log('Upload is ' + progress + '% done for imgs');
                                setMessage('Upload is ' + progress + '% done for imgs');
                                setSuccess(true);
                                setOpenMessage(true);
                              }, function (error) {
                                setMessage('Upload error: ' + error + ' for imgs');
                                setSuccess(false);
                                setOpenMessage(true);
                              }, function () {
                                uploadTask2.snapshot.ref.getDownloadURL().then(function (downloadURL2) {
                                  console.log('File available at', downloadURL2);
                                  ar.imgs.push({
                                    src: downloadURL2,
                                    title: e.title
                                  });
                                  console.log(imgs.length);
                                  console.log(index);

                                  if (index === imgs.length - 1) {
                                    if (ar != null) {
                                      console.log(ar);
                                      ar.imgs = ar.imgs.filter(function (e) {
                                        return e.src.search('blob:') === -1;
                                      });
                                      update({
                                        payload: {
                                          id: id,
                                          data: _objectSpread(_objectSpread({}, values), {}, {
                                            imgs: ar.imgs
                                          })
                                        }
                                      }, {
                                        onSuccess: function onSuccess(_ref6) {
                                          var newRecord = _ref6.data;
                                          notify('ra.notification.updated', 'info', {
                                            smart_count: 1
                                          });
                                          redirectTo(redirect, basePath, newRecord.id, newRecord);
                                        }
                                      });
                                    }
                                  }
                                });
                              });

                            case 7:
                              index++;

                            case 8:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function (_x6, _x7) {
                      return _ref5.apply(this, arguments);
                    };
                  }());
                  console.log(index);

                  if (index === 0) {
                    if (ar != null) {
                      console.log(ar);
                      update({
                        payload: {
                          id: id,
                          data: _objectSpread(_objectSpread({}, values), {}, {
                            imgs: ar.imgs,
                            imgsmall: ar.imgsmall
                          })
                        }
                      }, {
                        onSuccess: function onSuccess(_ref7) {
                          var newRecord = _ref7.data;
                          notify('ra.notification.updated', 'info', {
                            smart_count: 1
                          });
                          redirectTo(redirect, basePath, newRecord.id, newRecord);
                        }
                      });
                    }
                  }
                }

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }(), [update, notify, redirectTo, basePath, props.imgs, props.imgsmall]);
    return /*#__PURE__*/_react["default"].createElement(_reactAdmin.SaveButton, (0, _extends2["default"])({}, props, {
      onSave: handleSave
    }));
  };

  var GaleriaEditToolbar = function GaleriaEditToolbar(props) {
    return /*#__PURE__*/_react["default"].createElement(_reactAdmin.Toolbar, props, /*#__PURE__*/_react["default"].createElement(SaveWithImagesButton, {
      imgs: imgs,
      imgsmall: imgsmall
    }));
  };

  function setImgSmallState(e) {
    setImgsmall(e);
  }

  function setImgsState(e) {
    setImgs(e);
  }

  function validateSmallImage(value) {
    console.log(value);

    if (typeof value !== 'undefined') {
      console.log("IMAGEM VALIDADA");
      setImgsmall(value[0]);
    } else {
      setMessage('É necessário uma imagem de capa!');
      setOpenMessage(true);
    }
  }

  return /*#__PURE__*/_react["default"].createElement(_reactAdmin.Edit, props, /*#__PURE__*/_react["default"].createElement(_reactAdmin.SimpleForm, {
    toolbar: /*#__PURE__*/_react["default"].createElement(GaleriaEditToolbar, {
      imgs: imgs
    })
  }, /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextInput, {
    disabled: true,
    source: "id"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextInput, {
    source: "name",
    label: "Nome"
  }), /*#__PURE__*/_react["default"].createElement(_UrlGaleriaEdit["default"], {
    validate: validateSmallImage,
    setImgState: setImgSmallState,
    removeImage: removeImg,
    source: "imgsmall",
    acceptMultiple: false,
    label: "Capa",
    placeholder: "Arraste a imagem at\xE9 aqui ou"
  }), /*#__PURE__*/_react["default"].createElement(_UrlGaleriaEdit["default"], {
    validate: validateImages,
    setImgState: setImgsState,
    removeImage: removeImg,
    source: "imgs",
    acceptMultiple: true,
    label: "Imagens",
    placeholder: "Arraste as imagens at\xE9 aqui ou"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.BooleanInput, {
    source: "published"
  }), /*#__PURE__*/_react["default"].createElement(_core.Snackbar, {
    open: openMessage,
    autoHideDuration: 3000
  }, /*#__PURE__*/_react["default"].createElement(_lab.Alert, {
    severity: !success ? "error" : "success"
  }, message))));
};

exports.EditGaleria = EditGaleria;

var CreateGaleria = function CreateGaleria(props) {
  var _useState13 = (0, _react.useState)(''),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      message = _useState14[0],
      setMessage = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      openMessage = _useState16[0],
      setOpenMessage = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
      success = _useState18[0],
      setSuccess = _useState18[1];

  var _useState19 = (0, _react.useState)([]),
      _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
      imgs = _useState20[0],
      setImgs = _useState20[1];

  var _useState21 = (0, _react.useState)(''),
      _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
      imgsmall = _useState22[0],
      setImgsmall = _useState22[1];

  var makeID = function makeID(toSet) {
    var newId = Math.random().toString(36).substr(2, 9);
    return newId;
  };

  var SaveWithImagesButton = function SaveWithImagesButton(props) {
    var _useCreate = (0, _reactAdmin.useCreate)('galeria'),
        _useCreate2 = (0, _slicedToArray2["default"])(_useCreate, 1),
        create = _useCreate2[0];

    var redirectTo = (0, _reactAdmin.useRedirect)();
    var notify = (0, _reactAdmin.useNotify)();
    var basePath = props.basePath;
    var handleSave = (0, _react.useCallback)( /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(values, redirect) {
        var imgs, name, id, titles, small, ar, index, uploadTask;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log(values);
                console.log(props.imgs);
                imgs = props.imgs;
                name = values.name;
                id = values.id;
                titles = [];
                _context5.next = 8;
                return urlToFile(props.imgsmall);

              case 8:
                small = _context5.sent;
                ar = {
                  imgs: [],
                  imgsmall: ''
                }, index = 0;
                uploadTask = _firebaseLoad.storage.ref("/galeria/".concat(id, "/imgsmall/").concat(name)).put(small);
                uploadTask.on('state_changed', function (snapshot) {
                  var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                  console.log('Upload is ' + progress + '% done for imgsmall');
                  setMessage('Upload is ' + progress + '% done for imgsmall');
                  setSuccess(true);
                  setOpenMessage(true);
                }, function (error) {
                  setMessage('Upload error: ' + error + ' for imgsmall');
                  setSuccess(false);
                  setOpenMessage(true);
                }, function () {
                  uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                    ar.imgsmall = downloadURL;
                    imgs.forEach( /*#__PURE__*/function () {
                      var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(e, i) {
                        var img, uploadTask2;
                        return _regenerator["default"].wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                _context4.next = 2;
                                return urlToFile(e.src);

                              case 2:
                                img = _context4.sent;
                                titles.push(e.title);
                                uploadTask2 = _firebaseLoad.storage.ref("/galeria/".concat(id, "/imgs/").concat(name, "-").concat(i)).put(img);
                                uploadTask2.on('state_changed', function (snapshot) {
                                  var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                                  console.log('Upload is ' + progress + '% done for imgs');
                                  setMessage('Upload is ' + progress + '% done for imgs');
                                  setSuccess(true);
                                  setOpenMessage(true);
                                }, function (error) {
                                  setMessage('Upload error: ' + error + ' for imgs');
                                  setSuccess(false);
                                  setOpenMessage(true);
                                }, function () {
                                  uploadTask2.snapshot.ref.getDownloadURL().then(function (downloadURL2) {
                                    console.log('File available at', downloadURL2);
                                    ar.imgs.push({
                                      src: downloadURL2,
                                      title: e.title
                                    });
                                    console.log(imgs.length);

                                    if (index === imgs.length - 1) {
                                      if (ar != null) {
                                        console.log(ar);
                                        create({
                                          payload: {
                                            data: _objectSpread(_objectSpread({}, values), {}, {
                                              imgs: ar.imgs
                                            })
                                          }
                                        }, {
                                          onSuccess: function onSuccess(_ref10) {
                                            var newRecord = _ref10.data;
                                            notify('ra.notification.created', 'info', {
                                              smart_count: 1
                                            });
                                            redirectTo(redirect, basePath, newRecord.id, newRecord);
                                          }
                                        });
                                      }
                                    }
                                  });
                                });
                                index++;

                              case 7:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4);
                      }));

                      return function (_x10, _x11) {
                        return _ref9.apply(this, arguments);
                      };
                    }());
                  });
                });

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x8, _x9) {
        return _ref8.apply(this, arguments);
      };
    }(), [create, notify, redirectTo, basePath, props.imgs, props.imgsmall]);
    return /*#__PURE__*/_react["default"].createElement(_reactAdmin.SaveButton, (0, _extends2["default"])({}, props, {
      onSave: handleSave
    }));
  };

  var GaleriaEditToolbar = function GaleriaEditToolbar(props) {
    return /*#__PURE__*/_react["default"].createElement(_reactAdmin.Toolbar, props, /*#__PURE__*/_react["default"].createElement(SaveWithImagesButton, {
      imgs: imgs,
      imgsmall: imgsmall
    }));
  };

  function validateImages(value) {
    if (typeof value !== 'undefined') {
      console.log("IMAGENS VALIDADAS");
      setImgs(value);
    } else {
      setMessage('Insira alguma imagem no Post!');
      setOpenMessage(true);
    }
  }

  function validateSmallImage(value) {
    console.log(value);

    if (typeof value !== 'undefined') {
      console.log("IMAGEM VALIDADA");
      setImgsmall(value[0]);
    } else {
      setMessage('É necessário uma imagem de capa!');
      setOpenMessage(true);
    }
  }

  return /*#__PURE__*/_react["default"].createElement(_reactAdmin.Create, props, /*#__PURE__*/_react["default"].createElement(_reactAdmin.SimpleForm, {
    validate: validateGaleria,
    toolbar: /*#__PURE__*/_react["default"].createElement(GaleriaEditToolbar, {
      imgs: imgs
    })
  }, /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextInput, {
    disabled: true,
    source: "id",
    defaultValue: _react["default"].useMemo(function () {
      return makeID(true);
    }, [])
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextInput, {
    source: "name",
    label: "Nome"
  }), /*#__PURE__*/_react["default"].createElement(_UrlGaleriaEdit["default"], {
    validate: validateSmallImage,
    source: "imgsmall",
    acceptMultiple: false,
    label: "Capa",
    placeholder: "Arraste a imagem at\xE9 aqui ou"
  }), /*#__PURE__*/_react["default"].createElement(_UrlGaleriaEdit["default"], {
    validate: validateImages,
    source: "imgs",
    acceptMultiple: true,
    label: "Imagens",
    placeholder: "Arraste as imagens at\xE9 aqui ou"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.BooleanInput, {
    source: "published",
    label: "P\xFAblico",
    defaultValue: false
  }), /*#__PURE__*/_react["default"].createElement(_core.Snackbar, {
    open: openMessage,
    autoHideDuration: 3000
  }, /*#__PURE__*/_react["default"].createElement(_lab.Alert, {
    severity: !success ? "error" : "success"
  }, message))));
};

exports.CreateGaleria = CreateGaleria;