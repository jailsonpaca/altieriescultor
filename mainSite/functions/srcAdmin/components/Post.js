"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditPost = exports.CreatePost = exports.ListPost = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireWildcard(require("react"));

var _reactAdmin = require("react-admin");

var _UrlPost = _interopRequireDefault(require("./UrlPost"));

var _UrlPostEdit = _interopRequireDefault(require("./UrlPostEdit"));

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

var validatePost = function validatePost(values) {
  var errors = {};

  if (!values.title) {
    errors.title = ['É necessário preencher o título'];
  }

  if (!values.content) {
    errors.content = ['É necessário preencher o conteúdo'];
  }

  if (!values.date) {
    errors.date = ['É necessário uma data'];
  }

  return errors;
};

var PostFilter = function PostFilter(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAdmin.Filter, props, /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextInput, {
    label: "Pesquisar",
    source: "title",
    alwaysOn: true
  }));
};

var ListPost = function ListPost(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAdmin.List, (0, _extends2["default"])({}, props, {
    title: "Posts",
    filters: /*#__PURE__*/_react["default"].createElement(PostFilter, null)
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.Datagrid, {
    rowClick: "edit"
  }, /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextField, {
    source: "id"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextField, {
    source: "title",
    label: "T\xEDtulo"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextField, {
    source: "content",
    label: "Conte\xFAdo"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.ImageField, {
    source: "imgsmall"
  }), /*#__PURE__*/_react["default"].createElement(_UrlPost["default"], {
    source: "imgs"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.DateField, {
    source: "date",
    label: "Data"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.BooleanField, {
    source: "published"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextField, {
    source: "update_at"
  })));
};

exports.ListPost = ListPost;

var CreatePost = function CreatePost(props) {
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

  var makeID = function makeID(toSet) {
    var newId = Math.random().toString(36).substr(2, 9);
    return newId;
  };

  var SaveWithImagesButton = function SaveWithImagesButton(props) {
    var _useCreate = (0, _reactAdmin.useCreate)('colecao'),
        _useCreate2 = (0, _slicedToArray2["default"])(_useCreate, 1),
        create = _useCreate2[0];

    var redirectTo = (0, _reactAdmin.useRedirect)();
    var notify = (0, _reactAdmin.useNotify)();
    var basePath = props.basePath;
    var handleSave = (0, _react.useCallback)( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(values, redirect) {
        var imgsmall, imgs, id, title, small, ar, uploadTask;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(values);
                console.log(props.imgs);
                console.log(props.imgsmall);
                imgsmall = props.imgsmall;
                imgs = props.imgs;
                id = values.id;
                title = values.title;
                _context2.next = 9;
                return urlToFile(imgsmall);

              case 9:
                small = _context2.sent;
                ar = {
                  imgsmall: '',
                  imgs: []
                };
                uploadTask = _firebaseLoad.storage.ref("/colecao/".concat(id, "/imgsmall/").concat(title)).put(small);
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
                    var index = 0;
                    imgs.forEach( /*#__PURE__*/function () {
                      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e, i) {
                        var img, uploadTask2;
                        return _regenerator["default"].wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return urlToFile(e);

                              case 2:
                                img = _context.sent;
                                uploadTask2 = _firebaseLoad.storage.ref("/colecao/".concat(id, "/imgs/").concat(title, "-").concat(i)).put(img);
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
                                    ar.imgs.push(downloadURL2);
                                    console.log(imgs.length);
                                    console.log(index);

                                    if (index === imgs.length - 1) {
                                      if (ar != null) {
                                        console.log(ar);
                                        create({
                                          payload: {
                                            data: _objectSpread(_objectSpread({}, values), {}, {
                                              imgs: ar.imgs,
                                              imgsmall: ar.imgsmall
                                            })
                                          }
                                        }, {
                                          onSuccess: function onSuccess(_ref3) {
                                            var newRecord = _ref3.data;
                                            notify('ra.notification.created', 'info', {
                                              smart_count: 1
                                            });
                                            redirectTo(redirect, basePath, newRecord.id, newRecord);
                                          }
                                        });
                                      }
                                    }

                                    index++;
                                  });
                                });

                              case 5:
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
                  });
                });

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }(), [create, notify, redirectTo, basePath, props.imgs, props.imgsmall]);
    return /*#__PURE__*/_react["default"].createElement(_reactAdmin.SaveButton, (0, _extends2["default"])({}, props, {
      onSave: handleSave
    }));
  };

  var PostEditToolbar = function PostEditToolbar(props) {
    return /*#__PURE__*/_react["default"].createElement(_reactAdmin.Toolbar, props, /*#__PURE__*/_react["default"].createElement(SaveWithImagesButton, {
      imgs: imgs,
      imgsmall: imgsmall
    }));
  };

  function validateSmallImage(value) {
    console.log("TESTE");
    console.log(value);

    if (typeof value !== 'undefined') {
      console.log("333TESTE");
      setImgsmall(value[0]);
    } else {
      setMessage('É necessário uma imagem de capa!');
      setOpenMessage(true);
    }
  }

  function validateImages(value) {
    console.log("TESTE222");
    console.log(value);

    if (typeof value !== 'undefined') {
      console.log("333TESTE");
      setImgs(value);
    } else {
      setMessage('Insira alguma imagem no Post!');
      setOpenMessage(true);
    }
  }

  return /*#__PURE__*/_react["default"].createElement(_reactAdmin.Create, props, /*#__PURE__*/_react["default"].createElement(_reactAdmin.SimpleForm, {
    validate: validatePost,
    toolbar: /*#__PURE__*/_react["default"].createElement(PostEditToolbar, {
      imgsmall: imgsmall,
      imgs: imgs
    })
  }, /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextInput, {
    disabled: true,
    source: "id",
    defaultValue: _react["default"].useMemo(function () {
      return makeID(true);
    }, [])
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextInput, {
    source: "title",
    label: "T\xEDtulo"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextInput, {
    multiline: true,
    source: "content",
    label: "Conte\xFAdo"
  }), /*#__PURE__*/_react["default"].createElement(_UrlPostEdit["default"], {
    validate: validateSmallImage,
    source: "imgsmall",
    acceptMultiple: false,
    label: "Capa do post",
    placeholder: "Arraste a imagem at\xE9 aqui ou"
  }), /*#__PURE__*/_react["default"].createElement(_UrlPostEdit["default"], {
    validate: validateImages,
    source: "imgs",
    acceptMultiple: true,
    label: "Imagens",
    placeholder: "Arraste as imagens at\xE9 aqui ou"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.DateInput, {
    source: "date",
    label: "Data"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.BooleanInput, {
    source: "published",
    label: "P\xFAblico",
    defaultValue: false
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextInput, {
    disabled: true,
    source: "update_at",
    label: "Inserido em"
  }), /*#__PURE__*/_react["default"].createElement(_core.Snackbar, {
    open: openMessage,
    autoHideDuration: 3000
  }, /*#__PURE__*/_react["default"].createElement(_lab.Alert, {
    severity: !success ? "error" : "success"
  }, message))));
};

exports.CreatePost = CreatePost;

var EditPost = function EditPost(props) {
  var _useState11 = (0, _react.useState)(''),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      message = _useState12[0],
      setMessage = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      openMessage = _useState14[0],
      setOpenMessage = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      success = _useState16[0],
      setSuccess = _useState16[1];

  var _useState17 = (0, _react.useState)([]),
      _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
      imgs = _useState18[0],
      setImgs = _useState18[1];

  var _useState19 = (0, _react.useState)([]),
      _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
      removedImgs = _useState20[0],
      setRemovedImgs = _useState20[1];

  var _useState21 = (0, _react.useState)(''),
      _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
      imgsmall = _useState22[0],
      setImgsmall = _useState22[1];

  console.log(props);

  function validateSmallImage(value) {
    console.log("Teste Imagem");
    console.log(value);

    if (typeof value !== 'undefined') {
      console.log("Teste Imagem 2");
      setImgsmall(value[0]);
    } else {
      setMessage('É necessário uma imagem de capa!');
      setOpenMessage(true);
    }
  }

  function validateImages(value) {
    console.log("Teste Images");
    console.log(value);

    if (typeof value !== 'undefined') {
      console.log("Teste Images2");
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
    var _useUpdate = (0, _reactAdmin.useUpdate)('colecao'),
        _useUpdate2 = (0, _slicedToArray2["default"])(_useUpdate, 1),
        update = _useUpdate2[0];

    var redirectTo = (0, _reactAdmin.useRedirect)();
    var notify = (0, _reactAdmin.useNotify)();
    var basePath = props.basePath;
    var handleSave = (0, _react.useCallback)( /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(values, redirect) {
        var imgsmall, imgs, id, title, small, ar, uploadTask, index;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
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

                console.log(imgsmall);
                console.log(imgs);
                id = values.id;
                title = values.title;
                _context5.next = 12;
                return urlToFile(imgsmall);

              case 12:
                small = _context5.sent;
                ar = {
                  imgsmall: imgsmall,
                  imgs: imgs
                };

                if (imgsmall.search('blob:') === 0) {
                  console.log("tese 1");
                  uploadTask = _firebaseLoad.storage.ref("/colecao/".concat(id, "/imgsmall/").concat(title)).put(small);
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
                        var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(e, i) {
                          var img, uploadTask2;
                          return _regenerator["default"].wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  if (!(e.search('blob:') === 0)) {
                                    _context3.next = 7;
                                    break;
                                  }

                                  isEnter++;
                                  _context3.next = 4;
                                  return urlToFile(e);

                                case 4:
                                  img = _context3.sent;
                                  uploadTask2 = _firebaseLoad.storage.ref("/colecao/".concat(id, "/imgs/").concat(title, "-").concat(i)).put(img);
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
                                      ar.imgs.push(downloadURL2);

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
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        return function (_x8, _x9) {
                          return _ref5.apply(this, arguments);
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
                    });
                  });
                } else {
                  console.log("tese 2");
                  index = 0;
                  imgs.forEach( /*#__PURE__*/function () {
                    var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(e, i) {
                      var img, uploadTask2;
                      return _regenerator["default"].wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              console.log(e.search('blob:'));

                              if (!(e.search('blob:') === 0)) {
                                _context4.next = 7;
                                break;
                              }

                              _context4.next = 4;
                              return urlToFile(e);

                            case 4:
                              img = _context4.sent;
                              uploadTask2 = _firebaseLoad.storage.ref("/colecao/".concat(id, "/imgs/").concat(title, "-").concat(i)).put(img);
                              uploadTask2.on('state_changed', function (snapshot) {
                                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
                                  ar.imgs.push(downloadURL2);
                                  console.log(imgs.length);
                                  console.log(index);

                                  if (index === imgs.length - 1) {
                                    if (ar != null) {
                                      console.log(ar);
                                      ar.imgs = ar.imgs.filter(function (e) {
                                        return e.search('blob:') === -1;
                                      });
                                      update({
                                        payload: {
                                          id: id,
                                          data: _objectSpread(_objectSpread({}, values), {}, {
                                            imgs: ar.imgs,
                                            imgsmall: ar.imgsmall
                                          })
                                        }
                                      }, {
                                        onSuccess: function onSuccess(_ref9) {
                                          var newRecord = _ref9.data;
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
                              return _context4.stop();
                          }
                        }
                      }, _callee4);
                    }));

                    return function (_x10, _x11) {
                      return _ref8.apply(this, arguments);
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
                        onSuccess: function onSuccess(_ref10) {
                          var newRecord = _ref10.data;
                          notify('ra.notification.updated', 'info', {
                            smart_count: 1
                          });
                          redirectTo(redirect, basePath, newRecord.id, newRecord);
                        }
                      });
                    }
                  }
                }

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x6, _x7) {
        return _ref4.apply(this, arguments);
      };
    }(), [update, notify, redirectTo, basePath, props.imgs, props.imgsmall]); // override handleSubmitWithRedirect with custom logic

    return /*#__PURE__*/_react["default"].createElement(_reactAdmin.SaveButton, (0, _extends2["default"])({}, props, {
      onSave: handleSave
    }));
  };

  var PostEditToolbar = function PostEditToolbar(props) {
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

  return /*#__PURE__*/_react["default"].createElement(_reactAdmin.Edit, props, /*#__PURE__*/_react["default"].createElement(_reactAdmin.SimpleForm, {
    toolbar: /*#__PURE__*/_react["default"].createElement(PostEditToolbar, {
      imgsmall: imgsmall,
      imgs: imgs
    })
  }, /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextInput, {
    disabled: true,
    source: "id"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextInput, {
    source: "title",
    label: "T\xEDtulo"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.TextInput, {
    multiline: true,
    source: "content",
    label: "Conte\xFAdo"
  }), /*#__PURE__*/_react["default"].createElement(_UrlPostEdit["default"], {
    validate: validateSmallImage,
    setImgState: setImgSmallState,
    removeImage: removeImg,
    source: "imgsmall",
    acceptMultiple: false,
    label: "Capa do post",
    placeholder: "Arraste a imagem at\xE9 aqui ou"
  }), /*#__PURE__*/_react["default"].createElement(_UrlPostEdit["default"], {
    validate: validateImages,
    setImgState: setImgsState,
    removeImage: removeImg,
    source: "imgs",
    acceptMultiple: true,
    label: "Imagens",
    placeholder: "Arraste as imagens at\xE9 aqui ou"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.DateInput, {
    source: "date",
    label: "Data"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.BooleanInput, {
    source: "published"
  }), /*#__PURE__*/_react["default"].createElement(_reactAdmin.DateInput, {
    disabled: true,
    source: "update_at",
    label: "Atualizado em"
  }), /*#__PURE__*/_react["default"].createElement(_core.Snackbar, {
    open: openMessage,
    autoHideDuration: 3000
  }, /*#__PURE__*/_react["default"].createElement(_lab.Alert, {
    severity: !success ? "error" : "success"
  }, message))));
};

exports.EditPost = EditPost;