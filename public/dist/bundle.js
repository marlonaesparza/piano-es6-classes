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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/App.js */ \"./src/scripts/App.js\");\n/* harmony import */ var _scripts_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/config.js */ \"./src/scripts/config.js\");\n\n\nvar root = document.getElementById(\"root\");\nvar app = new _scripts_App_js__WEBPACK_IMPORTED_MODULE_0__.default(\"marlon\", _scripts_config_js__WEBPACK_IMPORTED_MODULE_1__.samples, _scripts_config_js__WEBPACK_IMPORTED_MODULE_1__.colors).render();\nroot.appendChild(app);\n\n//# sourceURL=webpack://word-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/scripts/App.js":
/*!****************************!*\
  !*** ./src/scripts/App.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _KeyboardOfLetters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyboardOfLetters.js */ \"./src/scripts/KeyboardOfLetters.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App(word, samples, colors) {\n    _classCallCheck(this, App);\n\n    this.state = {\n      word: word,\n      samples: samples,\n      colors: colors\n    };\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var appContainer = document.createElement(\"div\");\n      var keyboardContainer = (0,_KeyboardOfLetters_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.state);\n      var containerStyle = appContainer.style;\n      appContainer.appendChild(keyboardContainer);\n      appContainer.className = \"app-container\";\n      containerStyle.margin = \"auto\";\n      containerStyle.display = \"grid\";\n      containerStyle.placeContent = \"center\";\n      return appContainer;\n    }\n  }]);\n\n  return App;\n}();\n\n\n;\n\n//# sourceURL=webpack://word-keyboard/./src/scripts/App.js?");

/***/ }),

/***/ "./src/scripts/KeyboardOfLetters.js":
/*!******************************************!*\
  !*** ./src/scripts/KeyboardOfLetters.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _LetterElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LetterElement.js */ \"./src/scripts/LetterElement.js\");\n\n\nvar KeyboardOfLetters = function KeyboardOfLetters(props) {\n  var word = props.word,\n      samples = props.samples,\n      colors = props.colors;\n  var keyboardContainer = document.createElement(\"div\");\n  var keyboardStyle = keyboardContainer.style;\n  keyboardContainer.className = \"keyboard-container\";\n  keyboardStyle.marign = \"auto\";\n  keyboardStyle.display = \"grid\";\n  keyboardStyle.gridTemplateColumns = \"repeat(\".concat(word.length || 1, \", 1fr)\");\n  keyboardStyle.placeContent = \"center\";\n\n  for (var i = 0; i < word.length; i++) {\n    var letter = word[i];\n    var audio = new Audio();\n    audio.src = samples[i];\n    var randColorIdx = Math.floor(Math.random() * (colors.length - 1 - 0 + 1) + 0);\n    var color = colors[randColorIdx] || \"black\";\n    var letterContainer = new _LetterElement_js__WEBPACK_IMPORTED_MODULE_0__.default(letter, audio, color).render();\n    keyboardContainer.appendChild(letterContainer);\n  }\n\n  ;\n  return keyboardContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyboardOfLetters);\n\n//# sourceURL=webpack://word-keyboard/./src/scripts/KeyboardOfLetters.js?");

/***/ }),

/***/ "./src/scripts/LetterElement.js":
/*!**************************************!*\
  !*** ./src/scripts/LetterElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LetterElement)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LetterElement = /*#__PURE__*/function () {\n  function LetterElement(letter, audio, color) {\n    _classCallCheck(this, LetterElement);\n\n    this.state = {\n      audio: audio,\n      color: color,\n      letter: letter\n    };\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  _createClass(LetterElement, [{\n    key: \"handleClick\",\n    value: function handleClick(e) {\n      console.log(this.state);\n      console.log(this.state.audio);\n      this.state.audio.play();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var letterContainer = document.createElement(\"div\");\n      var letterSpan = document.createElement(\"span\");\n      var letterNode = document.createTextNode(this.state.letter);\n      var containerStyle = letterContainer.style;\n      var spanStyle = letterSpan.style;\n      letterContainer.appendChild(letterSpan);\n      letterContainer.classname = \"letter-container\";\n      containerStyle.margin = \"auto\";\n      containerStyle.diplay = \"grid\";\n      containerStyle.gridTemplateColumns = \"1fr\";\n      containerStyle.placeContent = \"center\";\n      letterSpan.appendChild(letterNode);\n      spanStyle.color = \"\".concat(this.state.color);\n      spanStyle.fontSize = \"6em\";\n      spanStyle.fontWeight = \"bolder\";\n      spanStyle.cursor = \"pointer\";\n      letterSpan.addEventListener('click', this.handleClick);\n      return letterContainer;\n    }\n  }]);\n\n  return LetterElement;\n}();\n\n\n;\n\n//# sourceURL=webpack://word-keyboard/./src/scripts/LetterElement.js?");

/***/ }),

/***/ "./src/scripts/config.js":
/*!*******************************!*\
  !*** ./src/scripts/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"samples\": () => (/* binding */ samples),\n/* harmony export */   \"colors\": () => (/* binding */ colors)\n/* harmony export */ });\n// Piano Samples\nvar samples = [\"piano-sounds/a-note.wav\", \"piano-sounds/c-note.wav\", \"piano-sounds/d-note.wav\", \"piano-sounds/e-note.wav\", \"piano-sounds/f-note.wav\", \"piano-sounds/g-note.wav\"];\nvar colors = [\"AliceBlue\", \"AntiqueWhite\", \"Aqua\", \"Aquamarine\", \"Azure\", \"Beige\", \"Bisque\", \"Black\", \"BlanchedAlmond\", \"Blue\", \"BlueViolet\", \"Brown\", \"BurlyWood\", \"CadetBlue\", \"Chartreuse\", \"Chocolate\", \"Coral\", \"CornflowerBlue\", \"Cornsilk\", \"Crimson\", \"Cyan\", \"DarkBlue\", \"DarkCyan\", \"DarkGoldenRod\", \"DarkGray\", \"DarkGrey\", \"DarkGreen\", \"DarkKhaki\", \"DarkMagenta\", \"DarkOliveGreen\", \"DarkOrange\", \"DarkOrchid\", \"DarkRed\", \"DarkSalmon\", \"DarkSeaGreen\", \"DarkSlateBlue\", \"DarkSlateGray\", \"DarkSlateGrey\", \"DarkTurquoise\", \"DarkViolet\", \"DeepPink\", \"DeepSkyBlue\", \"DimGray\", \"DimGrey\", \"DodgerBlue\", \"FireBrick\", \"FloralWhite\", \"ForestGreen\", \"Fuchsia\", \"Gainsboro\", \"GhostWhite\", \"Gold\", \"GoldenRod\", \"Gray\", \"Grey\", \"Green\", \"GreenYellow\", \"HoneyDew\", \"HotPink\", \"IndianRed\", \"Indigo\", \"Ivory\", \"Khaki\", \"Lavender\", \"LavenderBlush\", \"LawnGreen\", \"LemonChiffon\", \"LightBlue\", \"LightCoral\", \"LightCyan\", \"LightGoldenRodYellow\", \"LightGray\", \"LightGrey\", \"LightGreen\", \"LightPink\", \"LightSalmon\", \"LightSeaGreen\", \"LightSkyBlue\", \"LightSlateGray\", \"LightSlateGrey\", \"LightSteelBlue\", \"LightYellow\", \"Lime\", \"LimeGreen\", \"Linen\", \"Magenta\", \"Maroon\", \"MediumAquaMarine\", \"MediumBlue\", \"MediumOrchid\", \"MediumPurple\", \"MediumSeaGreen\", \"MediumSlateBlue\", \"MediumSpringGreen\", \"MediumTurquoise\", \"MediumVioletRed\", \"MidnightBlue\", \"MintCream\", \"MistyRose\", \"Moccasin\", \"NavajoWhite\", \"Navy\", \"OldLace\", \"Olive\", \"OliveDrab\", \"Orange\", \"OrangeRed\", \"Orchid\", \"PaleGoldenRod\", \"PaleGreen\", \"PaleTurquoise\", \"PaleVioletRed\", \"PapayaWhip\", \"PeachPuff\", \"Peru\", \"Pink\", \"Plum\", \"PowderBlue\", \"Purple\", \"RebeccaPurple\", \"Red\", \"RosyBrown\", \"RoyalBlue\", \"SaddleBrown\", \"Salmon\", \"SandyBrown\", \"SeaGreen\", \"SeaShell\", \"Sienna\", \"Silver\", \"SkyBlue\", \"SlateBlue\", \"SlateGray\", \"SlateGrey\", \"Snow\", \"SpringGreen\", \"SteelBlue\", \"Tan\", \"Teal\", \"Thistle\", \"Tomato\", \"Turquoise\", \"Violet\", \"Wheat\", \"White\", \"WhiteSmoke\", \"Yellow\", \"YellowGreen\"];\n\n//# sourceURL=webpack://word-keyboard/./src/scripts/config.js?");

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