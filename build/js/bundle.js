/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/moduls/scroll.js":
/*!*********************************!*\
  !*** ./src/js/moduls/scroll.js ***!
  \*********************************/
/***/ (function() {

const body = document.querySelector('html'),
    skills = document.querySelectorAll('.skills'),
    aboutTitle = document.querySelectorAll('.about__title'),
    aboutText = document.querySelectorAll('.about__text .text'),
    skillsTitle = document.querySelectorAll('.skills__title'),
    skillsText = document.querySelectorAll('.skills__text'),
    skillsItem = document.querySelectorAll('.skills__item'),
    portTitle = document.querySelectorAll('.portfolio__title'),
    portImg = document.querySelectorAll('.portfolio__item img'),
    portText = document.querySelectorAll('.portfolio__item a');
    

window.addEventListener('scroll', () => {
    watchEleme(aboutTitle);
    watchEleme(aboutText);
    watchEleme(skillsTitle);
    watchEleme(skillsText);
    watchEleme(skillsItem);
    watchEleme(portTitle);
    watchEleme(portImg);
    watchEleme(portText);
})



function watchEleme(eleme) {
    eleme.forEach(item => {
        item.style = 'opacity:  0; transition: 0.7s;'
        if(body.scrollTop >= item.offsetTop - body.clientHeight + 200 && !(body.scrollTop >= item.offsetTop + item.scrollHeight)) {
            window.removeEventListener('scroll', () => watchEleme(skills))
            item.style = 'transform: translateX(1px); transform: rotateY(0deg);'
            item.style.opacity = 1;
        }
    })
}


/***/ }),

/***/ "./src/js/moduls/scrollTo.js":
/*!***********************************!*\
  !*** ./src/js/moduls/scrollTo.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ScrollTo; }
/* harmony export */ });
class ScrollTo {
    constructor() {
        this.anchors = document.querySelectorAll('.menu__item');
        this.aDef = document.querySelectorAll('a');
    }

    getAncors () {
        this.aDef.forEach(a => a.addEventListener('click', (e) => e.preventDefault()))
        this.anchors.forEach(anc => {
            anc.addEventListener('click', (e) => {
                e.preventDefault()
                const id = e.target.parentElement.getAttribute('href')
                this.toBlock(id);
            })
        })
    }

    toBlock(id) {
        document.querySelector(`#${id}`).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    }
    
    init() {
        this.getAncors()
    }
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduls_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduls/scroll */ "./src/js/moduls/scroll.js");
/* harmony import */ var _moduls_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_moduls_scroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _moduls_scrollTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/scrollTo */ "./src/js/moduls/scrollTo.js");



window.addEventListener('DOMContentLoaded', () => {
    new _moduls_scrollTo__WEBPACK_IMPORTED_MODULE_1__["default"]().init();
})
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map