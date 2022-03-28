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

/***/ "./js/ClickOut.js":
/*!************************!*\
  !*** ./js/ClickOut.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOut)\n/* harmony export */ });\nfunction clickOut(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n  //\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      html.addEventListener(userEvent, fecharMenu);\r\n    });\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n  //\r\n  function fecharMenu(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, fecharMenu);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://acabamento-grosseto/./js/ClickOut.js?");

/***/ }),

/***/ "./js/dropMenu.js":
/*!************************!*\
  !*** ./js/dropMenu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropMenuDown)\n/* harmony export */ });\n/* harmony import */ var _ClickOut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClickOut.js */ \"./js/ClickOut.js\");\n\r\n\r\nfunction dropMenuDown (){\r\n\r\nconst dropMenu = document.querySelectorAll('[data-dropdown]')\r\n\r\ndropMenu.forEach(menu => {\r\n  ['click', 'touchstart'].forEach(item =>\r\n  menu.addEventListener(item, handleClick))\r\n})\r\n\r\n\r\n\r\nfunction handleClick (event) {\r\n  event.preventDefault();\r\n  this.classList.add('ativo')\r\n\r\n      ;(0,_ClickOut_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['click', 'touchstart'],() => {\r\n        this.classList.remove('ativo')\r\n    })\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://acabamento-grosseto/./js/dropMenu.js?");

/***/ }),

/***/ "./js/dropMenuProd.js":
/*!****************************!*\
  !*** ./js/dropMenuProd.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropProd)\n/* harmony export */ });\nfunction dropProd () {\r\n\r\n  const dmp = document.querySelector('[data-dropprodutos]')\r\n\r\n\r\n  function menuProd (event) {\r\n    event.preventDefault()\r\n      if(event.type == 'touchstart') {\r\n        this.classList.add('ativo');\r\n\r\n      dropProdutos (this, () => {\r\n        this.classList.remove('ativo')\r\n      })\r\n    }}\r\n\r\n\r\n  function dropProdutos (element, callback) {\r\n    const html = document.documentElement\r\n    const clique = 'data-click'  \r\n\r\n    if(!element.hasAttribute(clique)) {\r\n      html.addEventListener('touchstart', touchOut)\r\n      element.setAttribute(clique, '')\r\n    }\r\n\r\n    function touchOut (event) {\r\n      if(!element.contains(event.target)) {\r\n        element.removeAttribute(clique)\r\n        html.removeEventListener('touchstart', touchOut)\r\n       callback()\r\n      }\r\n     \r\n    }\r\n  }\r\n\r\n  ['click', 'touchstart'].forEach(item => \r\n  dmp.addEventListener(item, menuProd))\r\n\r\n}\n\n//# sourceURL=webpack://acabamento-grosseto/./js/dropMenuProd.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./js/modal.js\");\n/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.js */ \"./js/tooltip.js\");\n/* harmony import */ var _dropMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropMenu.js */ \"./js/dropMenu.js\");\n/* harmony import */ var _dropMenuProd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropMenuProd.js */ \"./js/dropMenuProd.js\");\n\r\n\r\n\r\n\r\n// import btnNatal from \"./btnNatal.js\"\r\n\r\nconst modal = new _modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  \"[data-entrar='entrar']\",\r\n  \".modal-container\",\r\n  \"[data-fechar='fechar']\",\r\n);\r\n\r\nmodal.init();\r\n\r\n\r\n(0,_tooltip_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_dropMenu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_dropMenuProd_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n// btnNatal()\r\n\n\n//# sourceURL=webpack://acabamento-grosseto/./js/main.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(abrirModal, modalM, fecharModal) {\r\n    this.abrir = document.querySelector(abrirModal);\r\n    this.modal = document.querySelector(modalM);\r\n    this.fechar = document.querySelector(fecharModal);\r\n\r\n    this.toggleModal = this.toggleModal.bind(this)\r\n    // this.cliqueFora = this.cliqueFora.bind(this)\r\n    this.verificar = this.verificar.bind(this)\r\n  }\r\n\r\n  toggleModal(event) {\r\n    event.preventDefault();\r\n    this.modal.classList.toggle(\"ativo\");\r\n  }\r\n  cliqueFora = (event) => {\r\n    if (event.target === this.modal) this.toggleModal(event);\r\n  };\r\n  verificar(event) {\r\n    if (this.abrir && this.modal && this.fechar) {\r\n      this.cliqueFora(event);\r\n    }\r\n  }\r\n  init() {\r\n    this.abrir.addEventListener(\"click\", this.toggleModal);\r\n    this.fechar.addEventListener(\"click\", this.toggleModal);\r\n    this.modal.addEventListener(\"click\", this.verificar);\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://acabamento-grosseto/./js/modal.js?");

/***/ }),

/***/ "./js/tooltip.js":
/*!***********************!*\
  !*** ./js/tooltip.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tooltipS)\n/* harmony export */ });\nfunction tooltipS () { //criando a func\r\nconst tooltip = document.querySelector('[data-tooltip]')\r\n  //selecionando o que iriei trabalhar\r\nfunction mouseOn() { \r\n    //criado func, é ativada L40\r\n  const tooltipBox = criarTooltipBox(this)\r\n    // const recebe o valor da fun L31\r\n  mousemove.tooltipBox = tooltipBox \r\n  mouseLeave.tooltipBox = tooltipBox\r\n  mouseLeave.element = this\r\n    //linha 9,11 e 11 é craindo valores para regatar em objetos de callback, para assim separar melhor\r\n  this.addEventListener ('mouseleave', mouseLeave)\r\n    // criado um evento em um objeto\r\n  this.addEventListener ('mousemove', mousemove)\r\n    // criado um evento em um objeto\r\n}\r\n\r\nconst mouseLeave = { // objeto que recebe evento  \r\n  handleEvent() {\r\n    this.tooltipBox.remove()\r\n    this.element.removeEventListener('mouseleave', mouseLeave)\r\n    this.element.removeEventListener('mousemove', mousemove)    \r\n  }\r\n}\r\n\r\nconst mousemove = {\r\n  handleEvent(event) {\r\n    this.tooltipBox.style.top = event.pageY + 20 + 'px';\r\n    this.tooltipBox.style.left = event.pageX + 20 + 'px';\r\n  }\r\n}\r\n\r\nfunction criarTooltipBox () {\r\n  const tooltipBox = document.createElement('div') // crado um elemento\r\n  const texto = tooltip.getAttribute('aria-label') \r\n  // pego o testo dele do html\r\n  tooltipBox.classList.add('tooltip') // add uma class\r\n  tooltipBox.innerText = texto // recuperando o texto\r\n  document.body.appendChild(tooltipBox) \r\n  // adicionando ele ao final do body\r\n  return tooltipBox\r\n  //retornando o mesmo criado\r\n}\r\n\r\ntooltip.addEventListener('mouseover', mouseOn)\r\n\r\n}\n\n//# sourceURL=webpack://acabamento-grosseto/./js/tooltip.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;