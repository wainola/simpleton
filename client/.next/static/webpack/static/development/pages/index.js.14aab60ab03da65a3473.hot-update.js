webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Home.jsx":
/*!************************!*\
  !*** ./pages/Home.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Face */ "./node_modules/@material-ui/icons/Face.js");
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Message */ "./node_modules/@material-ui/icons/Message.js");
/* harmony import */ var _material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Work */ "./node_modules/@material-ui/icons/Work.js");
/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Head */ "./pages/Head.jsx");
/* harmony import */ var _components_BottomNavigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/BottomNavigation */ "./pages/components/BottomNavigation.jsx");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Services */ "./pages/components/Services.jsx");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Contact */ "./pages/components/Contact.jsx");





var _jsxFileName = "/home/nicolas/Documents/node/simpleton/client/pages/Home.jsx";

/* eslint-disable react/prefer-stateless-function */











__webpack_require__(/*! ./styles.scss */ "./pages/styles.scss");

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    mainTitleContainer: {
      height: '70%',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      textAlign: 'center',
      padding: theme.spacing.unit * 2,
      background: '#C93756',
      color: 'white',
      'text-transform': 'uppercase'
    },
    mainTitle: {
      color: 'white',
      'font-size': '20px'
    },
    navigationMenuMobile: {
      position: 'fixed',
      width: '100%',
      'z-index': '10',
      bottom: '0',
      left: '0',
      padding: '0 !important'
    },
    contactContainer: {
      'margin-bottom': '15%'
    },
    contactTitle: {
      'font-size': '1.5rem',
      'text-transform': 'uppercase'
    },
    serviceTitle: {
      'text-align': 'center',
      'text-transform': 'uppercase',
      'font-size': '1.5rem',
      margin: '20px'
    }
  };
};

var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  function Home() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var ifMobile = this.props.ifMobile;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Head__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        container: true,
        spacing: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
        className: classes.mainTitleContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        component: "h4",
        variant: "h4",
        gutterBottom: true,
        className: classes.mainTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Natalia Scheuer Abogada"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        item: true,
        xs: 12,
        className: ifMobile ? classes.navigationMenuMobile : '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_BottomNavigation__WEBPACK_IMPORTED_MODULE_12__["default"], {
        routes: [{
          label: 'Servicios',
          route: '/services',
          icon: _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_10___default.a
        }, {
          label: 'Contacto',
          route: '/contact',
          icon: _material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_9___default.a
        }, {
          label: 'Acerca de',
          route: '/about',
          icon: _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_8___default.a
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        lg: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
        className: classes.paper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        component: "h4",
        variant: "h4",
        gutterBottom: true,
        className: classes.serviceTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Servicios"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Services__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        lg: 6,
        className: classes.contactContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
        className: classes.paper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        component: "h4",
        variant: "h4",
        gutterBottom: true,
        className: classes.contactTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Contacto"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(Home)); // DIVORCIOS
// DIVORCIO MUTUO ACUERDO
// DIVORCIOS UNILATERALES
// SEPARACION JUDIFICIAL
// LUQUIDACION DE SOCIEDAD CONYUGAL
// REGULACION DE ALIMENTOS
// RELACION DIRECTA Y REGULAR
// CUIDADO PERSONAL
// TRANSACCIONES

/***/ })

})
//# sourceMappingURL=index.js.14aab60ab03da65a3473.hot-update.js.map