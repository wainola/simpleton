webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Services/validators.js":
/*!********************************!*\
  !*** ./Services/validators.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);



var emailValidation = function emailValidation(email) {
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return {
    key: 'email',
    isValid: emailRegex.test(email)
  };
};

var validateOtherData = function validateOtherData(data) {
  return data.map(function (item) {
    if (item[0] === 'nombre' || item[0] === 'apellido') {
      return {
        key: item[0],
        isValid: item[1].length > 3
      };
    }

    if (item[0] === 'telefono') {
      return {
        key: item[0],
        isValid: item[1].length >= 9
      };
    }

    return {
      key: item[0],
      isValid: item[1].length > 10
    };
  });
};

var validations = function validations(fields) {
  var data = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(fields).filter(function (e) {
    return e[0] !== 'email';
  });

  var email = fields.email;
  var validEmail = emailValidation(email);
  var validData = validateOtherData(data);
  return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(validData), [validEmail]);
};

/* harmony default export */ __webpack_exports__["default"] = (validations);

/***/ })

})
//# sourceMappingURL=index.js.5888463b9312f31d3fbc.hot-update.js.map