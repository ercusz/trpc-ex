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
exports.id = "pages/api/trpc/[trpc]";
exports.ids = ["pages/api/trpc/[trpc]"];
exports.modules = {

/***/ "@trpc/server":
/*!*******************************!*\
  !*** external "@trpc/server" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("@trpc/server");;

/***/ }),

/***/ "@trpc/server/adapters/next":
/*!*********************************************!*\
  !*** external "@trpc/server/adapters/next" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@trpc/server/adapters/next");;

/***/ }),

/***/ "(api)/./src/pages/api/trpc/[trpc].ts":
/*!**************************************!*\
  !*** ./src/pages/api/trpc/[trpc].ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server/adapters/next */ \"@trpc/server/adapters/next\");\n/* harmony import */ var _server_trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/server/trpc */ \"(api)/./src/server/trpc.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _server_trpc__WEBPACK_IMPORTED_MODULE_1__]);\n([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _server_trpc__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/**\n * This is the API-handler of your app that contains all your API routes.\n * On a bigger app, you will probably want to split this file up into multiple files.\n */ \n\nconst appRouter = (0,_server_trpc__WEBPACK_IMPORTED_MODULE_1__.router)({\n    user: _server_trpc__WEBPACK_IMPORTED_MODULE_1__.publicProcedure.query(()=>{\n        return {\n            id: 1,\n            firstName: \"John\",\n            lastName: \"Doe\"\n        };\n    })\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__.createNextApiHandler({\n    router: appRouter,\n    createContext: ()=>({})\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RycGMvW3RycGNdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Q0FHQyxHQUNzRDtBQUNDO0FBRXhELE1BQU1HLFlBQVlELG9EQUFNQSxDQUFDO0lBQ3ZCRSxNQUFNSCwrREFBcUIsQ0FBQyxJQUFNO1FBQ2hDLE9BQU87WUFDTEssSUFBSTtZQUNKQyxXQUFXO1lBQ1hDLFVBQVU7UUFDWjtJQUNGO0FBQ0Y7QUFJQSxpRUFBZVIsNEVBQTZCLENBQUM7SUFDM0NFLFFBQVFDO0lBQ1JPLGVBQWUsSUFBTyxFQUFDO0FBQ3pCLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlcy9uZXh0LW1pbmltYWwvLi9zcmMvcGFnZXMvYXBpL3RycGMvW3RycGNdLnRzP2NlNTAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIHRoZSBBUEktaGFuZGxlciBvZiB5b3VyIGFwcCB0aGF0IGNvbnRhaW5zIGFsbCB5b3VyIEFQSSByb3V0ZXMuXG4gKiBPbiBhIGJpZ2dlciBhcHAsIHlvdSB3aWxsIHByb2JhYmx5IHdhbnQgdG8gc3BsaXQgdGhpcyBmaWxlIHVwIGludG8gbXVsdGlwbGUgZmlsZXMuXG4gKi9cbmltcG9ydCAqIGFzIHRycGNOZXh0IGZyb20gXCJAdHJwYy9zZXJ2ZXIvYWRhcHRlcnMvbmV4dFwiO1xuaW1wb3J0IHsgcHVibGljUHJvY2VkdXJlLCByb3V0ZXIgfSBmcm9tIFwifi9zZXJ2ZXIvdHJwY1wiO1xuXG5jb25zdCBhcHBSb3V0ZXIgPSByb3V0ZXIoe1xuICB1c2VyOiBwdWJsaWNQcm9jZWR1cmUucXVlcnkoKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogMSxcbiAgICAgIGZpcnN0TmFtZTogXCJKb2huXCIsXG4gICAgICBsYXN0TmFtZTogXCJEb2VcIixcbiAgICB9O1xuICB9KSxcbn0pO1xuXG5leHBvcnQgdHlwZSBBcHBSb3V0ZXIgPSB0eXBlb2YgYXBwUm91dGVyO1xuXG5leHBvcnQgZGVmYXVsdCB0cnBjTmV4dC5jcmVhdGVOZXh0QXBpSGFuZGxlcih7XG4gIHJvdXRlcjogYXBwUm91dGVyLFxuICBjcmVhdGVDb250ZXh0OiAoKSA9PiAoe30pLFxufSk7XG4iXSwibmFtZXMiOlsidHJwY05leHQiLCJwdWJsaWNQcm9jZWR1cmUiLCJyb3V0ZXIiLCJhcHBSb3V0ZXIiLCJ1c2VyIiwicXVlcnkiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiY3JlYXRlTmV4dEFwaUhhbmRsZXIiLCJjcmVhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/trpc/[trpc].ts\n");

/***/ }),

/***/ "(api)/./src/server/trpc.ts":
/*!****************************!*\
  !*** ./src/server/trpc.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware),\n/* harmony export */   \"publicProcedure\": () => (/* binding */ publicProcedure),\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server */ \"@trpc/server\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server__WEBPACK_IMPORTED_MODULE_0__]);\n_trpc_server__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/**\n * This is your entry point to setup the root configuration for tRPC on the server.\n * - `initTRPC` should only be used once per app.\n * - We export only the functionality that we use so we can enforce which base procedures should be used\n *\n * Learn how to create protected base procedures and other things below:\n * @see https://trpc.io/docs/v10/router\n * @see https://trpc.io/docs/v10/procedures\n */ \nconst t = _trpc_server__WEBPACK_IMPORTED_MODULE_0__.initTRPC.create();\n/**\n * Unprotected procedure\n **/ const publicProcedure = t.procedure;\nconst router = t.router;\nconst middleware = t.middleware;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL3RycGMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztDQVFDLEdBQ3VDO0FBRXhDLE1BQU1DLElBQUlELHlEQUFlO0FBRXpCOztFQUVFLEdBQ0ssTUFBTUcsa0JBQWtCRixFQUFFRyxTQUFTLENBQUM7QUFFcEMsTUFBTUMsU0FBU0osRUFBRUksTUFBTSxDQUFDO0FBQ3hCLE1BQU1DLGFBQWFMLEVBQUVLLFVBQVUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlcy9uZXh0LW1pbmltYWwvLi9zcmMvc2VydmVyL3RycGMudHM/NDU3YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgeW91ciBlbnRyeSBwb2ludCB0byBzZXR1cCB0aGUgcm9vdCBjb25maWd1cmF0aW9uIGZvciB0UlBDIG9uIHRoZSBzZXJ2ZXIuXG4gKiAtIGBpbml0VFJQQ2Agc2hvdWxkIG9ubHkgYmUgdXNlZCBvbmNlIHBlciBhcHAuXG4gKiAtIFdlIGV4cG9ydCBvbmx5IHRoZSBmdW5jdGlvbmFsaXR5IHRoYXQgd2UgdXNlIHNvIHdlIGNhbiBlbmZvcmNlIHdoaWNoIGJhc2UgcHJvY2VkdXJlcyBzaG91bGQgYmUgdXNlZFxuICpcbiAqIExlYXJuIGhvdyB0byBjcmVhdGUgcHJvdGVjdGVkIGJhc2UgcHJvY2VkdXJlcyBhbmQgb3RoZXIgdGhpbmdzIGJlbG93OlxuICogQHNlZSBodHRwczovL3RycGMuaW8vZG9jcy92MTAvcm91dGVyXG4gKiBAc2VlIGh0dHBzOi8vdHJwYy5pby9kb2NzL3YxMC9wcm9jZWR1cmVzXG4gKi9cbmltcG9ydCB7IGluaXRUUlBDIH0gZnJvbSAnQHRycGMvc2VydmVyJztcblxuY29uc3QgdCA9IGluaXRUUlBDLmNyZWF0ZSgpO1xuXG4vKipcbiAqIFVucHJvdGVjdGVkIHByb2NlZHVyZVxuICoqL1xuZXhwb3J0IGNvbnN0IHB1YmxpY1Byb2NlZHVyZSA9IHQucHJvY2VkdXJlO1xuXG5leHBvcnQgY29uc3Qgcm91dGVyID0gdC5yb3V0ZXI7XG5leHBvcnQgY29uc3QgbWlkZGxld2FyZSA9IHQubWlkZGxld2FyZTtcbiJdLCJuYW1lcyI6WyJpbml0VFJQQyIsInQiLCJjcmVhdGUiLCJwdWJsaWNQcm9jZWR1cmUiLCJwcm9jZWR1cmUiLCJyb3V0ZXIiLCJtaWRkbGV3YXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/server/trpc.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/trpc/[trpc].ts"));
module.exports = __webpack_exports__;

})();