/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (() => {

eval("\"body {\\n  width: 100%;\\n  color: red;\\n}\"\n\n//# sourceURL=webpack://webpackloader/./src/index.css?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"a\": () => (/* binding */ a)\n/* harmony export */ });\nconst a = {\n  b: Alice\n};\na.a = a;\n\n\n\n//# sourceURL=webpack://webpackloader/./src/app.js?");

/***/ }),

/***/ "./src/customComp.js":
/*!***************************!*\
  !*** ./src/customComp.js ***!
  \***************************/
/***/ (() => {

eval("\nfunction updateStyle(elem) {\n  var shadow = elem.shadowRoot;\n  var childNodes = shadow.childNodes;\n  for(var i = 0; i < childNodes.length; i++) {\n    if(childNodes[i].nodeName === 'STYLE') {\n      childNodes[i].textContent = 'div {' +\n                          ' width: ' + elem.getAttribute('l') + 'px;' +\n                          ' height: ' + elem.getAttribute('l') + 'px;' +\n                          ' background-color: ' + elem.getAttribute('c');\n    }\n  }\n}\n\nclass PopUpInfo extends HTMLElement {\n  static get observedAttributes() {return ['img']; }\n  constructor() {\n    // 必须首先调用 super方法\n    super();\n  }\n  connectedCallback() {\n    // 元素的具体功能写在下面\n    var shadow = this.attachShadow({mode: 'open'});\n    var wrapper = document.createElement('span');\n    wrapper.setAttribute('class','wrapper');\n    var icon = document.createElement('span');\n    icon.setAttribute('class','icon');\n    icon.setAttribute('tabindex', 0);\n    var info = document.createElement('span');\n    info.setAttribute('class','info');\n\n    // 获取属性的内容并将内容添加到 info 元素内\n    var text = this.getAttribute('text');\n    info.textContent = text;\n\n    // 插入 icon\n    var imgUrl;\n    if(this.hasAttribute('img')) {\n      imgUrl = this.getAttribute('img');\n    } else {\n      imgUrl = 'img/default.png';\n    }\n    var img = document.createElement('img');\n    img.src = imgUrl;\n    icon.appendChild(img);\n    var style = document.createElement('style');\n\n    style.textContent = `\n    .wrapper {\n      position: relative;\n    }\n\n    .info {\n      font-size: 0.8rem;\n      width: 200px;\n      display: inline-block;\n      border: 1px solid black;\n      padding: 10px;\n      background: white;\n      border-radius: 10px;\n      opacity: 0;\n      transition: 0.6s all;\n      position: absolute;\n      bottom: 20px;\n      left: 10px;\n      z-index: 3;\n    }\n\n    img {\n      width: 1.2rem;\n    }\n\n    .icon:hover + .info, .icon:focus + .info {\n      opacity: 1;\n    }`;\n    shadow.appendChild(style);\n    shadow.appendChild(wrapper);\n    wrapper.appendChild(icon);\n    wrapper.appendChild(info);\n    updateStyle(this);\n  }\n  disconnectedCallback() {\n    console.log('Custom square element removed from page.');\n  }\n  \n  adoptedCallback() {\n    console.log('Custom square element moved to new page.');\n  }\n  attributeChangedCallback(name, oldValue, newValue) {\n    console.log(1)\n    console.log(name)\n    console.log(oldValue)\n    console.log(newValue)\n  }\n}\n\ncustomElements.define('popup-info', PopUpInfo);\n\n//# sourceURL=webpack://webpackloader/./src/customComp.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _customComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customComp */ \"./src/customComp.js\");\n/* harmony import */ var _customComp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_customComp__WEBPACK_IMPORTED_MODULE_2__);\n// import React from 'react';\n// import ReactDom from 'react-dom';\n\n\n\n\n\nconst root = document.getElementById('root');\nconst shadow = root.attachShadow({mode: 'open'})\nconst div = document.createElement('div');\n\nconst customComp = document.createElement(\"popup-info\")\ncustomComp.setAttribute('img', '//www.baidu.com/img/flexible/logo/pc/result.png');\ncustomComp.setAttribute('text', 'Your card validation code (CVC) is an extra security feature — it is the last 3 or 4 numbers on the back of your card.Alice');\n\nconsole.log(_app_js__WEBPACK_IMPORTED_MODULE_0__.a)\nshadow.appendChild(customComp);\nconsole.log(document.getElementById('element-details-template').content);\n\n\n//# sourceURL=webpack://webpackloader/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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