"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/features/functions/weekInit.ts":
/*!********************************************!*\
  !*** ./src/features/functions/weekInit.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ \"(app-pages-browser)/./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment_locale_ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/locale/ru */ \"(app-pages-browser)/./node_modules/moment/locale/ru.js\");\n/* harmony import */ var moment_locale_ru__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_locale_ru__WEBPACK_IMPORTED_MODULE_1__);\n\n\nmoment__WEBPACK_IMPORTED_MODULE_0___default()().locale(\"ru\");\nconst weekNum = Number(moment__WEBPACK_IMPORTED_MODULE_0___default()().format(\"w\"));\nlet parityRu = weekNum % 2 !== 0 ? \"Числитель\" : \"Знаменатель\";\nlet parityEng = weekNum % 2 !== 0 ? \"numerator\" : \"denominator\";\nlet dayOfWeek;\nconst dayNum = moment__WEBPACK_IMPORTED_MODULE_0___default()().day();\nconsole.log(dayNum);\nif (dayNum == 0) {\n    dayOfWeek = \"понедельник\";\n    if (parityEng == \"denominator\") {\n        parityEng = \"numerator\";\n        parityRu = \"Числитель\";\n    } else {\n        parityEng = \"denominator\";\n        parityRu = \"Знаменатель\";\n    }\n} else {\n    dayOfWeek = moment__WEBPACK_IMPORTED_MODULE_0___default()().locale(\"ru\").format(\"dddd\");\n}\nconst day = moment__WEBPACK_IMPORTED_MODULE_0___default()().format(\"LL\");\nconst weekData = {\n    parityEng,\n    parityRu,\n    dayOfWeek,\n    day\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (weekData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9mZWF0dXJlcy9mdW5jdGlvbnMvd2Vla0luaXQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkI7QUFDRjtBQUN6QkEsNkNBQU1BLEdBQUdDLE1BQU0sQ0FBQztBQUVoQixNQUFNQyxVQUFVQyxPQUFPSCw2Q0FBTUEsR0FBR0ksTUFBTSxDQUFDO0FBQ3ZDLElBQUlDLFdBQVdILFVBQVUsTUFBTSxJQUFJLGNBQWM7QUFDakQsSUFBSUksWUFBWUosVUFBVSxNQUFNLElBQUksY0FBYztBQUVsRCxJQUFJSztBQUVKLE1BQU1DLFNBQVNSLDZDQUFNQSxHQUFHUyxHQUFHO0FBQzNCQyxRQUFRQyxHQUFHLENBQUNIO0FBQ1osSUFBSUEsVUFBVSxHQUFHO0lBQ2hCRCxZQUFZO0lBQ1osSUFBSUQsYUFBYSxlQUFlO1FBQy9CQSxZQUFZO1FBQ1pELFdBQVc7SUFDWixPQUFPO1FBQ05DLFlBQVk7UUFDWkQsV0FBVztJQUNaO0FBQ0QsT0FBTztJQUNORSxZQUFZUCw2Q0FBTUEsR0FBR0MsTUFBTSxDQUFDLE1BQU1HLE1BQU0sQ0FBQztBQUMxQztBQUVBLE1BQU1LLE1BQU1ULDZDQUFNQSxHQUFHSSxNQUFNLENBQUM7QUFFNUIsTUFBTVEsV0FBVztJQUNoQk47SUFDQUQ7SUFDQUU7SUFDQUU7QUFDRDtBQUVBLCtEQUFlRyxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9mdW5jdGlvbnMvd2Vla0luaXQudHM/OTc4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9ydSdcbm1vbWVudCgpLmxvY2FsZSgncnUnKVxuXG5jb25zdCB3ZWVrTnVtID0gTnVtYmVyKG1vbWVudCgpLmZvcm1hdCgndycpKVxubGV0IHBhcml0eVJ1ID0gd2Vla051bSAlIDIgIT09IDAgPyAn0KfQuNGB0LvQuNGC0LXQu9GMJyA6ICfQl9C90LDQvNC10L3QsNGC0LXQu9GMJ1xubGV0IHBhcml0eUVuZyA9IHdlZWtOdW0gJSAyICE9PSAwID8gJ251bWVyYXRvcicgOiAnZGVub21pbmF0b3InXG5cbmxldCBkYXlPZldlZWs6IHN0cmluZ1xuXG5jb25zdCBkYXlOdW0gPSBtb21lbnQoKS5kYXkoKVxuY29uc29sZS5sb2coZGF5TnVtKVxuaWYgKGRheU51bSA9PSAwKSB7XG5cdGRheU9mV2VlayA9ICfQv9C+0L3QtdC00LXQu9GM0L3QuNC6J1xuXHRpZiAocGFyaXR5RW5nID09ICdkZW5vbWluYXRvcicpIHtcblx0XHRwYXJpdHlFbmcgPSAnbnVtZXJhdG9yJ1xuXHRcdHBhcml0eVJ1ID0gJ9Cn0LjRgdC70LjRgtC10LvRjCdcblx0fSBlbHNlIHtcblx0XHRwYXJpdHlFbmcgPSAnZGVub21pbmF0b3InXG5cdFx0cGFyaXR5UnUgPSAn0JfQvdCw0LzQtdC90LDRgtC10LvRjCdcblx0fVxufSBlbHNlIHtcblx0ZGF5T2ZXZWVrID0gbW9tZW50KCkubG9jYWxlKCdydScpLmZvcm1hdCgnZGRkZCcpXG59XG5cbmNvbnN0IGRheSA9IG1vbWVudCgpLmZvcm1hdCgnTEwnKVxuXG5jb25zdCB3ZWVrRGF0YSA9IHtcblx0cGFyaXR5RW5nLFxuXHRwYXJpdHlSdSxcblx0ZGF5T2ZXZWVrLFxuXHRkYXksXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlZWtEYXRhXG4iXSwibmFtZXMiOlsibW9tZW50IiwibG9jYWxlIiwid2Vla051bSIsIk51bWJlciIsImZvcm1hdCIsInBhcml0eVJ1IiwicGFyaXR5RW5nIiwiZGF5T2ZXZWVrIiwiZGF5TnVtIiwiZGF5IiwiY29uc29sZSIsImxvZyIsIndlZWtEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/features/functions/weekInit.ts\n"));

/***/ })

});