"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forms",{

/***/ "./pages/forms.js":
/*!************************!*\
  !*** ./pages/forms.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.js\");\n/* harmony import */ var _components_RegisterForm_RegisterForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RegisterForm/RegisterForm */ \"./components/RegisterForm/RegisterForm.js\");\n/* harmony import */ var _components_OtherForm_OtherForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/OtherForm/OtherForm */ \"./components/OtherForm/OtherForm.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _Utils_validateModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utils/validateModel */ \"./Utils/validateModel.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar FormPage = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), step = ref[0], setStep = ref[1];\n    //   const validateModel = Yup.object({\n    //     name: Yup.string(\"Just text\")\n    //       .matches(/^[a-zA-Z]+$/, \"Just Text\")\n    //       .required(\"Required\"),\n    //     lastName: Yup.string(\"Just text\")\n    //       .matches(/^[a-zA-Z]+$/, \"Just Text\")\n    //       .max(15, \"Must be 15 characters or less\")\n    //       .required(\"Required\"),\n    //     secondLastName: Yup.string(\"Just text\"),\n    //     email: Yup.string(\"Just text\")\n    //       .email(\"Email is invalid\")\n    //       .required(\"Email is required\"),\n    //     address: Yup.string().required(\"Required\"),\n    //   });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex align-center justify-center bg-amber-200 m-4 p-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Formik, {\n            initialValues: {\n                name: \"\",\n                lastName: \"\",\n                secondLastName: \"\",\n                email: \"\",\n                address: \"\"\n            },\n            validationSchema: _Utils_validateModel__WEBPACK_IMPORTED_MODULE_6__[\"default\"][step],\n            onSubmit: function() {\n                console.log(\"submit!\");\n            },\n            children: function(param) {\n                var errors = param.errors;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                    className: \"block bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\",\n                    children: [\n                        step === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RegisterForm_RegisterForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\forms-nextjs\\\\pages\\\\forms.js\",\n                            lineNumber: 43,\n                            columnNumber: 28\n                        }, _this1),\n                        step === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_OtherForm_OtherForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\forms-nextjs\\\\pages\\\\forms.js\",\n                            lineNumber: 44,\n                            columnNumber: 28\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"inline-flex\",\n                            children: [\n                                step !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    title: \"Prev\",\n                                    onClick: function() {\n                                        return setStep(step - 1);\n                                    },\n                                    type: \"submit\",\n                                    className: \"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\forms-nextjs\\\\pages\\\\forms.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    title: step !== 1 ? \"Next\" : \"Send\",\n                                    onClick: function() {\n                                        setStep(step + 1);\n                                        console.log(errors);\n                                    },\n                                    type: \"submit\",\n                                    className: \"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\forms-nextjs\\\\pages\\\\forms.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\forms-nextjs\\\\pages\\\\forms.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\forms-nextjs\\\\pages\\\\forms.js\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, _this1);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\forms-nextjs\\\\pages\\\\forms.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\forms-nextjs\\\\pages\\\\forms.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this));\n};\n_s(FormPage, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = FormPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormPage);\nvar _c;\n$RefreshReg$(_c, \"FormPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3Jtcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFDUztBQUNrQjtBQUNUO0FBQ3BCO0FBQ2E7OztBQUVsRCxHQUFLLENBQUNRLFFBQVEsR0FBRyxRQUFRLEdBQUYsQ0FBQzs7O0lBQ3RCLEdBQUssQ0FBbUJQLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTNCUSxJQUFJLEdBQWFSLEdBQVcsS0FBdEJTLE9BQU8sR0FBSVQsR0FBVztJQUVuQyxFQUF1QztJQUN2QyxFQUFvQztJQUNwQyxFQUE2QztJQUM3QyxFQUErQjtJQUMvQixFQUF3QztJQUN4QyxFQUE2QztJQUM3QyxFQUFrRDtJQUNsRCxFQUErQjtJQUMvQixFQUErQztJQUMvQyxFQUFxQztJQUNyQyxFQUFtQztJQUNuQyxFQUF3QztJQUN4QyxFQUFrRDtJQUNsRCxFQUFRO0lBRVIsTUFBTSw2RUFDSFUsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBdUQ7OEZBQ25FUCwwQ0FBTTtZQUNMUSxhQUFhLEVBQUUsQ0FBQztnQkFDZEMsSUFBSSxFQUFFLENBQUU7Z0JBQ1JDLFFBQVEsRUFBRSxDQUFFO2dCQUNaQyxjQUFjLEVBQUUsQ0FBRTtnQkFDbEJDLEtBQUssRUFBRSxDQUFFO2dCQUNUQyxPQUFPLEVBQUUsQ0FBRTtZQUNiLENBQUM7WUFDREMsZ0JBQWdCLEVBQUVaLDREQUFhLENBQUNFLElBQUk7WUFDcENXLFFBQVEsRUFBRSxRQUFRLEdBQUYsQ0FBQztnQkFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUztZQUN2QixDQUFDO3NCQUVBLFFBQVE7b0JBQUxDLE1BQU0sU0FBTkEsTUFBTTs4QkFDUixNQUFNWCxDQUFBQSw2REFBQUEsQ0FBTE4sd0NBQUk7b0JBQUNNLFNBQVMsRUFBQyxDQUFzRDs7d0JBQ25FSCxJQUFJLEtBQUssQ0FBQyxnRkFBS04sNkVBQVk7Ozs7O3dCQUMzQk0sSUFBSSxLQUFLLENBQUMsZ0ZBQUtMLHVFQUFTOzs7OztvR0FDeEJPLENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFhOztnQ0FDekJILElBQUksS0FBSyxDQUFDLGdGQUNSUCxpRUFBTTtvQ0FDTHNCLEtBQUssRUFBQyxDQUFNO29DQUNaQyxPQUFPLEVBQUUsUUFBUTt3Q0FBRmYsTUFBTSxDQUFOQSxPQUFPLENBQUNELElBQUksR0FBRyxDQUFDOztvQ0FDL0JpQixJQUFJLEVBQUMsQ0FBUTtvQ0FDYmQsU0FBUyxFQUFDLENBQTJFOzs7Ozs7NEdBR3hGVixpRUFBTTtvQ0FDTHNCLEtBQUssRUFBRWYsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFNLFFBQUcsQ0FBTTtvQ0FDbkNnQixPQUFPLEVBQUUsUUFBUSxHQUFGLENBQUM7d0NBQ2JmLE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQUM7d0NBQ2hCWSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTTtvQ0FDckIsQ0FBQztvQ0FDREcsSUFBSSxFQUFDLENBQVE7b0NBQ2JkLFNBQVMsRUFBQyxDQUEyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckcsQ0FBQztHQTdES0osUUFBUTtLQUFSQSxRQUFRO0FBK0RkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybXMuanM/MGFhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVnaXN0ZXJGb3JtL1JlZ2lzdGVyRm9ybVwiO1xyXG5pbXBvcnQgT3RoZXJGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL090aGVyRm9ybS9PdGhlckZvcm1cIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgdmFsaWRhdGVNb2RlbCBmcm9tIFwiLi4vVXRpbHMvdmFsaWRhdGVNb2RlbFwiO1xyXG5cclxuY29uc3QgRm9ybVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIC8vICAgY29uc3QgdmFsaWRhdGVNb2RlbCA9IFl1cC5vYmplY3Qoe1xyXG4gIC8vICAgICBuYW1lOiBZdXAuc3RyaW5nKFwiSnVzdCB0ZXh0XCIpXHJcbiAgLy8gICAgICAgLm1hdGNoZXMoL15bYS16QS1aXSskLywgXCJKdXN0IFRleHRcIilcclxuICAvLyAgICAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuICAvLyAgICAgbGFzdE5hbWU6IFl1cC5zdHJpbmcoXCJKdXN0IHRleHRcIilcclxuICAvLyAgICAgICAubWF0Y2hlcygvXlthLXpBLVpdKyQvLCBcIkp1c3QgVGV4dFwiKVxyXG4gIC8vICAgICAgIC5tYXgoMTUsIFwiTXVzdCBiZSAxNSBjaGFyYWN0ZXJzIG9yIGxlc3NcIilcclxuICAvLyAgICAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuICAvLyAgICAgc2Vjb25kTGFzdE5hbWU6IFl1cC5zdHJpbmcoXCJKdXN0IHRleHRcIiksXHJcbiAgLy8gICAgIGVtYWlsOiBZdXAuc3RyaW5nKFwiSnVzdCB0ZXh0XCIpXHJcbiAgLy8gICAgICAgLmVtYWlsKFwiRW1haWwgaXMgaW52YWxpZFwiKVxyXG4gIC8vICAgICAgIC5yZXF1aXJlZChcIkVtYWlsIGlzIHJlcXVpcmVkXCIpLFxyXG4gIC8vICAgICBhZGRyZXNzOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuICAvLyAgIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1hbWJlci0yMDAgbS00IHAtNFwiPlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgc2Vjb25kTGFzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXt2YWxpZGF0ZU1vZGVsW3N0ZXBdfVxyXG4gICAgICAgIG9uU3VibWl0PXsoKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Ym1pdCFcIik7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoeyBlcnJvcnMgfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiYmxvY2sgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgcHgtOCBwdC02IHBiLTggbWItNFwiPlxyXG4gICAgICAgICAgICB7c3RlcCA9PT0gMCAmJiA8UmVnaXN0ZXJGb3JtIC8+fVxyXG4gICAgICAgICAgICB7c3RlcCA9PT0gMSAmJiA8T3RoZXJGb3JtIC8+fVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XHJcbiAgICAgICAgICAgICAge3N0ZXAgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlByZXZcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGVwKHN0ZXAgLSAxKX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtZ3JheS04MDAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtzdGVwICE9PSAxID8gXCJOZXh0XCIgOiBcIlNlbmRcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgIHNldFN0ZXAoc3RlcCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS00MDAgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiUmVnaXN0ZXJGb3JtIiwiT3RoZXJGb3JtIiwiRm9ybWlrIiwiRm9ybSIsInZhbGlkYXRlTW9kZWwiLCJGb3JtUGFnZSIsInN0ZXAiLCJzZXRTdGVwIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbFZhbHVlcyIsIm5hbWUiLCJsYXN0TmFtZSIsInNlY29uZExhc3ROYW1lIiwiZW1haWwiLCJhZGRyZXNzIiwidmFsaWRhdGlvblNjaGVtYSIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsInRpdGxlIiwib25DbGljayIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/forms.js\n");

/***/ })

});