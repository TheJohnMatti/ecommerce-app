/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ProductsContext.js":
/*!***************************************!*\
  !*** ./components/ProductsContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductsContext\": () => (/* binding */ ProductsContext),\n/* harmony export */   \"ProductsContextProvider\": () => (/* binding */ ProductsContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-local-storage-state */ \"use-local-storage-state\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ProductsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ProductsContextProvider({ children  }) {\n    const [selectedProducts, setSelectedProducts] = use_local_storage_state__WEBPACK_IMPORTED_MODULE_2___default()(\"cart\", {\n        defaultValue: []\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsContext.Provider, {\n        value: {\n            selectedProducts,\n            setSelectedProducts\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Haram\\\\Downloads\\\\ecommerce-app\\\\components\\\\ProductsContext.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQW9DO0FBQ3VCO0FBRXBELE1BQU1FLGVBQWUsaUJBQUdGLG9EQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFMUMsU0FBU0csdUJBQXVCLENBQUMsRUFBQ0MsUUFBUSxHQUFDLEVBQUU7SUFDbEQsTUFBTSxDQUFDQyxnQkFBZ0IsRUFBQ0MsbUJBQW1CLENBQUMsR0FBR0wsOERBQW9CLENBQUMsTUFBTSxFQUFFO1FBQUNNLFlBQVksRUFBQyxFQUFFO0tBQUMsQ0FBQztJQUM5RixxQkFDRSw4REFBQ0wsZUFBZSxDQUFDTSxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFDSixnQkFBZ0I7WUFBQ0MsbUJBQW1CO1NBQUM7a0JBQUdGLFFBQVE7Ozs7O1lBQTRCLENBQzlHO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS8uL2NvbXBvbmVudHMvUHJvZHVjdHNDb250ZXh0LmpzPzI0ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUxvY2FsU3RvcmFnZVN0YXRlIGZyb20gJ3VzZS1sb2NhbC1zdG9yYWdlLXN0YXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0c0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9kdWN0c0NvbnRleHRQcm92aWRlcih7Y2hpbGRyZW59KSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkUHJvZHVjdHMsc2V0U2VsZWN0ZWRQcm9kdWN0c10gPSB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSgnY2FydCcsIHtkZWZhdWx0VmFsdWU6W119KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb2R1Y3RzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3NlbGVjdGVkUHJvZHVjdHMsc2V0U2VsZWN0ZWRQcm9kdWN0c319PntjaGlsZHJlbn08L1Byb2R1Y3RzQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VMb2NhbFN0b3JhZ2VTdGF0ZSIsIlByb2R1Y3RzQ29udGV4dCIsIlByb2R1Y3RzQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZWxlY3RlZFByb2R1Y3RzIiwic2V0U2VsZWN0ZWRQcm9kdWN0cyIsImRlZmF1bHRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductsContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductsContext */ \"./components/ProductsContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductsContext__WEBPACK_IMPORTED_MODULE_2__.ProductsContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Haram\\\\Downloads\\\\ecommerce-app\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Haram\\\\Downloads\\\\ecommerce-app\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQ3dDO0FBRXRFLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSCxnRkFBdUI7a0JBQ3RCLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ0osQ0FDMUI7QUFDSixDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCB7UHJvZHVjdHNDb250ZXh0UHJvdmlkZXJ9IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm9kdWN0c0NvbnRleHRQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Qcm9kdWN0c0NvbnRleHRQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiUHJvZHVjdHNDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "use-local-storage-state":
/*!******************************************!*\
  !*** external "use-local-storage-state" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("use-local-storage-state");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();