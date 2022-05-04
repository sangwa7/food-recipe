/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather:ital@0;1&family=Ubuntu+Mono:ital@1&family=Work+Sans:wght@400;500;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: bisque;\r\n  font-family: 'Mono', sans-serif;\r\n}\r\n\r\nheader {\r\n  background-color: grey;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-weight: bolder;\r\n}\r\n\r\n.heading {\r\n  font-family: \"Allison\", sans-serif;\r\n  color: chartreuse;\r\n  font-weight: bolder;\r\n}\r\n\r\n.logo {\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.flex-col {\r\n  flex-direction: column;\r\n}\r\n\r\n.align-center {\r\n  align-items: center;\r\n}\r\n\r\n.justify-center {\r\n  justify-content: center;\r\n}\r\n\r\n.justify-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.justify-end {\r\n  justify-content: end;\r\n}\r\n\r\n.justify-around {\r\n  justify-content: space-around;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nheader ul {\r\n  list-style: none;\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n\r\nheader a {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\nheader a:hover {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\nheader h2 {\r\n  text-align: center;\r\n}\r\n\r\n.footer {\r\n  height: 50px;\r\n  background-color: #6d8347;\r\n}\r\n\r\n.meals-section {\r\n  padding: 0 2rem;\r\n  margin-left: 10px;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n.meal {\r\n  width: 90%;\r\n}\r\n\r\n.meal-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.meal-body {\r\n  height: 60px;\r\n}\r\n\r\n.meal-list li {\r\n  width: 100%;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.fav-btn {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-heart {\r\n  color: #aaa7a7;\r\n}\r\n\r\n.heart-active {\r\n  color: red;\r\n}\r\n\r\n.fa-heart:active {\r\n  transform: translateY(4px);\r\n  transition: all ease 0.3s;\r\n  color: red;\r\n}\r\n\r\n.active {\r\n  border-bottom: 1px solid #6d8347;\r\n}\r\n\r\n.comments {\r\n  padding: 0.7rem;\r\n  background-color: #6d8347;\r\n  color: #fff;\r\n  font-size: 1rem;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  border: #6d8347 1px solid;\r\n}\r\n\r\n#comment {\r\n  font-family: 'Poppins', sans-serif;\r\n  border: 1px solid #6d8347;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.comments:hover {\r\n  background-color: #eaeaea;\r\n  color: #6d8347;\r\n  transition: all ease 0.3s;\r\n}\r\n\r\n#comments-ul {\r\n  padding: 0;\r\n}\r\n\r\n#comments-ul li {\r\n  width: 40%;\r\n  text-align: start;\r\n  align-self: center;\r\n}\r\n\r\n#comments-ul li p {\r\n  margin: 0.2rem;\r\n}\r\n\r\n.modal {\r\n  width: 90%;\r\n  min-height: 100vh;\r\n  padding: 1rem;\r\n}\r\n\r\n.modal h2 {\r\n  font-size: 2.5rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\n.modal-header-img {\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.modal-header-img img {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\n.recipe-instrruction {\r\n  word-break: break-word;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 20;\r\n  -webkit-box-orient: vertical;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.description-header {\r\n  font-weight: bolder;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.left,\r\n.right {\r\n  width: 50%;\r\n}\r\n\r\n.close {\r\n  border: none;\r\n  font-size: 2rem;\r\n  background: transparent;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 40%;\r\n}\r\n\r\n.submit-comment {\r\n  border: 1px solid #6d8347;\r\n  background-color: #6d8347;\r\n  color: #fff;\r\n  padding: 0.5rem 2rem;\r\n}\r\n\r\n.submit-comment,\r\n#input-name,\r\n#comment {\r\n  border: 1px solid #6d8347;\r\n  padding: 0.7rem 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n  outline: none !important;\r\n  box-shadow: 0 0 10px #6d8347;\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .meal-list li {\r\n    list-style: none;\r\n    width: 30%;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 3rem;\r\n  }\r\n\r\n  .modal {\r\n    width: 85vw;\r\n    min-height: 100vh;\r\n    border: #6d8347 2px solid;\r\n    padding: 1rem;\r\n  }\r\n\r\n  .modal-header-img img {\r\n    width: 500px;\r\n    height: 500px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AAGA;;;EAGE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;EAClC,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;EACzB,UAAU;AACZ;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,WAAW;EACX,eAAe;EACf,WAAW;EACX,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,oBAAoB;EACpB,sBAAsB;EACtB,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,WAAW;EACX,oBAAoB;AACtB;;AAEA;;;EAGE,yBAAyB;EACzB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;;EAEE,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE;IACE,gBAAgB;IAChB,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,iBAAiB;IACjB,yBAAyB;IACzB,aAAa;EACf;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;AACF","sourcesContent":["\r\n@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather:ital@0;1&family=Ubuntu+Mono:ital@1&family=Work+Sans:wght@400;500;800&display=swap');\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: bisque;\r\n  font-family: 'Mono', sans-serif;\r\n}\r\n\r\nheader {\r\n  background-color: grey;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-weight: bolder;\r\n}\r\n\r\n.heading {\r\n  font-family: \"Allison\", sans-serif;\r\n  color: chartreuse;\r\n  font-weight: bolder;\r\n}\r\n\r\n.logo {\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.flex-col {\r\n  flex-direction: column;\r\n}\r\n\r\n.align-center {\r\n  align-items: center;\r\n}\r\n\r\n.justify-center {\r\n  justify-content: center;\r\n}\r\n\r\n.justify-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.justify-end {\r\n  justify-content: end;\r\n}\r\n\r\n.justify-around {\r\n  justify-content: space-around;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nheader ul {\r\n  list-style: none;\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n\r\nheader a {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\nheader a:hover {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\nheader h2 {\r\n  text-align: center;\r\n}\r\n\r\n.footer {\r\n  height: 50px;\r\n  background-color: #6d8347;\r\n}\r\n\r\n.meals-section {\r\n  padding: 0 2rem;\r\n  margin-left: 10px;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n.meal {\r\n  width: 90%;\r\n}\r\n\r\n.meal-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.meal-body {\r\n  height: 60px;\r\n}\r\n\r\n.meal-list li {\r\n  width: 100%;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.fav-btn {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-heart {\r\n  color: #aaa7a7;\r\n}\r\n\r\n.heart-active {\r\n  color: red;\r\n}\r\n\r\n.fa-heart:active {\r\n  transform: translateY(4px);\r\n  transition: all ease 0.3s;\r\n  color: red;\r\n}\r\n\r\n.active {\r\n  border-bottom: 1px solid #6d8347;\r\n}\r\n\r\n.comments {\r\n  padding: 0.7rem;\r\n  background-color: #6d8347;\r\n  color: #fff;\r\n  font-size: 1rem;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  border: #6d8347 1px solid;\r\n}\r\n\r\n#comment {\r\n  font-family: 'Poppins', sans-serif;\r\n  border: 1px solid #6d8347;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.comments:hover {\r\n  background-color: #eaeaea;\r\n  color: #6d8347;\r\n  transition: all ease 0.3s;\r\n}\r\n\r\n#comments-ul {\r\n  padding: 0;\r\n}\r\n\r\n#comments-ul li {\r\n  width: 40%;\r\n  text-align: start;\r\n  align-self: center;\r\n}\r\n\r\n#comments-ul li p {\r\n  margin: 0.2rem;\r\n}\r\n\r\n.modal {\r\n  width: 90%;\r\n  min-height: 100vh;\r\n  padding: 1rem;\r\n}\r\n\r\n.modal h2 {\r\n  font-size: 2.5rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\n.modal-header-img {\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.modal-header-img img {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\n.recipe-instrruction {\r\n  word-break: break-word;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 20;\r\n  -webkit-box-orient: vertical;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.description-header {\r\n  font-weight: bolder;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.left,\r\n.right {\r\n  width: 50%;\r\n}\r\n\r\n.close {\r\n  border: none;\r\n  font-size: 2rem;\r\n  background: transparent;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 40%;\r\n}\r\n\r\n.submit-comment {\r\n  border: 1px solid #6d8347;\r\n  background-color: #6d8347;\r\n  color: #fff;\r\n  padding: 0.5rem 2rem;\r\n}\r\n\r\n.submit-comment,\r\n#input-name,\r\n#comment {\r\n  border: 1px solid #6d8347;\r\n  padding: 0.7rem 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n  outline: none !important;\r\n  box-shadow: 0 0 10px #6d8347;\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .meal-list li {\r\n    list-style: none;\r\n    width: 30%;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 3rem;\r\n  }\r\n\r\n  .modal {\r\n    width: 85vw;\r\n    min-height: 100vh;\r\n    border: #6d8347 2px solid;\r\n    padding: 1rem;\r\n  }\r\n\r\n  .modal-header-img img {\r\n    width: 500px;\r\n    height: 500px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Get comments from API
const displayComments = async () => {
  const sendBtn = document.querySelector('#submit-comment');
  const commentList = document.querySelector('#comments-ul');
  const id = sendBtn.getAttribute('data');
  const Count = document.querySelector('#comments-count');

  const get = () => fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aJ1d0zBZhgzyK7ium8fa/comments?item_id=${id}`,
  ).then((res) => res.json());

  const foodComments = await get();

  Count.innerHTML = `${
    foodComments.length > 0 ? `${foodComments.length}` : '0'
  }`;

  commentList.innerHTML = '';
  if (foodComments.length > 0) {
    foodComments.forEach((com) => {
      const liComments = document.createElement('li');
      liComments.innerHTML = `
      <p><span class="bold">${com.creation_date} ${com.username}</span>: ${com.comment}</p>
      `;
      commentList.appendChild(liComments);
    });
  }
};

// Post comments from API
const sendComment = () => {
  const userNameInput = document.querySelector('#input-name');
  const alert = document.querySelector('#alert');
  const userComment = document.querySelector('#comment');
  const sendBtn = document.querySelector('#submit-comment');

  const post = (id, name, comment) => fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aJ1d0zBZhgzyK7ium8fa/comments',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment,
      }),
    },
  ).then((res) => res.text());

  displayComments();
  sendBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const id = sendBtn.getAttribute('data');
    const name = userNameInput.value;
    const comment = userComment.value;
    alert.innerHTML = '';
    if (name !== '' && comment !== '') {
      userNameInput.value = '';
      userComment.value = '';
      await post(id, name, comment).then(() => displayComments());
    } else alert.innerHTML = 'Enter Name and Comment';
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendComment);


/***/ }),

/***/ "./src/likeSection.js":
/*!****************************!*\
  !*** ./src/likeSection.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Displaylikes": () => (/* binding */ Displaylikes),
/* harmony export */   "like": () => (/* binding */ like)
/* harmony export */ });
const Displaylikes = async () => {
  const likeditems = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aJ1d0zBZhgzyK7ium8fa/likes')
    .then((response) => response.json())
    .then((data) => data);

  const likesnumber = document.getElementsByClassName('likes-qty');
  const likebtnsarray = Array.from(likesnumber);

  likebtnsarray.forEach((element) => {
    const likeId = element.getAttribute('data');
    const currentSpan = element;
    likeditems.forEach((e) => {
      if (likeId === e.item_id) {
        currentSpan.innerHTML = e.likes;
      }
    });
  });
};

const likeapi = async (itemid) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aJ1d0zBZhgzyK7ium8fa/likes/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemid,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      Displaylikes();
    });
};

const like = () => {
  const likebtns = document.getElementsByClassName('fa-heart');
  const likebtnsarray = Array.from(likebtns);
  likebtnsarray.forEach((element) => {
    const likeId = element.getAttribute('data');
    element.addEventListener('click', () => {
      element.classList.add('heart-active');
      likeapi(likeId);
    });
  });
};

setTimeout(() => like(), 3000);



/***/ }),

/***/ "./src/mealDb.js":
/*!***********************!*\
  !*** ./src/mealDb.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ "./src/comments.js");
/* harmony import */ var _likeSection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likeSection.js */ "./src/likeSection.js");



const popup = async () => {
  const header = document.querySelector('header');
  const main = document.querySelector('.meals-section');
  const footer = document.querySelector('footer');
  const btn = document.getElementsByClassName('comments');
  const modal = document.querySelector('#modal');

  const dataModal = async (id) => {
    const mealapiurl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const meals = await fetch(mealapiurl)
      .then((res) => res.json())
      .then((data) => data.meals);
    meals.forEach((element) => {
      if (element.idMeal === id) {
        modal.innerHTML = `
        <div class="modal">
        <div class="meal-header justify-end d-flex">
            <button class="close"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-header-img d-flex ">
            <img class="modal-img" src="${element.strMealThumb}" alt="${element.strMeal}">
            <h2 class="titme">${element.strMeal}</h2>
        </div>
        <div class="modal-description d-flex ">
        <div class = "left">
        <p> <span class="description-header">Category:</span> ${element.strCategory} <p>
        <p> <span class="description-header">Ingredients:</span>
        <ul id = "ingredientsUl">
        </ul>
        </span><p>
        </div>
        <div class = "right">
        <p> <span class="description-header">Country:</span> ${element.strArea} <p>
        <p> <span class="description-header">Instructions:</span> <p> <span class = "recipe-instrruction"> ${element.strInstructions}  > read more </button> </span>
        </div>
        </div>
        <div class="comments-container">
          <div class="all-comments text-center">
            <h3>Comments <span id= "comments-count">0</span></h3>
            <ul id="comments-ul" class = "d-flex justify-center flex-col">

            </ul>
          </div>
          <div class = "text-center">
            <h3> Add a comment </h3> 
          </div>
      
    <div class="add-comments text-center d-flex justify-center">
      <form action="POST">
          <input name= "name" type="text" id="input-name" placeholder="Your name" required>
          <textarea name="comment" id="comment" cols="30" rows="10" required></textarea>
          <span id = "alert" class="text-start"> </span>
          <button id="submit-comment" class="submit-comment" data="${element.idMeal}"> Submit</button>
          
      </form>
    </div>
    </div>
      `;

        const ingredientsUl = document.querySelector('#ingredientsUl');
        const ingredients = () => {
          const entries = Object.entries(element);
          const ingredientsArray = entries
            .filter(
              ([key, value]) => key.startsWith('strIngredient') && value && value.trim(),
            )
            /* eslint-disable-next-line */
            .map(([key, value]) => value);
          const measuresArray = entries
            .filter(
              ([key, value]) => key.startsWith('strMeasure') && value && value.trim(),
            )
            /* eslint-disable-next-line */
            .map(([key, value]) => value);
          for (let i = 1; i < ingredientsArray.length; i += 1) {
            ingredientsUl.innerHTML += `<li> ${ingredientsArray[i]} - ${measuresArray[i]} </li> `;
          }
        };
        ingredients();
        const exit = document.querySelector('.fa-times');
        exit.addEventListener('click', () => {
          header.classList.remove('hidden');
          main.classList.remove('hidden');
          footer.classList.remove('hidden');
          modal.classList.add('hidden');
        });
      }
      (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });
  };

  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', () => {
      window.scrollTo(0, 0);
      const id = btn[i].getAttribute('data');
      dataModal(id);
      header.classList.add('hidden');
      main.classList.add('hidden');
      footer.classList.add('hidden');
      modal.classList.remove('hidden');
    });
  }
};

const fetchMeal = async () => {
  const meallist = document.querySelector('.meal-list');
  const getCategoryUrl = async (category) => {
    meallist.innerHTML = '';
    const printMeals = (meals) => {
      meals.forEach((element) => {
        const newmeal = document.createElement('li');
        newmeal.innerHTML = ` 
        <div class="meal">
        <div class="meal-header">
          <img src="${element.strMealThumb}" loading="lazy" width="500" height="280" alt="${element.strMeal}">
        </div>
        <div class="meal-body d-flex justify-between">
          <h4>${element.strMeal}</h4>
          <button class="fav-btn" ><i class="fas fa-heart" data="${element.idMeal}"></i></button>
        </div>
        <div>
          <div class = "likes"><span class= "likes-qty" data="${element.idMeal}">0</span> likes </div>
          <button class= "comments" data="${element.idMeal}">Comments</button>
        </div>
      </div>`;

        meallist.appendChild(newmeal);
      });
    };

    const mealapiurl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const meals = await fetch(mealapiurl)
      .then((res) => res.json())
      .then((data) => data.meals);
    printMeals(meals);
    popup();
  };

  const foodCount = document.getElementsByClassName('foodCount');
  const printCount = async (category) => {
    const mealapiurl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const meals = await fetch(mealapiurl)
      .then((res) => res.json())
      .then((data) => data.meals);

    for (let i = 0; i < foodCount.length; i += 1) {
      foodCount[i].innerHTML = '';
      if (foodCount[i].classList.contains(category)) {
        foodCount[i].innerHTML = `(${meals.length})`;
      }
    }
  };

  const navlinks = document.querySelectorAll('nav li');
  const resetLinks = () => {
    for (let i = 0; i < navlinks.length; i += 1) {
      navlinks[i].classList.remove('active');
    }
  };

  for (let i = 0; i < navlinks.length; i += 1) {
    navlinks[i].addEventListener('click', () => {
      const category = navlinks[i].textContent.toLowerCase();
      getCategoryUrl(category);
      printCount(category);
      resetLinks();
      setTimeout(() => (0,_likeSection_js__WEBPACK_IMPORTED_MODULE_1__.like)(), 2000);
      (0,_likeSection_js__WEBPACK_IMPORTED_MODULE_1__.Displaylikes)();
      navlinks[i].classList.add('active');
    });
  }
  getCategoryUrl('seafood');
  printCount('seafood');
};

fetchMeal();
(0,_likeSection_js__WEBPACK_IMPORTED_MODULE_1__.Displaylikes)();


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _mealDb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mealDb.js */ "./src/mealDb.js");
/* harmony import */ var _likeSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likeSection.js */ "./src/likeSection.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyw0SEFBNEgsc0RBQXNELElBQUksbUJBQW1CLHNDQUFzQyxpQkFBaUIsZ0JBQWdCLDZCQUE2QixLQUFLLGNBQWMsK0JBQStCLHNDQUFzQyxLQUFLLGdCQUFnQiw2QkFBNkIscUNBQXFDLDBCQUEwQiwwQkFBMEIsS0FBSyxrQkFBa0IsMkNBQTJDLHdCQUF3QiwwQkFBMEIsS0FBSyxlQUFlLDBCQUEwQiw4QkFBOEIsS0FBSyxpQkFBaUIsb0JBQW9CLEtBQUssbUJBQW1CLDZCQUE2QixLQUFLLHVCQUF1QiwwQkFBMEIsS0FBSyx5QkFBeUIsOEJBQThCLEtBQUssMEJBQTBCLHFDQUFxQyxLQUFLLHNCQUFzQiwyQkFBMkIsS0FBSyx5QkFBeUIsb0NBQW9DLEtBQUssc0JBQXNCLHlCQUF5QixLQUFLLFlBQVksdUJBQXVCLEtBQUssbUJBQW1CLHVCQUF1Qiw4QkFBOEIsZ0JBQWdCLEtBQUssa0JBQWtCLDRCQUE0QixtQkFBbUIsS0FBSyx3QkFBd0IsaUJBQWlCLHNCQUFzQixLQUFLLG1CQUFtQix5QkFBeUIsS0FBSyxpQkFBaUIsbUJBQW1CLGdDQUFnQyxLQUFLLHdCQUF3QixzQkFBc0Isd0JBQXdCLEtBQUssYUFBYSxrQkFBa0IsS0FBSyxlQUFlLGlCQUFpQixLQUFLLG9CQUFvQixvQkFBb0Isc0JBQXNCLG9DQUFvQyxLQUFLLG9CQUFvQixtQkFBbUIsS0FBSyx1QkFBdUIsa0JBQWtCLDBCQUEwQixLQUFLLGtCQUFrQixvQ0FBb0MsbUJBQW1CLHdCQUF3QixzQkFBc0IsS0FBSyxtQkFBbUIscUJBQXFCLEtBQUssdUJBQXVCLGlCQUFpQixLQUFLLDBCQUEwQixpQ0FBaUMsZ0NBQWdDLGlCQUFpQixLQUFLLGlCQUFpQix1Q0FBdUMsS0FBSyxtQkFBbUIsc0JBQXNCLGdDQUFnQyxrQkFBa0Isc0JBQXNCLGtCQUFrQixzQkFBc0IsZ0NBQWdDLEtBQUssa0JBQWtCLHlDQUF5QyxnQ0FBZ0MsMkJBQTJCLEtBQUsseUJBQXlCLGdDQUFnQyxxQkFBcUIsZ0NBQWdDLEtBQUssc0JBQXNCLGlCQUFpQixLQUFLLHlCQUF5QixpQkFBaUIsd0JBQXdCLHlCQUF5QixLQUFLLDJCQUEyQixxQkFBcUIsS0FBSyxnQkFBZ0IsaUJBQWlCLHdCQUF3QixvQkFBb0IsS0FBSyxtQkFBbUIsd0JBQXdCLHFCQUFxQixLQUFLLDJCQUEyQiwwQkFBMEIsNkJBQTZCLEtBQUssK0JBQStCLGtCQUFrQixvQkFBb0IsS0FBSyw4QkFBOEIsNkJBQTZCLHVCQUF1Qiw4QkFBOEIsMkJBQTJCLDZCQUE2QixtQ0FBbUMsMEJBQTBCLEtBQUssNkJBQTZCLDBCQUEwQixnQ0FBZ0MsS0FBSywwQkFBMEIsaUJBQWlCLEtBQUssZ0JBQWdCLG1CQUFtQixzQkFBc0IsOEJBQThCLEtBQUssY0FBYyxvQkFBb0IsNkJBQTZCLDhCQUE4QixpQkFBaUIsS0FBSyx5QkFBeUIsZ0NBQWdDLGdDQUFnQyxrQkFBa0IsMkJBQTJCLEtBQUssc0RBQXNELGdDQUFnQywyQkFBMkIsMEJBQTBCLEtBQUssd0NBQXdDLCtCQUErQixtQ0FBbUMsS0FBSyxpQkFBaUIsK0JBQStCLEtBQUssbURBQW1ELHFCQUFxQix5QkFBeUIsbUJBQW1CLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLE9BQU8sa0JBQWtCLG9CQUFvQiwwQkFBMEIsa0NBQWtDLHNCQUFzQixPQUFPLGlDQUFpQyxxQkFBcUIsc0JBQXNCLE9BQU8sS0FBSyx1QkFBdUI7QUFDeGtXO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUhBQXFILEdBQUc7QUFDeEg7O0FBRUE7O0FBRUE7QUFDQSxpQ0FBaUMsb0JBQW9CO0FBQ3JELEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtQkFBbUIsRUFBRSxhQUFhLFdBQVcsWUFBWTtBQUN2RjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkUzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUNBQXlDO0FBQ3pDLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUN3QztBQUNjOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrRUFBK0UsR0FBRztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHFCQUFxQixTQUFTLGdCQUFnQjtBQUN4RixnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxxQkFBcUI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELGlCQUFpQjtBQUNoRiw2R0FBNkcsMEJBQTBCO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGVBQWU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkJBQTZCO0FBQ3ZELCtDQUErQyxxQkFBcUIsSUFBSSxrQkFBa0I7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTSx3REFBVztBQUNqQixLQUFLO0FBQ0w7O0FBRUEsa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCLGlEQUFpRCxnQkFBZ0I7QUFDNUc7QUFDQTtBQUNBLGdCQUFnQixnQkFBZ0I7QUFDaEMsbUVBQW1FLGVBQWU7QUFDbEY7QUFDQTtBQUNBLGdFQUFnRSxlQUFlO0FBQy9FLDRDQUE0QyxlQUFlO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsK0VBQStFLFNBQVM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrRUFBK0UsU0FBUztBQUN4RjtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0EscUNBQXFDLGFBQWE7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscURBQUk7QUFDM0IsTUFBTSw2REFBWTtBQUNsQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUFZOzs7Ozs7O1VDbkxaO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNBO0FBQ0siLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrc2V0dXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2tzZXR1cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3NldHVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3NldHVwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2tzZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2tzZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3NldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3NldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFja3NldHVwLy4vc3JjL2NvbW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2tzZXR1cC8uL3NyYy9saWtlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrc2V0dXAvLi9zcmMvbWVhbERiLmpzIiwid2VicGFjazovL3dlYnBhY2tzZXR1cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrc2V0dXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFja3NldHVwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrc2V0dXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrc2V0dXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrc2V0dXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BYnJpbCtGYXRmYWNlJmZhbWlseT1NZXJyaXdlYXRoZXI6aXRhbEAwOzEmZmFtaWx5PVVidW50dStNb25vOml0YWxAMSZmYW1pbHk9V29yaytTYW5zOndnaHRANDAwOzUwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdNb25vJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbGxpc29uXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiBjaGFydHJldXNlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LWNvbCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxpZ24tY2VudGVyIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWNlbnRlciB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmp1c3RpZnktYmV0d2VlbiB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWVuZCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmp1c3RpZnktYXJvdW5kIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jZW50ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBoMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZkODM0NztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzLXNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogMCAycmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWJvZHkge1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1saXN0IGxpIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhdi1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGNvbG9yOiAjYWFhN2E3O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQtYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZkODM0NztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIHtcXHJcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZDgzNDc7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAjNmQ4MzQ3IDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZDgzNDc7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XFxyXFxuICBjb2xvcjogIzZkODM0NztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50cy11bCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudHMtdWwgbGkge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudHMtdWwgbGkgcCB7XFxyXFxuICBtYXJnaW46IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBoMiB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIG1hcmdpbjogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZGVyLWltZyB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlci1pbWcgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1pbnN0cnJ1Y3Rpb24ge1xcclxcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyMDtcXHJcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24taGVhZGVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdCxcXHJcXG4ucmlnaHQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWNvbW1lbnQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzZkODM0NztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZDgzNDc7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWNvbW1lbnQsXFxyXFxuI2lucHV0LW5hbWUsXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzZkODM0NztcXHJcXG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMsXFxyXFxudGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzZkODM0NztcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tZWFsLWxpc3QgbGkge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbCB7XFxyXFxuICAgIHdpZHRoOiA4NXZ3O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYm9yZGVyOiAjNmQ4MzQ3IDJweCBzb2xpZDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbC1oZWFkZXItaW1nIGltZyB7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBR0E7OztFQUdFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7OztFQUdFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWJyaWwrRmF0ZmFjZSZmYW1pbHk9TWVycml3ZWF0aGVyOml0YWxAMDsxJmZhbWlseT1VYnVudHUrTW9ubzppdGFsQDEmZmFtaWx5PVdvcmsrU2Fuczp3Z2h0QDQwMDs1MDA7ODAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTW9ubycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWxsaXNvblxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogY2hhcnRyZXVzZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1jb2wge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFsaWduLWNlbnRlciB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1jZW50ZXIge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1lbmQge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWFyb3VuZCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY2VudGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZDgzNDc7XFxyXFxufVxcclxcblxcclxcbi5tZWFscy1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1ib2R5IHtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtbGlzdCBsaSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5mYXYtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCB7XFxyXFxuICBjb2xvcjogI2FhYTdhNztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0LWFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQ6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2ZDgzNDc7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cyB7XFxyXFxuICBwYWRkaW5nOiAwLjdyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MzQ3O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogIzZkODM0NyAxcHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmQ4MzQ3O1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50czpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xcclxcbiAgY29sb3I6ICM2ZDgzNDc7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudHMtdWwge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzLXVsIGxpIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzLXVsIGxpIHAge1xcclxcbiAgbWFyZ2luOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaDIge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBtYXJnaW46IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlci1pbWcge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1oZWFkZXItaW1nIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaW5zdHJydWN0aW9uIHtcXHJcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjA7XFxyXFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLWhlYWRlciB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQsXFxyXFxuLnJpZ2h0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1jb21tZW50IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZDgzNDc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MzQ3O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1jb21tZW50LFxcclxcbiNpbnB1dC1uYW1lLFxcclxcbiNjb21tZW50IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZDgzNDc7XFxyXFxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzLFxcclxcbnRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM2ZDgzNDc7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWVhbC1saXN0IGxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwge1xcclxcbiAgICB3aWR0aDogODV2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJvcmRlcjogIzZkODM0NyAycHggc29saWQ7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwtaGVhZGVyLWltZyBpbWcge1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gR2V0IGNvbW1lbnRzIGZyb20gQVBJXG5jb25zdCBkaXNwbGF5Q29tbWVudHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHNlbmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWNvbW1lbnQnKTtcbiAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMtdWwnKTtcbiAgY29uc3QgaWQgPSBzZW5kQnRuLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICBjb25zdCBDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cy1jb3VudCcpO1xuXG4gIGNvbnN0IGdldCA9ICgpID0+IGZldGNoKFxuICAgIGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9hSjFkMHpCWmhnenlLN2l1bThmYS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCxcbiAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIGNvbnN0IGZvb2RDb21tZW50cyA9IGF3YWl0IGdldCgpO1xuXG4gIENvdW50LmlubmVySFRNTCA9IGAke1xuICAgIGZvb2RDb21tZW50cy5sZW5ndGggPiAwID8gYCR7Zm9vZENvbW1lbnRzLmxlbmd0aH1gIDogJzAnXG4gIH1gO1xuXG4gIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9ICcnO1xuICBpZiAoZm9vZENvbW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICBmb29kQ29tbWVudHMuZm9yRWFjaCgoY29tKSA9PiB7XG4gICAgICBjb25zdCBsaUNvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpQ29tbWVudHMuaW5uZXJIVE1MID0gYFxuICAgICAgPHA+PHNwYW4gY2xhc3M9XCJib2xkXCI+JHtjb20uY3JlYXRpb25fZGF0ZX0gJHtjb20udXNlcm5hbWV9PC9zcGFuPjogJHtjb20uY29tbWVudH08L3A+XG4gICAgICBgO1xuICAgICAgY29tbWVudExpc3QuYXBwZW5kQ2hpbGQobGlDb21tZW50cyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIFBvc3QgY29tbWVudHMgZnJvbSBBUElcbmNvbnN0IHNlbmRDb21tZW50ID0gKCkgPT4ge1xuICBjb25zdCB1c2VyTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5hbWUnKTtcbiAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxlcnQnKTtcbiAgY29uc3QgdXNlckNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudCcpO1xuICBjb25zdCBzZW5kQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1jb21tZW50Jyk7XG5cbiAgY29uc3QgcG9zdCA9IChpZCwgbmFtZSwgY29tbWVudCkgPT4gZmV0Y2goXG4gICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2FKMWQwekJaaGd6eUs3aXVtOGZhL2NvbW1lbnRzJyxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgICAgY29tbWVudCxcbiAgICAgIH0pLFxuICAgIH0sXG4gICkudGhlbigocmVzKSA9PiByZXMudGV4dCgpKTtcblxuICBkaXNwbGF5Q29tbWVudHMoKTtcbiAgc2VuZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgaWQgPSBzZW5kQnRuLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgIGNvbnN0IG5hbWUgPSB1c2VyTmFtZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGNvbW1lbnQgPSB1c2VyQ29tbWVudC52YWx1ZTtcbiAgICBhbGVydC5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAobmFtZSAhPT0gJycgJiYgY29tbWVudCAhPT0gJycpIHtcbiAgICAgIHVzZXJOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHVzZXJDb21tZW50LnZhbHVlID0gJyc7XG4gICAgICBhd2FpdCBwb3N0KGlkLCBuYW1lLCBjb21tZW50KS50aGVuKCgpID0+IGRpc3BsYXlDb21tZW50cygpKTtcbiAgICB9IGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gJ0VudGVyIE5hbWUgYW5kIENvbW1lbnQnO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbmRDb21tZW50O1xuIiwiY29uc3QgRGlzcGxheWxpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsaWtlZGl0ZW1zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2FKMWQwekJaaGd6eUs3aXVtOGZhL2xpa2VzJylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YSk7XG5cbiAgY29uc3QgbGlrZXNudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaWtlcy1xdHknKTtcbiAgY29uc3QgbGlrZWJ0bnNhcnJheSA9IEFycmF5LmZyb20obGlrZXNudW1iZXIpO1xuXG4gIGxpa2VidG5zYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGxpa2VJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgY29uc3QgY3VycmVudFNwYW4gPSBlbGVtZW50O1xuICAgIGxpa2VkaXRlbXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgaWYgKGxpa2VJZCA9PT0gZS5pdGVtX2lkKSB7XG4gICAgICAgIGN1cnJlbnRTcGFuLmlubmVySFRNTCA9IGUubGlrZXM7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgbGlrZWFwaSA9IGFzeW5jIChpdGVtaWQpID0+IHtcbiAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2FKMWQwekJaaGd6eUs3aXVtOGZhL2xpa2VzLycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpdGVtaWQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIERpc3BsYXlsaWtlcygpO1xuICAgIH0pO1xufTtcblxuY29uc3QgbGlrZSA9ICgpID0+IHtcbiAgY29uc3QgbGlrZWJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYS1oZWFydCcpO1xuICBjb25zdCBsaWtlYnRuc2FycmF5ID0gQXJyYXkuZnJvbShsaWtlYnRucyk7XG4gIGxpa2VidG5zYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGxpa2VJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhcnQtYWN0aXZlJyk7XG4gICAgICBsaWtlYXBpKGxpa2VJZCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuc2V0VGltZW91dCgoKSA9PiBsaWtlKCksIDMwMDApO1xuXG5leHBvcnQgeyBsaWtlLCBEaXNwbGF5bGlrZXMgfTsiLCJpbXBvcnQgc2VuZENvbW1lbnQgZnJvbSAnLi9jb21tZW50cy5qcyc7XG5pbXBvcnQgeyBEaXNwbGF5bGlrZXMsIGxpa2UgfSBmcm9tICcuL2xpa2VTZWN0aW9uLmpzJztcblxuY29uc3QgcG9wdXAgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWxzLXNlY3Rpb24nKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbW1lbnRzJyk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG5cbiAgY29uc3QgZGF0YU1vZGFsID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgbWVhbGFwaXVybCA9IGBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbG9va3VwLnBocD9pPSR7aWR9YDtcbiAgICBjb25zdCBtZWFscyA9IGF3YWl0IGZldGNoKG1lYWxhcGl1cmwpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEubWVhbHMpO1xuICAgIG1lYWxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmlkTWVhbCA9PT0gaWQpIHtcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyIGp1c3RpZnktZW5kIGQtZmxleFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyLWltZyBkLWZsZXggXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwibW9kYWwtaW1nXCIgc3JjPVwiJHtlbGVtZW50LnN0ck1lYWxUaHVtYn1cIiBhbHQ9XCIke2VsZW1lbnQuc3RyTWVhbH1cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInRpdG1lXCI+JHtlbGVtZW50LnN0ck1lYWx9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kZXNjcmlwdGlvbiBkLWZsZXggXCI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImxlZnRcIj5cbiAgICAgICAgPHA+IDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24taGVhZGVyXCI+Q2F0ZWdvcnk6PC9zcGFuPiAke2VsZW1lbnQuc3RyQ2F0ZWdvcnl9IDxwPlxuICAgICAgICA8cD4gPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1oZWFkZXJcIj5JbmdyZWRpZW50czo8L3NwYW4+XG4gICAgICAgIDx1bCBpZCA9IFwiaW5ncmVkaWVudHNVbFwiPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8L3NwYW4+PHA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJyaWdodFwiPlxuICAgICAgICA8cD4gPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1oZWFkZXJcIj5Db3VudHJ5Ojwvc3Bhbj4gJHtlbGVtZW50LnN0ckFyZWF9IDxwPlxuICAgICAgICA8cD4gPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1oZWFkZXJcIj5JbnN0cnVjdGlvbnM6PC9zcGFuPiA8cD4gPHNwYW4gY2xhc3MgPSBcInJlY2lwZS1pbnN0cnJ1Y3Rpb25cIj4gJHtlbGVtZW50LnN0ckluc3RydWN0aW9uc30gID4gcmVhZCBtb3JlIDwvYnV0dG9uPiA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGwtY29tbWVudHMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMz5Db21tZW50cyA8c3BhbiBpZD0gXCJjb21tZW50cy1jb3VudFwiPjA8L3NwYW4+PC9oMz5cbiAgICAgICAgICAgIDx1bCBpZD1cImNvbW1lbnRzLXVsXCIgY2xhc3MgPSBcImQtZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbFwiPlxuXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aDM+IEFkZCBhIGNvbW1lbnQgPC9oMz4gXG4gICAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8ZGl2IGNsYXNzPVwiYWRkLWNvbW1lbnRzIHRleHQtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGZvcm0gYWN0aW9uPVwiUE9TVFwiPlxuICAgICAgICAgIDxpbnB1dCBuYW1lPSBcIm5hbWVcIiB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXQtbmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50XCIgaWQ9XCJjb21tZW50XCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8c3BhbiBpZCA9IFwiYWxlcnRcIiBjbGFzcz1cInRleHQtc3RhcnRcIj4gPC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXQtY29tbWVudFwiIGNsYXNzPVwic3VibWl0LWNvbW1lbnRcIiBkYXRhPVwiJHtlbGVtZW50LmlkTWVhbH1cIj4gU3VibWl0PC9idXR0b24+XG4gICAgICAgICAgXG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICBgO1xuXG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnRzVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5ncmVkaWVudHNVbCcpO1xuICAgICAgICBjb25zdCBpbmdyZWRpZW50cyA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZWxlbWVudCk7XG4gICAgICAgICAgY29uc3QgaW5ncmVkaWVudHNBcnJheSA9IGVudHJpZXNcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgIChba2V5LCB2YWx1ZV0pID0+IGtleS5zdGFydHNXaXRoKCdzdHJJbmdyZWRpZW50JykgJiYgdmFsdWUgJiYgdmFsdWUudHJpbSgpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IHZhbHVlKTtcclxuICAgICAgICAgIGNvbnN0IG1lYXN1cmVzQXJyYXkgPSBlbnRyaWVzXG4gICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAoW2tleSwgdmFsdWVdKSA9PiBrZXkuc3RhcnRzV2l0aCgnc3RyTWVhc3VyZScpICYmIHZhbHVlICYmIHZhbHVlLnRyaW0oKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB2YWx1ZSk7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGluZ3JlZGllbnRzQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluZ3JlZGllbnRzVWwuaW5uZXJIVE1MICs9IGA8bGk+ICR7aW5ncmVkaWVudHNBcnJheVtpXX0gLSAke21lYXN1cmVzQXJyYXlbaV19IDwvbGk+IGA7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpbmdyZWRpZW50cygpO1xuICAgICAgICBjb25zdCBleGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXRpbWVzJyk7XG4gICAgICAgIGV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHNlbmRDb21tZW50KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBidG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICBjb25zdCBpZCA9IGJ0bltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICAgIGRhdGFNb2RhbChpZCk7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGZldGNoTWVhbCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbWVhbGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbC1saXN0Jyk7XG4gIGNvbnN0IGdldENhdGVnb3J5VXJsID0gYXN5bmMgKGNhdGVnb3J5KSA9PiB7XG4gICAgbWVhbGxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgcHJpbnRNZWFscyA9IChtZWFscykgPT4ge1xuICAgICAgbWVhbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdtZWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbmV3bWVhbC5pbm5lckhUTUwgPSBgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7ZWxlbWVudC5zdHJNZWFsVGh1bWJ9XCIgbG9hZGluZz1cImxhenlcIiB3aWR0aD1cIjUwMFwiIGhlaWdodD1cIjI4MFwiIGFsdD1cIiR7ZWxlbWVudC5zdHJNZWFsfVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtYm9keSBkLWZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGg0PiR7ZWxlbWVudC5zdHJNZWFsfTwvaDQ+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZhdi1idG5cIiA+PGkgY2xhc3M9XCJmYXMgZmEtaGVhcnRcIiBkYXRhPVwiJHtlbGVtZW50LmlkTWVhbH1cIj48L2k+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImxpa2VzXCI+PHNwYW4gY2xhc3M9IFwibGlrZXMtcXR5XCIgZGF0YT1cIiR7ZWxlbWVudC5pZE1lYWx9XCI+MDwvc3Bhbj4gbGlrZXMgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz0gXCJjb21tZW50c1wiIGRhdGE9XCIke2VsZW1lbnQuaWRNZWFsfVwiPkNvbW1lbnRzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YDtcblxuICAgICAgICBtZWFsbGlzdC5hcHBlbmRDaGlsZChuZXdtZWFsKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBtZWFsYXBpdXJsID0gYGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9maWx0ZXIucGhwP2M9JHtjYXRlZ29yeX1gO1xuICAgIGNvbnN0IG1lYWxzID0gYXdhaXQgZmV0Y2gobWVhbGFwaXVybClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5tZWFscyk7XG4gICAgcHJpbnRNZWFscyhtZWFscyk7XG4gICAgcG9wdXAoKTtcbiAgfTtcblxuICBjb25zdCBmb29kQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb29kQ291bnQnKTtcbiAgY29uc3QgcHJpbnRDb3VudCA9IGFzeW5jIChjYXRlZ29yeSkgPT4ge1xuICAgIGNvbnN0IG1lYWxhcGl1cmwgPSBgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/Yz0ke2NhdGVnb3J5fWA7XG4gICAgY29uc3QgbWVhbHMgPSBhd2FpdCBmZXRjaChtZWFsYXBpdXJsKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLm1lYWxzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9vZENvdW50Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBmb29kQ291bnRbaV0uaW5uZXJIVE1MID0gJyc7XG4gICAgICBpZiAoZm9vZENvdW50W2ldLmNsYXNzTGlzdC5jb250YWlucyhjYXRlZ29yeSkpIHtcbiAgICAgICAgZm9vZENvdW50W2ldLmlubmVySFRNTCA9IGAoJHttZWFscy5sZW5ndGh9KWA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG5hdmxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IGxpJyk7XG4gIGNvbnN0IHJlc2V0TGlua3MgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZsaW5rcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbmF2bGlua3NbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2bGlua3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBuYXZsaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gbmF2bGlua3NbaV0udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgIGdldENhdGVnb3J5VXJsKGNhdGVnb3J5KTtcbiAgICAgIHByaW50Q291bnQoY2F0ZWdvcnkpO1xuICAgICAgcmVzZXRMaW5rcygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWtlKCksIDIwMDApO1xuICAgICAgRGlzcGxheWxpa2VzKCk7XG4gICAgICBuYXZsaW5rc1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuICBnZXRDYXRlZ29yeVVybCgnc2VhZm9vZCcpO1xuICBwcmludENvdW50KCdzZWFmb29kJyk7XG59O1xuXG5mZXRjaE1lYWwoKTtcbkRpc3BsYXlsaWtlcygpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL21lYWxEYi5qcyc7XG5pbXBvcnQgJy4vbGlrZVNlY3Rpb24uanMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9