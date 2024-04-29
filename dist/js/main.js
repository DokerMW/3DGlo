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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('06 may 2024');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('active-menu');\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\r\n\t\t\t'portfolio-content',\r\n\t\t\t'portfolio-item',\r\n\t\t\t'portfolio-item-active',\r\n\t\t\t'portfolio-dots',\r\n\t\t\t'dot', \r\n\t\t\t'dot-active',\r\n\t\t\t'portfolio-btn',\r\n\t\t\t'arrow-left',\r\n\t\t\t'arrow-right'\r\n\t\t);\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n const calcBlock = document.querySelector('.calc-block'); \r\n const calcType = document.querySelector('.calc-type'); \r\n const calcSquare = document.querySelector('.calc-square'); \r\n const calcCount = document.querySelector('.calc-count'); \r\n const calcDay = document.querySelector('.calc-day'); \r\n const total = document.getElementById('total');\r\n\r\n const countCalc = () => {\r\n\tconst calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n\tconst calcSquareValue = calcSquare.value;\r\n\r\n\tlet totalValue = 0;\r\n\tlet calcCountValue = 1;\r\n\tlet calcDayValue = 1;\r\n\r\n\tif(calcCount.value > 1){\r\n\t\tcalcCountValue += +calcCount.value / 10;\r\n\t}\r\n\r\n\tif( calcDay.value && calcDay.value < 10){\r\n\t\tcalcDayValue = 1.5;\r\n\t} \r\n\tif( calcDay.value && calcDay.value < 5){\r\n\t\tcalcDayValue = 2;\r\n\t}\r\n\t\r\n\tif(calcType.value && calcSquare.value){\r\n\t\ttotalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue\r\n\t\tanimationCalc(totalValue, total)\r\n\t} else {\r\n\t\ttotalValue = 0;\r\n\t}\r\n }\r\n\r\n const animationCalc = (num, elem) => {\r\n\tconst speed = 100;\r\n\r\n  \tconst updateCount = () => {\r\n    \tconst count = +elem.textContent;\r\n    \tconst increment = Math.trunc(num / speed);\r\n\r\n    \tif (count < num) {\r\n    \t  elem.textContent = count + increment;\r\n    \t  setTimeout(updateCount, 1);\r\n    \t} else {\r\n    \t  elem.textContent = +num;\r\n\t\t\t\ttotal.textContent = num;\r\n    \t}\r\n\t\t}\r\n  \tupdateCount();\r\n }\r\n\r\n calcBlock.addEventListener('change', e =>{\r\n\tif(e.target === calcType || e.target === calcSquare ||\r\n\t\t e.target === calcCount || e.target === calcDay){\r\n\t\tcountCalc(); \r\n\t}\r\n });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = (activeClass)=>{\r\n\tconst menu = document.querySelector('menu');\r\n\r\n\tconst handleMenu = ()=>{\r\n\t\tmenu.classList.toggle(activeClass);\r\n\t}\r\n\r\n\tconst smoothScroll = (elem) =>{\r\n\t\tevent.preventDefault();\r\n\t\tconst blockID = elem.getAttribute('href').substr(1)\r\n\r\n\t\tdocument.getElementById(blockID).scrollIntoView({\r\n\t\t\tbehavior: 'smooth',\r\n\t\t\tblock: 'start'\r\n\t\t})\r\n}\r\n\r\n\tconst toggleMenu = () => {\r\n\t\tdocument.addEventListener('click', e => {\r\n\t\t\tif(e.target.closest('.menu') || !e.target.closest('menu') && menu.classList.contains(activeClass)){\r\n\t\t\t\thandleMenu();\r\n\t\t\t}else if(e.target.closest('main>a[href=\"#service-block\"]')){\r\n\t\t\t\tlet linkDown = e.target.closest('main>a[href=\"#service-block\"]')\r\n\t\t\t\tsmoothScroll(linkDown)\r\n\t\t\t} else if(e.target.matches('menu>ul>li>a')){\r\n\t\t\t\tsmoothScroll(e.target)\r\n\t\t\t\thandleMenu();\r\n\t\t\t}\telse if(e.target.classList.contains('close-btn')){\r\n\t\t\t\thandleMenu();\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n\ttoggleMenu()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n\tconst buttons = document.querySelectorAll('.popup-btn');\r\n\tconst modal = document.querySelector('.popup');\r\n\tconst windowInnerWidth = window.innerWidth;\r\n\r\n\tlet count = 0;\r\n\tlet idInterval;\r\n\tmodal.style.opacity = 0\r\n\r\n \tconst smoothModal = () =>{\r\n\t\tcount += 0.1;\r\n\t\tidInterval = requestAnimationFrame(smoothModal);\r\n\t\t\r\n\t\tif (count < 1){\r\n\t\t\tmodal.style.opacity = count\r\n\t\t} else{\r\n\t\t\tcancelAnimationFrame(idInterval)\r\n\t\t}\r\n\t}\r\n\r\n\tbuttons.forEach(e => {\r\n\t\te.addEventListener('click', ()=>{\r\n\t\t\tif(windowInnerWidth > 768){\r\n\t\t\t\tmodal.style.display = 'block';\r\n\t\t\t\tsmoothModal()\r\n\t\t\t} else {\r\n\t\t\t\tmodal.style.opacity = ''\r\n\t\t\t\tmodal.style.display = 'block';\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n\tmodal.addEventListener('click', e=>{\r\n\t\tif(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){\r\n\t\t\tif(windowInnerWidth > 768){\r\n\t\t\t\tmodal.style.display = 'none';\r\n\t\t\t\t modal.style.opacity = 0;\r\n\t\t\t\tcount = 0;\r\n\t\t\t} else {\r\n\t\t\t\tmodal.style.display = 'none';\r\n\t\t\t}\r\n\t\t}\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (sliderContainer,slideItem,activeSlide = 'slide-active',dotContainer, dotsClass, dotsActiveClass = 'dot-active',sliderBtns,arrowLeftId,arrowRightId) =>{\r\n\tconst sliderBlock = document.querySelector(`.${sliderContainer}`);\r\n\tconst slides = document.querySelectorAll(`.${slideItem}`);\r\n\tconst slide = document.querySelector(`.${slideItem}`);\r\n\tconst dotsContainer = document.querySelector(`.${dotContainer}`);\r\n\tconst timeInterval = 2000;\r\n\tconst classData = [\r\n\t\tsliderContainer,\r\n\t\tslideItem,\r\n\t\tactiveSlide,\r\n\t\tdotContainer, \r\n\t\tdotsClass, \r\n\t\tdotsActiveClass,\r\n\t\tsliderBtns,\r\n\t\tarrowLeftId,\r\n\t\tarrowRightId\r\n\t]\r\n\r\n\tlet wrongClass = false;\r\n\tlet currentSlide = 0;\r\n\tlet dots;\r\n\tlet interval;\r\n\r\n\r\n\tif (!document.querySelector(`.${classData[0]}`) ||\r\n\t !document.querySelector(`.${classData[1]}`)) {\r\n\t\twrongClass = true;\r\n\t} \r\n\tif(wrongClass){\r\n\t\treturn\r\n\t}\r\n\tif(!document.querySelector(`.${classData[1]}`).closest(`.${classData[0]}`)){\r\n\t\twrongClass = true;\r\n\t}\r\n\r\n\tif(wrongClass){\r\n\t\treturn\r\n\t}\r\n\r\n\tconst prevSlide = (elems, index, strClass) => {\r\n\t\telems[index].classList.remove(strClass);\r\n\t}\r\n\tconst nextSlide = (elems, index, strClass) => {\r\n\t\telems[index].classList.add(strClass);\r\n\t}\r\n\r\n\tconst createDots = () => {\r\n\t\tlet count = 0;\r\n\t\t\r\n\t\twhile(count < slides.length){\r\n\t\t\tdotsContainer.insertAdjacentHTML('beforeend', `<li class=\"${dotsClass}\"></li>`);\r\n\t\t\tcount++\r\n\t\t}\r\n\t\tdots = document.querySelectorAll(`.${dotsClass}`);\r\n\t}\r\n\r\n\tconst autoSlide = () => {\r\n\t\tprevSlide(slides, currentSlide, `${activeSlide}`)\r\n\t\tprevSlide(dots, currentSlide, `${dotsActiveClass}`)\r\n\t\tcurrentSlide++\r\n\t\tif(currentSlide >= slides.length){\r\n\t\t\tcurrentSlide = 0\r\n\t\t}\r\n\t\tnextSlide(slides, currentSlide, `${activeSlide}`)\r\n\t\tnextSlide(dots, currentSlide, `${dotsActiveClass}`)\r\n\t}\r\n\r\n\tconst startSlide = (timer = 2000) => {\r\n\t\tinterval = setInterval(autoSlide, timer)\r\n\t}\r\n\r\n\tconst stopSlide = () => {\r\n\t\tclearInterval(interval)\r\n\t}\r\n\r\n\r\n\tsliderBlock.addEventListener('click', e => {\r\n\t\te.preventDefault();\r\n\r\n\t\tif(!e.target.matches(`.${dotsClass}, .${sliderBtns}`)){\r\n\t\t\treturn\r\n\t\t}\r\n\t\r\n\t\tprevSlide(slides, currentSlide, `${activeSlide}`)\r\n\t\tprevSlide(dots, currentSlide, `${dotsActiveClass}`)\r\n\t\tif(e.target.matches(`#${arrowRightId}`)){\r\n\t\t\tcurrentSlide++\r\n\t\t}\r\n\t\tif(e.target.matches(`#${arrowLeftId}`)){\r\n\t\t\tcurrentSlide--\r\n\t\t}\r\n\t\tif(e.target.classList.contains(`${dotsClass}`)){\r\n\t\t\tdots.forEach((dot, index) => {\r\n\t\t\t\tif(e.target === dot){\r\n\t\t\t\t\tcurrentSlide = index\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t}\r\n\t\tif(currentSlide >= slides.length){\r\n\t\t\tcurrentSlide = 0\r\n\t\t}\r\n\t\tif(currentSlide < 0){\r\n\t\t\tcurrentSlide = slides.length - 1\r\n\t\t}\r\n\t\tnextSlide(slides, currentSlide, `${activeSlide}`)\r\n\t\tnextSlide(dots, currentSlide, `${dotsActiveClass}`)\r\n\t})\r\n\r\n\tsliderBlock.addEventListener('mouseenter', e => {\r\n\t\tif(e.target.matches(`.${dotsClass}, .${sliderBtns}`)){\r\n\t\t\tstopSlide();\r\n\t\t}\r\n\t}, true)\r\n\tsliderBlock.addEventListener('mouseleave', e => {\r\n\t\tif(e.target.matches(`.${dotsClass}, .${sliderBtns}`)){\r\n\t\t\tstartSlide(timeInterval);\r\n\t\t}\r\n\t}, true)\r\n\r\n\tcreateDots()\r\n\r\n\t\r\n\r\n\tstartSlide(timeInterval)\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n\tconst tabPanel = document.querySelector('.service-header');\r\n\tconst tabContent = document.querySelectorAll('.service-tab');\r\n\tconst tabs = document.querySelectorAll('.service-header-tab');\r\n\r\n\t tabPanel.addEventListener('click', e => {\r\n\t\tif(e.target.closest('.service-header-tab')){\r\n\t\t\tconst tabBtn = e.target.closest('.service-header-tab');\r\n\t\t\ttabs.forEach((tab, index) => {\r\n\t\t\t\tif(tab === tabBtn){\r\n\t\t\t\t\ttab.classList.add('active');\r\n\t\t\t\t\ttabContent[index].classList.remove('d-none')\r\n\t\t\t\t} else {\r\n\t\t\t\t\ttab.classList.remove('active')\r\n\t\t\t\t\ttabContent[index].classList.add('d-none')\r\n\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t}\r\n\t\t\r\n\t })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine)=>{\r\n\tconst timerHours = document.getElementById('timer-hours')\r\n\tconst timerMinutes = document.getElementById('timer-minutes')\r\n\tconst timerSeconds = document.getElementById('timer-seconds')\r\n\r\n\tconst getTimeRemaining = () => {\r\n\t\tlet dateStop = new Date(deadLine).getTime();\r\n\t\tlet dateNow = new Date().getTime();\r\n\t\tlet timeRemaining = (dateStop - dateNow) / 1000;\r\n\t\tlet hours = Math.floor(timeRemaining / 3600);\r\n\t\tlet minutes = Math.floor((timeRemaining / 60) % 60);\r\n\t\tlet seconds = Math.floor(timeRemaining % 60);\r\n\t\r\n\t\treturn {\r\n\t\t\ttimeRemaining,\r\n\t\t\thours,\r\n\t\t\tminutes,\r\n\t\t\tseconds,\r\n\t\t}\r\n\t}\r\n\r\n\tconst updateClock = () =>{\r\n\t\tlet getTime = getTimeRemaining();\r\n\t\tif(getTime.timeRemaining < 0){\r\n\t\t\tstopTimer();\r\n\t\t\treturn;\r\n\t\t}\r\n\t\ttimerHours.textContent = addZero(getTime.hours);\r\n\t\ttimerMinutes.textContent = addZero(getTime.minutes);\r\n\t\ttimerSeconds.textContent = addZero(getTime.seconds);\r\n\t}\r\n\r\n\tconst clockInterval = setInterval(updateClock, 1000)\r\n\r\n\tconst stopTimer = () => {\r\n\t\t\tclearInterval(clockInterval)\r\n\t}\r\n\tconst addZero = (digit) => {\r\n\t\tif ((digit + '').length == 1){\r\n\t\t\treturn digit = '0' + digit;\r\n\t\t}\r\n\t\treturn digit\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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