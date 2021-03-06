webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Dialog */ "./pages/components/Dialog.jsx");



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

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),
      _React$useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState9, 2),
      nodeForm = _React$useState10[0],
      setNodeForm = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState11, 2),
      open = _React$useState12[0],
      setOpen = _React$useState12[1];

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    console.log('openDialog');
    setOpen(true);
  }

  function handleBlur(evt) {
    if (evt.target.value !== '') {
      setFormChecked(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, formChecked, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, evt.target.name, !formChecked[evt.target.name])));
    }
  }

  function handleFocus(evt) {
    // console.log(':::', evt.target.value);
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
    console.log('validations', Object(_Services_validators__WEBPACK_IMPORTED_MODULE_6__["default"])(formValues), Object(_Services_validators__WEBPACK_IMPORTED_MODULE_6__["default"])(formValues).every(function (item) {
      return !!item.isValid;
    }));
    var validData = Object(_Services_validators__WEBPACK_IMPORTED_MODULE_6__["default"])(formValues);
    var areAllValid = validData.every(function (item) {
      return !!item.isValid;
    });

    if (areAllValid) {
      console.log('areValid', areAllValid, validData);
      _Api__WEBPACK_IMPORTED_MODULE_7__["default"].sendClientData(formValues).then(function (response) {
        if (response.status === 200) {
          handleOpen();
          nodeForm.reset();
          setFormChecked({
            nombre: false,
            apellido: false,
            email: false,
            telefono: false,
            razon: false,
            direccion: false
          });
        }
      });
    }
  }

  function getNode(node) {
    setNodeForm(node);
  }

  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
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
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: handleSubmit,
    name: "contact-form",
    ref: getNode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.inlineFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadComplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isComplete: formChecked.nombre,
    name: "nombre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
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
      lineNumber: 137
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.inlineFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadComplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isComplete: formChecked.apellido,
    name: "apellido",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
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
      lineNumber: 150
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.inlineFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadComplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isComplete: formChecked.email,
    name: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
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
      lineNumber: 163
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.inlineFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadComplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isComplete: formChecked.telefono,
    name: "telefono",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
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
      lineNumber: 176
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.inlineFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadComplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isComplete: formChecked.razon,
    name: "razon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
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
      lineNumber: 189
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.inlineFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadComplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isComplete: formChecked.direccion,
    name: "direccion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
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
      lineNumber: 202
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Guardar")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    open: open,
    handleClose: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(Contact));

/***/ })

})
//# sourceMappingURL=index.js.63ac2a5e2b5698b565ca.hot-update.js.map