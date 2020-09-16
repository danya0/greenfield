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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/parallax */ \"./src/js/modules/parallax.js\");\n/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/nav */ \"./src/js/modules/nav.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // Вызов главной функции переключения окон\n  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Вызов parallax функции написанной ранее, с селектором\n\n  Object(_modules_parallax__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\".parallax-container\"); // Вызов nav функции для работы nav menu\n\n  Object(_modules_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/nav.js":
/*!*******************************!*\
  !*** ./src/js/modules/nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar navMenu = function navMenu() {\n  var showBtn = document.querySelector(\".button-nav\"),\n      closeBtn = document.querySelector(\".nav-close\"),\n      navMenu = document.querySelector(\".nav\"),\n      carousel = document.querySelector(\".carousel\");\n\n  function closeNavMenu() {\n    navMenu.classList.remove(\"opened\");\n    navMenu.classList.add(\"closed\");\n  }\n\n  showBtn.addEventListener(\"click\", function () {\n    navMenu.classList.remove(\"closed\");\n    navMenu.classList.add(\"opened\");\n  });\n  closeBtn.addEventListener(\"click\", function () {\n    closeNavMenu();\n  });\n  carousel.addEventListener(\"click\", function () {\n    closeNavMenu();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navMenu);\n\n//# sourceURL=webpack:///./src/js/modules/nav.js?");

/***/ }),

/***/ "./src/js/modules/parallax.js":
/*!************************************!*\
  !*** ./src/js/modules/parallax.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar parallax = function parallax(sceneSelector) {\n  var scene = document.querySelectorAll(sceneSelector);\n  scene.forEach(function (item) {\n    new Parallax(item);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parallax);\n\n//# sourceURL=webpack:///./src/js/modules/parallax.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar slider = function slider() {\n  var carousel = document.querySelector(\".carousel\");\n  var carouselClasses = [\"carousel\", \"slide1\"];\n  var aviableNow = true;\n  var slideValue = 1; // * В зависимости от браузера ставит обработчик на колесико мыши\n\n  if (document.addEventListener) {\n    if (\"onwheel\" in document) {\n      document.addEventListener(\"wheel\", onWheel);\n    } else if (\"onmousewheel\" in document) {\n      document.addEventListener(\"mousewheel\", onWheel);\n    } else {\n      document.addEventListener(\"MozMousePixelScroll\", onWheel);\n    }\n  } else {\n    document.attachEvent(\"onmousewheel\", onWheel);\n  } // * Функция которая меняет логотив в зависимости от слайда\n\n\n  function changeLogo(slideValue) {\n    var headerLogo = document.querySelector('.header__logo');\n\n    if (slideValue === 1) {\n      headerLogo.classList.add('white');\n    } else if (slideValue === 2) {\n      headerLogo.classList.remove('white');\n    } else {\n      return;\n    }\n  } // * Функция для смены слайда\n\n\n  function changeSlide(delta) {\n    var prevSlideValue = slideValue; // ? Получаем предыдущий слайд (секцию), чтобы удалить для нее класс с анимацией и добавить класс с уходящей анимацией\n\n    var prevSlideSelector = \".section\".concat(slideValue);\n    var prevSlide = document.querySelector(prevSlideSelector); // ? Получаем слайд на который перешел пользователь, чтобы добавить класс с анимацией\n\n    slideValue = slideValue + delta;\n    var nextSlideSelector = \".section\".concat(slideValue);\n    var nextSlide = document.querySelector(nextSlideSelector);\n\n    if (slideValue > prevSlideValue) {\n      nextSlide.classList.add(\"coming\");\n      setTimeout(function () {\n        nextSlide.classList.remove(\"coming\");\n      }, 3000);\n      prevSlide.classList.add(\"outgoing\");\n    } else {\n      nextSlide.classList.remove(\"outgoing\");\n    } // ? Вызываем функцию которая меняет логотип\n\n\n    changeLogo(slideValue);\n    carouselClasses.splice(-1, 1);\n    carouselClasses.push(\"slide\".concat(slideValue));\n    carousel.classList.value = carouselClasses.join(\" \");\n  } // * Функция которая устанавливает задержку между вызовами функции \"changeSlide\", чтобы не вызывать лишних ошибок, или искажений графики\n\n\n  function setDelay() {\n    if (aviableNow) {\n      aviableNow = false;\n      setTimeout(function () {\n        aviableNow = true;\n      }, 2990);\n    }\n  } // * Функция для работы скролла сайта при прокрутке колесика мыши\n\n\n  function onWheel(e) {\n    var delta = (e.deltaY || e.detail || e.wheelDelta) / 100;\n\n    if (aviableNow && delta === 1 && slideValue !== 5 || aviableNow && delta === -1 && slideValue !== 1) {\n      setDelay();\n      changeSlide(delta);\n    }\n  } // * Использую плагин \"HAMMER.JS\" для отслеживания свайпов с мобильных устройств\n\n\n  new Hammer(carousel).on('swipe', function (ev) {\n    var delta = null;\n    ev.deltaX < 0 ? delta = 1 : delta = -1;\n\n    if (aviableNow && delta === 1 && slideValue !== 5 || aviableNow && delta === -1 && slideValue !== 1) {\n      setDelay();\n      changeSlide(delta);\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);\n\n//# sourceURL=webpack:///./src/js/modules/slider.js?");

/***/ })

/******/ });