webpackHotUpdate_N_E("pages/catalog/[id]",{

/***/ "./components/CatalogItemInfo/InfoType/Material.tsx":
/*!**********************************************************!*\
  !*** ./components/CatalogItemInfo/InfoType/Material.tsx ***!
  \**********************************************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module.scss */ "./components/CatalogItemInfo/InfoType/material.module.scss");
/* harmony import */ var _material_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_module_scss__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\User\\Documents\\job\\lilac\\components\\CatalogItemInfo\\InfoType\\Material.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var materials = ['Гранит', 'Мрамор', 'Винга', 'Дымовский', 'Кашмир'];
var Material = function Material() {
  _s();

  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useField"])('material'),
      _useField2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useField, 3),
      field = _useField2[0],
      meta = _useField2[1],
      helper = _useField2[2];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(field.value),
      value = _useState[0],
      setValue = _useState[1];

  var setMaterial = function setMaterial(material) {
    helper.setValue(material);
    setValue(material);
  };

  var isActive = function isActive(v) {
    return v === value;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      className: _material_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.h4,
      children: "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _material_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.items,
      children: materials.map(function (material, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: _material_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.itemname,
          onClick: function onClick() {
            return setMaterial(material);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/assets/image/catalog/granit.jpg",
            className: "".concat(_material_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.inputimg, " ").concat(isActive(material) ? _material_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.isactive : '')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: material
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Material, "CIgiEcqNVUz34SUQXxx5oyyJMuw=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_3__["useField"]];
});

_c = Material;

var _c;

$RefreshReg$(_c, "Material");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRhbG9nSXRlbUluZm8vSW5mb1R5cGUvTWF0ZXJpYWwudHN4Il0sIm5hbWVzIjpbIm1hdGVyaWFscyIsIk1hdGVyaWFsIiwidXNlRmllbGQiLCJmaWVsZCIsIm1ldGEiLCJoZWxwZXIiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJzZXRNYXRlcmlhbCIsIm1hdGVyaWFsIiwiaXNBY3RpdmUiLCJ2Iiwic3R5bGVzIiwiaDQiLCJpdGVtcyIsIm1hcCIsImkiLCJpdGVtbmFtZSIsImlucHV0aW1nIiwiaXNhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixPQUFyQixFQUE4QixXQUE5QixFQUEyQyxRQUEzQyxDQUFsQjtBQUVPLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsdURBQVEsQ0FBQyxVQUFELENBRFY7QUFBQTtBQUFBLE1BQ3JCQyxLQURxQjtBQUFBLE1BQ2RDLElBRGM7QUFBQSxNQUNSQyxNQURROztBQUFBLGtCQUVGQyxzREFBUSxDQUFTSCxLQUFLLENBQUNJLEtBQWYsQ0FGTjtBQUFBLE1BRXJCQSxLQUZxQjtBQUFBLE1BRWRDLFFBRmM7O0FBRzVCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBc0I7QUFDeENMLFVBQU0sQ0FBQ0csUUFBUCxDQUFnQkUsUUFBaEI7QUFDQUYsWUFBUSxDQUFDRSxRQUFELENBQVI7QUFDRCxHQUhEOztBQUlBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQ7QUFBQSxXQUFlQSxDQUFDLEtBQUtMLEtBQXJCO0FBQUEsR0FBakI7O0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBRU0sNERBQU0sQ0FBQ0MsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFFRCw0REFBTSxDQUFDRSxLQUF2QjtBQUFBLGdCQUNHZixTQUFTLENBQUNnQixHQUFWLENBQWMsVUFBQ04sUUFBRCxFQUFXTyxDQUFYO0FBQUEsNEJBQ2I7QUFDRSxtQkFBUyxFQUFFSiw0REFBTSxDQUFDSyxRQURwQjtBQUVFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVQsV0FBVyxDQUFDQyxRQUFELENBQWpCO0FBQUEsV0FGWDtBQUFBLGtDQUtFO0FBQ0UsZUFBRyxFQUFDLGtDQUROO0FBRUUscUJBQVMsWUFBS0csNERBQU0sQ0FBQ00sUUFBWixjQUNQUixRQUFRLENBQUNELFFBQUQsQ0FBUixHQUFxQkcsNERBQU0sQ0FBQ08sUUFBNUIsR0FBdUMsRUFEaEM7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBV0U7QUFBQSxzQkFBSVY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGO0FBQUEsV0FHT08sQ0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBc0JELENBL0JNOztHQUFNaEIsUTtVQUNtQkMsK0M7OztLQURuQkQsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRhbG9nL1tpZF0uMWNhYjU1ZWE3MDVjMzM3MWE4MGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VGaWVsZCB9IGZyb20gJ2Zvcm1paydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IG1hdGVyaWFscyA9IFsn0JPRgNCw0L3QuNGCJywgJ9Cc0YDQsNC80L7RgCcsICfQktC40L3Qs9CwJywgJ9CU0YvQvNC+0LLRgdC60LjQuScsICfQmtCw0YjQvNC40YAnXVxyXG5cclxuZXhwb3J0IGNvbnN0IE1hdGVyaWFsID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmaWVsZCwgbWV0YSwgaGVscGVyXSA9IHVzZUZpZWxkKCdtYXRlcmlhbCcpXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KGZpZWxkLnZhbHVlKVxyXG4gIGNvbnN0IHNldE1hdGVyaWFsID0gKG1hdGVyaWFsOiBzdHJpbmcpID0+IHtcclxuICAgIGhlbHBlci5zZXRWYWx1ZShtYXRlcmlhbClcclxuICAgIHNldFZhbHVlKG1hdGVyaWFsKVxyXG4gIH1cclxuICBjb25zdCBpc0FjdGl2ZSA9ICh2OiBzdHJpbmcpID0+IHYgPT09IHZhbHVlXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuaDR9PtCc0LDRgtC10YDQuNCw0Ls8L2g0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1zfT5cclxuICAgICAgICB7bWF0ZXJpYWxzLm1hcCgobWF0ZXJpYWwsIGkpID0+IChcclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pdGVtbmFtZX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWF0ZXJpYWwobWF0ZXJpYWwpfVxyXG4gICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlL2NhdGFsb2cvZ3Jhbml0LmpwZ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW5wdXRpbWd9ICR7XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZShtYXRlcmlhbCkgPyBzdHlsZXMuaXNhY3RpdmUgOiAnJ1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgIDxwPnttYXRlcmlhbH08L3A+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9