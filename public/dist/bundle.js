/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/App.js */ \"./src/scripts/App.js\");\n/* harmony import */ var _scripts_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/config.js */ \"./src/scripts/config.js\");\n\n\nvar root = document.getElementById(\"root\");\nvar app = new _scripts_App_js__WEBPACK_IMPORTED_MODULE_0__.default(\"marlon\", _scripts_config_js__WEBPACK_IMPORTED_MODULE_1__.samples).render();\nroot.appendChild(app);\n\n//# sourceURL=webpack://word-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/scripts/App.js":
/*!****************************!*\
  !*** ./src/scripts/App.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _LetterElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LetterElement.js */ \"./src/scripts/LetterElement.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App(word, samples) {\n    _classCallCheck(this, App);\n\n    this.state = {\n      word: word,\n      samples: samples\n    };\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var appContainer = document.createElement(\"div\");\n\n      for (var i = 0; i < this.state.word.length; i++) {\n        var letter = this.state.word[i];\n        var audio = new Audio();\n        console.log(this.state.samples[i]);\n        audio.src = this.state.samples[i];\n        var letterContainer = new _LetterElement_js__WEBPACK_IMPORTED_MODULE_0__.default(letter, audio, \"black\").render();\n        appContainer.appendChild(letterContainer);\n      }\n\n      ;\n      return appContainer;\n    }\n  }]);\n\n  return App;\n}();\n\n\n;\n\n//# sourceURL=webpack://word-keyboard/./src/scripts/App.js?");

/***/ }),

/***/ "./src/scripts/LetterElement.js":
/*!**************************************!*\
  !*** ./src/scripts/LetterElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LetterButton)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LetterButton = /*#__PURE__*/function () {\n  function LetterButton(letter, audio, color) {\n    _classCallCheck(this, LetterButton);\n\n    this.state = {\n      audio: audio,\n      color: color,\n      letter: letter\n    };\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  _createClass(LetterButton, [{\n    key: \"handleClick\",\n    value: function handleClick(e) {\n      console.log(this.state);\n      console.log(this.state.audio);\n      this.state.audio.play();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var letterContainer = document.createElement(\"div\");\n      var letterSpan = document.createElement(\"span\");\n      var letterNode = document.createTextNode(this.state.letter);\n      letterSpan.appendChild(letterNode);\n      letterSpan.addEventListener('click', this.handleClick);\n      letterContainer.appendChild(letterSpan);\n      return letterContainer;\n    }\n  }]);\n\n  return LetterButton;\n}();\n\n\n;\n\n//# sourceURL=webpack://word-keyboard/./src/scripts/LetterElement.js?");

/***/ }),

/***/ "./src/scripts/config.js":
/*!*******************************!*\
  !*** ./src/scripts/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"samples\": () => (/* binding */ samples)\n/* harmony export */ });\n// Piano Samples\nvar samples = [\"piano-sounds/c-note.wav\", \"piano-sounds/d-note.wav\", \"piano-sounds/e-note.wav\", \"piano-sounds/f-note.wav\", \"piano-sounds/g-note.wav\"];\n\n//# sourceURL=webpack://word-keyboard/./src/scripts/config.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;