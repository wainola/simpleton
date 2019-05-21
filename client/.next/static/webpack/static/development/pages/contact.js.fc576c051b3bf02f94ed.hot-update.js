webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact/index.jsx":
/*!*********************************!*\
  !*** ./pages/contact/index.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./pages/contact/contact.jsx");
/* harmony import */ var _Services_checkIfMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/checkIfMobile */ "./Services/checkIfMobile.js");


var _jsxFileName = "/home/nicolas/Documents/node/simpleton/client/pages/contact/index.jsx";




var ContactEntryPoint = function ContactEntryPoint(props) {
  var ifMobile = props.ifMobile;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ifMobile: ifMobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};

ContactEntryPoint.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req, userAgent, ifMobile;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;
            userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
            ifMobile = Object(_Services_checkIfMobile__WEBPACK_IMPORTED_MODULE_4__["default"])(userAgent);
            return _context.abrupt("return", {
              ifMobile: ifMobile
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (ContactEntryPoint);

/***/ })

})
//# sourceMappingURL=contact.js.fc576c051b3bf02f94ed.hot-update.js.map