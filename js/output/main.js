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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_map_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/map/map */ \"./js/src/map/map.js\");\n/* harmony import */ var _src_buttonWatch_buttunWatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/buttonWatch/buttunWatch.js */ \"./js/src/buttonWatch/buttunWatch.js\");\n/* harmony import */ var _src_buttonWatch_buttunWatch_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_buttonWatch_buttunWatch_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_buttons_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/buttons/buttons */ \"./js/src/buttons/buttons.js\");\n/* harmony import */ var _src_buttons_marker_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/buttons/marker/marker */ \"./js/src/buttons/marker/marker.js\");\n/* harmony import */ var _src_controls_scale_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/controls/scale/scale */ \"./js/src/controls/scale/scale.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/src/buttonWatch/buttunWatch.js":
/*!*******************************************!*\
  !*** ./js/src/buttonWatch/buttunWatch.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let buttonMode = document.getElementsByClassName('mapEditor__headerEditor__mode')[0];\r\nlet buttonsContainer = document.getElementsByClassName('mapEditor__headerEditor__buttons')[0];\r\nlet buttons =  document.getElementsByClassName('mapEditor__headerEditor__buttons ')[0].children;\r\n\r\n\r\n\r\nbuttonMode.addEventListener('click', function () {\r\n    if (buttonMode.innerHTML === 'Edit') {\r\n\r\n        buttonsContainer.style.display = 'flex';\r\n        buttonMode.innerHTML = 'Back to watch';\r\n\r\n    }else {\r\n\r\n        buttonsContainer.style.display = 'none';\r\n        buttonMode.innerHTML = 'Edit';\r\n\r\n        for (let button of buttons) {\r\n            button.classList.remove('mapEditor__headerEditor__buttons__shadow')\r\n        }\r\n\r\n    }\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/src/buttonWatch/buttunWatch.js?");

/***/ }),

/***/ "./js/src/buttons/buttonOk/buttonOk.js":
/*!*********************************************!*\
  !*** ./js/src/buttons/buttonOk/buttonOk.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _marker_closeEditorMarker_closeEditorMarker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../marker/closeEditorMarker/closeEditorMarker */ \"./js/src/buttons/marker/closeEditorMarker/closeEditorMarker.js\");\n/* harmony import */ var _states_varible_varebles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../states/varible/varebles */ \"./js/src/states/varible/varebles.js\");\n/* harmony import */ var _marker_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../marker/marker */ \"./js/src/buttons/marker/marker.js\");\n\r\n\r\n\r\n\r\n\r\n_states_varible_varebles__WEBPACK_IMPORTED_MODULE_1__[\"buttonOk\"].addEventListener('click', function (event) {\r\n    Object(_marker_closeEditorMarker_closeEditorMarker__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    _marker_marker__WEBPACK_IMPORTED_MODULE_2__[\"marker\"].bindPopup('<div class=\"popUp\"><div>name: ' + _states_varible_varebles__WEBPACK_IMPORTED_MODULE_1__[\"inputName\"].value + '</div><div>description: ' + _states_varible_varebles__WEBPACK_IMPORTED_MODULE_1__[\"inputDescription\"].value + '</div></div>');\r\n})\n\n//# sourceURL=webpack:///./js/src/buttons/buttonOk/buttonOk.js?");

/***/ }),

/***/ "./js/src/buttons/buttons.js":
/*!***********************************!*\
  !*** ./js/src/buttons/buttons.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _states_varible_varebles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/varible/varebles */ \"./js/src/states/varible/varebles.js\");\n\r\n\r\n\r\n\r\nfor (let button of _states_varible_varebles__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"]) {\r\n    button.addEventListener('click', function () {\r\n\r\n        let buttonShadow = button.classList.contains('mapEditor__headerEditor__buttons__shadow');\r\n\r\n        if (buttonShadow) {\r\n\r\n            button.classList.remove('mapEditor__headerEditor__buttons__shadow');\r\n            _states_varible_varebles__WEBPACK_IMPORTED_MODULE_0__[\"mapElement\"].style.cursor = 'grab';\r\n            _states_varible_varebles__WEBPACK_IMPORTED_MODULE_0__[\"editorMarker\"].style.display = 'none';\r\n\r\n        } else {\r\n\r\n            button.classList.add('mapEditor__headerEditor__buttons__shadow');\r\n            _states_varible_varebles__WEBPACK_IMPORTED_MODULE_0__[\"mapElement\"].style.cursor = 'pointer';\r\n\r\n            for (let btn of _states_varible_varebles__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"]) {\r\n\r\n                if (btn === button) {\r\n                    continue;\r\n                }else {\r\n\r\n                    btn.classList.remove('mapEditor__headerEditor__buttons__shadow')\r\n\r\n                }\r\n            }\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack:///./js/src/buttons/buttons.js?");

/***/ }),

/***/ "./js/src/buttons/marker/closeEditorMarker/closeEditorMarker.js":
/*!**********************************************************************!*\
  !*** ./js/src/buttons/marker/closeEditorMarker/closeEditorMarker.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return closeEditorMarker; });\n/* harmony import */ var _states_varible_varebles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../states/varible/varebles */ \"./js/src/states/varible/varebles.js\");\n\r\n\r\n\r\n\r\nfunction closeEditorMarker() {\r\n\r\n    _states_varible_varebles__WEBPACK_IMPORTED_MODULE_0__[\"editorMarker\"].style.display = 'none';\r\n    _states_varible_varebles__WEBPACK_IMPORTED_MODULE_0__[\"buttonMarker\"].classList.remove('mapEditor__headerEditor__buttons__shadow');\r\n\r\n}\n\n//# sourceURL=webpack:///./js/src/buttons/marker/closeEditorMarker/closeEditorMarker.js?");

/***/ }),

/***/ "./js/src/buttons/marker/marker.js":
/*!*****************************************!*\
  !*** ./js/src/buttons/marker/marker.js ***!
  \*****************************************/
/*! exports provided: marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"marker\", function() { return marker; });\n/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../map/map */ \"./js/src/map/map.js\");\n/* harmony import */ var _buttonOk_buttonOk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttonOk/buttonOk */ \"./js/src/buttons/buttonOk/buttonOk.js\");\n/* harmony import */ var _openEditorMarker_openEditorMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openEditorMarker/openEditorMarker */ \"./js/src/buttons/marker/openEditorMarker/openEditorMarker.js\");\n/* harmony import */ var _states_varible_varebles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../states/varible/varebles */ \"./js/src/states/varible/varebles.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet marker;\r\n\r\nlet markerIsOpen = false;\r\n_map_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addEventListener('click', function (event) {\r\n\r\n    if (_states_varible_varebles__WEBPACK_IMPORTED_MODULE_3__[\"buttonMarker\"].classList.contains('mapEditor__headerEditor__buttons__shadow') && _states_varible_varebles__WEBPACK_IMPORTED_MODULE_3__[\"editorMarker\"].style.display === 'none') {\r\n\r\n        Object(_openEditorMarker_openEditorMarker__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event.latlng);\r\n        marker = L.marker(event.latlng).addTo(_map_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n    }else if (true){\r\n\r\n\r\n    }else {}\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/src/buttons/marker/marker.js?");

/***/ }),

/***/ "./js/src/buttons/marker/openEditorMarker/openEditorMarker.js":
/*!********************************************************************!*\
  !*** ./js/src/buttons/marker/openEditorMarker/openEditorMarker.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return openEditorMarker; });\n/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../map/map */ \"./js/src/map/map.js\");\n/* harmony import */ var _states_varible_varebles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../states/varible/varebles */ \"./js/src/states/varible/varebles.js\");\n\r\n\r\n\r\n\r\n\r\nfunction openEditorMarker(latlng) {\r\n\r\n    _states_varible_varebles__WEBPACK_IMPORTED_MODULE_1__[\"editorMarker\"].style.display = 'flex';\r\n    _states_varible_varebles__WEBPACK_IMPORTED_MODULE_1__[\"inputLat\"].value = latlng.lat;\r\n    _states_varible_varebles__WEBPACK_IMPORTED_MODULE_1__[\"inputLng\"].value = latlng.lng;\r\n    _states_varible_varebles__WEBPACK_IMPORTED_MODULE_1__[\"buttonMarker\"].classList.add('mapEditor__headerEditor__buttons__shadow');\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./js/src/buttons/marker/openEditorMarker/openEditorMarker.js?");

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

/***/ }),

/***/ "./js/src/states/varible/varebles.js":
/*!*******************************************!*\
  !*** ./js/src/states/varible/varebles.js ***!
  \*******************************************/
/*! exports provided: editorMarker, buttonMarker, buttonOk, mapElement, buttons, inputName, inputDescription, inputLat, inputLng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editorMarker\", function() { return editorMarker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonMarker\", function() { return buttonMarker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonOk\", function() { return buttonOk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapElement\", function() { return mapElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttons\", function() { return buttons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputName\", function() { return inputName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputDescription\", function() { return inputDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputLat\", function() { return inputLat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputLng\", function() { return inputLng; });\n/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../map/map */ \"./js/src/map/map.js\");\n\r\n\r\nlet editorMarker = document.getElementsByClassName('mapEditor__marker')[0];\r\nlet buttonMarker = document.getElementsByClassName('mapEditor__headerEditor__buttons__marker')[0];\r\nlet buttonOk = document.getElementsByClassName('mapEditor__marker__button')[0];\r\nlet mapElement = _map_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getContainer();\r\nlet buttons =  document.getElementsByClassName('mapEditor__headerEditor__buttons ')[0].children;\r\nlet inputName = document.getElementsByClassName('mapEditor__marker__name')[0];\r\nlet inputDescription = document.getElementsByClassName('mapEditor__marker__description')[0];\r\nlet inputLat = document.getElementsByClassName('mapEditor__marker__latitude')[0];\r\nlet inputLng = document.getElementsByClassName('mapEditor__marker__longitude')[0];\n\n//# sourceURL=webpack:///./js/src/states/varible/varebles.js?");

/***/ })

/******/ });