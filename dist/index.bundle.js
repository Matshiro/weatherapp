"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/679478.png */ "./src/images/679478.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-position: 50%;\n    min-width: 100dvw;\n    min-height: 100dvh;\n    overflow: hidden;\n    font-family: 'roboto', sans-serif;\n}\n\n#searchBar{\n    display: flex;\n    width: 15rem;\n    justify-content: center;\n    margin-top: .7%;\n    border-bottom: solid 2px black;\n}\n\n#searchButton{\n    all:unset;\n    cursor: pointer;\n}\n\n#searchIcon{\n    width: 1rem;\n    height: 1rem;\n}\n\n#mainWeatherContainer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    min-width: 40%;\n    margin-top: 1%;\n}\n\n#mainWeatherContainer > *{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n    gap: 1rem;\n}\n\n#secondaryWeatherLeft > *{\n    text-align: left;\n}\n\n#secondaryWeatherRight > *{\n    text-align: right;\n}\n\n.secondaryWeather > *{\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    gap: 10%;\n}\n\n.textContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#mainWeather{\n    align-items: center;\n    min-width: 14rem;\n    opacity: 80%;\n    gap: 1rem;\n}\n\n#mainTemperature{\n    color: #000000;\n    font-size: 5rem;\n}\n#mainName{\n    color: black;\n}\n\n#searchBarInput{\n    all:unset;\n}\n\n.icon{\n    width: 3rem;\n    height: 3rem;\n}\n\n#mainIcon{\n    width: 6rem;\n    height: 6rem;\n}\n\n#fiveDayWeatherContainer{\n    margin-top: auto;\n    width: 70%;\n    height: 15rem;\n    color: white;\n}\n\n#fiveDayWeather{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.dayContainer{\n    display: flex;\n    flex-direction: column;\n    gap:.5rem;\n    align-items: center;\n}\n\n.temperatureContainer{\n    text-align: left;\n}\n\n.iconForecast{\n    width: 4rem;\n    height: 4rem;\n    filter:invert(100%)\n}\n\n.dayTemperature{\n    font-size: 3rem;\n}\n\n.nightTemperature{\n    font-size: 1.5rem;\n}\n\n.dayText{\n    font-size: 1.5rem;\n}\n\n@media only screen and (max-height: 800px) {\n    h1{\n        font-size: 3rem !important;\n    }\n    h2{\n        font-size: 1.7rem !important;\n    }\n    h3{\n        font-size: 1rem !important;\n    }\n\n    #mainWeather{\n        gap: 0.2rem;\n    }\n  }", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yDAA6C;IAC7C,sBAAsB;IACtB,wBAAwB;IACxB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB,WAAW;IACX,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;AACA;IACI,YAAY;AAChB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI;QACI,0BAA0B;IAC9B;IACA;QACI,4BAA4B;IAChC;IACA;QACI,0BAA0B;IAC9B;;IAEA;QACI,WAAW;IACf;EACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap');\n\n*{\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(\"../images/679478.png\");\n    background-size: cover;\n    background-position: 50%;\n    min-width: 100dvw;\n    min-height: 100dvh;\n    overflow: hidden;\n    font-family: 'roboto', sans-serif;\n}\n\n#searchBar{\n    display: flex;\n    width: 15rem;\n    justify-content: center;\n    margin-top: .7%;\n    border-bottom: solid 2px black;\n}\n\n#searchButton{\n    all:unset;\n    cursor: pointer;\n}\n\n#searchIcon{\n    width: 1rem;\n    height: 1rem;\n}\n\n#mainWeatherContainer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    min-width: 40%;\n    margin-top: 1%;\n}\n\n#mainWeatherContainer > *{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n    gap: 1rem;\n}\n\n#secondaryWeatherLeft > *{\n    text-align: left;\n}\n\n#secondaryWeatherRight > *{\n    text-align: right;\n}\n\n.secondaryWeather > *{\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    gap: 10%;\n}\n\n.textContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#mainWeather{\n    align-items: center;\n    min-width: 14rem;\n    opacity: 80%;\n    gap: 1rem;\n}\n\n#mainTemperature{\n    color: #000000;\n    font-size: 5rem;\n}\n#mainName{\n    color: black;\n}\n\n#searchBarInput{\n    all:unset;\n}\n\n.icon{\n    width: 3rem;\n    height: 3rem;\n}\n\n#mainIcon{\n    width: 6rem;\n    height: 6rem;\n}\n\n#fiveDayWeatherContainer{\n    margin-top: auto;\n    width: 70%;\n    height: 15rem;\n    color: white;\n}\n\n#fiveDayWeather{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.dayContainer{\n    display: flex;\n    flex-direction: column;\n    gap:.5rem;\n    align-items: center;\n}\n\n.temperatureContainer{\n    text-align: left;\n}\n\n.iconForecast{\n    width: 4rem;\n    height: 4rem;\n    filter:invert(100%)\n}\n\n.dayTemperature{\n    font-size: 3rem;\n}\n\n.nightTemperature{\n    font-size: 1.5rem;\n}\n\n.dayText{\n    font-size: 1.5rem;\n}\n\n@media only screen and (max-height: 800px) {\n    h1{\n        font-size: 3rem !important;\n    }\n    h2{\n        font-size: 1.7rem !important;\n    }\n    h3{\n        font-size: 1rem !important;\n    }\n\n    #mainWeather{\n        gap: 0.2rem;\n    }\n  }"],"sourceRoot":""}]);
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

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _images_cloud_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/cloud.svg */ "./src/images/cloud.svg");
/* harmony import */ var _images_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/cloudy-day.svg */ "./src/images/cloudy-day.svg");
/* harmony import */ var _images_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/cloudy-night.svg */ "./src/images/cloudy-night.svg");
/* harmony import */ var _images_cloudy_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/cloudy.svg */ "./src/images/cloudy.svg");
/* harmony import */ var _images_humidity_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/humidity.svg */ "./src/images/humidity.svg");
/* harmony import */ var _images_lightning_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/lightning.svg */ "./src/images/lightning.svg");
/* harmony import */ var _images_mist_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/mist.svg */ "./src/images/mist.svg");
/* harmony import */ var _images_moon_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/moon.svg */ "./src/images/moon.svg");
/* harmony import */ var _images_rainy_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/rainy.svg */ "./src/images/rainy.svg");
/* harmony import */ var _images_snow_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/snow.svg */ "./src/images/snow.svg");
/* harmony import */ var _images_sun_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/sun.svg */ "./src/images/sun.svg");
/* harmony import */ var _images_thermo_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/thermo.svg */ "./src/images/thermo.svg");
/* harmony import */ var _images_wind_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/wind.svg */ "./src/images/wind.svg");
/* harmony import */ var _images_binoculars_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/binoculars.svg */ "./src/images/binoculars.svg");
/* harmony import */ var _images_pressure_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/pressure.svg */ "./src/images/pressure.svg");
/* harmony import */ var _images_search_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/search.svg */ "./src/images/search.svg");


















const SUPER_SAFE_API_KEY = "af505786e986356b428ac52fb8b32832";

const mainTemperature = document.getElementById("mainTemperature");
const mainCityName = document.getElementById("mainName");
const mainStatus = document.getElementById("mainStatus");
const mainIcon = document.getElementById("mainIcon");

const feelsLike = document.getElementById("feelsLikeText");
const humidity = document.getElementById("humidityText");
const chanceOfRain = document.getElementById("chanceOfRainText");
const windSpeed = document.getElementById("windSpeedText");
const pressure = document.getElementById("pressureText");
const visibility = document.getElementById("visibilityText");

const searchButton = document.getElementById("searchButton");
const userInput = document.getElementById("searchBarInput");
const fiveDayWeather = document.getElementById("fiveDayWeather");

let cityName = "wałbrzych";
let units = "metric";


getWeatherData();
getUnits();

searchButton.addEventListener("click", findTown);
userInput.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        findTown();
    }
});


async function getApiWeatherData(){
    let weatherData;
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${SUPER_SAFE_API_KEY}&units=${units}&lang=pl`);
        const data = await response.json();
        weatherData = data;
        return weatherData;
    }
    catch(e){
        console.log("Something happened:\n" + e);
        weatherData = null;
    }

}

async function getApiForecastData(){
    let forecastData;
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${SUPER_SAFE_API_KEY}&units=${units}&lang=pl`);
        const data = await response.json();
        forecastData = data;
        console.log(data);
        return forecastData;
    }
    catch(e){
        console.log("Something happened:\n" + e);
        forecastData = null;
    }
}

async function getWeatherData(){
    try{
        const weatherData = await getApiWeatherData();
        const forecastData = await getApiForecastData();
        if (weatherData != null){
            todayWeather(weatherData, forecastData.list[0].pop);
        }
        if (forecastData != null){
            forecastWeather(forecastData);
        }
    }
    catch(e){
        userInput.placeholder = "Enter valid town name.";
        userInput.value = "";
    }

}


function todayWeather(data, pop){
    mainTemperature.textContent = parseInt(data.main.temp) + getUnits().tempUnit;
    mainCityName.textContent = data.name;
    mainIcon.src = getIcon(data.weather[0].icon);
    mainStatus.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);

    feelsLike.textContent = parseInt(data.main.feels_like) + getUnits().tempUnit;
    humidity.textContent = data.main.humidity + "%";
    chanceOfRain.textContent = pop * 100 + "%";
    visibility.textContent = getVisibility(data.visibility) + getUnits().distanceUnit;
    windSpeed.textContent = parseInt(data.wind.speed) + getUnits().speedUnit;
    pressure.textContent = data.main.pressure + " hPa";
}

async function forecastWeather(data){
    try{
        const timestampsDay = await getDateOfNextDays();
        const timestampsNight = await(getDateOfNextNights());
        const filteredForecastsDay = data.list.filter(forecast => {
            const forecastTimestamp = forecast.dt;
            return timestampsDay.includes(forecastTimestamp);
        });
        const filteredForecastsNight = data.list.filter(forecast => {
            const forecastTimestamp = forecast.dt;
            return timestampsNight.includes(forecastTimestamp);
        });
        setDataToNextFiveDays(filteredForecastsDay, filteredForecastsNight);
    }
    catch(e){
        console.log("Something happened: \n" + e);
    }
}

function getUnixTimestampTomorrowDay(i){
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getUTCDate() + i);
    tomorrow.setUTCHours(12,0,0,0);
    return Math.floor(tomorrow.getTime() / 1000);
}

function getUnixTimestampTomorrowNight(i){
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getUTCDate() + i);
    tomorrow.setUTCHours(24,0,0,0);
    return Math.floor(tomorrow.getTime() / 1000);
}

async function getDateOfNextDays() {
    const timestamps = [];
    for (let i = 0; i < 6; i++) {
      const timestamp = getUnixTimestampTomorrowDay(i);
      timestamps.push(timestamp);
    }
    return timestamps;
}

async function getDateOfNextNights() {
    const timestamps = [];
    for (let i = 0; i < 6; i++) {
      const timestamp = getUnixTimestampTomorrowNight(i);
      timestamps.push(timestamp);
    }
    return timestamps;
}

function setDataToNextFiveDays(day, night){
    fiveDayWeather.querySelectorAll(".dayContainer").forEach((element,index)  =>{
        const temperatureContainer = element.firstElementChild;
        temperatureContainer.firstElementChild.textContent = parseInt(day[index].main.temp) + getUnits().tempUnit;
        temperatureContainer.lastElementChild.textContent = parseInt(night[index].main.temp) + getUnits().tempUnit;
        
        const unixInMiliseconds = day[index].dt * 1000;
        const date = new Date(unixInMiliseconds);
        const dayOfWeek = date.getDay();
        const dayNames = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

        element.lastElementChild.textContent = dayNames[dayOfWeek];
    })
}

function getUnits(){
    let tempUnit = "°C";
    let speedUnit = " Km/h";
    let distanceUnit = "m";

    if (units === "imperial"){
        tempUnit = "°F";
        speedUnit = "Mph";
        distanceUnit = "Feet";
    }

    return {tempUnit, speedUnit, distanceUnit}
}

function getVisibility(visibility){
    let returnValue = 0;
    if (visibility >= 10000){
        return ">10 K";
    }
    if (visibility < 10000 && visibility >= 1000){
        const firstDigit = visibility.toString().charAt(0);
        const secondDigit = visibility.toString().charAt(1);
        returnValue = firstDigit + "." + secondDigit + " K";
        return returnValue;
    }
    if (visibility < 1000){
        return visibility + " ";
    }
}


function getIcon(id){
    switch (id){
        case "01d":
            return _images_sun_svg__WEBPACK_IMPORTED_MODULE_11__;
        case "02d":
            return _images_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_2__;
        case "03d":
            return _images_cloud_svg__WEBPACK_IMPORTED_MODULE_1__;
        case "04d":
            return _images_cloudy_svg__WEBPACK_IMPORTED_MODULE_4__;
        case "09d":
            return _images_rainy_svg__WEBPACK_IMPORTED_MODULE_9__;
        case "10d":
            return _images_rainy_svg__WEBPACK_IMPORTED_MODULE_9__;
        case "11d":
            return _images_lightning_svg__WEBPACK_IMPORTED_MODULE_6__;
        case "13d":
            return _images_snow_svg__WEBPACK_IMPORTED_MODULE_10__;
        case "50d":
            return _images_mist_svg__WEBPACK_IMPORTED_MODULE_7__;
    }
}

function findTown(){

    if (userInput.value === "" || userInput.value.match(/^ *$/) !== null){
        userInput.value = "";
        userInput.placeholder = "Value can't be empty.";
        return;
    }

    cityName = userInput.value;
    userInput.value = "";
    getWeatherData();

}

/***/ }),

/***/ "./src/images/679478.png":
/*!*******************************!*\
  !*** ./src/images/679478.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/679478.png";

/***/ }),

/***/ "./src/images/binoculars.svg":
/*!***********************************!*\
  !*** ./src/images/binoculars.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/binoculars.svg";

/***/ }),

/***/ "./src/images/cloud.svg":
/*!******************************!*\
  !*** ./src/images/cloud.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cloud.svg";

/***/ }),

/***/ "./src/images/cloudy-day.svg":
/*!***********************************!*\
  !*** ./src/images/cloudy-day.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cloudy-day.svg";

/***/ }),

/***/ "./src/images/cloudy-night.svg":
/*!*************************************!*\
  !*** ./src/images/cloudy-night.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cloudy-night.svg";

/***/ }),

/***/ "./src/images/cloudy.svg":
/*!*******************************!*\
  !*** ./src/images/cloudy.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cloudy.svg";

/***/ }),

/***/ "./src/images/humidity.svg":
/*!*********************************!*\
  !*** ./src/images/humidity.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/humidity.svg";

/***/ }),

/***/ "./src/images/lightning.svg":
/*!**********************************!*\
  !*** ./src/images/lightning.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/lightning.svg";

/***/ }),

/***/ "./src/images/mist.svg":
/*!*****************************!*\
  !*** ./src/images/mist.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/mist.svg";

/***/ }),

/***/ "./src/images/moon.svg":
/*!*****************************!*\
  !*** ./src/images/moon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/moon.svg";

/***/ }),

/***/ "./src/images/pressure.svg":
/*!*********************************!*\
  !*** ./src/images/pressure.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/pressure.svg";

/***/ }),

/***/ "./src/images/rainy.svg":
/*!******************************!*\
  !*** ./src/images/rainy.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/rainy.svg";

/***/ }),

/***/ "./src/images/search.svg":
/*!*******************************!*\
  !*** ./src/images/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/search.svg";

/***/ }),

/***/ "./src/images/snow.svg":
/*!*****************************!*\
  !*** ./src/images/snow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/snow.svg";

/***/ }),

/***/ "./src/images/sun.svg":
/*!****************************!*\
  !*** ./src/images/sun.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/sun.svg";

/***/ }),

/***/ "./src/images/thermo.svg":
/*!*******************************!*\
  !*** ./src/images/thermo.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/thermo.svg";

/***/ }),

/***/ "./src/images/wind.svg":
/*!*****************************!*\
  !*** ./src/images/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/wind.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLFNBQVMsU0FBUyxtQkFBbUIsU0FBUyxNQUFNO0FBQzlJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQU07QUFDekI7QUFDQSxtQkFBbUIsbURBQVk7QUFDL0I7QUFDQSxtQkFBbUIsOENBQVE7QUFDM0I7QUFDQSxtQkFBbUIsK0NBQVM7QUFDNUI7QUFDQSxtQkFBbUIsOENBQVE7QUFDM0I7QUFDQSxtQkFBbUIsOENBQVE7QUFDM0I7QUFDQSxtQkFBbUIsa0RBQVk7QUFDL0I7QUFDQSxtQkFBbUIsOENBQU87QUFDMUI7QUFDQSxtQkFBbUIsNkNBQU87QUFDMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy82Nzk0NzgucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcXG4gICAgbWluLXdpZHRoOiAxMDBkdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMGR2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jc2VhcmNoQmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAuNyU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCBibGFjaztcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbntcXG4gICAgYWxsOnVuc2V0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzZWFyY2hJY29ue1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jbWFpbldlYXRoZXJDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogNDAlO1xcbiAgICBtYXJnaW4tdG9wOiAxJTtcXG59XFxuXFxuI21haW5XZWF0aGVyQ29udGFpbmVyID4gKntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiNzZWNvbmRhcnlXZWF0aGVyTGVmdCA+ICp7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNzZWNvbmRhcnlXZWF0aGVyUmlnaHQgPiAqe1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnNlY29uZGFyeVdlYXRoZXIgPiAqe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEwJTtcXG59XFxuXFxuLnRleHRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNtYWluV2VhdGhlcntcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAxNHJlbTtcXG4gICAgb3BhY2l0eTogODAlO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiNtYWluVGVtcGVyYXR1cmV7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxufVxcbiNtYWluTmFtZXtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jc2VhcmNoQmFySW5wdXR7XFxuICAgIGFsbDp1bnNldDtcXG59XFxuXFxuLmljb257XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbiNtYWluSWNvbntcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGhlaWdodDogNnJlbTtcXG59XFxuXFxuI2ZpdmVEYXlXZWF0aGVyQ29udGFpbmVye1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNmaXZlRGF5V2VhdGhlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5kYXlDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDouNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRlbXBlcmF0dXJlQ29udGFpbmVye1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uaWNvbkZvcmVjYXN0e1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmaWx0ZXI6aW52ZXJ0KDEwMCUpXFxufVxcblxcbi5kYXlUZW1wZXJhdHVyZXtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ubmlnaHRUZW1wZXJhdHVyZXtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5kYXlUZXh0e1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcXG4gICAgaDF7XFxuICAgICAgICBmb250LXNpemU6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICBoMntcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgaDN7XFxuICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAjbWFpbldlYXRoZXJ7XFxuICAgICAgICBnYXA6IDAuMnJlbTtcXG4gICAgfVxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5REFBNkM7SUFDN0Msc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksV0FBVztJQUNmO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzLzY3OTQ3OC5wbmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xcbiAgICBtaW4td2lkdGg6IDEwMGR2dztcXG4gICAgbWluLWhlaWdodDogMTAwZHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNzZWFyY2hCYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC43JTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGJsYWNrO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9ue1xcbiAgICBhbGw6dW5zZXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaEljb257XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbiNtYWluV2VhdGhlckNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiA0MCU7XFxuICAgIG1hcmdpbi10b3A6IDElO1xcbn1cXG5cXG4jbWFpbldlYXRoZXJDb250YWluZXIgPiAqe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI3NlY29uZGFyeVdlYXRoZXJMZWZ0ID4gKntcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI3NlY29uZGFyeVdlYXRoZXJSaWdodCA+ICp7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uc2Vjb25kYXJ5V2VhdGhlciA+ICp7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTAlO1xcbn1cXG5cXG4udGV4dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI21haW5XZWF0aGVye1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDE0cmVtO1xcbiAgICBvcGFjaXR5OiA4MCU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW5UZW1wZXJhdHVyZXtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuI21haW5OYW1le1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNzZWFyY2hCYXJJbnB1dHtcXG4gICAgYWxsOnVuc2V0O1xcbn1cXG5cXG4uaWNvbntcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuI21haW5JY29ue1xcbiAgICB3aWR0aDogNnJlbTtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbn1cXG5cXG4jZml2ZURheVdlYXRoZXJDb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogMTVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2ZpdmVEYXlXZWF0aGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmRheUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOi41cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGVtcGVyYXR1cmVDb250YWluZXJ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5pY29uRm9yZWNhc3R7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZpbHRlcjppbnZlcnQoMTAwJSlcXG59XFxuXFxuLmRheVRlbXBlcmF0dXJle1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5uaWdodFRlbXBlcmF0dXJle1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmRheVRleHR7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xcbiAgICBoMXtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgIGgye1xcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW0gIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICBoM3tcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgICNtYWluV2VhdGhlcntcXG4gICAgICAgIGdhcDogMC4ycmVtO1xcbiAgICB9XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGltZ0Nsb3VkIGZyb20gJy4uL2ltYWdlcy9jbG91ZC5zdmcnO1xuaW1wb3J0IGltZ0Nsb3VkeURheSBmcm9tICcuLi9pbWFnZXMvY2xvdWR5LWRheS5zdmcnO1xuaW1wb3J0IGltZ0Nsb3VkeU5pZ2h0IGZyb20gJy4uL2ltYWdlcy9jbG91ZHktbmlnaHQuc3ZnJztcbmltcG9ydCBpbWdDbG91ZHkgZnJvbSAnLi4vaW1hZ2VzL2Nsb3VkeS5zdmcnO1xuaW1wb3J0IGltZ0h1bWlkaXR5IGZyb20gJy4uL2ltYWdlcy9odW1pZGl0eS5zdmcnO1xuaW1wb3J0IGltZ0xpZ2h0bmluZyBmcm9tICcuLi9pbWFnZXMvbGlnaHRuaW5nLnN2Zyc7XG5pbXBvcnQgaW1nTWlzdCBmcm9tICcuLi9pbWFnZXMvbWlzdC5zdmcnXG5pbXBvcnQgaW1nTW9vbiBmcm9tICcuLi9pbWFnZXMvbW9vbi5zdmcnO1xuaW1wb3J0IGltZ1JhaW55IGZyb20gJy4uL2ltYWdlcy9yYWlueS5zdmcnO1xuaW1wb3J0IGltZ1Nub3cgZnJvbSAnLi4vaW1hZ2VzL3Nub3cuc3ZnJztcbmltcG9ydCBpbWdTdW4gZnJvbSAnLi4vaW1hZ2VzL3N1bi5zdmcnO1xuaW1wb3J0IGltZ1RoZXJtbyBmcm9tICcuLi9pbWFnZXMvdGhlcm1vLnN2Zyc7XG5pbXBvcnQgaW1nV2luZCBmcm9tICcuLi9pbWFnZXMvd2luZC5zdmcnO1xuaW1wb3J0IGltZ0Jpbm8gZnJvbSAnLi4vaW1hZ2VzL2Jpbm9jdWxhcnMuc3ZnJztcbmltcG9ydCBpbWdQcmVzc3VyZSBmcm9tICcuLi9pbWFnZXMvcHJlc3N1cmUuc3ZnJztcbmltcG9ydCAnLi4vaW1hZ2VzL3NlYXJjaC5zdmcnO1xuXG5jb25zdCBTVVBFUl9TQUZFX0FQSV9LRVkgPSBcImFmNTA1Nzg2ZTk4NjM1NmI0MjhhYzUyZmI4YjMyODMyXCI7XG5cbmNvbnN0IG1haW5UZW1wZXJhdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblRlbXBlcmF0dXJlXCIpO1xuY29uc3QgbWFpbkNpdHlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluTmFtZVwiKTtcbmNvbnN0IG1haW5TdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5TdGF0dXNcIik7XG5jb25zdCBtYWluSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkljb25cIik7XG5cbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHNMaWtlVGV4dFwiKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodW1pZGl0eVRleHRcIik7XG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5jZU9mUmFpblRleHRcIik7XG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRTcGVlZFRleHRcIik7XG5jb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlc3N1cmVUZXh0XCIpO1xuY29uc3QgdmlzaWJpbGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJpbGl0eVRleHRcIik7XG5cbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnV0dG9uXCIpO1xuY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCYXJJbnB1dFwiKTtcbmNvbnN0IGZpdmVEYXlXZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXZlRGF5V2VhdGhlclwiKTtcblxubGV0IGNpdHlOYW1lID0gXCJ3YcWCYnJ6eWNoXCI7XG5sZXQgdW5pdHMgPSBcIm1ldHJpY1wiO1xuXG5cbmdldFdlYXRoZXJEYXRhKCk7XG5nZXRVbml0cygpO1xuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZpbmRUb3duKTtcbnVzZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24oZSl7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpe1xuICAgICAgICBmaW5kVG93bigpO1xuICAgIH1cbn0pO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFwaVdlYXRoZXJEYXRhKCl7XG4gICAgbGV0IHdlYXRoZXJEYXRhO1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZBUFBJRD0ke1NVUEVSX1NBRkVfQVBJX0tFWX0mdW5pdHM9JHt1bml0c30mbGFuZz1wbGApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB3ZWF0aGVyRGF0YSA9IGRhdGE7XG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIGhhcHBlbmVkOlxcblwiICsgZSk7XG4gICAgICAgIHdlYXRoZXJEYXRhID0gbnVsbDtcbiAgICB9XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QXBpRm9yZWNhc3REYXRhKCl7XG4gICAgbGV0IGZvcmVjYXN0RGF0YTtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHtTVVBFUl9TQUZFX0FQSV9LRVl9JnVuaXRzPSR7dW5pdHN9Jmxhbmc9cGxgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgZm9yZWNhc3REYXRhID0gZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHJldHVybiBmb3JlY2FzdERhdGE7XG4gICAgfVxuICAgIGNhdGNoKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNvbWV0aGluZyBoYXBwZW5lZDpcXG5cIiArIGUpO1xuICAgICAgICBmb3JlY2FzdERhdGEgPSBudWxsO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoKXtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0QXBpV2VhdGhlckRhdGEoKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgZ2V0QXBpRm9yZWNhc3REYXRhKCk7XG4gICAgICAgIGlmICh3ZWF0aGVyRGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgIHRvZGF5V2VhdGhlcih3ZWF0aGVyRGF0YSwgZm9yZWNhc3REYXRhLmxpc3RbMF0ucG9wKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9yZWNhc3REYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgZm9yZWNhc3RXZWF0aGVyKGZvcmVjYXN0RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIHVzZXJJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgdmFsaWQgdG93biBuYW1lLlwiO1xuICAgICAgICB1c2VySW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH1cblxufVxuXG5cbmZ1bmN0aW9uIHRvZGF5V2VhdGhlcihkYXRhLCBwb3Ape1xuICAgIG1haW5UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHBhcnNlSW50KGRhdGEubWFpbi50ZW1wKSArIGdldFVuaXRzKCkudGVtcFVuaXQ7XG4gICAgbWFpbkNpdHlOYW1lLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgIG1haW5JY29uLnNyYyA9IGdldEljb24oZGF0YS53ZWF0aGVyWzBdLmljb24pO1xuICAgIG1haW5TdGF0dXMudGV4dENvbnRlbnQgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uc2xpY2UoMSk7XG5cbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBwYXJzZUludChkYXRhLm1haW4uZmVlbHNfbGlrZSkgKyBnZXRVbml0cygpLnRlbXBVbml0O1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gZGF0YS5tYWluLmh1bWlkaXR5ICsgXCIlXCI7XG4gICAgY2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID0gcG9wICogMTAwICsgXCIlXCI7XG4gICAgdmlzaWJpbGl0eS50ZXh0Q29udGVudCA9IGdldFZpc2liaWxpdHkoZGF0YS52aXNpYmlsaXR5KSArIGdldFVuaXRzKCkuZGlzdGFuY2VVbml0O1xuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IHBhcnNlSW50KGRhdGEud2luZC5zcGVlZCkgKyBnZXRVbml0cygpLnNwZWVkVW5pdDtcbiAgICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGRhdGEubWFpbi5wcmVzc3VyZSArIFwiIGhQYVwiO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmb3JlY2FzdFdlYXRoZXIoZGF0YSl7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCB0aW1lc3RhbXBzRGF5ID0gYXdhaXQgZ2V0RGF0ZU9mTmV4dERheXMoKTtcbiAgICAgICAgY29uc3QgdGltZXN0YW1wc05pZ2h0ID0gYXdhaXQoZ2V0RGF0ZU9mTmV4dE5pZ2h0cygpKTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRGb3JlY2FzdHNEYXkgPSBkYXRhLmxpc3QuZmlsdGVyKGZvcmVjYXN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0VGltZXN0YW1wID0gZm9yZWNhc3QuZHQ7XG4gICAgICAgICAgICByZXR1cm4gdGltZXN0YW1wc0RheS5pbmNsdWRlcyhmb3JlY2FzdFRpbWVzdGFtcCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZEZvcmVjYXN0c05pZ2h0ID0gZGF0YS5saXN0LmZpbHRlcihmb3JlY2FzdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JlY2FzdFRpbWVzdGFtcCA9IGZvcmVjYXN0LmR0O1xuICAgICAgICAgICAgcmV0dXJuIHRpbWVzdGFtcHNOaWdodC5pbmNsdWRlcyhmb3JlY2FzdFRpbWVzdGFtcCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXREYXRhVG9OZXh0Rml2ZURheXMoZmlsdGVyZWRGb3JlY2FzdHNEYXksIGZpbHRlcmVkRm9yZWNhc3RzTmlnaHQpO1xuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJTb21ldGhpbmcgaGFwcGVuZWQ6IFxcblwiICsgZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRVbml4VGltZXN0YW1wVG9tb3Jyb3dEYXkoaSl7XG4gICAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSgpO1xuICAgIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0VVRDRGF0ZSgpICsgaSk7XG4gICAgdG9tb3Jyb3cuc2V0VVRDSG91cnMoMTIsMCwwLDApO1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRvbW9ycm93LmdldFRpbWUoKSAvIDEwMDApO1xufVxuXG5mdW5jdGlvbiBnZXRVbml4VGltZXN0YW1wVG9tb3Jyb3dOaWdodChpKXtcbiAgICBjb25zdCB0b21vcnJvdyA9IG5ldyBEYXRlKCk7XG4gICAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXRVVENEYXRlKCkgKyBpKTtcbiAgICB0b21vcnJvdy5zZXRVVENIb3VycygyNCwwLDAsMCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodG9tb3Jyb3cuZ2V0VGltZSgpIC8gMTAwMCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGVPZk5leHREYXlzKCkge1xuICAgIGNvbnN0IHRpbWVzdGFtcHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gZ2V0VW5peFRpbWVzdGFtcFRvbW9ycm93RGF5KGkpO1xuICAgICAgdGltZXN0YW1wcy5wdXNoKHRpbWVzdGFtcCk7XG4gICAgfVxuICAgIHJldHVybiB0aW1lc3RhbXBzO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRlT2ZOZXh0TmlnaHRzKCkge1xuICAgIGNvbnN0IHRpbWVzdGFtcHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gZ2V0VW5peFRpbWVzdGFtcFRvbW9ycm93TmlnaHQoaSk7XG4gICAgICB0aW1lc3RhbXBzLnB1c2godGltZXN0YW1wKTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWVzdGFtcHM7XG59XG5cbmZ1bmN0aW9uIHNldERhdGFUb05leHRGaXZlRGF5cyhkYXksIG5pZ2h0KXtcbiAgICBmaXZlRGF5V2VhdGhlci5xdWVyeVNlbGVjdG9yQWxsKFwiLmRheUNvbnRhaW5lclwiKS5mb3JFYWNoKChlbGVtZW50LGluZGV4KSAgPT57XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlQ29udGFpbmVyID0gZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdGVtcGVyYXR1cmVDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSBwYXJzZUludChkYXlbaW5kZXhdLm1haW4udGVtcCkgKyBnZXRVbml0cygpLnRlbXBVbml0O1xuICAgICAgICB0ZW1wZXJhdHVyZUNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gcGFyc2VJbnQobmlnaHRbaW5kZXhdLm1haW4udGVtcCkgKyBnZXRVbml0cygpLnRlbXBVbml0O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdW5peEluTWlsaXNlY29uZHMgPSBkYXlbaW5kZXhdLmR0ICogMTAwMDtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHVuaXhJbk1pbGlzZWNvbmRzKTtcbiAgICAgICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICAgICAgY29uc3QgZGF5TmFtZXMgPSBbXCJOaWVkemllbGFcIiwgXCJQb25pZWR6aWHFgmVrXCIsIFwiV3RvcmVrXCIsIFwixZpyb2RhXCIsIFwiQ3p3YXJ0ZWtcIiwgXCJQacSFdGVrXCIsIFwiU29ib3RhXCJdO1xuXG4gICAgICAgIGVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IGRheU5hbWVzW2RheU9mV2Vla107XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0VW5pdHMoKXtcbiAgICBsZXQgdGVtcFVuaXQgPSBcIsKwQ1wiO1xuICAgIGxldCBzcGVlZFVuaXQgPSBcIiBLbS9oXCI7XG4gICAgbGV0IGRpc3RhbmNlVW5pdCA9IFwibVwiO1xuXG4gICAgaWYgKHVuaXRzID09PSBcImltcGVyaWFsXCIpe1xuICAgICAgICB0ZW1wVW5pdCA9IFwiwrBGXCI7XG4gICAgICAgIHNwZWVkVW5pdCA9IFwiTXBoXCI7XG4gICAgICAgIGRpc3RhbmNlVW5pdCA9IFwiRmVldFwiO1xuICAgIH1cblxuICAgIHJldHVybiB7dGVtcFVuaXQsIHNwZWVkVW5pdCwgZGlzdGFuY2VVbml0fVxufVxuXG5mdW5jdGlvbiBnZXRWaXNpYmlsaXR5KHZpc2liaWxpdHkpe1xuICAgIGxldCByZXR1cm5WYWx1ZSA9IDA7XG4gICAgaWYgKHZpc2liaWxpdHkgPj0gMTAwMDApe1xuICAgICAgICByZXR1cm4gXCI+MTAgS1wiO1xuICAgIH1cbiAgICBpZiAodmlzaWJpbGl0eSA8IDEwMDAwICYmIHZpc2liaWxpdHkgPj0gMTAwMCl7XG4gICAgICAgIGNvbnN0IGZpcnN0RGlnaXQgPSB2aXNpYmlsaXR5LnRvU3RyaW5nKCkuY2hhckF0KDApO1xuICAgICAgICBjb25zdCBzZWNvbmREaWdpdCA9IHZpc2liaWxpdHkudG9TdHJpbmcoKS5jaGFyQXQoMSk7XG4gICAgICAgIHJldHVyblZhbHVlID0gZmlyc3REaWdpdCArIFwiLlwiICsgc2Vjb25kRGlnaXQgKyBcIiBLXCI7XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG4gICAgaWYgKHZpc2liaWxpdHkgPCAxMDAwKXtcbiAgICAgICAgcmV0dXJuIHZpc2liaWxpdHkgKyBcIiBcIjtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZ2V0SWNvbihpZCl7XG4gICAgc3dpdGNoIChpZCl7XG4gICAgICAgIGNhc2UgXCIwMWRcIjpcbiAgICAgICAgICAgIHJldHVybiBpbWdTdW47XG4gICAgICAgIGNhc2UgXCIwMmRcIjpcbiAgICAgICAgICAgIHJldHVybiBpbWdDbG91ZHlEYXk7XG4gICAgICAgIGNhc2UgXCIwM2RcIjpcbiAgICAgICAgICAgIHJldHVybiBpbWdDbG91ZDtcbiAgICAgICAgY2FzZSBcIjA0ZFwiOlxuICAgICAgICAgICAgcmV0dXJuIGltZ0Nsb3VkeTtcbiAgICAgICAgY2FzZSBcIjA5ZFwiOlxuICAgICAgICAgICAgcmV0dXJuIGltZ1JhaW55O1xuICAgICAgICBjYXNlIFwiMTBkXCI6XG4gICAgICAgICAgICByZXR1cm4gaW1nUmFpbnk7XG4gICAgICAgIGNhc2UgXCIxMWRcIjpcbiAgICAgICAgICAgIHJldHVybiBpbWdMaWdodG5pbmc7XG4gICAgICAgIGNhc2UgXCIxM2RcIjpcbiAgICAgICAgICAgIHJldHVybiBpbWdTbm93O1xuICAgICAgICBjYXNlIFwiNTBkXCI6XG4gICAgICAgICAgICByZXR1cm4gaW1nTWlzdDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRUb3duKCl7XG5cbiAgICBpZiAodXNlcklucHV0LnZhbHVlID09PSBcIlwiIHx8IHVzZXJJbnB1dC52YWx1ZS5tYXRjaCgvXiAqJC8pICE9PSBudWxsKXtcbiAgICAgICAgdXNlcklucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgdXNlcklucHV0LnBsYWNlaG9sZGVyID0gXCJWYWx1ZSBjYW4ndCBiZSBlbXB0eS5cIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNpdHlOYW1lID0gdXNlcklucHV0LnZhbHVlO1xuICAgIHVzZXJJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZ2V0V2VhdGhlckRhdGEoKTtcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==