/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/night_sky.jpg */ "./src/images/night_sky.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root {
    font-size: 10px;
    --main-txt-clr: #cac7ff;
    --box-shadow-clr: rgba(202, 199, 255, 0.6);
    --box-shadow-clr-2: rgba(202, 199, 255, 0.4);
    --white-dim: rgba(255, 255, 255, 0.2);
    --bkg-filter: blur(2px) saturate(180%);
}

::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
}

::-webkit-scrollbar-track {
    background-color: #8DB8F1;
}

::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: #58629b;
    border-radius: 100vw;
}

body {
    background-image:
        linear-gradient(rgba(0, 8, 51, 0.6), rgba(0, 8, 51, 0.6)),
        url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-position: center;
    background-size: cover;
}

#content {
    max-width: 50rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 1rem;
}


/*--------------------------------------------------/**Search Bar**/

.search-bar {
    background-color: var(--white-dim);
    width: 100%;
    max-width: 50rem;
    border-radius: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.4rem 1.8rem;
    backdrop-filter: var(--bkg-filter);
}

.search-bar input {
    background-color: transparent;
    color: var(--main-txt-clr);
    outline: none;
    border: none;
    flex: 1;
    font-size: 2rem;
    width: 100%;
}

::placeholder {
    color: var(--main-txt-clr);
}

.search-bar button {
    cursor: pointer;
    border: none;
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    background-color: #58629b;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    transition: .1s scale;
}

.search-bar img {
    width: 70%;
    transition: .1s scale;
    filter: invert(86%) sepia(39%) saturate(3418%) hue-rotate(192deg) brightness(107%) contrast(105%);
}

.search-bar button:hover {
    scale: 1.1;
}

.search-bar button:hover img {
    scale: 0.7;
}

.search-bar button:active {
    scale: .95;
}

/*--------------------------------------------------/**Current State**/

.current-state {
    margin-top: 2.2rem;
    text-align: center;
    color: var(--main-txt-clr);
}

h1 {
    font-weight: 400;
    font-size: 2.4rem;
}

.current-state h1 {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.location-name {
    font-size: 3.6rem;
}

.current-temp {
    font-size: 7.2rem;
    font-weight: 200;
    line-height: 9rem;
}

/*--------------------------------------------------/**Hourly Forecast**/

.hourly-forecast {
    user-select: none;
    display: flex;
    column-gap: .6rem;
    color: var(--main-txt-clr);
    text-align: center;
    background-color: var(--white-dim);
    backdrop-filter: var(--bkg-filter);
    padding: 1.5rem 1.5rem 0.4rem;
    border-radius: 1.2rem;
    margin-top: 2.2rem;
    width: 87.5%;
    overflow: auto;
}

/* .hourly-forecast> *+*{
    margin-left: 1.2rem;
} */

p {
    font-size: 1.8rem;
}

.hourly-forecast img {
    width: 4.5rem;
}

.hourly-forecast::-webkit-scrollbar {
    width: 1rem;
    height: 1.8rem;
}

.hourly-forecast::-webkit-scrollbar-track {
    background-color: #8db8f100;
    margin-block: 1.2rem;
    border-radius: 100vw;
}

.hourly-forecast::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: #58629b;
    border-radius: 100vw;
}

/*--------------------------------------------------/**Daily Forecast**/

.daily-forecast {
    margin-top: 2.2rem;
    background-color: var(--white-dim);
    color: var(--main-txt-clr);
    backdrop-filter: var(--bkg-filter);
    width: 87.5%;
    border-radius: 1.2rem;
    padding: 1.5rem;
}

.header {
    display: flex;
    align-items: center;
    gap: .4rem;
    opacity: 0.68;
    box-shadow: 0 .1rem var(--box-shadow-clr);
}

.header .calendar {
    width: 2rem;
}

.calendar img {
    width: 100%;
    filter: invert(86%) sepia(39%) saturate(3418%) hue-rotate(192deg) brightness(107%) contrast(105%);
}

.header p {
    font-size: 1.4rem;
    line-height: 1px;
}

.days img {
    width: 4.5rem;
}

.day {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    text-align: center;
    padding: 1.5rem 0 0;
}

.day:not(:last-child) {
    box-shadow: 0 .1rem var(--box-shadow-clr-2);
    padding: 1.5rem 0 1.5rem;
}

.day>* {
    display: flex;
    align-items: center;
}

.day>*:not(:first-child) {
    justify-content: center;
}

.gradient div {
    background-image: linear-gradient(90deg, rgba(0, 246, 255, 1) 0%, rgba(128, 225, 128, 1) 47%, rgba(255, 204, 0, 1) 100%);
    height: .6rem;
    width: 100%;
    border-radius: .6rem;
    opacity: .55;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kCAAkC;AACtC;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,0CAA0C;IAC1C,4CAA4C;IAC5C,qCAAqC;IACrC,sCAAsC;AAC1C;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI;;+CAE+B;IAC/B,2BAA2B;IAC3B,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;;AAGA,mEAAmE;;AAEnE;IACI,kCAAkC;IAClC,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,kCAAkC;AACtC;;AAEA;IACI,6BAA6B;IAC7B,0BAA0B;IAC1B,aAAa;IACb,YAAY;IACZ,OAAO;IACP,eAAe;IACf,WAAW;AACf;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,yBAAyB;IACzB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,qBAAqB;IACrB,iGAAiG;AACrG;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA,sEAAsE;;AAEtE;IACI,kBAAkB;IAClB,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA,wEAAwE;;AAExE;IACI,iBAAiB;IACjB,aAAa;IACb,iBAAiB;IACjB,0BAA0B;IAC1B,kBAAkB;IAClB,kCAAkC;IAClC,kCAAkC;IAClC,6BAA6B;IAC7B,qBAAqB;IACrB,kBAAkB;IAClB,YAAY;IACZ,cAAc;AAClB;;AAEA;;GAEG;;AAEH;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,2BAA2B;IAC3B,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA,uEAAuE;;AAEvE;IACI,kBAAkB;IAClB,kCAAkC;IAClC,0BAA0B;IAC1B,kCAAkC;IAClC,YAAY;IACZ,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,aAAa;IACb,yCAAyC;AAC7C;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,iGAAiG;AACrG;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,2CAA2C;IAC3C,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,wHAAwH;IACxH,aAAa;IACb,WAAW;IACX,oBAAoB;IACpB,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');\n\n*,\n*::after,\n*::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n}\n\n:root {\n    font-size: 10px;\n    --main-txt-clr: #cac7ff;\n    --box-shadow-clr: rgba(202, 199, 255, 0.6);\n    --box-shadow-clr-2: rgba(202, 199, 255, 0.4);\n    --white-dim: rgba(255, 255, 255, 0.2);\n    --bkg-filter: blur(2px) saturate(180%);\n}\n\n::-webkit-scrollbar {\n    width: 1rem;\n    height: 1rem;\n}\n\n::-webkit-scrollbar-track {\n    background-color: #8DB8F1;\n}\n\n::-webkit-scrollbar-thumb {\n    cursor: pointer;\n    background-color: #58629b;\n    border-radius: 100vw;\n}\n\nbody {\n    background-image:\n        linear-gradient(rgba(0, 8, 51, 0.6), rgba(0, 8, 51, 0.6)),\n        url(./images/night_sky.jpg);\n    background-position: center;\n    background-size: cover;\n}\n\n#content {\n    max-width: 50rem;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 4rem 1rem;\n}\n\n\n/*--------------------------------------------------/**Search Bar**/\n\n.search-bar {\n    background-color: var(--white-dim);\n    width: 100%;\n    max-width: 50rem;\n    border-radius: 6rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1.4rem 1.8rem;\n    backdrop-filter: var(--bkg-filter);\n}\n\n.search-bar input {\n    background-color: transparent;\n    color: var(--main-txt-clr);\n    outline: none;\n    border: none;\n    flex: 1;\n    font-size: 2rem;\n    width: 100%;\n}\n\n::placeholder {\n    color: var(--main-txt-clr);\n}\n\n.search-bar button {\n    cursor: pointer;\n    border: none;\n    border-radius: 50%;\n    width: 4.5rem;\n    height: 4.5rem;\n    background-color: #58629b;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    transition: .1s scale;\n}\n\n.search-bar img {\n    width: 70%;\n    transition: .1s scale;\n    filter: invert(86%) sepia(39%) saturate(3418%) hue-rotate(192deg) brightness(107%) contrast(105%);\n}\n\n.search-bar button:hover {\n    scale: 1.1;\n}\n\n.search-bar button:hover img {\n    scale: 0.7;\n}\n\n.search-bar button:active {\n    scale: .95;\n}\n\n/*--------------------------------------------------/**Current State**/\n\n.current-state {\n    margin-top: 2.2rem;\n    text-align: center;\n    color: var(--main-txt-clr);\n}\n\nh1 {\n    font-weight: 400;\n    font-size: 2.4rem;\n}\n\n.current-state h1 {\n    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n}\n\n.location-name {\n    font-size: 3.6rem;\n}\n\n.current-temp {\n    font-size: 7.2rem;\n    font-weight: 200;\n    line-height: 9rem;\n}\n\n/*--------------------------------------------------/**Hourly Forecast**/\n\n.hourly-forecast {\n    user-select: none;\n    display: flex;\n    column-gap: .6rem;\n    color: var(--main-txt-clr);\n    text-align: center;\n    background-color: var(--white-dim);\n    backdrop-filter: var(--bkg-filter);\n    padding: 1.5rem 1.5rem 0.4rem;\n    border-radius: 1.2rem;\n    margin-top: 2.2rem;\n    width: 87.5%;\n    overflow: auto;\n}\n\n/* .hourly-forecast> *+*{\n    margin-left: 1.2rem;\n} */\n\np {\n    font-size: 1.8rem;\n}\n\n.hourly-forecast img {\n    width: 4.5rem;\n}\n\n.hourly-forecast::-webkit-scrollbar {\n    width: 1rem;\n    height: 1.8rem;\n}\n\n.hourly-forecast::-webkit-scrollbar-track {\n    background-color: #8db8f100;\n    margin-block: 1.2rem;\n    border-radius: 100vw;\n}\n\n.hourly-forecast::-webkit-scrollbar-thumb {\n    cursor: pointer;\n    background-color: #58629b;\n    border-radius: 100vw;\n}\n\n/*--------------------------------------------------/**Daily Forecast**/\n\n.daily-forecast {\n    margin-top: 2.2rem;\n    background-color: var(--white-dim);\n    color: var(--main-txt-clr);\n    backdrop-filter: var(--bkg-filter);\n    width: 87.5%;\n    border-radius: 1.2rem;\n    padding: 1.5rem;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    gap: .4rem;\n    opacity: 0.68;\n    box-shadow: 0 .1rem var(--box-shadow-clr);\n}\n\n.header .calendar {\n    width: 2rem;\n}\n\n.calendar img {\n    width: 100%;\n    filter: invert(86%) sepia(39%) saturate(3418%) hue-rotate(192deg) brightness(107%) contrast(105%);\n}\n\n.header p {\n    font-size: 1.4rem;\n    line-height: 1px;\n}\n\n.days img {\n    width: 4.5rem;\n}\n\n.day {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    text-align: center;\n    padding: 1.5rem 0 0;\n}\n\n.day:not(:last-child) {\n    box-shadow: 0 .1rem var(--box-shadow-clr-2);\n    padding: 1.5rem 0 1.5rem;\n}\n\n.day>* {\n    display: flex;\n    align-items: center;\n}\n\n.day>*:not(:first-child) {\n    justify-content: center;\n}\n\n.gradient div {\n    background-image: linear-gradient(90deg, rgba(0, 246, 255, 1) 0%, rgba(128, 225, 128, 1) 47%, rgba(255, 204, 0, 1) 100%);\n    height: .6rem;\n    width: 100%;\n    border-radius: .6rem;\n    opacity: .55;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMController.js":
/*!******************************!*\
  !*** ./src/DOMController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_magnify_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/magnify.svg */ "./src/images/magnify.svg");
/* harmony import */ var _images_calendar_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/calendar.svg */ "./src/images/calendar.svg");
/* harmony import */ var _app_logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app_logic.js */ "./src/app_logic.js");





function DOMController() {
    const weatherAPI = new _app_logic_js__WEBPACK_IMPORTED_MODULE_2__.WeatherApi();
    const unitScale = new _app_logic_js__WEBPACK_IMPORTED_MODULE_2__.UnitScale();
    const searchBar = document.querySelector('input');
    const searchBtn = document.querySelector('button');
    const btnIcon = document.querySelector('button>img');
    const headerIcon = document.querySelector('.calendar>img');
    
    btnIcon.src = _images_magnify_svg__WEBPACK_IMPORTED_MODULE_0__;
    headerIcon.src = _images_calendar_svg__WEBPACK_IMPORTED_MODULE_1__;

    // unitScale.setChoice('f');
    
    //1st request just to start the App
    requestData('Prague');

    searchBar.onkeydown = function (e) {
        if (e.keyCode === 13) requestData(e.target.value);
    }
    searchBtn.onclick = () => {
        requestData(searchBar.value);
    };

    async function requestData(value) {
        await weatherAPI.search(value);
        console.log(weatherAPI)
        if (weatherAPI.data.error) {
            return console.log(weatherAPI.data.error.message);
        }

        getCurrentWeatherData();
        getHourlyForecast();
        getDailyForecast();


        //Current-State Section Info to DOM
        function getCurrentWeatherData() {
            const locationName = document.querySelector('.location-name');
            const currentCondition = document.querySelector('.condition');
            const currentTemp = document.querySelector('.current-temp');
            const currentHighest = document.querySelector('.highest');
            const currentLowest = document.querySelector('.lowest');        
            const neededData = new _app_logic_js__WEBPACK_IMPORTED_MODULE_2__.ExtractWeatherData(weatherAPI.data);

            locationName.textContent = neededData.locationName;
            currentCondition.textContent = neededData.condition;
            if (unitScale.getChoice() === 'c') {
                currentTemp.textContent = neededData.tempC + '°';
                currentHighest.textContent = 'H: ' + neededData.maxTempC + '°';
                currentLowest.textContent = 'L: ' + neededData.minTempC + '°';
            } else {
                currentTemp.textContent = neededData.tempF + '°';
                currentHighest.textContent = 'H: ' + neededData.maxTempF + '°';
                currentLowest.textContent = 'L: ' + neededData.minTempF + '°';
            }
        }

        //Hourly Forecast Info to DOM
        function getHourlyForecast() {
            const hourlyForecastDiv = document.querySelector('.hourly-forecast');
            const hourlyForecast = new _app_logic_js__WEBPACK_IMPORTED_MODULE_2__.HourlyForecast(weatherAPI.data);
            const nextDayHourlyForecast = new _app_logic_js__WEBPACK_IMPORTED_MODULE_2__.HourlyForecast(weatherAPI.data, 1);
            const localTime = new Date(weatherAPI.data.location.localtime)
            const hourNow = localTime.getHours();
            const upcomingHours = hourlyForecast.data.filter(el => hourlyForecast.data.indexOf(el) >= hourNow);

            while (upcomingHours.length > 12) {
                upcomingHours.pop();
            }

            if (upcomingHours.length < 12) {
                let missingHours = 12 - upcomingHours.length;
                for (let i = 0; i < missingHours; i++) {
                    upcomingHours.push(nextDayHourlyForecast.data[i]);
                }
            }

            hourlyForecastDiv.innerHTML = '';

            upcomingHours.forEach((el) => {
                displayHourInfo(el)
            })

            function displayHourInfo(data) {
                const containerDiv = document.createElement('div');
                const hour = document.createElement('p');
                const iconDiv = document.createElement('div');
                const icon = document.createElement('img');
                const temp = document.createElement('p');

                containerDiv.classList.add('hour');
                iconDiv.classList.add('icon');

                if (new Date(data.time).getHours() === hourNow) hour.textContent = "Now";
                else hour.textContent = new Date(data.time).getHours();

                if (unitScale.getChoice() == 'c') temp.textContent = Math.round(data.temp_c) + '°';
                else temp.textContent = Math.round(data.temp_f) + '°';

                icon.src = 'https:' + data.condition.icon;
                iconDiv.appendChild(icon);

                containerDiv.appendChild(hour)
                containerDiv.appendChild(iconDiv)
                containerDiv.appendChild(temp);

                hourlyForecastDiv.appendChild(containerDiv);
            }

        }
        
        //3 Day forecast in DOM
        function getDailyForecast() {
            const forecastArr = weatherAPI.data.forecast.forecastday;
            const daysContainer = document.querySelector('.days');

            daysContainer.innerHTML = '';

            for (let i = 0; i < 3; i++) {
                const dayContainer = document.createElement('div');
                const h1 = document.createElement('h1');
                const iconContainer = document.createElement('div');
                const icon = new Image();
                const minTemp = document.createElement('h1');
                const gradientContainer = document.createElement('div');
                const gradient = document.createElement('div');
                const maxTemp = document.createElement('h1');

                dayContainer.classList.add('day');
                iconContainer.classList.add('icon');
                minTemp.classList.add('min');
                gradientContainer.classList.add('gradient');
                maxTemp.classList.add('max');

                console.log(forecastArr[i]);

                if (i === 0) h1.textContent = 'Today';
                else h1.textContent = findWeekDay(new Date(forecastArr[i].date).getDay());

                icon.src = 'https:' + forecastArr[i].day.condition.icon;
                if (unitScale.getChoice() == 'c') {
                    minTemp.textContent = Math.round(forecastArr[i].day.mintemp_c) + '°';
                    maxTemp.textContent = Math.round(forecastArr[i].day.maxtemp_c) + '°';
                } else {
                    minTemp.textContent = Math.round(forecastArr[i].day.mintemp_f) + '°';
                    maxTemp.textContent = Math.round(forecastArr[i].day.maxtemp_f) + '°';
                }

                iconContainer.appendChild(icon);
                gradientContainer.appendChild(gradient);

                dayContainer.appendChild(h1);
                dayContainer.appendChild(iconContainer);
                dayContainer.appendChild(minTemp);
                dayContainer.appendChild(gradientContainer);
                dayContainer.appendChild(maxTemp);

                daysContainer.appendChild(dayContainer);
            }

            function findWeekDay(nr) {
                let answer = '';
                switch (nr) {
                    case 0:
                        answer = 'Sun';
                        break;
                    case 1:
                        answer = 'Mon';
                        break;
                    case 2:
                        answer = 'Tue';
                        break;
                    case 3:
                        answer = 'Wed';
                        break;
                    case 4:
                        answer = 'Thu';
                        break;
                    case 5:
                        answer = 'Fri';
                        break;
                    case 6:
                        answer = 'Sat';
                } return answer;
            }
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMController);

/***/ }),

/***/ "./src/app_logic.js":
/*!**************************!*\
  !*** ./src/app_logic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtractWeatherData: () => (/* binding */ ExtractWeatherData),
/* harmony export */   HourlyForecast: () => (/* binding */ HourlyForecast),
/* harmony export */   UnitScale: () => (/* binding */ UnitScale),
/* harmony export */   WeatherApi: () => (/* binding */ WeatherApi)
/* harmony export */ });
//Application Logic

//Data fetching Object Constructor
class WeatherApi {
    constructor() {
        this.data = null;
        this.search = async function (place) {
            try {
                const response = await fetch(
                    `http://api.weatherapi.com/v1/forecast.json?key=d3effd02421b4d96a9d100840231309&q=${place}&days=3&aqi=no&alerts=no`, {
                    mode: 'cors'
                });
                const parsedData = await response.json();
                this.data = parsedData;
            } catch (error) {
                console.log(error);
            }
        }
    }
}

// Unit scale Constructor (between 'c' and 'f')
class UnitScale {
    constructor(choice = "c") {
        let unit = choice;
        this.getChoice = function () {
            return unit;
        }
        this.setChoice = function (choice) {
            unit = choice;
        }
    }
}

class HourlyForecast {
    constructor(obj, day = 0) {
        this.data = obj.forecast.forecastday[day].hour;
    }
}

// Extracts only needed data from weather api
class ExtractWeatherData {
    constructor(obj, day = 0) {
        if (!day) {
            this.tempC = obj.current.temp_c;
            this.tempF = obj.current.temp_f;
            this.localTime = obj.location.localtime.split(' ')[1].split(':')[0];
        }
        this.locationName = obj.location.name;
        this.condition = day ? obj.forecast.forecastday[day].day.condition.text : obj.current.condition.text;
        this.conditionIcon = day ? "https:" + obj.forecast.forecastday[day].day.condition.icon : "https:" + obj.current.condition.icon;
        this.maxTempC = obj.forecast.forecastday[day].day.maxtemp_c;
        this.maxTempF = obj.forecast.forecastday[day].day.maxtemp_f;
        this.minTempC = obj.forecast.forecastday[day].day.mintemp_c;
        this.minTempF = obj.forecast.forecastday[day].day.mintemp_f;
    }
}



/***/ }),

/***/ "./src/images/calendar.svg":
/*!*********************************!*\
  !*** ./src/images/calendar.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1514cb89e66edd886067.svg";

/***/ }),

/***/ "./src/images/magnify.svg":
/*!********************************!*\
  !*** ./src/images/magnify.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54ff7732bb1a5ff166c6.svg";

/***/ }),

/***/ "./src/images/night_sky.jpg":
/*!**********************************!*\
  !*** ./src/images/night_sky.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb7f09f32551c961b4c8.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMController */ "./src/DOMController.js");



(0,_DOMController__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDbk4seUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1DQUFtQztBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1GQUFtRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxN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Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDc0I7O0FBRTVDLDBEQUFhLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9ET01Db250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2FwcF9sb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9uaWdodF9za3kuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAtLW1haW4tdHh0LWNscjogI2NhYzdmZjtcbiAgICAtLWJveC1zaGFkb3ctY2xyOiByZ2JhKDIwMiwgMTk5LCAyNTUsIDAuNik7XG4gICAgLS1ib3gtc2hhZG93LWNsci0yOiByZ2JhKDIwMiwgMTk5LCAyNTUsIDAuNCk7XG4gICAgLS13aGl0ZS1kaW06IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAtLWJrZy1maWx0ZXI6IGJsdXIoMnB4KSBzYXR1cmF0ZSgxODAlKTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgaGVpZ2h0OiAxcmVtO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOERCOEYxO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjI5YjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDB2dztcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgOCwgNTEsIDAuNiksIHJnYmEoMCwgOCwgNTEsIDAuNikpLFxuICAgICAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDRyZW0gMXJlbTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLyoqU2VhcmNoIEJhcioqL1xuXG4uc2VhcmNoLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtZGltKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEuNHJlbSAxLjhyZW07XG4gICAgYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1ia2ctZmlsdGVyKTtcbn1cblxuLnNlYXJjaC1iYXIgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jbHIpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZsZXg6IDE7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY2xyKTtcbn1cblxuLnNlYXJjaC1iYXIgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNC41cmVtO1xuICAgIGhlaWdodDogNC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODYyOWI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHRyYW5zaXRpb246IC4xcyBzY2FsZTtcbn1cblxuLnNlYXJjaC1iYXIgaW1nIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIHRyYW5zaXRpb246IC4xcyBzY2FsZTtcbiAgICBmaWx0ZXI6IGludmVydCg4NiUpIHNlcGlhKDM5JSkgc2F0dXJhdGUoMzQxOCUpIGh1ZS1yb3RhdGUoMTkyZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpO1xufVxuXG4uc2VhcmNoLWJhciBidXR0b246aG92ZXIge1xuICAgIHNjYWxlOiAxLjE7XG59XG5cbi5zZWFyY2gtYmFyIGJ1dHRvbjpob3ZlciBpbWcge1xuICAgIHNjYWxlOiAwLjc7XG59XG5cbi5zZWFyY2gtYmFyIGJ1dHRvbjphY3RpdmUge1xuICAgIHNjYWxlOiAuOTU7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vKipDdXJyZW50IFN0YXRlKiovXG5cbi5jdXJyZW50LXN0YXRlIHtcbiAgICBtYXJnaW4tdG9wOiAyLjJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jbHIpO1xufVxuXG5oMSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDIuNHJlbTtcbn1cblxuLmN1cnJlbnQtc3RhdGUgaDEge1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5sb2NhdGlvbi1uYW1lIHtcbiAgICBmb250LXNpemU6IDMuNnJlbTtcbn1cblxuLmN1cnJlbnQtdGVtcCB7XG4gICAgZm9udC1zaXplOiA3LjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBsaW5lLWhlaWdodDogOXJlbTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8qKkhvdXJseSBGb3JlY2FzdCoqL1xuXG4uaG91cmx5LWZvcmVjYXN0IHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbHVtbi1nYXA6IC42cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jbHIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1kaW0pO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tYmtnLWZpbHRlcik7XG4gICAgcGFkZGluZzogMS41cmVtIDEuNXJlbSAwLjRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xuICAgIG1hcmdpbi10b3A6IDIuMnJlbTtcbiAgICB3aWR0aDogODcuNSU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qIC5ob3VybHktZm9yZWNhc3Q+ICorKntcbiAgICBtYXJnaW4tbGVmdDogMS4ycmVtO1xufSAqL1xuXG5wIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmhvdXJseS1mb3JlY2FzdCBpbWcge1xuICAgIHdpZHRoOiA0LjVyZW07XG59XG5cbi5ob3VybHktZm9yZWNhc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IDEuOHJlbTtcbn1cblxuLmhvdXJseS1mb3JlY2FzdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZGI4ZjEwMDtcbiAgICBtYXJnaW4tYmxvY2s6IDEuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDB2dztcbn1cblxuLmhvdXJseS1mb3JlY2FzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2MjliO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLyoqRGFpbHkgRm9yZWNhc3QqKi9cblxuLmRhaWx5LWZvcmVjYXN0IHtcbiAgICBtYXJnaW4tdG9wOiAyLjJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtZGltKTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY2xyKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJrZy1maWx0ZXIpO1xuICAgIHdpZHRoOiA4Ny41JTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XG4gICAgcGFkZGluZzogMS41cmVtO1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuNHJlbTtcbiAgICBvcGFjaXR5OiAwLjY4O1xuICAgIGJveC1zaGFkb3c6IDAgLjFyZW0gdmFyKC0tYm94LXNoYWRvdy1jbHIpO1xufVxuXG4uaGVhZGVyIC5jYWxlbmRhciB7XG4gICAgd2lkdGg6IDJyZW07XG59XG5cbi5jYWxlbmRhciBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZpbHRlcjogaW52ZXJ0KDg2JSkgc2VwaWEoMzklKSBzYXR1cmF0ZSgzNDE4JSkgaHVlLXJvdGF0ZSgxOTJkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA1JSk7XG59XG5cbi5oZWFkZXIgcCB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgbGluZS1oZWlnaHQ6IDFweDtcbn1cblxuLmRheXMgaW1nIHtcbiAgICB3aWR0aDogNC41cmVtO1xufVxuXG4uZGF5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMS41cmVtIDAgMDtcbn1cblxuLmRheTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3gtc2hhZG93OiAwIC4xcmVtIHZhcigtLWJveC1zaGFkb3ctY2xyLTIpO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAwIDEuNXJlbTtcbn1cblxuLmRheT4qIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYXk+Kjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ncmFkaWVudCBkaXYge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLCAyNDYsIDI1NSwgMSkgMCUsIHJnYmEoMTI4LCAyMjUsIDEyOCwgMSkgNDclLCByZ2JhKDI1NSwgMjA0LCAwLCAxKSAxMDAlKTtcbiAgICBoZWlnaHQ6IC42cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IC42cmVtO1xuICAgIG9wYWNpdHk6IC41NTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7SUFHSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLDBDQUEwQztJQUMxQyw0Q0FBNEM7SUFDNUMscUNBQXFDO0lBQ3JDLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTs7K0NBRStCO0lBQy9CLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7OztBQUdBLG1FQUFtRTs7QUFFbkU7SUFDSSxrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFlBQVk7SUFDWixPQUFPO0lBQ1AsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGlHQUFpRztBQUNyRzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQSxzRUFBc0U7O0FBRXRFO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUEsd0VBQXdFOztBQUV4RTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUEsdUVBQXVFOztBQUV2RTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0lBQ2IseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlHQUFpRztBQUNyRzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx3SEFBd0g7SUFDeEgsYUFBYTtJQUNiLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIC0tbWFpbi10eHQtY2xyOiAjY2FjN2ZmO1xcbiAgICAtLWJveC1zaGFkb3ctY2xyOiByZ2JhKDIwMiwgMTk5LCAyNTUsIDAuNik7XFxuICAgIC0tYm94LXNoYWRvdy1jbHItMjogcmdiYSgyMDIsIDE5OSwgMjU1LCAwLjQpO1xcbiAgICAtLXdoaXRlLWRpbTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICAtLWJrZy1maWx0ZXI6IGJsdXIoMnB4KSBzYXR1cmF0ZSgxODAlKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOERCOEYxO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2MjliO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDB2dztcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCA4LCA1MSwgMC42KSwgcmdiYSgwLCA4LCA1MSwgMC42KSksXFxuICAgICAgICB1cmwoLi9pbWFnZXMvbmlnaHRfc2t5LmpwZyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDRyZW0gMXJlbTtcXG59XFxuXFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8qKlNlYXJjaCBCYXIqKi9cXG5cXG4uc2VhcmNoLWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWRpbSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMS40cmVtIDEuOHJlbTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1ia2ctZmlsdGVyKTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmxleDogMTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jbHIpO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBidXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogNC41cmVtO1xcbiAgICBoZWlnaHQ6IDQuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjI5YjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB0cmFuc2l0aW9uOiAuMXMgc2NhbGU7XFxufVxcblxcbi5zZWFyY2gtYmFyIGltZyB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHRyYW5zaXRpb246IC4xcyBzY2FsZTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoODYlKSBzZXBpYSgzOSUpIHNhdHVyYXRlKDM0MTglKSBodWUtcm90YXRlKDE5MmRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDUlKTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgYnV0dG9uOmhvdmVyIGltZyB7XFxuICAgIHNjYWxlOiAwLjc7XFxufVxcblxcbi5zZWFyY2gtYmFyIGJ1dHRvbjphY3RpdmUge1xcbiAgICBzY2FsZTogLjk1O1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLyoqQ3VycmVudCBTdGF0ZSoqL1xcblxcbi5jdXJyZW50LXN0YXRlIHtcXG4gICAgbWFyZ2luLXRvcDogMi4ycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jbHIpO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcbn1cXG5cXG4uY3VycmVudC1zdGF0ZSBoMSB7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5sb2NhdGlvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAzLjZyZW07XFxufVxcblxcbi5jdXJyZW50LXRlbXAge1xcbiAgICBmb250LXNpemU6IDcuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDlyZW07XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vKipIb3VybHkgRm9yZWNhc3QqKi9cXG5cXG4uaG91cmx5LWZvcmVjYXN0IHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IC42cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY2xyKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1kaW0pO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJrZy1maWx0ZXIpO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtIDAuNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAyLjJyZW07XFxuICAgIHdpZHRoOiA4Ny41JTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qIC5ob3VybHktZm9yZWNhc3Q+ICorKntcXG4gICAgbWFyZ2luLWxlZnQ6IDEuMnJlbTtcXG59ICovXFxuXFxucCB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0IGltZyB7XFxuICAgIHdpZHRoOiA0LjVyZW07XFxufVxcblxcbi5ob3VybHktZm9yZWNhc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMS44cmVtO1xcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZGI4ZjEwMDtcXG4gICAgbWFyZ2luLWJsb2NrOiAxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjI5YjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vKipEYWlseSBGb3JlY2FzdCoqL1xcblxcbi5kYWlseS1mb3JlY2FzdCB7XFxuICAgIG1hcmdpbi10b3A6IDIuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtZGltKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNscik7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tYmtnLWZpbHRlcik7XFxuICAgIHdpZHRoOiA4Ny41JTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC40cmVtO1xcbiAgICBvcGFjaXR5OiAwLjY4O1xcbiAgICBib3gtc2hhZG93OiAwIC4xcmVtIHZhcigtLWJveC1zaGFkb3ctY2xyKTtcXG59XFxuXFxuLmhlYWRlciAuY2FsZW5kYXIge1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLmNhbGVuZGFyIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmaWx0ZXI6IGludmVydCg4NiUpIHNlcGlhKDM5JSkgc2F0dXJhdGUoMzQxOCUpIGh1ZS1yb3RhdGUoMTkyZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5cXG4uaGVhZGVyIHAge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDFweDtcXG59XFxuXFxuLmRheXMgaW1nIHtcXG4gICAgd2lkdGg6IDQuNXJlbTtcXG59XFxuXFxuLmRheSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMCAwO1xcbn1cXG5cXG4uZGF5Om5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBib3gtc2hhZG93OiAwIC4xcmVtIHZhcigtLWJveC1zaGFkb3ctY2xyLTIpO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMCAxLjVyZW07XFxufVxcblxcbi5kYXk+KiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXk+Kjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ3JhZGllbnQgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsIDI0NiwgMjU1LCAxKSAwJSwgcmdiYSgxMjgsIDIyNSwgMTI4LCAxKSA0NyUsIHJnYmEoMjU1LCAyMDQsIDAsIDEpIDEwMCUpO1xcbiAgICBoZWlnaHQ6IC42cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjZyZW07XFxuICAgIG9wYWNpdHk6IC41NTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBtYWduaWZ5IGZyb20gJy4vaW1hZ2VzL21hZ25pZnkuc3ZnJztcbmltcG9ydCBjYWxlbmRhciBmcm9tICcuL2ltYWdlcy9jYWxlbmRhci5zdmcnXG5pbXBvcnQge1xuICAgIFdlYXRoZXJBcGksXG4gICAgVW5pdFNjYWxlLFxuICAgIEhvdXJseUZvcmVjYXN0LFxuICAgIEV4dHJhY3RXZWF0aGVyRGF0YSxcbn0gZnJvbSBcIi4vYXBwX2xvZ2ljLmpzXCJcblxuXG5mdW5jdGlvbiBET01Db250cm9sbGVyKCkge1xuICAgIGNvbnN0IHdlYXRoZXJBUEkgPSBuZXcgV2VhdGhlckFwaSgpO1xuICAgIGNvbnN0IHVuaXRTY2FsZSA9IG5ldyBVbml0U2NhbGUoKTtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJ0bkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24+aW1nJyk7XG4gICAgY29uc3QgaGVhZGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhcj5pbWcnKTtcbiAgICBcbiAgICBidG5JY29uLnNyYyA9IG1hZ25pZnk7XG4gICAgaGVhZGVySWNvbi5zcmMgPSBjYWxlbmRhcjtcblxuICAgIC8vIHVuaXRTY2FsZS5zZXRDaG9pY2UoJ2YnKTtcbiAgICBcbiAgICAvLzFzdCByZXF1ZXN0IGp1c3QgdG8gc3RhcnQgdGhlIEFwcFxuICAgIHJlcXVlc3REYXRhKCdQcmFndWUnKTtcblxuICAgIHNlYXJjaEJhci5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgcmVxdWVzdERhdGEoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICBzZWFyY2hCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgcmVxdWVzdERhdGEoc2VhcmNoQmFyLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdERhdGEodmFsdWUpIHtcbiAgICAgICAgYXdhaXQgd2VhdGhlckFQSS5zZWFyY2godmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyQVBJKVxuICAgICAgICBpZiAod2VhdGhlckFQSS5kYXRhLmVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2cod2VhdGhlckFQSS5kYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0Q3VycmVudFdlYXRoZXJEYXRhKCk7XG4gICAgICAgIGdldEhvdXJseUZvcmVjYXN0KCk7XG4gICAgICAgIGdldERhaWx5Rm9yZWNhc3QoKTtcblxuXG4gICAgICAgIC8vQ3VycmVudC1TdGF0ZSBTZWN0aW9uIEluZm8gdG8gRE9NXG4gICAgICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyRGF0YSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1uYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbicpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10ZW1wJyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SGlnaGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoZXN0Jyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TG93ZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvd2VzdCcpOyAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuZWVkZWREYXRhID0gbmV3IEV4dHJhY3RXZWF0aGVyRGF0YSh3ZWF0aGVyQVBJLmRhdGEpO1xuXG4gICAgICAgICAgICBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQgPSBuZWVkZWREYXRhLmxvY2F0aW9uTmFtZTtcbiAgICAgICAgICAgIGN1cnJlbnRDb25kaXRpb24udGV4dENvbnRlbnQgPSBuZWVkZWREYXRhLmNvbmRpdGlvbjtcbiAgICAgICAgICAgIGlmICh1bml0U2NhbGUuZ2V0Q2hvaWNlKCkgPT09ICdjJykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gbmVlZGVkRGF0YS50ZW1wQyArICfCsCc7XG4gICAgICAgICAgICAgICAgY3VycmVudEhpZ2hlc3QudGV4dENvbnRlbnQgPSAnSDogJyArIG5lZWRlZERhdGEubWF4VGVtcEMgKyAnwrAnO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRMb3dlc3QudGV4dENvbnRlbnQgPSAnTDogJyArIG5lZWRlZERhdGEubWluVGVtcEMgKyAnwrAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IG5lZWRlZERhdGEudGVtcEYgKyAnwrAnO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRIaWdoZXN0LnRleHRDb250ZW50ID0gJ0g6ICcgKyBuZWVkZWREYXRhLm1heFRlbXBGICsgJ8KwJztcbiAgICAgICAgICAgICAgICBjdXJyZW50TG93ZXN0LnRleHRDb250ZW50ID0gJ0w6ICcgKyBuZWVkZWREYXRhLm1pblRlbXBGICsgJ8KwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vSG91cmx5IEZvcmVjYXN0IEluZm8gdG8gRE9NXG4gICAgICAgIGZ1bmN0aW9uIGdldEhvdXJseUZvcmVjYXN0KCkge1xuICAgICAgICAgICAgY29uc3QgaG91cmx5Rm9yZWNhc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LWZvcmVjYXN0Jyk7XG4gICAgICAgICAgICBjb25zdCBob3VybHlGb3JlY2FzdCA9IG5ldyBIb3VybHlGb3JlY2FzdCh3ZWF0aGVyQVBJLmRhdGEpO1xuICAgICAgICAgICAgY29uc3QgbmV4dERheUhvdXJseUZvcmVjYXN0ID0gbmV3IEhvdXJseUZvcmVjYXN0KHdlYXRoZXJBUEkuZGF0YSwgMSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFRpbWUgPSBuZXcgRGF0ZSh3ZWF0aGVyQVBJLmRhdGEubG9jYXRpb24ubG9jYWx0aW1lKVxuICAgICAgICAgICAgY29uc3QgaG91ck5vdyA9IGxvY2FsVGltZS5nZXRIb3VycygpO1xuICAgICAgICAgICAgY29uc3QgdXBjb21pbmdIb3VycyA9IGhvdXJseUZvcmVjYXN0LmRhdGEuZmlsdGVyKGVsID0+IGhvdXJseUZvcmVjYXN0LmRhdGEuaW5kZXhPZihlbCkgPj0gaG91ck5vdyk7XG5cbiAgICAgICAgICAgIHdoaWxlICh1cGNvbWluZ0hvdXJzLmxlbmd0aCA+IDEyKSB7XG4gICAgICAgICAgICAgICAgdXBjb21pbmdIb3Vycy5wb3AoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHVwY29taW5nSG91cnMubGVuZ3RoIDwgMTIpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWlzc2luZ0hvdXJzID0gMTIgLSB1cGNvbWluZ0hvdXJzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pc3NpbmdIb3VyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwY29taW5nSG91cnMucHVzaChuZXh0RGF5SG91cmx5Rm9yZWNhc3QuZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBob3VybHlGb3JlY2FzdERpdi5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgdXBjb21pbmdIb3Vycy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlIb3VySW5mbyhlbClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlIb3VySW5mbyhkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnaG91cicpO1xuICAgICAgICAgICAgICAgIGljb25EaXYuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5ldyBEYXRlKGRhdGEudGltZSkuZ2V0SG91cnMoKSA9PT0gaG91ck5vdykgaG91ci50ZXh0Q29udGVudCA9IFwiTm93XCI7XG4gICAgICAgICAgICAgICAgZWxzZSBob3VyLnRleHRDb250ZW50ID0gbmV3IERhdGUoZGF0YS50aW1lKS5nZXRIb3VycygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHVuaXRTY2FsZS5nZXRDaG9pY2UoKSA9PSAnYycpIHRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRhdGEudGVtcF9jKSArICfCsCc7XG4gICAgICAgICAgICAgICAgZWxzZSB0ZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChkYXRhLnRlbXBfZikgKyAnwrAnO1xuXG4gICAgICAgICAgICAgICAgaWNvbi5zcmMgPSAnaHR0cHM6JyArIGRhdGEuY29uZGl0aW9uLmljb247XG4gICAgICAgICAgICAgICAgaWNvbkRpdi5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChob3VyKVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChpY29uRGl2KVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0ZW1wKTtcblxuICAgICAgICAgICAgICAgIGhvdXJseUZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lckRpdik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8zIERheSBmb3JlY2FzdCBpbiBET01cbiAgICAgICAgZnVuY3Rpb24gZ2V0RGFpbHlGb3JlY2FzdCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0QXJyID0gd2VhdGhlckFQSS5kYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICAgICAgICAgICAgY29uc3QgZGF5c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXlzJyk7XG5cbiAgICAgICAgICAgIGRheXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JhZGllbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncmFkaWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICAgICAgZGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgICAgICAgICAgICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICAgICAgICAgIG1pblRlbXAuY2xhc3NMaXN0LmFkZCgnbWluJyk7XG4gICAgICAgICAgICAgICAgZ3JhZGllbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JhZGllbnQnKTtcbiAgICAgICAgICAgICAgICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoJ21heCcpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3RBcnJbaV0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIGgxLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICAgICAgICAgICAgICBlbHNlIGgxLnRleHRDb250ZW50ID0gZmluZFdlZWtEYXkobmV3IERhdGUoZm9yZWNhc3RBcnJbaV0uZGF0ZSkuZ2V0RGF5KCkpO1xuXG4gICAgICAgICAgICAgICAgaWNvbi5zcmMgPSAnaHR0cHM6JyArIGZvcmVjYXN0QXJyW2ldLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgICAgICAgICBpZiAodW5pdFNjYWxlLmdldENob2ljZSgpID09ICdjJykge1xuICAgICAgICAgICAgICAgICAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChmb3JlY2FzdEFycltpXS5kYXkubWludGVtcF9jKSArICfCsCc7XG4gICAgICAgICAgICAgICAgICAgIG1heFRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGZvcmVjYXN0QXJyW2ldLmRheS5tYXh0ZW1wX2MpICsgJ8KwJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChmb3JlY2FzdEFycltpXS5kYXkubWludGVtcF9mKSArICfCsCc7XG4gICAgICAgICAgICAgICAgICAgIG1heFRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGZvcmVjYXN0QXJyW2ldLmRheS5tYXh0ZW1wX2YpICsgJ8KwJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgICAgIGdyYWRpZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGdyYWRpZW50KTtcblxuICAgICAgICAgICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChoMSk7XG4gICAgICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpO1xuICAgICAgICAgICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW5UZW1wKTtcbiAgICAgICAgICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JhZGllbnRDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXhUZW1wKTtcblxuICAgICAgICAgICAgICAgIGRheXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5Q29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZmluZFdlZWtEYXkobnIpIHtcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VyID0gJyc7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChucikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSAnU3VuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSAnTW9uJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSAnVHVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSAnV2VkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSAnVGh1JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSAnRnJpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSAnU2F0JztcbiAgICAgICAgICAgICAgICB9IHJldHVybiBhbnN3ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTUNvbnRyb2xsZXI7IiwiLy9BcHBsaWNhdGlvbiBMb2dpY1xuXG4vL0RhdGEgZmV0Y2hpbmcgT2JqZWN0IENvbnN0cnVjdG9yXG5jbGFzcyBXZWF0aGVyQXBpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBhc3luYyBmdW5jdGlvbiAocGxhY2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZDNlZmZkMDI0MjFiNGQ5NmE5ZDEwMDg0MDIzMTMwOSZxPSR7cGxhY2V9JmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vYCwge1xuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnY29ycydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHBhcnNlZERhdGE7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gVW5pdCBzY2FsZSBDb25zdHJ1Y3RvciAoYmV0d2VlbiAnYycgYW5kICdmJylcbmNsYXNzIFVuaXRTY2FsZSB7XG4gICAgY29uc3RydWN0b3IoY2hvaWNlID0gXCJjXCIpIHtcbiAgICAgICAgbGV0IHVuaXQgPSBjaG9pY2U7XG4gICAgICAgIHRoaXMuZ2V0Q2hvaWNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuaXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRDaG9pY2UgPSBmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgICAgICB1bml0ID0gY2hvaWNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBIb3VybHlGb3JlY2FzdCB7XG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXkgPSAwKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmhvdXI7XG4gICAgfVxufVxuXG4vLyBFeHRyYWN0cyBvbmx5IG5lZWRlZCBkYXRhIGZyb20gd2VhdGhlciBhcGlcbmNsYXNzIEV4dHJhY3RXZWF0aGVyRGF0YSB7XG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXkgPSAwKSB7XG4gICAgICAgIGlmICghZGF5KSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBDID0gb2JqLmN1cnJlbnQudGVtcF9jO1xuICAgICAgICAgICAgdGhpcy50ZW1wRiA9IG9iai5jdXJyZW50LnRlbXBfZjtcbiAgICAgICAgICAgIHRoaXMubG9jYWxUaW1lID0gb2JqLmxvY2F0aW9uLmxvY2FsdGltZS5zcGxpdCgnICcpWzFdLnNwbGl0KCc6JylbMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhdGlvbk5hbWUgPSBvYmoubG9jYXRpb24ubmFtZTtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBkYXkgPyBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkuY29uZGl0aW9uLnRleHQgOiBvYmouY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgdGhpcy5jb25kaXRpb25JY29uID0gZGF5ID8gXCJodHRwczpcIiArIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5jb25kaXRpb24uaWNvbiA6IFwiaHR0cHM6XCIgKyBvYmouY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgdGhpcy5tYXhUZW1wQyA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5tYXh0ZW1wX2M7XG4gICAgICAgIHRoaXMubWF4VGVtcEYgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkubWF4dGVtcF9mO1xuICAgICAgICB0aGlzLm1pblRlbXBDID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5Lm1pbnRlbXBfYztcbiAgICAgICAgdGhpcy5taW5UZW1wRiA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5taW50ZW1wX2Y7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFdlYXRoZXJBcGksXG4gICAgVW5pdFNjYWxlLFxuICAgIEhvdXJseUZvcmVjYXN0LFxuICAgIEV4dHJhY3RXZWF0aGVyRGF0YSxcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gXCIuL0RPTUNvbnRyb2xsZXJcIjtcblxuRE9NQ29udHJvbGxlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==