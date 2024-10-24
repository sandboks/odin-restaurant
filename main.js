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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! font/Zen_Maru_Gothic/ZenMaruGothic-Regular.ttf */ \"./src/font/Zen_Maru_Gothic/ZenMaruGothic-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --colorBold: #3e2800;\n    --colorLight: #ad8c47;\n    --colorBG2: #f8f6f1;\n    --colorLight2: #d7d2c7;\n    --colorHighlighted: #7a5200;\n\n    --whiteTransparent: #ffffff00;\n\n    --mainContentMaxWidth: 900px;\n    --contentGridSquareWidth: 150px;\n    --menuGridSquareWidth: 220px;\n    --padding-amount: 1em;\n\n    --transitionDuration: 200ms;\n}\n\n@font-face {\n    font-family:'ZenMaruLight';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    color: var(--colorBold);\n    font-family: \"メイリオ\",Meiryo,\"ヒラギノ角ゴ Pro W3\",Hiragino Kaku Gothic Pro,Osaka,\"ＭＳ Ｐゴシック\",MS PGothic,Sans-Serif,verdana;\n\n    margin: 0;\n    height: 100vh;\n}\n\n.contentContainer {\n    height: 100%;\n    /* width: 100%; */\n    width: 100%;\n    /*\n    max-width: var(--mainContentMaxWidth);\n    */\n    /* overflow: scroll; */\n    overflow: auto;\n    padding: 0;\n    margin: 0;\n\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    scrollbar-gutter: stable both-edges;\n    position: relative;\n}\n\n.content {\n    width: 100%;\n    max-width: var(--mainContentMaxWidth);\n}\n\n.whiteFader {\n    background: var(--whiteTransparent);\n    height: 100%;\n    width: 100%;\n    max-width: var(--mainContentMaxWidth);\n    position: absolute;\n    z-index: 2;\n    pointer-events: none;\n    transition: 250ms;\n}\n\n.whiteFader.whiteFaderActive {\n    background: white;\n}\n\n.topBanner {\n    /* display: grid; */\n    /* grid-template-columns: repeat(4, 1fr); */    \n    display: flex;\n    gap: 0;\n    justify-content: center;\n    align-items: center;\n    height: 4.5em;\n    width: 100%;\n    max-width: var(--mainContentMaxWidth);\n\n    /*\n    background-color: var(--colorLight2);\n    */\n    border-bottom: 0.25em solid var(--colorHighlighted);\n    z-index: 3;\n}\n\n.topBanner a {\n    height: 100%;\n    flex: 1 1 0px; /* flex basis of 0 for equal width buttons */\n}\n\n.topLogo {\n    padding: 0.5em 1em;\n    box-sizing: border-box;\n}\n\n.topLogo, .topLogo img {\n    height: 100%;\n}\n\n.topBanner button {\n    height: 100%;\n    width: 100%;\n    font-size: large;\n    cursor: pointer;\n\n    /*\n    background: white;\n    */\n    background: none;\n    border: 0;\n    padding: 0.75em;\n}\n\n.topBanner button:hover {\n    background: var(--colorHighlighted);\n    color: white;\n}\n\n.subMenu {\n    font-size: x-small;\n    color: var(--colorLight)\n}\n\n.main {\n    width: 100%;\n    max-width: var(--mainContentMaxWidth);\n    padding: 1em;\n    box-sizing: border-box;\n    \n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n}\n\n.mainStage {\n    padding: 0;\n}\n\n.main img {\n    width: 100%;\n}\n\n.slogan {\n    background-color: var(--colorBG2);\n}\n\n.slogan .headerHeading h2 {\n    background-color: var(--colorBG2);\n}\n\n.sloganBannerGrid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}\n\n.sloganBannerText {\n    background-color: white;\n    aspect-ratio: 4 / 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-family: 'ZenMaruLight';\n    font-size: 24px;\n}\n\n/*\nSPECIALTY\n*/\n\n.specialty {\n}\n\n.header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.headerHeading {\n    width: 100%;\n    display: flex;\n    /* display: block; */\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.headerHeading h2 {\n    background-color: white;\n    z-index: 1;\n    padding: 0 1em;    \n    margin: 0;\n}\n\n.headerLine {\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    /* top: calc(50% - .5px); */\n    left: 0;\n    background-color: #e9e3d3;\n}\n\n.header span {\n    color: var(--colorLight);\n    font-size: small;\n}\n\n.mainContentGrid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(var(--contentGridSquareWidth), 1fr));\n    gap: var(--padding-amount);\n}\n\n.mainContentGridSquare {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    box-shadow: 0px 0px 0px 0 rgba(0, 0, 0, 0.3);\n\n    transition: var(--transitionDuration);\n}\n\n.mainContentGridSquare:hover {\n    /*\n    background-color: var(--colorHighlighted);\n    color: white;\n    */\n}\n\n.mainContentGridSquare:hover {\n    /* outline: 1px solid silver; */\n    box-shadow: 2px 3px 4px 0 rgba(0, 0, 0, 0.3);\n    /* scale: 1.05; */\n}\n\n\n/*\nMENU PAGE\n*/\n\n.menuContent .mainContentGrid  {\n    grid-template-columns: repeat(auto-fit, minmax(var(--menuGridSquareWidth), 1fr));\n    gap: var(--padding-amount);\n}\n\n.mainContentGridSquare p {\n    margin-bottom: 0.25em;\n}\n\n.mainContentGridSquare span {\n    color: var(--colorLight);\n    font-size: x-small;\n    padding-bottom: 1em;\n}\n\n.imageParent {\n    box-sizing: border-box;\n    overflow: hidden;\n    display: flex; /* this prevents a bit of whitespace padding at the bottom */\n    position: relative;\n}\n\n.imageParentBorder {\n    border: 0px solid var(--colorHighlighted);\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    box-sizing: border-box;\n    z-index: 1;\n}\n\n.mainContentGridSquare:hover .imageParentBorder {\n    /*\n    border-width: 6px;\n    */\n}\n\n.mainContentGridSquare img {\n    transition: var(--transitionDuration);\n}\n\n.mainContentGridSquare:hover img {\n    scale: 1.1;\n}\n\n/*\nBRAND SLOGAN\n*/\n\n.brandSloganSection {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    gap: 2em;\n}\n\n.sloganParagraph {\n    text-align: center;\n    font-family: 'ZenMaruLight';\n    font-size: 24px;\n}\n\n.sloganParagraph p {\n    margin: 0.5em;\n}\n\n.brandSloganPadding {\n    height: 3em;\n}\n\n/*\nFOOTER\n*/\n\nfooter {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n\n    padding: 1em;\n    padding-bottom: 3em;\n}\n\nfooter p, footer span {\n    color: var(--colorLight2);\n    text-align: center;\n    font-size: small;\n}\n\na {\n    color: inherit;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant-webpack/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/brandPage.js":
/*!**************************!*\
  !*** ./src/brandPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions.js */ \"./src/helperFunctions.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n    const content = document.querySelector(\".content\");\n    console.log(\"AWOO\");\n    CreateBlurb(content);\n});\n\nfunction CreateBlurb(parentNode) {\n    (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(parentNode, [\"brandSloganPadding\"]);\n    let container = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(parentNode, [\"brandSloganSection\"]);\n    \n    const paragraphs = [\n        'ひと息つきたい人がいる。仕事をしたい人がいる。 豆と鮮度にこだわった、おいしいコーヒーと過ごす場所。 いつもの香り、いつもの椅子、いってらっしゃいと言われる朝。 「ドトールがあって、よかったね。」 つくっているのは、そんな時間。 ひとりでも多くのひとに、本物の1杯を届けてる。',\n        '特別じゃないけど、特別なんだ。 特別じゃないから、特別なんだ。',\n        'ひとりになりたい人がいる。おしゃべりしたい人がいる。 豊富なメニューもそろってる、やさしいコーヒーを飲める場所。 走りつづけるには、休息がいる。進みつづけるには、安心がいる。',\n        '「ドトールがあって、よかったね。」 つくっているのは、そんな時間。 お店を磨いて、笑顔を磨いて、誰かの今日を、支えてる。',\n        '特別じゃないけど、特別なんだ。 特別じゃないから、特別なんだ。'\n    ];\n\n    for (let i = 0; i < paragraphs.length; i++) {\n        let div = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(container, [\"sloganParagraph\"]);\n        let paragraph = paragraphs[i];\n        //let sentences = paragraph.replace(/([.。])\\s*(?=[A-Z])/g, \"$1|\").split(\"|\");\n        let sentences = paragraph.split(\" \");\n        //console.log(sentences);\n        for (let j = 0; j < sentences.length; j++) {\n            (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendTag)(div, 'p', sentences[j]);\n        }\n    }\n\n    (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(parentNode, [\"brandSloganPadding\"]);\n}\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/brandPage.js?");

/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppendDivWithClasses: () => (/* binding */ AppendDivWithClasses),\n/* harmony export */   AppendImg: () => (/* binding */ AppendImg),\n/* harmony export */   AppendTag: () => (/* binding */ AppendTag),\n/* harmony export */   CreateMainGridSquare: () => (/* binding */ CreateMainGridSquare),\n/* harmony export */   CreateSectionHeader: () => (/* binding */ CreateSectionHeader)\n/* harmony export */ });\nfunction CreateMainGridSquare(parent, title, subtitle, img) {\n    let mainGridSquare = AppendDivWithClasses(parent, ['mainContentGridSquare']);\n        let imageParent = AppendDivWithClasses(mainGridSquare, [\"imageParent\"]);\n            let imageParentBorder = AppendDivWithClasses(imageParent, ['imageParentBorder']);\n            let imageParentImg = AppendImg(imageParent, img);\n        AppendTag(mainGridSquare, 'p', title);\n        AppendTag(mainGridSquare, 'span', subtitle);\n}\n\nfunction CreateSectionHeader(parentNode, mainText, subText) {\n    const div = AppendDivWithClasses(parentNode, [\"header\"]);\n        const header = AppendDivWithClasses(div, [\"headerHeading\"]);\n            //h2\n            AppendTag(header, 'h2', mainText);\n            AppendDivWithClasses(header, [\"headerLine\"]);\n\n        AppendTag(div, 'span', subText, ['subtitle']);\n}\n\nfunction AppendDivWithClasses(parentNode, classes) {\n    const div = document.createElement('div');\n    for (let i = 0; i < classes.length; i++) {\n        div.classList.add(classes[i]);\n    }\n    parentNode.appendChild(div);\n\n    return div;\n}\n\nfunction AppendImg(parentNode, src) {\n    const img = document.createElement('img');\n    img.src = src;\n    parentNode.appendChild(img);\n}\n\nfunction AppendTag(parentNode, tag, contents, classList = []) {\n    const tagHTML = document.createElement(tag);\n    tagHTML.textContent = contents;\n    for (let i = 0; i < classList.length; i++) {\n        tagHTML.classList.add(classList[i]);\n    }\n    parentNode.appendChild(tagHTML);\n}\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/helperFunctions.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions.js */ \"./src/helperFunctions.js\");\n/* harmony import */ var _img_b01_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/b01.jpg */ \"./src/img/b01.jpg\");\n/* harmony import */ var _img_bnr_sloganCrop_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/bnr_sloganCrop.jpg */ \"./src/img/bnr_sloganCrop.jpg\");\n/* harmony import */ var _img_01_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/01.jpg */ \"./src/img/01.jpg\");\n/* harmony import */ var _img_02_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/02.jpg */ \"./src/img/02.jpg\");\n/* harmony import */ var _img_03_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/03.jpg */ \"./src/img/03.jpg\");\n/* harmony import */ var _img_04_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/04.jpg */ \"./src/img/04.jpg\");\n//import './helperFunctions.js';\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n    const content = document.querySelector(\".content\");\n\n    CreateMainStage(content);\n    CreateMainSlogan(content);\n    CreateMainSpecialty(content);\n});\n\nfunction CreateMainStage(parentNode) {\n\n    const mainStageDiv = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(parentNode, [\"main\", \"mainStage\"]);\n    (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendImg)(mainStageDiv, _img_b01_jpg__WEBPACK_IMPORTED_MODULE_1__);\n}\n\nfunction CreateMainSlogan(parentNode) {\n    const mainSloganDiv = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(parentNode, [\"main\", \"slogan\"]);\n        (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.CreateSectionHeader)(mainSloganDiv, 'ブランドスローガン', 'BRAND SLOGAN');\n\n        const mainSloganGrid = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(mainSloganDiv, ['sloganBannerGrid']);\n            // img\n            (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendImg)(mainSloganGrid, _img_bnr_sloganCrop_jpg__WEBPACK_IMPORTED_MODULE_2__);\n            const mainSloganGrid2 = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(mainSloganGrid, ['sloganBannerText']);\n                (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendTag)(mainSloganGrid2, 'span', 'すべての今日を、');\n                (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendTag)(mainSloganGrid2, 'span', '支えていく。');\n\n\n}\n\nfunction CreateMainSpecialty(parentNode) {\n    const specialtyArray = [\n        ['ミラノサンド', 'MILANO SANDWICH', _img_01_jpg__WEBPACK_IMPORTED_MODULE_3__],\n        ['ドリンク', 'DRINK', _img_02_jpg__WEBPACK_IMPORTED_MODULE_4__],\n        ['レモンヨーグルン', 'LEMON YOGHURT', _img_03_jpg__WEBPACK_IMPORTED_MODULE_5__],\n        ['桃のミルクレープ', 'MILK CREPE', _img_04_jpg__WEBPACK_IMPORTED_MODULE_6__],\n    ];\n    \n    const SpecialtyDiv = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(parentNode, [\"main\", \"specialty\"]);\n        (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.CreateSectionHeader)(SpecialtyDiv, \"おすすめ\", \"SPECIALTY\");\n        const mainGrid = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(SpecialtyDiv, [\"mainContentGrid\"]);\n            for (let i = 0; i < specialtyArray.length; i++) {\n                let item = specialtyArray[i];\n                (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.CreateMainGridSquare)(mainGrid, item[0], item[1], item[2]);\n            }\n}\n\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _topNavigationBanner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topNavigationBanner.js */ \"./src/topNavigationBanner.js\");\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n\n//import { greeting } from \"./greeting.js\";\n\n\n\n//console.log(greeting);\n(0,_topNavigationBanner_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_homePage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions.js */ \"./src/helperFunctions.js\");\n/* harmony import */ var _img_menu_m01_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/menu/m01.jpg */ \"./src/img/menu/m01.jpg\");\n/* harmony import */ var _img_menu_m02_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/menu/m02.jpg */ \"./src/img/menu/m02.jpg\");\n/* harmony import */ var _img_menu_m03_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/menu/m03.jpg */ \"./src/img/menu/m03.jpg\");\n/* harmony import */ var _img_menu_m04_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/menu/m04.jpg */ \"./src/img/menu/m04.jpg\");\n/* harmony import */ var _img_menu_m05_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/menu/m05.jpg */ \"./src/img/menu/m05.jpg\");\n/* harmony import */ var _img_menu_m06_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/menu/m06.jpg */ \"./src/img/menu/m06.jpg\");\n/* harmony import */ var _img_menu_m07_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/menu/m07.jpg */ \"./src/img/menu/m07.jpg\");\n/* harmony import */ var _img_menu_m08_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/menu/m08.jpg */ \"./src/img/menu/m08.jpg\");\n/* harmony import */ var _img_menu_m09_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/menu/m09.jpg */ \"./src/img/menu/m09.jpg\");\n/* harmony import */ var _img_menu_m00_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/menu/m00.jpg */ \"./src/img/menu/m00.jpg\");\n/* harmony import */ var _img_menu_m10_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/menu/m10.jpg */ \"./src/img/menu/m10.jpg\");\n/* harmony import */ var _img_menu_m11_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/menu/m11.jpg */ \"./src/img/menu/m11.jpg\");\n/* harmony import */ var _img_menu_m12_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/menu/m12.jpg */ \"./src/img/menu/m12.jpg\");\n/* harmony import */ var _img_menu_m13_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/menu/m13.jpg */ \"./src/img/menu/m13.jpg\");\n/* harmony import */ var _img_menu_m14_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/menu/m14.jpg */ \"./src/img/menu/m14.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n    const content = document.querySelector(\".content\");\n\n    CreateFoodMenu(content);\n    CreateMenuSection(content);\n});\n\nfunction CreateFoodMenu(parentNode) {\n    const foodList = [\n        ['ホットドリンク', 'HOT DRINK', _img_menu_m01_jpg__WEBPACK_IMPORTED_MODULE_1__],\n        ['アイスドリンク', 'ICED DRINK', _img_menu_m02_jpg__WEBPACK_IMPORTED_MODULE_2__],\n        ['ミラノサンド', 'MILANO SANDWICH', _img_menu_m03_jpg__WEBPACK_IMPORTED_MODULE_3__],\n        ['ジャーマンドック', 'HOT DOG', _img_menu_m04_jpg__WEBPACK_IMPORTED_MODULE_4__],\n        ['全粒粉サンド', 'WHOLE GRAIN SANDWICH', _img_menu_m05_jpg__WEBPACK_IMPORTED_MODULE_5__],\n        ['モーニング・セット', 'MORNING SET', _img_menu_m06_jpg__WEBPACK_IMPORTED_MODULE_6__],\n        ['ホットサンド', 'HOT SANDWICH', _img_menu_m07_jpg__WEBPACK_IMPORTED_MODULE_7__],\n        ['トースト', 'TOAST', _img_menu_m08_jpg__WEBPACK_IMPORTED_MODULE_8__],\n        ['デザート', 'DESSERT', _img_menu_m09_jpg__WEBPACK_IMPORTED_MODULE_9__],\n    ];\n    \n    const FoodMenu = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(parentNode, [\"main\", \"menuContent\"]);\n        (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.CreateSectionHeader)(FoodMenu, \"食べ物\", \"FOOD\");\n        const mainGrid = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(FoodMenu, [\"mainContentGrid\"]);\n            for (let i = 0; i < foodList.length; i++) {\n                let item = foodList[i];\n                (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.CreateMainGridSquare)(mainGrid, item[0], item[1], item[2]);\n            }\n}\n\nfunction CreateMenuSection(parentNode) {\n    const menuList = [\n        ['季節のおすすめ', 'SEASONAL MENU', _img_menu_m00_jpg__WEBPACK_IMPORTED_MODULE_10__],\n        ['店舗限定メニュー', 'EXCLUSIVE MENU', _img_menu_m10_jpg__WEBPACK_IMPORTED_MODULE_11__],\n        ['ドトール ドッグ カフェ', 'DOUTOR DOG FRIENDLY CAFE', _img_menu_m11_jpg__WEBPACK_IMPORTED_MODULE_12__],\n        ['ドトール キッチン', 'DOUTOR KITCHEN', _img_menu_m12_jpg__WEBPACK_IMPORTED_MODULE_13__],\n        ['ドトール コーヒースタンド', 'DOUTOR COFFEE STAND', _img_menu_m13_jpg__WEBPACK_IMPORTED_MODULE_14__],\n        ['ドトール パークカフェ', 'DOUTOR PARK CAFE', _img_menu_m14_jpg__WEBPACK_IMPORTED_MODULE_15__],\n    ];\n    \n    const MenuGrid = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(parentNode, [\"main\", \"menuContent\"]);\n        (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.CreateSectionHeader)(MenuGrid, \"メニュー\", \"MENU\");\n        const mainGrid = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(MenuGrid, [\"mainContentGrid\"]);\n            for (let i = 0; i < menuList.length; i++) {\n                let item = menuList[i];\n                (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.CreateMainGridSquare)(mainGrid, item[0], item[1], item[2]);\n            }\n}\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/menuPage.js?");

/***/ }),

/***/ "./src/shopPage.js":
/*!*************************!*\
  !*** ./src/shopPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions.js */ \"./src/helperFunctions.js\");\n/* harmony import */ var _img_shop_s01_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/shop/s01.jpg */ \"./src/img/shop/s01.jpg\");\n/* harmony import */ var _img_shop_s02_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/shop/s02.jpg */ \"./src/img/shop/s02.jpg\");\n/* harmony import */ var _img_shop_s03_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/shop/s03.jpg */ \"./src/img/shop/s03.jpg\");\n/* harmony import */ var _img_shop_s04_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/shop/s04.jpg */ \"./src/img/shop/s04.jpg\");\n/* harmony import */ var _img_shop_s05_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/shop/s05.jpg */ \"./src/img/shop/s05.jpg\");\n/* harmony import */ var _img_shop_s06_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/shop/s06.jpg */ \"./src/img/shop/s06.jpg\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n    const content = document.querySelector(\".content\");\n\n    CreateShopMenu(content);\n});\n\nfunction CreateShopMenu(parentNode) {\n    const shopList = [\n        ['コーヒー豆', 'COFFEE BEANS', _img_shop_s01_jpg__WEBPACK_IMPORTED_MODULE_1__],\n        ['ドリップカフェ', 'DRIP CAFÉ', _img_shop_s02_jpg__WEBPACK_IMPORTED_MODULE_2__],\n        ['リキッド', 'LIQUID', _img_shop_s03_jpg__WEBPACK_IMPORTED_MODULE_3__],\n        ['インスタント スティック', 'INSTANT COFFEE', _img_shop_s04_jpg__WEBPACK_IMPORTED_MODULE_4__],\n        ['インスタントコーヒー', 'GROUND COFFEE', _img_shop_s05_jpg__WEBPACK_IMPORTED_MODULE_5__],\n        ['ギフト', 'GIFT', _img_shop_s06_jpg__WEBPACK_IMPORTED_MODULE_6__],\n    ];\n    \n    const FoodMenu = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(parentNode, [\"main\", \"menuContent\"]);\n        (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.CreateSectionHeader)(FoodMenu, \"コーヒー豆・ギフト\", \"COFFEE BEANS & GIFTS\");\n        const mainGrid = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.AppendDivWithClasses)(FoodMenu, [\"mainContentGrid\"]);\n            for (let i = 0; i < shopList.length; i++) {\n                let item = shopList[i];\n                (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.CreateMainGridSquare)(mainGrid, item[0], item[1], item[2]);\n            }\n}\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/shopPage.js?");

/***/ }),

/***/ "./src/topNavigationBanner.js":
/*!************************************!*\
  !*** ./src/topNavigationBanner.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _shopPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopPage.js */ \"./src/shopPage.js\");\n/* harmony import */ var _brandPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brandPage.js */ \"./src/brandPage.js\");\n/* harmony import */ var _img_headerLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/headerLogo.png */ \"./src/img/headerLogo.png\");\n\n\n\n\n\nconst bannerRecipe = [\n    ['ホーム', 'HOME', ],\n    ['メニュー', 'MENU',],\n    ['サービス', 'SHOP', ],\n    ['こだわり', 'ABOUT', ],\n];\n\nlet index = 0; //used to track current page\nlet navigationLock = false; \n\n\n   \n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n    \n    const content = document.querySelector(\".topBanner\");\n    \n    CreateLogoButton(content);\n\n    for (let i = 0; i < bannerRecipe.length; i++) {\n        let button = CreateOneButton(content, bannerRecipe[i][0], bannerRecipe[i][1]);\n        \n    }\n});\n\nfunction CreateLogoButton(parentNode) {\n    console.log(\"createlogobutton\");\n    \n    const a = document.createElement('a');\n    parentNode.appendChild(a);\n    \n    const button = document.createElement('button');\n    button.classList.add(\"topLogo\");\n    a.appendChild(button);\n\n    const img = document.createElement('img');\n    button.appendChild(img);\n    img.src = _img_headerLogo_png__WEBPACK_IMPORTED_MODULE_4__;\n}\n\nfunction CreateOneButton(parentNode, textJapanese, textEnglish) {\n    const a = document.createElement('a');\n\n    const button = document.createElement('button');\n    a.appendChild(button);\n\n    const span1 = document.createElement('span');\n    span1.textContent = textJapanese;\n    button.appendChild(span1);\n\n    const br = document.createElement('br');\n    button.appendChild(br);\n\n    const span2 = document.createElement('span');\n    span2.textContent = textEnglish;\n    span2.classList.add('subMenu');\n    button.appendChild(span2);\n\n    // ADD EVENT LISTENER\n    button.addEventListener(\"click\", () => {\n        // check to see if we're already on this page, in which case, do nothing\n        if (textEnglish == bannerRecipe[index][1] || navigationLock) {\n            return;\n        }\n\n        PerformButton(textEnglish);\n    });\n\n\n    parentNode.appendChild(a);\n    return button;\n}\n\nasync function PerformButton(textEnglish) {\n    SetNavigationLock();\n    await FadeToWhite();\n    DestroyInnerContent();\n\n    switch(textEnglish) {\n        case \"HOME\":\n            (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            index = 0;\n            break;\n        case \"MENU\":\n            (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            index = 1;\n            break;\n        case \"SHOP\":\n            (0,_shopPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            index = 2;\n            break;\n        case \"ABOUT\":\n            (0,_brandPage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            index = 3;\n            break;\n    }\n\n    await FadeToWhite(true);\n    SetNavigationLock(false);\n}\n\nfunction SetNavigationLock(b = true) {\n    navigationLock = b;\n}\n\nasync function FadeToWhite(reversed = false) {\n    console.log(\"hello\");\n    const faderNode = document.querySelector(\".whiteFader\");\n    \n    (!reversed) ? faderNode.classList.add(\"whiteFaderActive\") : faderNode.classList.remove(\"whiteFaderActive\");\n\n    await Sleep(250);\n    console.log(\"hello2\");\n\n}\n\nfunction DestroyInnerContent() {\n    // reset scrolling\n    const content = document.querySelector(\".contentContainer\");\n    content.scrollTop = 0;\n    \n    const myNode = document.querySelector(\".content\");\n    while (myNode.firstChild) {\n        myNode.removeChild(myNode.lastChild);\n    }\n}\n\n// https://www.sitepoint.com/delay-sleep-pause-wait/\nfunction Sleep(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/topNavigationBanner.js?");

/***/ }),

/***/ "./src/font/Zen_Maru_Gothic/ZenMaruGothic-Regular.ttf":
/*!************************************************************!*\
  !*** ./src/font/Zen_Maru_Gothic/ZenMaruGothic-Regular.ttf ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"95acde3e43471e30380d.ttf\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/font/Zen_Maru_Gothic/ZenMaruGothic-Regular.ttf?");

/***/ }),

/***/ "./src/img/01.jpg":
/*!************************!*\
  !*** ./src/img/01.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"41a885f3ba5b81189295.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/01.jpg?");

/***/ }),

/***/ "./src/img/02.jpg":
/*!************************!*\
  !*** ./src/img/02.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b5685310b8ae4406941a.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/02.jpg?");

/***/ }),

/***/ "./src/img/03.jpg":
/*!************************!*\
  !*** ./src/img/03.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd9c5fbc14272f0f64bc.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/03.jpg?");

/***/ }),

/***/ "./src/img/04.jpg":
/*!************************!*\
  !*** ./src/img/04.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"858e760302bff58e833a.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/04.jpg?");

/***/ }),

/***/ "./src/img/b01.jpg":
/*!*************************!*\
  !*** ./src/img/b01.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3034a77015a101f393f.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/b01.jpg?");

/***/ }),

/***/ "./src/img/bnr_sloganCrop.jpg":
/*!************************************!*\
  !*** ./src/img/bnr_sloganCrop.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"96bef0cfef98ad4c3261.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/bnr_sloganCrop.jpg?");

/***/ }),

/***/ "./src/img/headerLogo.png":
/*!********************************!*\
  !*** ./src/img/headerLogo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57b072f3d746d5280cfb.png\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/headerLogo.png?");

/***/ }),

/***/ "./src/img/menu/m00.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m00.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"340ad255cb8d02c9e043.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m00.jpg?");

/***/ }),

/***/ "./src/img/menu/m01.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m01.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"53c9e2796b52dfa5ba51.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m01.jpg?");

/***/ }),

/***/ "./src/img/menu/m02.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m02.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"23a1066fca9f0a3c6e5b.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m02.jpg?");

/***/ }),

/***/ "./src/img/menu/m03.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m03.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"72ad6925756b32ba1ac9.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m03.jpg?");

/***/ }),

/***/ "./src/img/menu/m04.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m04.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"01016586692611fc52e7.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m04.jpg?");

/***/ }),

/***/ "./src/img/menu/m05.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m05.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c03885c3f42224dbdc3c.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m05.jpg?");

/***/ }),

/***/ "./src/img/menu/m06.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m06.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"405af74e27501cbe1049.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m06.jpg?");

/***/ }),

/***/ "./src/img/menu/m07.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m07.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5968a29c32c19ccf5a07.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m07.jpg?");

/***/ }),

/***/ "./src/img/menu/m08.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m08.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"991e3a38a17a97e45a89.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m08.jpg?");

/***/ }),

/***/ "./src/img/menu/m09.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m09.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4eb221a12d5db778134a.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m09.jpg?");

/***/ }),

/***/ "./src/img/menu/m10.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m10.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3e9d446aa9ac5aa0ef8e.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m10.jpg?");

/***/ }),

/***/ "./src/img/menu/m11.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m11.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f82e7307646dd595af21.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m11.jpg?");

/***/ }),

/***/ "./src/img/menu/m12.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m12.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c13fc98abd02a76997b.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m12.jpg?");

/***/ }),

/***/ "./src/img/menu/m13.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m13.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d53c4875b3db2eb0233.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m13.jpg?");

/***/ }),

/***/ "./src/img/menu/m14.jpg":
/*!******************************!*\
  !*** ./src/img/menu/m14.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"324bff66c7b38f74b033.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/menu/m14.jpg?");

/***/ }),

/***/ "./src/img/shop/s01.jpg":
/*!******************************!*\
  !*** ./src/img/shop/s01.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea8d7561a368aa987ca8.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/shop/s01.jpg?");

/***/ }),

/***/ "./src/img/shop/s02.jpg":
/*!******************************!*\
  !*** ./src/img/shop/s02.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4fe4676db4ed250ede1f.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/shop/s02.jpg?");

/***/ }),

/***/ "./src/img/shop/s03.jpg":
/*!******************************!*\
  !*** ./src/img/shop/s03.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e89b271b10ff62c596aa.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/shop/s03.jpg?");

/***/ }),

/***/ "./src/img/shop/s04.jpg":
/*!******************************!*\
  !*** ./src/img/shop/s04.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aaf2bc2387844c4ab58b.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/shop/s04.jpg?");

/***/ }),

/***/ "./src/img/shop/s05.jpg":
/*!******************************!*\
  !*** ./src/img/shop/s05.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1eb9152ba85ff04c512e.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/shop/s05.jpg?");

/***/ }),

/***/ "./src/img/shop/s06.jpg":
/*!******************************!*\
  !*** ./src/img/shop/s06.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1d7ef0b17a9d1d387d6f.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-webpack/./src/img/shop/s06.jpg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;