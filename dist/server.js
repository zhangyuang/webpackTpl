module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry-server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dva_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dva/router */ "dva/router");
/* harmony import */ var dva_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
var App=/*#__PURE__*/function(_Component){Object(_Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App,_Component);function App(){Object(_Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,App);return Object(_Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(_Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this,arguments));}Object(_Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_6__["Switch"],null,_router__WEBPACK_IMPORTED_MODULE_7__["default"].map(function(_ref){var path=_ref.path,exact=_ref.exact,Component=_ref.component;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_6__["Route"],{key:path,path:path,exact:exact,component:Component});}));}}]);return App;}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/video/index.js":
/*!***************************************!*\
  !*** ./src/components/video/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dva */ "dva");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _video_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video.css */ "./src/components/video/video.css");
/* harmony import */ var _video_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_video_css__WEBPACK_IMPORTED_MODULE_7__);
var Video=/*#__PURE__*/function(_Component){Object(_Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Video,_Component);function Video(){Object(_Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,Video);return Object(_Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(_Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Video).apply(this,arguments));}Object(_Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Video,[{key:"componentDidMount",value:function componentDidMount(){this.initPlayer(this.props.videoArr);}},{key:"getVideo",value:function getVideo(){this.props.dispatch({type:'video/get',payload:{}});}},{key:"initPlayer",value:function initPlayer(videoArr){var _this=this;if(videoArr.length===0)return;videoArr.map(function(item){var vid=item.itemResult.item[1].preview.vid;if(!vid)return false;var config={id:'youku-player',vid:vid,client_id:'1c9aa3003b83b3b2',events:{onPlayStart:_this.wifiPlayH5,onAdPlayStart:_this.onPlayH5,onPlayEnd:_this.onPlayEnd,onMediaSrcOK:_this.onMediaSrcOK,onPlay:_this.onPlayH5,onReady:_this.onReadyH5}};var uiConfig={dash:{// 控制栏按钮隐藏配置
full:true// 是否隐藏全屏按钮
}};return window.YKPlayer.Player(vid,config,uiConfig);});}},{key:"componentDidUpdate",value:function componentDidUpdate(){// this.initPlayer(this.props.videoArr)
}},{key:"render",value:function render(){var videoArr=this.props.videoArr;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"videoContainer"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"playerWrap"},videoArr.map(function(item,index){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{key:"video".concat(index)},item.template.tag!=='PHONE_AD_B'?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"player",id:item.itemResult.item[1].preview.vid}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"player-footer"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"author"},item.itemResult.item[1].uploader.name.length>6?item.itemResult.item[1].uploader.name.slice(0,6)+'...':item.itemResult.item[1].uploader.name),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"comment"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{alt:"",className:"wifi-img",src:"https://img.alicdn.com/tfs/TB1.XkGkxTpK1RjSZR0XXbEwXXa-72-72.png"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",{className:"comment-count"},item.itemResult.item[1].comments.count)))):'');})));}}]);return Video;}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);var mapStateToProps=function mapStateToProps(state){return{videoArr:state.video.videoArr};};/* harmony default export */ __webpack_exports__["default"] = (Object(dva__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(Video));

/***/ }),

/***/ "./src/components/video/video.css":
/*!****************************************!*\
  !*** ./src/components/video/video.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/entry-server.js":
/*!*****************************!*\
  !*** ./src/entry-server.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dva */ "dva");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nunjucks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nunjucks */ "nunjucks");
/* harmony import */ var nunjucks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nunjucks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dva_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dva/router */ "dva/router");
/* harmony import */ var dva_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! koa-static */ "koa-static");
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/router */ "./src/router/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_13__);
var template=fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve('./dist/template.html'),'utf-8').toString();var app=new koa__WEBPACK_IMPORTED_MODULE_2___default.a();var serverRouter=new koa_router__WEBPACK_IMPORTED_MODULE_3___default.a();app.use(koa_static__WEBPACK_IMPORTED_MODULE_11___default()('dist'));var render=function render(ctx,next){var activeRoute=_src_router__WEBPACK_IMPORTED_MODULE_12__["default"].find(function(route){return Object(dva_router__WEBPACK_IMPORTED_MODULE_8__["matchPath"])(ctx.req.url,route);})||{};var promise=activeRoute.prefetch?activeRoute.prefetch(ctx.req.url):Promise.resolve();promise.then(function(data){var context={data:data// const stream = renderToNodeStream(
//   <StaticRouter location={ctx.req.url} context={context}>
//     <App />
//   </StaticRouter>
// )
// let html = ''
// stream.pipe(html, { end: 'false' })
// // 当React渲染结束后，发送剩余的HTML部分给浏览器
// stream.on('end', () => {
//   const htmlStr = template.replace('<!--react-ssr-outlet-->', `<div id='app'>${JSON.stringify(html)}</div>`)
//     .replace('<!--react-ssr-inject-->', ` <script>window.__INITIAL_DATA__ = ${serialize(data) || ''}</script>`)
//   // 将渲染后的html字符串发送给客户端
//   console.log(htmlStr)
//   ctx.res.end(htmlStr)
// })
};var history=Object(history__WEBPACK_IMPORTED_MODULE_13__["createMemoryHistory"])({initialEntries:[ctx.req.url]});var serverApp=dva__WEBPACK_IMPORTED_MODULE_5___default()({history:history,initialState:{video:{videoArr:data||[]}}});serverApp.model(__webpack_require__(/*! ./model/video */ "./src/model/video.js").default);serverApp.router(function(history){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_8__["StaticRouter"],{location:ctx.req.url,context:context},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_10__["default"],null));});var start=serverApp.start();var markup=Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__["renderToString"])(start());console.log(markup);var html=nunjucks__WEBPACK_IMPORTED_MODULE_7___default.a.renderString(template,{data:serialize_javascript__WEBPACK_IMPORTED_MODULE_9___default()(data),markup:markup});// 将渲染后的html字符串发送给客户端
ctx.res.end(html);next();}).catch(function(err){console.log('err',err);});};serverRouter.get('*',render);app.use(serverRouter.routes()).use(serverRouter.allowedMethods());app.onerror=function(err){console.log('err',err);};app.listen(3000,function(){console.log('Your app is running on 3000');});

/***/ }),

/***/ "./src/mock/video.js":
/*!***************************!*\
  !*** ./src/mock/video.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var video=[{'itemResult':{'item':{'1':{'preview':{'vid':'XMzgzOTcxOTIwNA=='},'uploader':{'name':'蚀日风暴'},'comments':{'count':0}}}},'template':{'tag':'PHONE_FEED_OGC_SURROUND_SINGLE'}},{'itemResult':{'item':{'1':{'preview':{'vid':'XMzkxNTkwMjAwNA=='},'uploader':{'name':'潮十八'},'comments':{'count':0}}}},'template':{'tag':'PHONE_FEED_OGC_SURROUND_SINGLE'}},{'itemResult':{'item':{'1':{'preview':{'vid':'XMzkxMzY4NzIwNA=='},'uploader':{'name':'北京电视台'},'comments':{'count':0}}}},'template':{'tag':'PHONE_FEED_OGC_SURROUND_SINGLE'}},{'itemResult':{'item':{'1':{'preview':{'vid':'XMzkzMTI1NTgwNA=='},'uploader':{'name':'电视剧我的保姆手册'},'comments':{'count':0}}}},'template':{'tag':'PHONE_FEED_OGC_SURROUND_SINGLE'}},{'itemResult':{'item':{'1':{'preview':{'vid':'XMzk0NDk3NzQwNA=='},'uploader':{'name':'火星情报局'},'comments':{'count':0}}}},'template':{'tag':'PHONE_FEED_OGC_SURROUND_SINGLE'}},{'itemResult':{'item':{'1':{'preview':{'vid':'XMzkxODc5MDQwNA=='},'uploader':{'name':'大剧刀叨'},'comments':{'count':0}}}},'template':{'tag':'PHONE_FEED_OGC_SURROUND_SINGLE'}},{'itemResult':{'item':{'1':{'preview':{'vid':'XMzg1ODI4OTgwNA=='},'uploader':{'name':'《这！就是灌篮》'},'comments':{'count':0}}}},'template':{'tag':'PHONE_FEED_OGC_SURROUND_SINGLE'}}];/* harmony default export */ __webpack_exports__["default"] = (video);

/***/ }),

/***/ "./src/model/video.js":
/*!****************************!*\
  !*** ./src/model/video.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _services_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/video */ "./src/services/video.js");
/* harmony default export */ __webpack_exports__["default"] = ({namespace:'video',state:{videoArr:[]},reducers:{saveVideo:function saveVideo(state,action){return Object(_Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({},state,action.payload);}},effects:{get:/*#__PURE__*/_Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function get(_ref,_ref2){var payload,call,put,videoArr;return _Users_zhangyuang_Desktop_github_bigview_react_ssr_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function get$(_context){while(1){switch(_context.prev=_context.next){case 0:payload=_ref.payload;call=_ref2.call,put=_ref2.put;_context.next=4;return call(_services_video__WEBPACK_IMPORTED_MODULE_2__["getVideo"]);case 4:videoArr=_context.sent;_context.next=7;return put({type:'saveVideo',payload:{videoArr:videoArr}});case 7:case"end":return _context.stop();}}},get,this);})}});

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/video */ "./src/components/video/index.js");
/* harmony import */ var _services_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/video */ "./src/services/video.js");
var routes=[{path:'/',exact:true,component:_components_video__WEBPACK_IMPORTED_MODULE_0__["default"],prefetch:_services_video__WEBPACK_IMPORTED_MODULE_1__["getVideo"]}];/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/services/video.js":
/*!*******************************!*\
  !*** ./src/services/video.js ***!
  \*******************************/
/*! exports provided: getVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideo", function() { return getVideo; });
/* harmony import */ var _mock_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/video */ "./src/mock/video.js");
var getVideo=function getVideo(){return Promise.resolve(_mock_video__WEBPACK_IMPORTED_MODULE_0__["default"]);};

/***/ }),

/***/ "dva":
/*!**********************!*\
  !*** external "dva" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dva");

/***/ }),

/***/ "dva/router":
/*!*****************************!*\
  !*** external "dva/router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dva/router");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),

/***/ "nunjucks":
/*!***************************!*\
  !*** external "nunjucks" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nunjucks");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map