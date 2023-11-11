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
                    `http://api.weatherapi.com/v1/forecast.json?key=d3effd02421b4d96a9d100840231309&q=${place}&days=3&aqi=no&alerts=no`
                )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDbk4seUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1DQUFtQztBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1GQUFtRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxN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Ozs7Ozs7OztBQ0FzQjtBQUNzQjs7QUFFNUMsMERBQWEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvYXBwX2xvZ2ljLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL25pZ2h0X3NreS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIC0tbWFpbi10eHQtY2xyOiAjY2FjN2ZmO1xuICAgIC0tYm94LXNoYWRvdy1jbHI6IHJnYmEoMjAyLCAxOTksIDI1NSwgMC42KTtcbiAgICAtLWJveC1zaGFkb3ctY2xyLTI6IHJnYmEoMjAyLCAxOTksIDI1NSwgMC40KTtcbiAgICAtLXdoaXRlLWRpbTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIC0tYmtnLWZpbHRlcjogYmx1cigycHgpIHNhdHVyYXRlKDE4MCUpO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4REI4RjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2MjliO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgICAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCA4LCA1MSwgMC42KSwgcmdiYSgwLCA4LCA1MSwgMC42KSksXG4gICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NvbnRlbnQge1xuICAgIG1heC13aWR0aDogNTByZW07XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNHJlbSAxcmVtO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vKipTZWFyY2ggQmFyKiovXG5cbi5zZWFyY2gtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1kaW0pO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNTByZW07XG4gICAgYm9yZGVyLXJhZGl1czogNnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMS40cmVtIDEuOHJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJrZy1maWx0ZXIpO1xufVxuXG4uc2VhcmNoLWJhciBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNscik7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZmxleDogMTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jbHIpO1xufVxuXG4uc2VhcmNoLWJhciBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0LjVyZW07XG4gICAgaGVpZ2h0OiA0LjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjI5YjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgdHJhbnNpdGlvbjogLjFzIHNjYWxlO1xufVxuXG4uc2VhcmNoLWJhciBpbWcge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgdHJhbnNpdGlvbjogLjFzIHNjYWxlO1xuICAgIGZpbHRlcjogaW52ZXJ0KDg2JSkgc2VwaWEoMzklKSBzYXR1cmF0ZSgzNDE4JSkgaHVlLXJvdGF0ZSgxOTJkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA1JSk7XG59XG5cbi5zZWFyY2gtYmFyIGJ1dHRvbjpob3ZlciB7XG4gICAgc2NhbGU6IDEuMTtcbn1cblxuLnNlYXJjaC1iYXIgYnV0dG9uOmhvdmVyIGltZyB7XG4gICAgc2NhbGU6IDAuNztcbn1cblxuLnNlYXJjaC1iYXIgYnV0dG9uOmFjdGl2ZSB7XG4gICAgc2NhbGU6IC45NTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8qKkN1cnJlbnQgU3RhdGUqKi9cblxuLmN1cnJlbnQtc3RhdGUge1xuICAgIG1hcmdpbi10b3A6IDIuMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNscik7XG59XG5cbmgxIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uY3VycmVudC1zdGF0ZSBoMSB7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmxvY2F0aW9uLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMy42cmVtO1xufVxuXG4uY3VycmVudC10ZW1wIHtcbiAgICBmb250LXNpemU6IDcuMnJlbTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxpbmUtaGVpZ2h0OiA5cmVtO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLyoqSG91cmx5IEZvcmVjYXN0KiovXG5cbi5ob3VybHktZm9yZWNhc3Qge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sdW1uLWdhcDogLjZyZW07XG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNscik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWRpbSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1ia2ctZmlsdGVyKTtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtIDAuNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XG4gICAgbWFyZ2luLXRvcDogMi4ycmVtO1xuICAgIHdpZHRoOiA4Ny41JTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyogLmhvdXJseS1mb3JlY2FzdD4gKisqe1xuICAgIG1hcmdpbi1sZWZ0OiAxLjJyZW07XG59ICovXG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4uaG91cmx5LWZvcmVjYXN0IGltZyB7XG4gICAgd2lkdGg6IDQuNXJlbTtcbn1cblxuLmhvdXJseS1mb3JlY2FzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMS44cmVtO1xufVxuXG4uaG91cmx5LWZvcmVjYXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhkYjhmMTAwO1xuICAgIG1hcmdpbi1ibG9jazogMS4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xufVxuXG4uaG91cmx5LWZvcmVjYXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODYyOWI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwdnc7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vKipEYWlseSBGb3JlY2FzdCoqL1xuXG4uZGFpbHktZm9yZWNhc3Qge1xuICAgIG1hcmdpbi10b3A6IDIuMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1kaW0pO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jbHIpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tYmtnLWZpbHRlcik7XG4gICAgd2lkdGg6IDg3LjUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IC40cmVtO1xuICAgIG9wYWNpdHk6IDAuNjg7XG4gICAgYm94LXNoYWRvdzogMCAuMXJlbSB2YXIoLS1ib3gtc2hhZG93LWNscik7XG59XG5cbi5oZWFkZXIgLmNhbGVuZGFyIHtcbiAgICB3aWR0aDogMnJlbTtcbn1cblxuLmNhbGVuZGFyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmlsdGVyOiBpbnZlcnQoODYlKSBzZXBpYSgzOSUpIHNhdHVyYXRlKDM0MTglKSBodWUtcm90YXRlKDE5MmRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDUlKTtcbn1cblxuLmhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBsaW5lLWhlaWdodDogMXB4O1xufVxuXG4uZGF5cyBpbWcge1xuICAgIHdpZHRoOiA0LjVyZW07XG59XG5cbi5kYXkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMCAwO1xufVxuXG4uZGF5Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJveC1zaGFkb3c6IDAgLjFyZW0gdmFyKC0tYm94LXNoYWRvdy1jbHItMik7XG4gICAgcGFkZGluZzogMS41cmVtIDAgMS41cmVtO1xufVxuXG4uZGF5Pioge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRheT4qOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmdyYWRpZW50IGRpdiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsIDI0NiwgMjU1LCAxKSAwJSwgcmdiYSgxMjgsIDIyNSwgMTI4LCAxKSA0NyUsIHJnYmEoMjU1LCAyMDQsIDAsIDEpIDEwMCUpO1xuICAgIGhlaWdodDogLjZyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogLjZyZW07XG4gICAgb3BhY2l0eTogLjU1O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLDRDQUE0QztJQUM1QyxxQ0FBcUM7SUFDckMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJOzsrQ0FFK0I7SUFDL0IsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7O0FBR0EsbUVBQW1FOztBQUVuRTtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsWUFBWTtJQUNaLE9BQU87SUFDUCxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsaUdBQWlHO0FBQ3JHOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBLHNFQUFzRTs7QUFFdEU7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQSx3RUFBd0U7O0FBRXhFO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFFQSx1RUFBdUU7O0FBRXZFO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGFBQWE7SUFDYix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUdBQWlHO0FBQ3JHOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0Msd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdIQUF3SDtJQUN4SCxhQUFhO0lBQ2IsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgLS1tYWluLXR4dC1jbHI6ICNjYWM3ZmY7XFxuICAgIC0tYm94LXNoYWRvdy1jbHI6IHJnYmEoMjAyLCAxOTksIDI1NSwgMC42KTtcXG4gICAgLS1ib3gtc2hhZG93LWNsci0yOiByZ2JhKDIwMiwgMTk5LCAyNTUsIDAuNCk7XFxuICAgIC0td2hpdGUtZGltOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIC0tYmtnLWZpbHRlcjogYmx1cigycHgpIHNhdHVyYXRlKDE4MCUpO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4REI4RjE7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODYyOWI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDgsIDUxLCAwLjYpLCByZ2JhKDAsIDgsIDUxLCAwLjYpKSxcXG4gICAgICAgIHVybCguL2ltYWdlcy9uaWdodF9za3kuanBnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1heC13aWR0aDogNTByZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNHJlbSAxcmVtO1xcbn1cXG5cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLyoqU2VhcmNoIEJhcioqL1xcblxcbi5zZWFyY2gtYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtZGltKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNTByZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDZyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxLjRyZW0gMS44cmVtO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJrZy1maWx0ZXIpO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY2xyKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmbGV4OiAxO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNscik7XFxufVxcblxcbi5zZWFyY2gtYmFyIGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA0LjVyZW07XFxuICAgIGhlaWdodDogNC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2MjliO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHRyYW5zaXRpb246IC4xcyBzY2FsZTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW1nIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgdHJhbnNpdGlvbjogLjFzIHNjYWxlO1xcbiAgICBmaWx0ZXI6IGludmVydCg4NiUpIHNlcGlhKDM5JSkgc2F0dXJhdGUoMzQxOCUpIGh1ZS1yb3RhdGUoMTkyZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBidXR0b246aG92ZXIge1xcbiAgICBzY2FsZTogMS4xO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBidXR0b246aG92ZXIgaW1nIHtcXG4gICAgc2NhbGU6IDAuNztcXG59XFxuXFxuLnNlYXJjaC1iYXIgYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHNjYWxlOiAuOTU7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vKipDdXJyZW50IFN0YXRlKiovXFxuXFxuLmN1cnJlbnQtc3RhdGUge1xcbiAgICBtYXJnaW4tdG9wOiAyLjJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNscik7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAyLjRyZW07XFxufVxcblxcbi5jdXJyZW50LXN0YXRlIGgxIHtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmxvY2F0aW9uLW5hbWUge1xcbiAgICBmb250LXNpemU6IDMuNnJlbTtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogNy4ycmVtO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBsaW5lLWhlaWdodDogOXJlbTtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8qKkhvdXJseSBGb3JlY2FzdCoqL1xcblxcbi5ob3VybHktZm9yZWNhc3Qge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogLjZyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jbHIpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWRpbSk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tYmtnLWZpbHRlcik7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW0gMC40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XFxuICAgIG1hcmdpbi10b3A6IDIuMnJlbTtcXG4gICAgd2lkdGg6IDg3LjUlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyogLmhvdXJseS1mb3JlY2FzdD4gKisqe1xcbiAgICBtYXJnaW4tbGVmdDogMS4ycmVtO1xcbn0gKi9cXG5cXG5wIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5ob3VybHktZm9yZWNhc3QgaW1nIHtcXG4gICAgd2lkdGg6IDQuNXJlbTtcXG59XFxuXFxuLmhvdXJseS1mb3JlY2FzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxLjhyZW07XFxufVxcblxcbi5ob3VybHktZm9yZWNhc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhkYjhmMTAwO1xcbiAgICBtYXJnaW4tYmxvY2s6IDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxufVxcblxcbi5ob3VybHktZm9yZWNhc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2MjliO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDB2dztcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8qKkRhaWx5IEZvcmVjYXN0KiovXFxuXFxuLmRhaWx5LWZvcmVjYXN0IHtcXG4gICAgbWFyZ2luLXRvcDogMi4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1kaW0pO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY2xyKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1ia2ctZmlsdGVyKTtcXG4gICAgd2lkdGg6IDg3LjUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjRyZW07XFxuICAgIG9wYWNpdHk6IDAuNjg7XFxuICAgIGJveC1zaGFkb3c6IDAgLjFyZW0gdmFyKC0tYm94LXNoYWRvdy1jbHIpO1xcbn1cXG5cXG4uaGVhZGVyIC5jYWxlbmRhciB7XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4uY2FsZW5kYXIgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDg2JSkgc2VwaWEoMzklKSBzYXR1cmF0ZSgzNDE4JSkgaHVlLXJvdGF0ZSgxOTJkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA1JSk7XFxufVxcblxcbi5oZWFkZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMXB4O1xcbn1cXG5cXG4uZGF5cyBpbWcge1xcbiAgICB3aWR0aDogNC41cmVtO1xcbn1cXG5cXG4uZGF5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwIDA7XFxufVxcblxcbi5kYXk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIGJveC1zaGFkb3c6IDAgLjFyZW0gdmFyKC0tYm94LXNoYWRvdy1jbHItMik7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwIDEuNXJlbTtcXG59XFxuXFxuLmRheT4qIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRheT4qOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ncmFkaWVudCBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwgMjQ2LCAyNTUsIDEpIDAlLCByZ2JhKDEyOCwgMjI1LCAxMjgsIDEpIDQ3JSwgcmdiYSgyNTUsIDIwNCwgMCwgMSkgMTAwJSk7XFxuICAgIGhlaWdodDogLjZyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNnJlbTtcXG4gICAgb3BhY2l0eTogLjU1O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IG1hZ25pZnkgZnJvbSAnLi9pbWFnZXMvbWFnbmlmeS5zdmcnO1xuaW1wb3J0IGNhbGVuZGFyIGZyb20gJy4vaW1hZ2VzL2NhbGVuZGFyLnN2ZydcbmltcG9ydCB7XG4gICAgV2VhdGhlckFwaSxcbiAgICBVbml0U2NhbGUsXG4gICAgSG91cmx5Rm9yZWNhc3QsXG4gICAgRXh0cmFjdFdlYXRoZXJEYXRhLFxufSBmcm9tIFwiLi9hcHBfbG9naWMuanNcIlxuXG5cbmZ1bmN0aW9uIERPTUNvbnRyb2xsZXIoKSB7XG4gICAgY29uc3Qgd2VhdGhlckFQSSA9IG5ldyBXZWF0aGVyQXBpKCk7XG4gICAgY29uc3QgdW5pdFNjYWxlID0gbmV3IFVuaXRTY2FsZSgpO1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgY29uc3QgYnRuSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbj5pbWcnKTtcbiAgICBjb25zdCBoZWFkZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyPmltZycpO1xuICAgIFxuICAgIGJ0bkljb24uc3JjID0gbWFnbmlmeTtcbiAgICBoZWFkZXJJY29uLnNyYyA9IGNhbGVuZGFyO1xuXG4gICAgLy8gdW5pdFNjYWxlLnNldENob2ljZSgnZicpO1xuICAgIFxuICAgIC8vMXN0IHJlcXVlc3QganVzdCB0byBzdGFydCB0aGUgQXBwXG4gICAgcmVxdWVzdERhdGEoJ1ByYWd1ZScpO1xuXG4gICAgc2VhcmNoQmFyLm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSByZXF1ZXN0RGF0YShlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIHNlYXJjaEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICByZXF1ZXN0RGF0YShzZWFyY2hCYXIudmFsdWUpO1xuICAgIH07XG5cbiAgICBhc3luYyBmdW5jdGlvbiByZXF1ZXN0RGF0YSh2YWx1ZSkge1xuICAgICAgICBhd2FpdCB3ZWF0aGVyQVBJLnNlYXJjaCh2YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJBUEkpXG4gICAgICAgIGlmICh3ZWF0aGVyQVBJLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyh3ZWF0aGVyQVBJLmRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRDdXJyZW50V2VhdGhlckRhdGEoKTtcbiAgICAgICAgZ2V0SG91cmx5Rm9yZWNhc3QoKTtcbiAgICAgICAgZ2V0RGFpbHlGb3JlY2FzdCgpO1xuXG5cbiAgICAgICAgLy9DdXJyZW50LVN0YXRlIFNlY3Rpb24gSW5mbyB0byBET01cbiAgICAgICAgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXJEYXRhKCkge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uLW5hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRlbXAnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRIaWdoZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hlc3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMb3dlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93ZXN0Jyk7ICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5lZWRlZERhdGEgPSBuZXcgRXh0cmFjdFdlYXRoZXJEYXRhKHdlYXRoZXJBUEkuZGF0YSk7XG5cbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IG5lZWRlZERhdGEubG9jYXRpb25OYW1lO1xuICAgICAgICAgICAgY3VycmVudENvbmRpdGlvbi50ZXh0Q29udGVudCA9IG5lZWRlZERhdGEuY29uZGl0aW9uO1xuICAgICAgICAgICAgaWYgKHVuaXRTY2FsZS5nZXRDaG9pY2UoKSA9PT0gJ2MnKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBuZWVkZWREYXRhLnRlbXBDICsgJ8KwJztcbiAgICAgICAgICAgICAgICBjdXJyZW50SGlnaGVzdC50ZXh0Q29udGVudCA9ICdIOiAnICsgbmVlZGVkRGF0YS5tYXhUZW1wQyArICfCsCc7XG4gICAgICAgICAgICAgICAgY3VycmVudExvd2VzdC50ZXh0Q29udGVudCA9ICdMOiAnICsgbmVlZGVkRGF0YS5taW5UZW1wQyArICfCsCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gbmVlZGVkRGF0YS50ZW1wRiArICfCsCc7XG4gICAgICAgICAgICAgICAgY3VycmVudEhpZ2hlc3QudGV4dENvbnRlbnQgPSAnSDogJyArIG5lZWRlZERhdGEubWF4VGVtcEYgKyAnwrAnO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRMb3dlc3QudGV4dENvbnRlbnQgPSAnTDogJyArIG5lZWRlZERhdGEubWluVGVtcEYgKyAnwrAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9Ib3VybHkgRm9yZWNhc3QgSW5mbyB0byBET01cbiAgICAgICAgZnVuY3Rpb24gZ2V0SG91cmx5Rm9yZWNhc3QoKSB7XG4gICAgICAgICAgICBjb25zdCBob3VybHlGb3JlY2FzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktZm9yZWNhc3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gbmV3IEhvdXJseUZvcmVjYXN0KHdlYXRoZXJBUEkuZGF0YSk7XG4gICAgICAgICAgICBjb25zdCBuZXh0RGF5SG91cmx5Rm9yZWNhc3QgPSBuZXcgSG91cmx5Rm9yZWNhc3Qod2VhdGhlckFQSS5kYXRhLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVGltZSA9IG5ldyBEYXRlKHdlYXRoZXJBUEkuZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpXG4gICAgICAgICAgICBjb25zdCBob3VyTm93ID0gbG9jYWxUaW1lLmdldEhvdXJzKCk7XG4gICAgICAgICAgICBjb25zdCB1cGNvbWluZ0hvdXJzID0gaG91cmx5Rm9yZWNhc3QuZGF0YS5maWx0ZXIoZWwgPT4gaG91cmx5Rm9yZWNhc3QuZGF0YS5pbmRleE9mKGVsKSA+PSBob3VyTm93KTtcblxuICAgICAgICAgICAgd2hpbGUgKHVwY29taW5nSG91cnMubGVuZ3RoID4gMTIpIHtcbiAgICAgICAgICAgICAgICB1cGNvbWluZ0hvdXJzLnBvcCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodXBjb21pbmdIb3Vycy5sZW5ndGggPCAxMikge1xuICAgICAgICAgICAgICAgIGxldCBtaXNzaW5nSG91cnMgPSAxMiAtIHVwY29taW5nSG91cnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWlzc2luZ0hvdXJzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdXBjb21pbmdIb3Vycy5wdXNoKG5leHREYXlIb3VybHlGb3JlY2FzdC5kYXRhW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhvdXJseUZvcmVjYXN0RGl2LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgICB1cGNvbWluZ0hvdXJzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheUhvdXJJbmZvKGVsKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZnVuY3Rpb24gZGlzcGxheUhvdXJJbmZvKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBob3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdob3VyJyk7XG4gICAgICAgICAgICAgICAgaWNvbkRpdi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3IERhdGUoZGF0YS50aW1lKS5nZXRIb3VycygpID09PSBob3VyTm93KSBob3VyLnRleHRDb250ZW50ID0gXCJOb3dcIjtcbiAgICAgICAgICAgICAgICBlbHNlIGhvdXIudGV4dENvbnRlbnQgPSBuZXcgRGF0ZShkYXRhLnRpbWUpLmdldEhvdXJzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodW5pdFNjYWxlLmdldENob2ljZSgpID09ICdjJykgdGVtcC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoZGF0YS50ZW1wX2MpICsgJ8KwJztcbiAgICAgICAgICAgICAgICBlbHNlIHRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRhdGEudGVtcF9mKSArICfCsCc7XG5cbiAgICAgICAgICAgICAgICBpY29uLnNyYyA9ICdodHRwczonICsgZGF0YS5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgICAgICAgICBpY29uRGl2LmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGhvdXIpXG4gICAgICAgICAgICAgICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGljb25EaXYpXG4gICAgICAgICAgICAgICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRlbXApO1xuXG4gICAgICAgICAgICAgICAgaG91cmx5Rm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyRGl2KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLzMgRGF5IGZvcmVjYXN0IGluIERPTVxuICAgICAgICBmdW5jdGlvbiBnZXREYWlseUZvcmVjYXN0KCkge1xuICAgICAgICAgICAgY29uc3QgZm9yZWNhc3RBcnIgPSB3ZWF0aGVyQVBJLmRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gICAgICAgICAgICBjb25zdCBkYXlzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheXMnKTtcblxuICAgICAgICAgICAgZGF5c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncmFkaWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgICAgICBkYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XG4gICAgICAgICAgICAgICAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgICAgICAgICAgbWluVGVtcC5jbGFzc0xpc3QuYWRkKCdtaW4nKTtcbiAgICAgICAgICAgICAgICBncmFkaWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmFkaWVudCcpO1xuICAgICAgICAgICAgICAgIG1heFRlbXAuY2xhc3NMaXN0LmFkZCgnbWF4Jyk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdEFycltpXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkgaDEudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgICAgICAgICAgICAgIGVsc2UgaDEudGV4dENvbnRlbnQgPSBmaW5kV2Vla0RheShuZXcgRGF0ZShmb3JlY2FzdEFycltpXS5kYXRlKS5nZXREYXkoKSk7XG5cbiAgICAgICAgICAgICAgICBpY29uLnNyYyA9ICdodHRwczonICsgZm9yZWNhc3RBcnJbaV0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgICAgICAgICAgICAgIGlmICh1bml0U2NhbGUuZ2V0Q2hvaWNlKCkgPT0gJ2MnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pblRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGZvcmVjYXN0QXJyW2ldLmRheS5taW50ZW1wX2MpICsgJ8KwJztcbiAgICAgICAgICAgICAgICAgICAgbWF4VGVtcC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoZm9yZWNhc3RBcnJbaV0uZGF5Lm1heHRlbXBfYykgKyAnwrAnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1pblRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGZvcmVjYXN0QXJyW2ldLmRheS5taW50ZW1wX2YpICsgJ8KwJztcbiAgICAgICAgICAgICAgICAgICAgbWF4VGVtcC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoZm9yZWNhc3RBcnJbaV0uZGF5Lm1heHRlbXBfZikgKyAnwrAnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICAgICAgZ3JhZGllbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JhZGllbnQpO1xuXG4gICAgICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICAgICAgICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG1pblRlbXApO1xuICAgICAgICAgICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChncmFkaWVudENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG1heFRlbXApO1xuXG4gICAgICAgICAgICAgICAgZGF5c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlDb250YWluZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBmaW5kV2Vla0RheShucikge1xuICAgICAgICAgICAgICAgIGxldCBhbnN3ZXIgPSAnJztcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlciA9ICdTdW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlciA9ICdNb24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlciA9ICdUdWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlciA9ICdXZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlciA9ICdUaHUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlciA9ICdGcmknO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlciA9ICdTYXQnO1xuICAgICAgICAgICAgICAgIH0gcmV0dXJuIGFuc3dlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NQ29udHJvbGxlcjsiLCIvL0FwcGxpY2F0aW9uIExvZ2ljXG5cbi8vRGF0YSBmZXRjaGluZyBPYmplY3QgQ29uc3RydWN0b3JcbmNsYXNzIFdlYXRoZXJBcGkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IGFzeW5jIGZ1bmN0aW9uIChwbGFjZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kM2VmZmQwMjQyMWI0ZDk2YTlkMTAwODQwMjMxMzA5JnE9JHtwbGFjZX0mZGF5cz0zJmFxaT1ubyZhbGVydHM9bm9gXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcGFyc2VkRGF0YTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBVbml0IHNjYWxlIENvbnN0cnVjdG9yIChiZXR3ZWVuICdjJyBhbmQgJ2YnKVxuY2xhc3MgVW5pdFNjYWxlIHtcbiAgICBjb25zdHJ1Y3RvcihjaG9pY2UgPSBcImNcIikge1xuICAgICAgICBsZXQgdW5pdCA9IGNob2ljZTtcbiAgICAgICAgdGhpcy5nZXRDaG9pY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5pdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldENob2ljZSA9IGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgICAgIHVuaXQgPSBjaG9pY2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIEhvdXJseUZvcmVjYXN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmosIGRheSA9IDApIHtcbiAgICAgICAgdGhpcy5kYXRhID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uaG91cjtcbiAgICB9XG59XG5cbi8vIEV4dHJhY3RzIG9ubHkgbmVlZGVkIGRhdGEgZnJvbSB3ZWF0aGVyIGFwaVxuY2xhc3MgRXh0cmFjdFdlYXRoZXJEYXRhIHtcbiAgICBjb25zdHJ1Y3RvcihvYmosIGRheSA9IDApIHtcbiAgICAgICAgaWYgKCFkYXkpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcEMgPSBvYmouY3VycmVudC50ZW1wX2M7XG4gICAgICAgICAgICB0aGlzLnRlbXBGID0gb2JqLmN1cnJlbnQudGVtcF9mO1xuICAgICAgICAgICAgdGhpcy5sb2NhbFRpbWUgPSBvYmoubG9jYXRpb24ubG9jYWx0aW1lLnNwbGl0KCcgJylbMV0uc3BsaXQoJzonKVswXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2F0aW9uTmFtZSA9IG9iai5sb2NhdGlvbi5uYW1lO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGRheSA/IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5jb25kaXRpb24udGV4dCA6IG9iai5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICB0aGlzLmNvbmRpdGlvbkljb24gPSBkYXkgPyBcImh0dHBzOlwiICsgb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5LmNvbmRpdGlvbi5pY29uIDogXCJodHRwczpcIiArIG9iai5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgICAgICB0aGlzLm1heFRlbXBDID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5Lm1heHRlbXBfYztcbiAgICAgICAgdGhpcy5tYXhUZW1wRiA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5tYXh0ZW1wX2Y7XG4gICAgICAgIHRoaXMubWluVGVtcEMgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkubWludGVtcF9jO1xuICAgICAgICB0aGlzLm1pblRlbXBGID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5Lm1pbnRlbXBfZjtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgV2VhdGhlckFwaSxcbiAgICBVbml0U2NhbGUsXG4gICAgSG91cmx5Rm9yZWNhc3QsXG4gICAgRXh0cmFjdFdlYXRoZXJEYXRhLFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSBcIi4vRE9NQ29udHJvbGxlclwiO1xuXG5ET01Db250cm9sbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9