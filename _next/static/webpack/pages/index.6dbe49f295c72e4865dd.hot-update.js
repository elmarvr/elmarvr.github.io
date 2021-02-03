webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useSection.js":
/*!*****************************!*\
  !*** ./hooks/useSection.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar useSection = function useSection() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      state = _useState[0],\n      set = _useState[1];\n\n  var upsertSection = function upsertSection(entry) {\n    var id = entry.target.id;\n    var ratio = entry.intersectionRatio;\n    set(function (prev) {\n      if (prev) {\n        var index = prev.findIndex(function (section) {\n          return section.id === id;\n        });\n\n        if (index !== -1) {\n          var _prev = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prev);\n\n          _prev[index].ratio = ratio;\n          return _prev;\n        } else {\n          return prev.concat({\n            id: id,\n            ratio: ratio\n          });\n        }\n      }\n    });\n  };\n\n  var getActiveSection = function getActiveSection() {\n    var activeSection = state.reduce(function (active, section) {\n      if (!active.ratio || section.ratio > active.ratio) {\n        return section;\n      }\n\n      return active;\n    }, {});\n    return \"#\".concat(activeSection.id);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var sections = document.querySelectorAll(\"section\");\n    var observer = new IntersectionObserver(function (entries) {\n      entries.forEach(upsertSection);\n    }, {\n      rootMargin: \"-150px\",\n      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]\n    });\n    sections.forEach(function (section) {\n      return observer.observe(section);\n    });\n    return function () {\n      return observer.disconnect();\n    };\n  }, []);\n  return getActiveSection();\n};\n\n_s(useSection, \"dteEVCg1d13Bh/P2JIP/oDAPjKU=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSection);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlU2VjdGlvbi5qcz8yNDFjIl0sIm5hbWVzIjpbInVzZVNlY3Rpb24iLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0IiwidXBzZXJ0U2VjdGlvbiIsImVudHJ5IiwiaWQiLCJ0YXJnZXQiLCJyYXRpbyIsImludGVyc2VjdGlvblJhdGlvIiwicHJldiIsImluZGV4IiwiZmluZEluZGV4Iiwic2VjdGlvbiIsIl9wcmV2IiwiY29uY2F0IiwiZ2V0QWN0aXZlU2VjdGlvbiIsImFjdGl2ZVNlY3Rpb24iLCJyZWR1Y2UiLCJhY3RpdmUiLCJ1c2VFZmZlY3QiLCJzZWN0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUMsRUFBRCxDQUROO0FBQUEsTUFDaEJDLEtBRGdCO0FBQUEsTUFDVEMsR0FEUzs7QUFHdkIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDL0IsUUFBTUMsRUFBRSxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUQsRUFBeEI7QUFDQSxRQUFNRSxLQUFLLEdBQUdILEtBQUssQ0FBQ0ksaUJBQXBCO0FBRUFOLE9BQUcsQ0FBQyxVQUFDTyxJQUFELEVBQVU7QUFDWixVQUFJQSxJQUFKLEVBQVU7QUFDUixZQUFNQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsU0FBTCxDQUFlLFVBQUNDLE9BQUQ7QUFBQSxpQkFBYUEsT0FBTyxDQUFDUCxFQUFSLEtBQWVBLEVBQTVCO0FBQUEsU0FBZixDQUFkOztBQUVBLFlBQUlLLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDaEIsY0FBTUcsS0FBSyxHQUFHLDZGQUFJSixJQUFQLENBQVg7O0FBQ0FJLGVBQUssQ0FBQ0gsS0FBRCxDQUFMLENBQWFILEtBQWIsR0FBcUJBLEtBQXJCO0FBRUEsaUJBQU9NLEtBQVA7QUFDRCxTQUxELE1BS087QUFDTCxpQkFBT0osSUFBSSxDQUFDSyxNQUFMLENBQVk7QUFBRVQsY0FBRSxFQUFGQSxFQUFGO0FBQU1FLGlCQUFLLEVBQUxBO0FBQU4sV0FBWixDQUFQO0FBQ0Q7QUFDRjtBQUNGLEtBYkUsQ0FBSDtBQWNELEdBbEJEOztBQW9CQSxNQUFNUSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsUUFBTUMsYUFBYSxHQUFHZixLQUFLLENBQUNnQixNQUFOLENBQWEsVUFBQ0MsTUFBRCxFQUFTTixPQUFULEVBQXFCO0FBQ3RELFVBQUksQ0FBQ00sTUFBTSxDQUFDWCxLQUFSLElBQWlCSyxPQUFPLENBQUNMLEtBQVIsR0FBZ0JXLE1BQU0sQ0FBQ1gsS0FBNUMsRUFBbUQ7QUFDakQsZUFBT0ssT0FBUDtBQUNEOztBQUNELGFBQU9NLE1BQVA7QUFDRCxLQUxxQixFQUtuQixFQUxtQixDQUF0QjtBQU9BLHNCQUFXRixhQUFhLENBQUNYLEVBQXpCO0FBQ0QsR0FURDs7QUFXQWMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLENBQWpCO0FBRUEsUUFBTUMsUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQ2YsVUFBQ0MsT0FBRCxFQUFhO0FBQ1hBLGFBQU8sQ0FBQ0MsT0FBUixDQUFnQnZCLGFBQWhCO0FBQ0QsS0FIYyxFQUlmO0FBQ0V3QixnQkFBVSxFQUFFLFFBRGQ7QUFFRUMsZUFBUyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLENBQTlDO0FBRmIsS0FKZSxDQUFqQjtBQVVBUixZQUFRLENBQUNNLE9BQVQsQ0FBaUIsVUFBQ2QsT0FBRDtBQUFBLGFBQWFXLFFBQVEsQ0FBQ00sT0FBVCxDQUFpQmpCLE9BQWpCLENBQWI7QUFBQSxLQUFqQjtBQUVBLFdBQU87QUFBQSxhQUFNVyxRQUFRLENBQUNPLFVBQVQsRUFBTjtBQUFBLEtBQVA7QUFDRCxHQWhCUSxFQWdCTixFQWhCTSxDQUFUO0FBa0JBLFNBQU9mLGdCQUFnQixFQUF2QjtBQUNELENBckREOztHQUFNaEIsVTs7QUF1RFNBLHlFQUFmIiwiZmlsZSI6Ii4vaG9va3MvdXNlU2VjdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHVwc2VydFNlY3Rpb24gPSAoZW50cnkpID0+IHtcbiAgICBjb25zdCBpZCA9IGVudHJ5LnRhcmdldC5pZDtcbiAgICBjb25zdCByYXRpbyA9IGVudHJ5LmludGVyc2VjdGlvblJhdGlvO1xuXG4gICAgc2V0KChwcmV2KSA9PiB7XG4gICAgICBpZiAocHJldikge1xuICAgICAgICBjb25zdCBpbmRleCA9IHByZXYuZmluZEluZGV4KChzZWN0aW9uKSA9PiBzZWN0aW9uLmlkID09PSBpZCk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGNvbnN0IF9wcmV2ID0gWy4uLnByZXZdO1xuICAgICAgICAgIF9wcmV2W2luZGV4XS5yYXRpbyA9IHJhdGlvO1xuXG4gICAgICAgICAgcmV0dXJuIF9wcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwcmV2LmNvbmNhdCh7IGlkLCByYXRpbyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldEFjdGl2ZVNlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlU2VjdGlvbiA9IHN0YXRlLnJlZHVjZSgoYWN0aXZlLCBzZWN0aW9uKSA9PiB7XG4gICAgICBpZiAoIWFjdGl2ZS5yYXRpbyB8fCBzZWN0aW9uLnJhdGlvID4gYWN0aXZlLnJhdGlvKSB7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gYCMke2FjdGl2ZVNlY3Rpb24uaWR9YDtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIik7XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCh1cHNlcnRTZWN0aW9uKTtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvb3RNYXJnaW46IFwiLTE1MHB4XCIsXG4gICAgICAgIHRocmVzaG9sZDogWzAuMSwgMC4yLCAwLjMsIDAuNCwgMC41LCAwLjYsIDAuNywgMC44LCAwLjksIDFdLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pKTtcblxuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZ2V0QWN0aXZlU2VjdGlvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU2VjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useSection.js\n");

/***/ })

})