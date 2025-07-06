/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./CV/src/app/index.ts":
/*!*****************************!*\
  !*** ./CV/src/app/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./CV/src/app/styles/index.scss");



/***/ }),

/***/ "./CV/src/app/styles/index.scss":
/*!**************************************!*\
  !*** ./CV/src/app/styles/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./CV/src/shared/CVSelfCheck/CVSelfCheck/CVSelfCheck.ts":
/*!**************************************************************!*\
  !*** ./CV/src/shared/CVSelfCheck/CVSelfCheck/CVSelfCheck.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ logSelfCheck)
/* harmony export */ });
/**
 * Log to the browser's console the message of the job selfcheck
 *
 *  @return {void} - log the result
 *
 */
function logSelfCheck() {
    const messageSelfCheck = `
  **ТЗ** 
https://github.com/rolling-scopes-school/tasks/blob/master/tasks

        **Форма для проверки** 
https://rolling-scopes-school.github.io/checklist/


**Ваша оценка - {number} балла** 

#### Отзыв по пунктам ТЗ:

#####**Не выполненные/не засчитанные пункты:**
======================================================
1) Something usefull 

#####**Выполненные пункты:**
=====================================================

1) Something pretty sweet and usefull
`;
    console.log(messageSelfCheck);
}


/***/ }),

/***/ "./CV/src/shared/CVSelfCheck/index.ts":
/*!********************************************!*\
  !*** ./CV/src/shared/CVSelfCheck/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CVSelfCheck_CVSelfCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CVSelfCheck/CVSelfCheck */ "./CV/src/shared/CVSelfCheck/CVSelfCheck/CVSelfCheck.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CVSelfCheck_CVSelfCheck__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./CV/src/shared/language-switcher/ui/index.ts":
/*!*****************************************************!*\
  !*** ./CV/src/shared/language-switcher/ui/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeLanguageToggler)
/* harmony export */ });
/**
 * Handler for 'pointerdown' event on the EN - RU language switchers
 *  (input#EN-toggler and input#EN-toggler).
 * Handle the labels over inputs! Inputs are assumes to have 'appearence: none' property.
 *
 * @param {PointerEvent} event - pointer event (assume to be 'pointerdown' one)
 *  catched at the 'label.language-switcher__label' elements
 * @returns {void}
 * @throws event.target is null
 * @throws there's no HTML Element input#EN-toggler
 * @throws there's no HTML Element input#RU-toggler
 * @throws `Event.target ${event.target} is not label[class="language-switcher__label"`
 */
function changeLanguageTogglerHandler(event) {
    const ENToggler = document.querySelector('#EN-toggler');
    const RUToggler = document.querySelector('#RU-toggler');
    const RUElems = document.querySelectorAll('.RU');
    const ENElems = document.querySelectorAll('.EN');
    // check if event.target is null
    if (event.target === null) {
        throw new Error('event.target is null');
    }
    // check if event.target is HTMLElement
    if (event.target instanceof HTMLElement) {
        if (!event.target.closest('.language-switcher__label')) {
            return;
        }
        if (event.target.closest('.language-switcher__label')) {
            // check if label#EN-toggler exist
            if (!ENToggler) {
                throw new Error(`there's no HTML Element input#EN-toggler`);
            }
            // check if label#RU-toggler exist
            if (!RUToggler) {
                throw new Error(`there's no HTML Element input#RU-toggler`);
            }
            // get array of children of the label.language-switcher__label
            // for further usage
            /**
             *  @example
             *    [input#EN-toggler]
             *      0: input#EN-toggler
             *      length: 1
             *      [[Prototype]]: Array(0)
             *
             *    [input#EN-toggler]
             *      0: input#EN-toggler
             *      length: 1
             *      [[Prototype]]: Array(0)
             */
            const eventTargetChildrenArray = Array.from(event.target.children);
            // 'pointerdown' at label.language-switcher__label > input#EN-toggler
            if (eventTargetChildrenArray.includes(ENToggler)) {
                ENToggler.checked = true;
                RUElems.forEach((elem) => elem.classList.add('hidden'));
                ENElems.forEach((elem) => elem.classList.remove('hidden'));
                return;
            }
            // 'pointerdown' at label.language-switcher__label > input#RU-toggler
            if (eventTargetChildrenArray.includes(RUToggler)) {
                RUToggler.checked = true;
                ENElems.forEach((elem) => elem.classList.add('hidden'));
                RUElems.forEach((elem) => elem.classList.remove('hidden'));
                return;
            }
        }
        // if something went not in case => let it know
        throw new Error(`Event.target ${event.target} is not label[class="language-switcher__label"`);
    }
}
/**
 * Listen document.body for 'pointerdown' event at label.language-switcher__label elements
 */
function changeLanguageToggler() {
    document.body.addEventListener('pointerdown', changeLanguageTogglerHandler);
}


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./CV/src/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/index */ "./CV/src/app/index.ts");
/* harmony import */ var _shared_CVSelfCheck_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/CVSelfCheck/index */ "./CV/src/shared/CVSelfCheck/index.ts");
/* harmony import */ var _shared_language_switcher_ui_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/language-switcher/ui/index */ "./CV/src/shared/language-switcher/ui/index.ts");



window.addEventListener('load', () => {
    (0,_shared_CVSelfCheck_index__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_shared_language_switcher_ui_index__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=main.de4c.js.map