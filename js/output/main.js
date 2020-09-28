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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_map_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/map/map */ \"./js/src/map/map.js\");\n/* harmony import */ var _src_buttonWatch_buttunWatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/buttonWatch/buttunWatch.js */ \"./js/src/buttonWatch/buttunWatch.js\");\n/* harmony import */ var _src_buttonWatch_buttunWatch_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_buttonWatch_buttunWatch_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_buttons_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/buttons/buttons */ \"./js/src/buttons/buttons.js\");\n/* harmony import */ var _src_buttons_buttons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_buttons_buttons__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_buttons_marker_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/buttons/marker/marker */ \"./js/src/buttons/marker/marker.js\");\n/* harmony import */ var _src_controls_scale_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/controls/scale/scale */ \"./js/src/controls/scale/scale.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//\r\n// // var map = L.map('map',{drawControl: true}).setView([55.7522, 37.6156], 13);\r\n// // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {\r\n// //     attribution: '&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\r\n// // }).addTo(map);\r\n// //\r\n// //\r\n// // // FeatureGroup is to store editable layers\r\n// // var drawnItems = new L.FeatureGroup();\r\n// // map.addLayer(drawnItems);\r\n// // var drawControl = new L.Control.Draw({\r\n// //     edit: {\r\n// //         featureGroup: drawnItems\r\n// //     }\r\n// // });\r\n// // map.addControl(drawControl);\r\n//\r\n//\r\n//\r\n// var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\r\n//     osmAttrib = '&copy; <a href=\"http://openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\r\n//     osm = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib }),\r\n//     map = new L.Map('map', { center: new L.LatLng(51.505, -0.04), zoom: 13 }),\r\n//     drawnItems = L.featureGroup().addTo(map);\r\n// L.control.layers({\r\n//     'osm': osm.addTo(map),\r\n//     \"google\": L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {\r\n//         attribution: 'google'\r\n//     })\r\n// }, { 'drawlayer': drawnItems }, { position: 'topleft', collapsed: false }).addTo(map);\r\n// map.addControl(new L.Control.Draw({\r\n//     edit: {\r\n//         featureGroup: drawnItems,\r\n//         poly: {\r\n//             allowIntersection: false\r\n//         }\r\n//     },\r\n//     draw: {\r\n//         polygon: {\r\n//             allowIntersection: false,\r\n//             showArea: true\r\n//         }\r\n//     }\r\n// }));\r\n//\r\n// map.on(L.Draw.Event.CREATED, function (event) {\r\n//     var layer = event.layer;\r\n//\r\n//     drawnItems.addLayer(layer);\r\n// });\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/src/buttonWatch/buttunWatch.js":
/*!*******************************************!*\
  !*** ./js/src/buttonWatch/buttunWatch.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let buttonMode = document.getElementsByClassName('mapEditor__headerEditor__mode')[0];\r\nlet buttonsContainer = document.getElementsByClassName('mapEditor__headerEditor__buttons')[0];\r\n\r\n\r\n\r\nbuttonMode.addEventListener('click', function (e) {\r\n    if (buttonMode.innerHTML === 'Edit') {\r\n        buttonsContainer.style.display = 'flex';\r\n        buttonMode.innerHTML = 'Back to watch';\r\n    }else {\r\n        buttonsContainer.style.display = 'none';\r\n        buttonMode.innerHTML = 'Edit';\r\n    }\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/src/buttonWatch/buttunWatch.js?");

/***/ }),

/***/ "./js/src/buttons/buttons.js":
/*!***********************************!*\
  !*** ./js/src/buttons/buttons.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let buttons =  document.getElementsByClassName('mapEditor__headerEditor__buttons ')[0].children;\r\n\r\nfor (let button of buttons) {\r\n    button.addEventListener('click', function () {\r\n\r\n        let buttonShadow = button.classList.contains('mapEditor__headerEditor__buttons__shadow');\r\n\r\n        if (buttonShadow) {\r\n\r\n            button.classList.remove('mapEditor__headerEditor__buttons__shadow');\r\n\r\n        } else {\r\n\r\n            button.classList.add('mapEditor__headerEditor__buttons__shadow');\r\n\r\n            for (let btn of buttons) {\r\n\r\n                if (btn === button) {\r\n                    continue;\r\n                }else {\r\n\r\n                    btn.classList.remove('mapEditor__headerEditor__buttons__shadow')\r\n\r\n                }\r\n            }\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack:///./js/src/buttons/buttons.js?");

/***/ }),

/***/ "./js/src/buttons/marker/marker.js":
/*!*****************************************!*\
  !*** ./js/src/buttons/marker/marker.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../map/map */ \"./js/src/map/map.js\");\n\r\nlet buttonMarker = document.getElementsByClassName('mapEditor__headerEditor__buttons__marker')[0];\r\n\r\n_map_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addEventListener('click', function (event) {\r\n    if (buttonMarker.classList.contains('mapEditor__headerEditor__buttons__shadow')) {\r\n        L.marker(event.latlng).addTo(_map_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack:///./js/src/buttons/marker/marker.js?");

/***/ }),

/***/ "./js/src/controls/scale/scale.js":
/*!****************************************!*\
  !*** ./js/src/controls/scale/scale.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../map/map */ \"./js/src/map/map.js\");\n\r\nlet scale = L.control.scale().addTo(_map_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nscale.maxWidth = 1000;\r\nscale.getContainer().children[0].style.fontSize = '20px';\r\nscale.getContainer().children[1].style.fontSize = '20px';\n\n//# sourceURL=webpack:///./js/src/controls/scale/scale.js?");

/***/ }),

/***/ "./js/src/map/map.js":
/*!***************************!*\
  !*** ./js/src/map/map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n let map = L.map('map').setView([55.7522, 37.6156], 13);\r\n\r\n L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n     attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\r\n     zoomControl: true,\r\n     attributionControl: true,\r\n     minZoom: 3,\r\n     dragging: false\r\n }).addTo(map);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (map);\n\n//# sourceURL=webpack:///./js/src/map/map.js?");

/***/ })

/******/ });