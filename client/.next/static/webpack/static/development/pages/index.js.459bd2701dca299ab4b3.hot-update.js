webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Api/index.js":
/*!****************************!*\
  !*** ./pages/Api/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");





var Api =
/*#__PURE__*/
function () {
  function Api() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Api);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Api, null, [{
    key: "sendClientData",
    value: function () {
      var _sendClientData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function sendClientData(_x) {
        return _sendClientData.apply(this, arguments);
      }

      return sendClientData;
    }()
  }]);

  return Api;
}();

/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ }),

/***/ "./pages/components/Contact.jsx":
/*!**************************************!*\
  !*** ./pages/components/Contact.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _Services_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/validators */ "./Services/validators.js");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Api */ "./pages/Api/index.js");
/* harmony import */ var _LoadComplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LoadComplete */ "./pages/components/LoadComplete/index.jsx");



var _jsxFileName = "/home/nicolas/Documents/node/simpleton/client/pages/components/Contact.jsx";







var styles = function styles(theme) {
  return {
    paper: {
      textAlign: 'center',
      height: '100%'
    },
    formFields: {
      margin: '10px',
      width: '75%'
    },
    formContainer: {
      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
      'align-items': 'center'
    },
    inlineFields: {
      display: 'flex',
      'flex-direction': 'row',
      'align-items': 'flex-end'
    }
  };
};

function Contact(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    nombre: false,
    apellido: false,
    email: false,
    telefono: false,
    razon: false,
    direccion: false
  }),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      formChecked = _React$useState2[0],
      setFormChecked = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    razon: '',
    direccion: ''
  }),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      formValues = _React$useState4[0],
      setFormValues = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      allChecked = _React$useState6[0],
      setAllChecked = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      isComplete = _React$useState8[0],
      setComplete = _React$useState8[1];

  function handleBlur(evt) {
    if (evt.target.value !== '') {
      setFormChecked(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, formChecked, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, evt.target.name, !formChecked[evt.target.name])));
    }
  }

  function handleFocus(evt) {
    console.log(':::', evt.target.value);

    if (evt.target.value !== '') {
      setFormChecked(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, formChecked, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, evt.target.name, !formChecked[evt.target.name])));
    }
  }

  function handleChange(evt) {
    evt.preventDefault();

    if (evt.target.name === 'direccion' && formChecked[evt.target.name]) {
      setAllChecked(!allChecked);
    }

    setFormValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, formValues, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, evt.target.name, evt.target.value)));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('formValues', formValues);
    console.log('validations', validations(formValues), validations(formValues).every(function (item) {
      return !!item.isValid;
    }));
    var validations = validations(formValues);
    var areAllValid = validations.every(function (item) {
      return !!item.isValid;
    });

    if (areAllValid) {}
  }

  var classes = props.classes; // console.log('props', props);

  console.log('props', formChecked.direccion, formValues.direccion);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    className: classes.formContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.inlineFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadComplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isComplete: formChecked.nombre,
    name: "nombre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    id: "input-with-icon-textfield",
    label: "Nombre",
    onBlur: !formChecked.nombre ? handleBlur : function () {},
    onFocus: handleFocus,
    name: "nombre",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.inlineFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadComplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isComplete: formChecked.apellido,
    name: "apellido",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    id: "input-with-icon-textfield",
    label: "Apellido",
    name: "apellido",
    onBlur: !formChecked.apellido ? handleBlur : function () {},
    onFocus: handleFocus,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.inlineFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadComplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isComplete: formChecked.email,
    name: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    id: "input-with-icon-textfield",
    label: "Email",
    name: "email",
    onBlur: !formChecked.email ? handleBlur : function () {},
    onFocus: handleFocus,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.inlineFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadComplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isComplete: formChecked.telefono,
    name: "telefono",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    id: "input-with-icon-textfield",
    label: "Tel\xE9fono",
    name: "telefono",
    onBlur: !formChecked.telefono ? handleBlur : function () {},
    onFocus: handleFocus,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.inlineFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadComplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isComplete: formChecked.razon,
    name: "razon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    id: "input-with-icon-textfield",
    label: "Motivo de consulta",
    name: "razon",
    onBlur: !formChecked.razon ? handleBlur : function () {},
    onFocus: handleFocus,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.inlineFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadComplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isComplete: formChecked.direccion,
    name: "direccion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    id: "input-with-icon-textfield",
    label: "Direcci\xF3n",
    name: "direccion",
    onBlur: !formChecked.direccion ? handleBlur : function () {},
    onFocus: handleFocus,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "Guardar"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(Contact));

/***/ })

})
//# sourceMappingURL=index.js.459bd2701dca299ab4b3.hot-update.js.map