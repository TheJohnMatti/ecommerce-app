"use strict";
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
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initMongoose\": () => (/* binding */ initMongoose)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function initMongoose() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    }\n    return await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLGVBQWVDLFlBQVksR0FBRztJQUNuQyxJQUFJRCx1RUFBOEIsS0FBSyxDQUFDLEVBQUU7UUFDeEMsT0FBT0Esb0VBQTZCLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsT0FBTyxNQUFNQSx1REFBZ0IsQ0FBQ00sT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9saWIvbW9uZ29vc2UuanM/MTYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdE1vbmdvb3NlKCkge1xyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDEpIHtcclxuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0aW9uLmFzUHJvbWlzZSgpO1xyXG4gIH1cclxuICByZXR1cm4gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCk7XHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJpbml0TW9uZ29vc2UiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: String,\n    description: String,\n    price: Number,\n    category: String,\n    picture: String\n});\nconst Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Product\", ProductSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFFL0MsTUFBTUcsYUFBYSxHQUFHLElBQUlELDRDQUFNLENBQUM7SUFDL0JFLElBQUksRUFBRUMsTUFBTTtJQUNaQyxXQUFXLEVBQUVELE1BQU07SUFDbkJFLEtBQUssRUFBRUMsTUFBTTtJQUNiQyxRQUFRLEVBQUVKLE1BQU07SUFDaEJLLE9BQU8sRUFBRUwsTUFBTTtDQUNoQixDQUFDO0FBRUYsTUFBTU0sT0FBTyxHQUFHViw0Q0FBTSxFQUFFVSxPQUFPLElBQUlYLCtDQUFLLENBQUMsU0FBUyxFQUFFRyxhQUFhLENBQUM7QUFFbEUsaUVBQWVRLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS8uL21vZGVscy9Qcm9kdWN0LmpzPzA5YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb2RlbCwgbW9kZWxzLCBTY2hlbWF9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIG5hbWU6IFN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogU3RyaW5nLFxyXG4gIHByaWNlOiBOdW1iZXIsXHJcbiAgY2F0ZWdvcnk6IFN0cmluZyxcclxuICBwaWN0dXJlOiBTdHJpbmcsXHJcbn0pO1xyXG5cclxuY29uc3QgUHJvZHVjdCA9IG1vZGVscz8uUHJvZHVjdCB8fCBtb2RlbCgnUHJvZHVjdCcsIFByb2R1Y3RTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDsiXSwibmFtZXMiOlsibW9kZWwiLCJtb2RlbHMiLCJTY2hlbWEiLCJQcm9kdWN0U2NoZW1hIiwibmFtZSIsIlN0cmluZyIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJOdW1iZXIiLCJjYXRlZ29yeSIsInBpY3R1cmUiLCJQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle),\n/* harmony export */   \"findAllProducts\": () => (/* binding */ findAllProducts)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Product */ \"(api)/./models/Product.js\");\n\n\nasync function findAllProducts() {\n    return _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find().exec();\n}\nasync function handle(req, res) {\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.initMongoose)();\n    const { ids  } = req.query;\n    if (ids) {\n        const idsArray = ids.split(\",\");\n        res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n            \"_id\": {\n                $in: idsArray\n            }\n        }).exec());\n    } else {\n        res.json(await findAllProducts());\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnRDtBQUNMO0FBRXBDLGVBQWVFLGVBQWUsR0FBRztJQUN0QyxPQUFPRCw0REFBWSxFQUFFLENBQUNHLElBQUksRUFBRSxDQUFDO0FBQy9CLENBQUM7QUFFYyxlQUFlQyxNQUFNLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdDLE1BQU1QLDJEQUFZLEVBQUUsQ0FBQztJQUNyQixNQUFNLEVBQUNRLEdBQUcsR0FBQyxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFDdkIsSUFBSUQsR0FBRyxFQUFFO1FBQ1AsTUFBTUUsUUFBUSxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDL0JKLEdBQUcsQ0FBQ0ssSUFBSSxDQUNOLE1BQU1YLDREQUFZLENBQUM7WUFDakIsS0FBSyxFQUFDO2dCQUFDWSxHQUFHLEVBQUNILFFBQVE7YUFBQztTQUNyQixDQUFDLENBQUNOLElBQUksRUFBRSxDQUNWLENBQUM7SUFDSixPQUFPO1FBQ0xHLEdBQUcsQ0FBQ0ssSUFBSSxDQUFFLE1BQU1WLGVBQWUsRUFBRSxDQUFFLENBQUM7SUFDdEMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanM/NDljYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luaXRNb25nb29zZX0gZnJvbSBcIi4uLy4uL2xpYi9tb25nb29zZVwiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vLi4vbW9kZWxzL1Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kQWxsUHJvZHVjdHMoKSB7XHJcbiAgcmV0dXJuIFByb2R1Y3QuZmluZCgpLmV4ZWMoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XHJcbiAgYXdhaXQgaW5pdE1vbmdvb3NlKCk7XHJcbiAgY29uc3Qge2lkc30gPSByZXEucXVlcnk7XHJcbiAgaWYgKGlkcykge1xyXG4gICAgY29uc3QgaWRzQXJyYXkgPSBpZHMuc3BsaXQoJywnKTtcclxuICAgIHJlcy5qc29uKFxyXG4gICAgICBhd2FpdCBQcm9kdWN0LmZpbmQoe1xyXG4gICAgICAgICdfaWQnOnskaW46aWRzQXJyYXl9XHJcbiAgICAgIH0pLmV4ZWMoKVxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLmpzb24oIGF3YWl0IGZpbmRBbGxQcm9kdWN0cygpICk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImluaXRNb25nb29zZSIsIlByb2R1Y3QiLCJmaW5kQWxsUHJvZHVjdHMiLCJmaW5kIiwiZXhlYyIsImhhbmRsZSIsInJlcSIsInJlcyIsImlkcyIsInF1ZXJ5IiwiaWRzQXJyYXkiLCJzcGxpdCIsImpzb24iLCIkaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products.js"));
module.exports = __webpack_exports__;

})();