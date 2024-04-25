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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('16 may 2024');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('active-menu');\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = (activeClass)=>{\r\n\tconst menuBtn = document.querySelector('.menu');\r\n\tconst menu = document.querySelector('menu');\r\n\tconst closeBtn = menu.querySelector('.close-btn');\r\n\tconst menuItems = menu.querySelectorAll('ul>li>a');\r\n\tconst linkDown = document.querySelector('a[href=\"#service-block\"]');\r\n\r\n\tconst handleMenu = ()=>{\r\n\t\tmenu.classList.toggle(activeClass);\r\n\t}\r\n\r\n\tconst smoothMenu = () =>{\r\n\t\tmenuItems.forEach(e=>{\r\n\t\t\te.addEventListener('click', (event)=>{\r\n\t\t\t\tsmoothScroll(e)\r\n\t\t\t})\r\n\t\t})\r\n\t}\r\n\tconst linkSmooth = () => {\r\n\t\tlinkDown.addEventListener('click', (event)=>{\r\n\t\t\tsmoothScroll(linkDown)\r\n\t\t})\r\n\t}\r\n\tconst smoothScroll = (elem) =>{\r\n\t\t\tevent.preventDefault();\r\n\t\t\tconst blockID = elem.getAttribute('href').substr(1)\r\n\r\n\t\t\tdocument.getElementById(blockID).scrollIntoView({\r\n\t\t\t\tbehavior: 'smooth',\r\n\t\t\t\tblock: 'start'\r\n\t\t\t})\r\n\t}\r\n\t\r\n\tlinkSmooth()\r\n\tsmoothMenu()\r\n\tmenuBtn.addEventListener('click', handleMenu);\r\n\tcloseBtn.addEventListener('click', handleMenu);\r\n\r\n\tmenuItems.forEach(e => e.addEventListener('click', handleMenu));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n\tconst buttons = document.querySelectorAll('.popup-btn');\r\n\tconst modal = document.querySelector('.popup');\r\n\tconst closeBtn = modal.querySelector('.popup-close');\r\n\tconst windowInnerWidth = window.innerWidth;\r\n\r\n\tlet count = 0;\r\n\tlet idInterval;\r\n\tmodal.style.opacity = 0\r\n\r\n \tconst smoothModal = () =>{\r\n\t\tcount += 0.1;\r\n\t\tidInterval = requestAnimationFrame(smoothModal);\r\n\t\t\r\n\t\tif (count < 1){\r\n\t\t\tmodal.style.opacity = count\r\n\t\t} else{\r\n\t\t\tcancelAnimationFrame(idInterval)\r\n\t\t}\r\n\t}\r\n\r\n\tbuttons.forEach(e => {\r\n\t\te.addEventListener('click', ()=>{\r\n\t\t\tif(windowInnerWidth > 768){\r\n\t\t\t\tmodal.style.display = 'block';\r\n\t\t\t\tsmoothModal()\r\n\t\t\t} else {\r\n\t\t\t\tmodal.style.opacity = ''\r\n\t\t\t\tmodal.style.display = 'block';\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n\tcloseBtn.addEventListener('click', ()=>{\r\n\t\tif(windowInnerWidth > 768){\r\n\t\t\tmodal.style.display = 'none';\r\n\t \t\tmodal.style.opacity = 0;\r\n\t\t\tcount = 0;\r\n\t\t} else {\r\n\t\t\tmodal.style.display = 'none';\r\n\t\t}\r\n\t})\r\n\r\n\t\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine)=>{\r\n\tconst timerHours = document.getElementById('timer-hours')\r\n\tconst timerMinutes = document.getElementById('timer-minutes')\r\n\tconst timerSeconds = document.getElementById('timer-seconds')\r\n\r\n\tconst getTimeRemaining = () => {\r\n\t\tlet dateStop = new Date(deadLine).getTime();\r\n\t\tlet dateNow = new Date().getTime();\r\n\t\tlet timeRemaining = (dateStop - dateNow) / 1000;\r\n\t\tlet hours = Math.floor(timeRemaining / 3600);\r\n\t\tlet minutes = Math.floor((timeRemaining / 60) % 60);\r\n\t\tlet seconds = Math.floor(timeRemaining % 60);\r\n\t\r\n\t\treturn {\r\n\t\t\ttimeRemaining,\r\n\t\t\thours,\r\n\t\t\tminutes,\r\n\t\t\tseconds,\r\n\t\t}\r\n\t}\r\n\r\n\tconst updateClock = () =>{\r\n\t\tlet getTime = getTimeRemaining();\r\n\t\tif(getTime.timeRemaining < 0){\r\n\t\t\tstopTimer();\r\n\t\t\treturn;\r\n\t\t}\r\n\t\ttimerHours.textContent = addZero(getTime.hours);\r\n\t\ttimerMinutes.textContent = addZero(getTime.minutes);\r\n\t\ttimerSeconds.textContent = addZero(getTime.seconds);\r\n\t}\r\n\r\n\tconst clockInterval = setInterval(updateClock, 1000)\r\n\r\n\tconst stopTimer = () => {\r\n\t\t\tclearInterval(clockInterval)\r\n\t}\r\n\tconst addZero = (digit) => {\r\n\t\tif ((digit + '').length == 1){\r\n\t\t\treturn digit = '0' + digit;\r\n\t\t}\r\n\t\treturn digit\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n\tconst allInputs = document.querySelectorAll('input');\r\n\tconst forms = document.querySelectorAll('form[id^=\"form\"]');\r\n\tconst testEmail = /[a-zA-Z0-9\\-\\.\\!\\~\\*\\']+@[a-zA-Z]+\\.[a-zA-Z]+/g;\r\n\t\r\n\tallInputs.forEach(e => {\r\n\t\te.addEventListener('blur', event => {\r\n\t\t\tevent.target.value = event.target.value.replace(/[\\s]{2,}/, \" \")\r\n\t\t\tevent.target.value = event.target.value.replace(/\\-{2,}/, \"-\").trim()\r\n\t\t\tif(e.classList.contains('calc-item')){\r\n\t\t\t\tevent.target.value = event.target.value.replace(/\\D+/, \"\")\r\n\t\t\t} else if(e.getAttribute('type') === 'text' || e.classList.contains('mess') && !e.classList.contains('calc-item')) {\r\n\t\t\t\tevent.target.value = event.target.value.replace(/[^а-яА-Я\\-\\s]/g, \"\")\r\n\t\t\t\tevent.target.value = event.target.value.split(' ').map(el => el[0].toUpperCase() + el.substr(1).toLowerCase()).join(' ');\r\n\t\t\t} else if (e.getAttribute('type') === 'email'){\r\n\t\t\t\tevent.target.value = event.target.value.replace(/[^a-zA-Z0-9\\-\\.\\!\\~\\*\\'\\@]+/g, \"\")\r\n\t\t\t} else if (e.getAttribute('type') === 'tel'){\r\n\t\t\t\tevent.target.value = event.target.value.replace(/[^\\d\\(\\)\\-]+/, \"\")\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n\tforms.forEach(e => {\r\n\t\te.addEventListener('submit', event => {\r\n\t\t\tlet inputEmail = event.target.querySelector('input[type=\"email\"]');\r\n\t\t\tif(testEmail.test(inputEmail.value)){\r\n\t\t\t\tconsole.log('Данные отправлены');\r\n\t\t\t} else{\r\n\t\t\t\tevent.preventDefault();\r\n\t\t\t\talert('Не правильно введен email')\r\n\t\t\t}\r\n\t\t});\r\n\t})\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;