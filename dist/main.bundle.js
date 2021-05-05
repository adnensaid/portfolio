/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "hello": () => (/* binding */ hello),
/* harmony export */   "obj": () => (/* binding */ obj),
/* harmony export */   "c": () => (/* binding */ c),
/* harmony export */   "d": () => (/* binding */ d),
/* harmony export */   "e": () => (/* binding */ e),
/* harmony export */   "foo": () => (/* binding */ foo)
/* harmony export */ });
var a = 'a';
function hello() {
  console.log('hello');
}
;
var obj = {};
var c = 'c';
var d = 'd';
var e = 'e';

var h = {
  foo: "bar"
};
var foo = h.foo;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/styles.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/styles.scss ***!
  \**************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --PI: 3.14159265358979;\n  --racin-2:1.41421356237;\n  --font-family: 'Montserrat', sans-serif;\n  --font-family-title:'Oswald', sans-serif;\n  --font-family-secondary: 'Shadows Into Light', cursive;\n  --font-family-ledor:'Montserrat', sans-serif;\n  --font-family-youtube:'Roboto', sans-serif;\n  --text:#333;\n  --red-light:#ff6b6b;\n  --red:#ee5253;\n  --green:#10ac84;\n  --green-light:#1dd1a1;\n  --green-faded:#81ecec;\n  --blue:#1977d2;\n  --blue-1:#1977c2;\n  --blue-2:#1977a2;\n  --blue-3:#1977b2;\n  --blue-light:#1cbdfd;\n  --blue-faded:#60a3bc;\n  --gray:#f1f2f6;\n  --gray-light:#f1f2f6;\n  --gray-dark:#dfe6e9;\n  --gray-portfolio:#8a8a8a;\n  --dark:#2f3542;\n  --dark-light:#57606f;\n  --yellow:#fed330;\n  --yellow-light:#f7b731;\n  --orange-light:#fd9644;\n  --white:#ffffff;\n  --text-light:rgba(0,0,0,.5);\n  --pink:#ebd4d4;\n  --brown:#d5ae69;\n  --brown-light:#d4ac66;\n  --orange:#fad390;\n  --dark: #343434;\n  --white:#fff;\n  --background:#faf4f4;\n  --noir:#000;\n  --hint:#aaa;\n  --linkedin:#2779aa;\n  --twitter:#1c9cea;\n  --facebook:#4064ac;\n  --dark:#011741;\n  --sidebar:#f5f5f5;\n  --html:#dd4b26;\n  --css:#254bdd;\n  --youtube-background:#191919;\n  --youtube-navbar:#212121;\n  --youtube-navbar-light:#323232;\n  --youtube-icon:#90908F;\n  --youtube-red:#cc0100;\n  --alerte:#ef3c00;\n  --shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15); }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n/* text color */\n.text-dark {\n  color: var(--dark); }\n\n.text-red {\n  color: var(--red); }\n\n.text-gray {\n  color: var(--gray); }\n\n.text-green {\n  color: var(--green); }\n\n.text-blue {\n  color: var(--blue); }\n\n/* labs */\n.strong-labs {\n  color: var(--red); }\n\n.labs-content {\n  margin: 5rem 0; }\n\n/* window */\n.window {\n  background: var(--gray);\n  min-height: 40rem;\n  display: flex;\n  flex-direction: column; }\n  .window .window-titre {\n    position: relative;\n    padding: 0.5rem;\n    background: var(--dark); }\n    .window .window-titre i {\n      display: block;\n      width: 1.2rem;\n      height: 1.2rem;\n      background-color: var(--red);\n      border-radius: 100%;\n      position: relative; }\n      .window .window-titre i::before {\n        content: \"\";\n        position: absolute;\n        right: -1.4rem;\n        width: 100%;\n        height: 100%;\n        background-color: var(--yellow);\n        border-radius: 100%; }\n      .window .window-titre i::after {\n        content: \"\";\n        position: absolute;\n        right: -2.8rem;\n        width: 100%;\n        height: 100%;\n        background-color: var(--green);\n        border-radius: 100%; }\n    .window .window-titre p {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: 0;\n      font-size: 1.2rem;\n      font-weight: 700;\n      color: var(--gray);\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n  .window .window-content {\n    flex: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n\n/* page zindex animation dropdown */\n.Zindex {\n  z-index: 0; }\n\n/* Icons */\n.bi {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  /* &:hover{\n  .bi-list{\n    &::before{\n      transition: all 0.2s;\n      top: -0.2rem;\n    }\n    &::after{\n      transition: all 0.2s;\n      bottom: -0.2rem;\n    }  \n  }\n} */ }\n  .bi .bi-list {\n    height: 0.2rem;\n    background: var(--text); }\n    .bi .bi-list::before {\n      content: \"\";\n      width: 100%;\n      height: 0.2rem;\n      background: var(--text);\n      position: absolute;\n      top: 0; }\n    .bi .bi-list::after {\n      content: \"\";\n      width: 100%;\n      height: 0.2rem;\n      background: var(--text);\n      position: absolute;\n      bottom: 0; }\n\n.arrow-edit {\n  width: 2rem;\n  height: 2rem;\n  border: 0.1rem solid var(--text);\n  display: flex;\n  align-items: center; }\n  .arrow-edit::after {\n    content: \"\";\n    width: 100%;\n    height: 0.1rem;\n    background-color: var(--text);\n    transform: rotate(45deg); }\n\n.arrow-soustraire {\n  width: 2rem;\n  height: 0.2rem;\n  background: var(--text);\n  display: block; }\n\n.arrow-addition {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative; }\n  .arrow-addition::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 0.2rem;\n    background: var(--text); }\n  .arrow-addition::before {\n    content: \"\";\n    position: absolute;\n    width: 0.2rem;\n    height: 100%;\n    background: var(--text); }\n\n.arrow-egale {\n  width: 2rem;\n  height: 1rem;\n  position: relative;\n  display: block; }\n  .arrow-egale::after {\n    content: \"\";\n    width: 100%;\n    height: 0.2rem;\n    background: var(--text);\n    position: absolute;\n    top: 0; }\n  .arrow-egale::before {\n    content: \"\";\n    width: 100%;\n    height: 0.2rem;\n    background: var(--text);\n    bottom: 0;\n    position: absolute; }\n\n.arrow-rest-division {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transform: rotate(-60deg); }\n  .arrow-rest-division i {\n    width: 100%;\n    height: 0.1rem;\n    border: 0.1rem solid var(--text);\n    background: var(--text);\n    position: absolute;\n    display: flex;\n    justify-content: center; }\n  .arrow-rest-division::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    width: 0.5rem;\n    height: 0.5rem;\n    border: 0.1rem solid var(--text);\n    border-radius: 100%; }\n  .arrow-rest-division::before {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    width: 0.5rem;\n    height: 0.5rem;\n    border: 0.1rem solid var(--text);\n    border-radius: 100%; }\n\n.arrow-division {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative; }\n  .arrow-division i {\n    width: 100%;\n    height: 0.1rem;\n    border: 0.1rem solid var(--text);\n    background: var(--text);\n    position: absolute;\n    display: flex;\n    justify-content: center; }\n  .arrow-division::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    width: 0.5rem;\n    height: 0.5rem;\n    background: var(--text);\n    border-radius: 100%; }\n  .arrow-division::before {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    width: 0.5rem;\n    height: 0.5rem;\n    background: var(--text);\n    border-radius: 100%; }\n\n.arrow-delete {\n  width: 4rem;\n  height: 2.82rem;\n  border-right: 0.2rem solid var(--text);\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative; }\n  .arrow-delete i:nth-child(1) {\n    width: 2rem;\n    height: 2rem;\n    border-left: 0.2rem solid var(--text);\n    border-bottom: 0.2rem solid var(--text);\n    transform: rotate(45deg); }\n  .arrow-delete i:nth-child(2) {\n    width: calc(100% - 1rem);\n    height: 100%;\n    position: absolute;\n    left: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .arrow-delete i:nth-child(2)::after {\n      content: \"\";\n      width: 60%;\n      height: 0.2rem;\n      background: var(--text);\n      transform: rotate(45deg);\n      position: absolute; }\n    .arrow-delete i:nth-child(2)::before {\n      content: \"\";\n      width: 60%;\n      height: 0.2rem;\n      background: var(--text);\n      transform: rotate(-45deg);\n      position: absolute; }\n  .arrow-delete::after {\n    content: \"\";\n    width: calc(100% - 1rem);\n    height: 0.2rem;\n    background: var(--text);\n    position: absolute;\n    top: 0;\n    left: 1rem; }\n  .arrow-delete::before {\n    content: \"\";\n    width: calc(100% - 1rem);\n    height: 0.2rem;\n    background: var(--text);\n    position: absolute;\n    bottom: 0;\n    left: 1rem; }\n\n.arrow-right {\n  width: 2rem;\n  height: 2rem;\n  display: block;\n  border-top: 2px solid var(--text);\n  border-right: 2px solid var(--text);\n  transform: rotate(45deg); }\n\n.arrow-top {\n  width: 2rem;\n  height: 2rem;\n  display: block;\n  border-top: 2px solid var(--text);\n  border-right: 2px solid var(--text);\n  transform: rotate(-45deg); }\n\n.arrow-bottom {\n  width: 2rem;\n  height: 2rem;\n  display: block;\n  border-top: 2px solid var(--text);\n  border-right: 2px solid var(--text);\n  transform: rotate(135deg); }\n\n.arrow-left {\n  width: 2rem;\n  height: 2rem;\n  display: block;\n  border-top: 2px solid var(--text);\n  border-right: 2px solid var(--text);\n  transform: rotate(-135deg); }\n\n.arrow-down-left {\n  width: 2rem;\n  height: 2rem;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(90deg); }\n  .arrow-down-left::after {\n    content: \"\";\n    width: 1.4rem;\n    height: 1.4rem;\n    border-bottom: 0.2rem solid var(--text);\n    border-right: 0.2rem solid var(--text);\n    display: block;\n    transform: rotate(45deg); }\n  .arrow-down-left::before {\n    content: \"\";\n    width: 0.2rem;\n    height: 100%;\n    display: block;\n    position: absolute;\n    background: var(--text); }\n\n.arrow-top-b {\n  width: 2rem;\n  height: 2rem;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(180deg); }\n  .arrow-top-b::after {\n    content: \"\";\n    width: 1.4rem;\n    height: 1.4rem;\n    border-bottom: 0.2rem solid var(--text);\n    border-right: 0.2rem solid var(--text);\n    display: block;\n    transform: rotate(45deg); }\n  .arrow-top-b::before {\n    content: \"\";\n    width: 0.2rem;\n    height: 100%;\n    display: block;\n    position: absolute;\n    background: var(--text); }\n\n.arrow-right-b {\n  width: 2rem;\n  height: 2rem;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(-90deg); }\n  .arrow-right-b::after {\n    content: \"\";\n    width: 1.4rem;\n    height: 1.4rem;\n    border-bottom: 0.2rem solid var(--text);\n    border-right: 0.2rem solid var(--text);\n    display: block;\n    transform: rotate(45deg); }\n  .arrow-right-b::before {\n    content: \"\";\n    width: 0.2rem;\n    height: 100%;\n    display: block;\n    position: absolute;\n    background: var(--text); }\n\n.arrow-bottom-b {\n  width: 2rem;\n  height: 2rem;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(0deg); }\n  .arrow-bottom-b::after {\n    content: \"\";\n    width: 1.4rem;\n    height: 1.4rem;\n    border-bottom: 0.2rem solid var(--text);\n    border-right: 0.2rem solid var(--text);\n    display: block;\n    transform: rotate(45deg); }\n  .arrow-bottom-b::before {\n    content: \"\";\n    width: 0.2rem;\n    height: 100%;\n    display: block;\n    position: absolute;\n    background: var(--text); }\n\n.arrow-left-b {\n  width: 2rem;\n  height: 2rem;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(90deg); }\n  .arrow-left-b::after {\n    content: \"\";\n    width: 1.4rem;\n    height: 1.4rem;\n    border-bottom: 0.2rem solid var(--text);\n    border-right: 0.2rem solid var(--text);\n    display: block;\n    transform: rotate(45deg); }\n  .arrow-left-b::before {\n    content: \"\";\n    width: 0.2rem;\n    height: 100%;\n    display: block;\n    position: absolute;\n    background: var(--text); }\n\n.arrow-down-left {\n  width: 2rem;\n  height: 2rem;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg); }\n  .arrow-down-left::after {\n    content: \"\";\n    width: 1.4rem;\n    height: 1.4rem;\n    border-bottom: 0.2rem solid var(--text);\n    border-right: 0.2rem solid var(--text);\n    display: block;\n    transform: rotate(45deg); }\n  .arrow-down-left::before {\n    content: \"\";\n    width: 0.2rem;\n    height: 100%;\n    display: block;\n    position: absolute;\n    background: var(--text); }\n\n.arrow-down-right {\n  width: 2rem;\n  height: 2rem;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(-45deg); }\n  .arrow-down-right::after {\n    content: \"\";\n    width: 1.4rem;\n    height: 1.4rem;\n    border-bottom: 0.2rem solid var(--text);\n    border-right: 0.2rem solid var(--text);\n    display: block;\n    transform: rotate(45deg); }\n  .arrow-down-right::before {\n    content: \"\";\n    width: 0.2rem;\n    height: 100%;\n    display: block;\n    position: absolute;\n    background: var(--text); }\n\n.arrow-close {\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative; }\n  .arrow-close::after {\n    content: \"\";\n    height: 0.2rem;\n    width: 100%;\n    background: var(--text);\n    position: absolute;\n    transform: rotate(135deg); }\n  .arrow-close::before {\n    content: \"\";\n    height: 0.2rem;\n    width: 100%;\n    background: var(--text);\n    position: absolute;\n    transform: rotate(-135deg); }\n\n.arrow-validate {\n  content: \"\";\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  transform: rotate(135deg); }\n  .arrow-validate::before {\n    content: \"\";\n    width: 100%;\n    height: 0.1rem;\n    background: var(--text);\n    border: 0.1rem solid var(--text);\n    align-self: center; }\n  .arrow-validate::after {\n    content: \"\";\n    width: 0.1rem;\n    height: 50%;\n    background: var(--text);\n    align-self: flex-end;\n    border: 0.1rem solid var(--text); }\n\n.arrow-repeat {\n  width: 2rem;\n  height: 2rem;\n  border: 0.2rem solid var(--text);\n  display: flex;\n  background: linear-gradient(to bottom, var(--text) 50%, var(--text) 50%); }\n\n.carret-up-fill {\n  width: 2rem;\n  height: 2rem;\n  display: block;\n  position: relative;\n  background: linear-gradient(to bottom left, var(--text) 50%, var(--gray) 50%);\n  transform: rotate(-45deg); }\n\n.carret-right-fill {\n  width: 2rem;\n  height: 2rem;\n  display: block;\n  position: relative;\n  background: linear-gradient(to bottom left, var(--text) 50%, var(--gray) 50%);\n  transform: rotate(45deg); }\n\n.carret-bottom-fill {\n  width: 2rem;\n  height: 2rem;\n  display: block;\n  position: relative;\n  background: linear-gradient(to bottom left, var(--text) 50%, var(--gray) 50%);\n  transform: rotate(135deg); }\n\n.carret-left-fill {\n  width: 2rem;\n  height: 2rem;\n  display: block;\n  position: relative;\n  background: linear-gradient(to bottom left, var(--text) 50%, var(--gray) 50%);\n  transform: rotate(-135deg); }\n\n/* animation dropdown */\n.superposer-bar {\n  animation: superposerBar 0.2s forwards 0.1s; }\n\n.rotate-180 {\n  animation: rotate-180 ease 0.2s forwards; }\n\n.rotate-back-in {\n  animation: rotate-back-in 0.1s forwards .6s; }\n\n.rotate-back-out {\n  animation: rotate-back-out 0.1s forwards .6s; }\n\n.animate-dropdown-menu {\n  animation: animate-dropdown-menu .4s ease forwards 0.2s; }\n\n.animate-dropdown-menu-labs {\n  animation: animate-dropdown-menu-labs 2s ease forwards 0.2s; }\n\n.fadeout-demo {\n  animation: fadeout-demo 0.1s forwards .2s; }\n\n/* page structure */\n.fade-out-navbar {\n  z-index: 0; }\n\n.animate-nav {\n  animation: animate-nav .8s ease forwards 0.2s; }\n\n.aside-background {\n  animation: aside-background .4s ease forwards .2s; }\n\n.background-drop {\n  animation: background-drop 0.1s ease forwards 1s; }\n\n.z-index-1 {\n  z-index: 1; }\n\n.fadeout {\n  animation: fadeout 0.2s ease forwards .6s; }\n\n/* icon direction */\n.icon {\n  width: 8rem;\n  height: 8rem; }\n  .icon .icon-direction {\n    cursor: pointer;\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%; }\n    .icon .icon-direction .bar-bottom {\n      width: 100%;\n      height: 100%;\n      border-radius: 100%;\n      display: flex;\n      align-items: center;\n      transform: rotate(-45deg);\n      transition: all 0.4s;\n      background: var(--blue); }\n      .icon .icon-direction .bar-bottom::after {\n        content: \"\";\n        position: absolute;\n        width: 50%;\n        height: 0.1rem;\n        border: 0.1rem solid var(--white);\n        background: var(--white); }\n    .icon .icon-direction .bar-top {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      border-radius: 100%;\n      display: flex;\n      justify-content: center;\n      transform: rotate(-45deg);\n      transition: all 0.4s; }\n      .icon .icon-direction .bar-top::before {\n        content: \"\";\n        display: block;\n        width: 0.1rem;\n        height: 50%;\n        border: 0.1rem solid var(--white);\n        background: var(--white); }\n    .icon .icon-direction .icon-direction-titre {\n      color: var(--white);\n      margin: 0;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      text-align: end; }\n      .icon .icon-direction .icon-direction-titre p {\n        line-height: 8rem;\n        margin: 0;\n        padding: 0;\n        color: var(--white);\n        font-weight: 700;\n        font-size: 1.4rem;\n        opacity: 1; }\n    .icon .icon-direction.left {\n      transform: rotate(180deg); }\n      .icon .icon-direction.left .icon-direction-titre p {\n        opacity: 0;\n        transition: all 0.4s ease; }\n      .icon .icon-direction.left:hover .icon-direction-titre {\n        transform: rotate(180deg); }\n        .icon .icon-direction.left:hover .icon-direction-titre p {\n          transition: all 0.4s ease;\n          transform: translateX(5.7rem);\n          opacity: 1; }\n    .icon .icon-direction.right .icon-direction-titre p {\n      opacity: 0;\n      transition: all 0.4s; }\n    .icon .icon-direction.right:hover .icon-direction-titre p {\n      transition: all 0.4s ease;\n      transform: translateX(-8.5rem);\n      opacity: 1; }\n    .icon .icon-direction:hover .bar-top {\n      transition: all 0.4s;\n      transform: rotate(-35deg); }\n    .icon .icon-direction:hover .bar-bottom {\n      transition: all 0.4s;\n      transform: rotate(-55deg); }\n\n.annuler-x {\n  position: relative;\n  cursor: pointer;\n  transition: all 0.4s; }\n  .annuler-x:hover {\n    background: var(--blue);\n    color: var(--pink); }\n  .annuler-x::after {\n    content: 'X';\n    position: absolute;\n    right: 0.5rem;\n    width: 1rem;\n    height: 1rem;\n    color: var(--white);\n    border-radius: 0.5rem;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n    align-items: center; }\n\n.through {\n  position: relative; }\n  .through::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 0.2rem;\n    background: var(--text); }\n\n.quote {\n  font-style: italic; }\n  .quote::before {\n    content: \"\\AB\";\n    padding: 0 0.5rem; }\n  .quote::after {\n    content: \"\\BB\";\n    padding: 0 0.5rem; }\n\n.hidden {\n  display: none; }\n\n.underline-2 {\n  max-width: 2rem;\n  margin: 2rem auto;\n  height: 0.1rem;\n  background: var(--white); }\n\n.underline-4 {\n  max-width: 4rem;\n  margin: 2rem auto;\n  height: 0.1rem;\n  background: var(--white); }\n\n.underline-6 {\n  display: inline-block;\n  min-width: 6rem;\n  margin: 1.5rem auto;\n  height: 0.1rem;\n  background: var(--pink); }\n\n.underline-8 {\n  max-width: 8rem;\n  margin: 2rem auto;\n  height: 0.1rem;\n  background: var(--white); }\n\n/* text */\n.title {\n  letter-spacing: 0.2rem;\n  font-weight: 700;\n  font-size: 2.4rem; }\n  .title-portfolio {\n    background: linear-gradient(to top, var(--white) 40%, var(--pink) 60%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent; }\n\n.text-hint {\n  color: var(--text);\n  font-size: 1.6rem;\n  font-weight: 100; }\n\n/* buttons */\n.btn {\n  border: 0;\n  margin: 2rem 0;\n  outline: 0;\n  cursor: pointer;\n  max-width: 15rem; }\n  .btn-num {\n    width: 4rem;\n    height: 4rem;\n    border: 0.1rem solid var(--white);\n    background: var(--dark);\n    font-size: 2rem;\n    font-weight: 700;\n    margin: 1rem 0;\n    border-radius: 100%; }\n  .btn-primary {\n    background: var(--blue-light);\n    color: var(--white);\n    padding: 0.5rem 2rem;\n    font-weight: 700;\n    border: none;\n    border-radius: 0.5rem; }\n  .btn-primary-portfolio {\n    background: var(--white);\n    font-weight: 700;\n    border-top-right-radius: 2.5rem;\n    border-bottom-right-radius: 2.5rem;\n    border-top-left-radius: 2.5rem;\n    border-bottom-left-radius: 2.5rem;\n    padding: 1rem 2rem;\n    color: var(--blue);\n    cursor: pointer;\n    text-transform: uppercase;\n    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); }\n  .btn-secondary-portfolio {\n    background: var(--green);\n    color: var(--white);\n    font-weight: 400;\n    border-top-right-radius: 2.5rem;\n    border-bottom-right-radius: 2.5rem;\n    border-top-left-radius: 2.5rem;\n    border-bottom-left-radius: 2.5rem;\n    padding: 0.5rem 1rem; }\n  .btn-primary-berberes {\n    background: var(--white);\n    color: var(--orange);\n    padding: 2rem 1rem;\n    font-weight: 700; }\n  .btn-secondary-berberes {\n    background: var(--text);\n    color: var(--white);\n    padding: 1.5rem 1rem;\n    font-weight: 700; }\n  .btn-det {\n    background: linear-gradient(to top, var(--pink) 50%, var(--background) 50%);\n    padding: 1rem; }\n  .btn-small {\n    outline: 0;\n    background: var(--green);\n    padding: 0.5rem 1rem;\n    border-radius: 0.5rem;\n    color: var(--white); }\n  .btn-small-white {\n    outline: 0;\n    background: var(--white);\n    padding: 0.5rem 1rem;\n    border-radius: 0.5rem;\n    color: var(--text); }\n\n.hidden {\n  display: none; }\n\n.box-background {\n  background: var(--sidebar); }\n\n.shadow {\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); }\n\n.gradien-vp {\n  background: linear-gradient(to bottom right, white 50%, #f1f2f6 50%); }\n\n/*\n******* icon ******\n*/\n.fa-html5 {\n  color: #dd4b25;\n  font-size: 2.5rem; }\n\n.fa-css3-alt {\n  color: #1a6fb4;\n  font-size: 2.5rem; }\n\n.fa-js {\n  color: #efd81d;\n  font-size: 2.5rem; }\n\n.fa-node-js {\n  color: #74ac5e;\n  font-size: 2.5rem; }\n\n.fa-git-alt {\n  color: #e84e31;\n  font-size: 2.5rem; }\n\n/*\n******* chargements ... ******\n*/\n.en-cours {\n  animation-name: chargement;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n  opacity: 1; }\n\n@keyframes chargement {\n  from {\n    opacity: 1;\n    transform: translateY(-20px); }\n  to {\n    opacity: 0.5; } }\n\n.load-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-height: 100vh;\n  background-color: var(--blue-1);\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: fadeout-load 0.8s ease forwards 1.7s; }\n  .load-page .circles {\n    width: 10rem;\n    height: 10rem;\n    display: flex;\n    align-items: center;\n    border-radius: 100%;\n    overflow: hidden;\n    position: relative;\n    animation: fadeout-load 0.8s ease forwards 1.7s; }\n    .load-page .circles .circle {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center; }\n      .load-page .circles .circle::after {\n        content: \"\";\n        width: 1rem;\n        height: 1rem;\n        background-color: var(--white); }\n    .load-page .circles .circle-1 {\n      animation: rotate-load-1 0.1s ease forwards; }\n    .load-page .circles .circle-2 {\n      animation: rotate-load-2 0.1s ease forwards 0.1s; }\n    .load-page .circles .circle-3 {\n      animation: rotate-load-3 0.1s ease forwards 0.2s; }\n    .load-page .circles .circle-4 {\n      animation: rotate-load-4 0.1s ease forwards 0.3s; }\n    .load-page .circles .circle-5 {\n      animation: rotate-load-5 0.1s ease forwards 0.4s; }\n    .load-page .circles .circle-6 {\n      animation: rotate-load-6 0.1s ease forwards 0.5s; }\n    .load-page .circles .circle-7 {\n      animation: rotate-load-7 0.1s ease forwards 0.6s; }\n    .load-page .circles .circle-8 {\n      animation: rotate-load-8 0.1s ease forwards 0.7s; }\n    .load-page .circles .circle-9 {\n      animation: rotate-load-9 0.1s ease forwards 0.8s; }\n    .load-page .circles .circle-10 {\n      animation: rotate-load-10 0.1s ease forwards 0.8s; }\n    .load-page .circles .circle-11 {\n      animation: rotate-load-11 0.1s ease forwards 0.9s; }\n    .load-page .circles .circle-12 {\n      animation: rotate-load-12 0.1s ease forwards 1s; }\n    .load-page .circles .circle-13 {\n      animation: rotate-load-13 0.1s ease forwards 1.1s; }\n    .load-page .circles .circle-14 {\n      animation: rotate-load-14 0.1s ease forwards 1.2s; }\n    .load-page .circles .circle-15 {\n      animation: rotate-load-15 0.1s ease forwards 1.3s; }\n    .load-page .circles .circle-16 {\n      animation: rotate-load-16 0.1s ease forwards 1.4s; }\n    .load-page .circles .circle-17 {\n      animation: rotate-load-17 0.1s ease forwards 1.5s; }\n    .load-page .circles .circle-18 {\n      animation: rotate-load-18 0.1s ease forwards 1.6s; }\n\n.p-x-left {\n  padding-left: 1rem; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  color: var(--text);\n  font-family: var(--font-family);\n  font-size: 1.6rem; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 1rem 0 1rem 0;\n  font-family: var(--font-family-title); }\n\np {\n  margin: 1rem 0; }\n\nul {\n  list-style: none; }\n\na {\n  text-decoration: none;\n  color: var(--text); }\n\nimg {\n  max-width: 100%; }\n\n/* cube */\n@keyframes rotate-heures {\n  0% {\n    transform: rotateX(0); }\n  100% {\n    transform: rotateX(360deg); } }\n\n/* cylindre */\n@keyframes rotate-cylindre {\n  0% {\n    transform: rotateX(0deg); }\n  50% {\n    transform: rotateX(90deg); }\n  100% {\n    transform: rotateX(360deg); } }\n\n/* labs content */\n@keyframes windowPointer {\n  0% {\n    transform: translateY(0); }\n  100% {\n    transform: translateY(-4rem); } }\n\n/* YOUTUBE */\n@keyframes youtube-transition {\n  from {\n    transform: translateY(0rem); }\n  to {\n    transform: translateY(10rem); } }\n\n@keyframes youtube-scale {\n  from {\n    padding: 1rem 0;\n    font-size: 4rem; }\n  to {\n    padding: 3rem 0;\n    font-size: 8rem; } }\n\n/* montres */\n@keyframes rotate-montre {\n  from {\n    transform: rotate(45deg); }\n  to {\n    transform: rotate(360deg); } }\n\n/* portfolio page */\n@keyframes show-lang {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 1;\n    transform: translateY(0.2rem); }\n  100% {\n    transform: translateY(0.4px);\n    opacity: 1; } }\n\n@keyframes show-lang-last {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 1;\n    transform: translateY(-0.2rem); }\n  100% {\n    transform: translateY(-1.5rem);\n    opacity: 1; } }\n\n/* load */\n@keyframes rotate-load {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(180deg); } }\n\n@keyframes rotate-load-1 {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(-20deg); } }\n\n@keyframes rotate-load-2 {\n  0% {\n    transform: rotate(-20deg); }\n  100% {\n    transform: rotate(-40deg); } }\n\n@keyframes rotate-load-3 {\n  0% {\n    transform: rotate(-40deg); }\n  100% {\n    transform: rotate(-60deg); } }\n\n@keyframes rotate-load-4 {\n  0% {\n    transform: rotate(-60deg); }\n  100% {\n    transform: rotate(-80deg); } }\n\n@keyframes rotate-load-5 {\n  0% {\n    transform: rotate(-80deg); }\n  100% {\n    transform: rotate(-100deg); } }\n\n@keyframes rotate-load-6 {\n  0% {\n    transform: rotate(-100deg); }\n  100% {\n    transform: rotate(-120deg); } }\n\n@keyframes rotate-load-7 {\n  0% {\n    transform: rotate(-120deg); }\n  100% {\n    transform: rotate(-140deg); } }\n\n@keyframes rotate-load-8 {\n  0% {\n    transform: rotate(-140deg); }\n  100% {\n    transform: rotate(-160deg); } }\n\n@keyframes rotate-load-9 {\n  0% {\n    transform: rotate(-160deg); }\n  100% {\n    transform: rotate(-180deg); } }\n\n@keyframes rotate-load-10 {\n  0% {\n    transform: rotate(-180deg); }\n  100% {\n    transform: rotate(-200deg); } }\n\n@keyframes rotate-load-11 {\n  0% {\n    transform: rotate(-200deg); }\n  100% {\n    transform: rotate(-220deg); } }\n\n@keyframes rotate-load-12 {\n  0% {\n    transform: rotate(-220deg); }\n  100% {\n    transform: rotate(-240deg); } }\n\n@keyframes rotate-load-13 {\n  0% {\n    transform: rotate(-240deg); }\n  100% {\n    transform: rotate(-260deg); } }\n\n@keyframes rotate-load-14 {\n  0% {\n    transform: rotate(-260deg); }\n  100% {\n    transform: rotate(-280deg); } }\n\n@keyframes rotate-load-15 {\n  0% {\n    transform: rotate(-280deg); }\n  100% {\n    transform: rotate(-300deg); } }\n\n@keyframes rotate-load-16 {\n  0% {\n    transform: rotate(-300deg); }\n  100% {\n    transform: rotate(-320deg); } }\n\n@keyframes rotate-load-17 {\n  0% {\n    transform: rotate(-320deg); }\n  100% {\n    transform: rotate(-340deg); } }\n\n@keyframes rotate-load-18 {\n  0% {\n    transform: rotate(-340deg); }\n  100% {\n    transform: rotate(-360deg);\n    opacity: 0; } }\n\n@keyframes fadeout-load {\n  0% {\n    height: 100%; }\n  50% {\n    transform: translateY(100vh); }\n  100% {\n    transform: translateY(100vh);\n    height: 0;\n    opacity: 1; } }\n\n@keyframes remplissage-right {\n  0% {\n    height: 1rem; }\n  50% {\n    height: 5rem; }\n  100% {\n    height: 9rem; } }\n\n@keyframes remplissage-top {\n  0% {\n    width: 1rem; }\n  100% {\n    width: 9rem; } }\n\n@keyframes remplissage-bottom {\n  0% {\n    width: 1rem; }\n  100% {\n    width: 9rem; } }\n\n@keyframes remplissage-left {\n  0% {\n    transform: translateY(-1rem);\n    height: 2rem; }\n  10% {\n    transform: translateY(-2rem);\n    height: 3rem; }\n  20% {\n    transform: translateY(-3rem);\n    height: 4rem; }\n  30% {\n    transform: translateY(-4rem);\n    height: 5rem; }\n  40% {\n    transform: translateY(-5rem);\n    height: 6rem; }\n  50% {\n    transform: translateY(-6rem);\n    height: 7rem; }\n  60% {\n    transform: translateY(-7rem);\n    height: 8rem; }\n  100% {\n    transform: translateY(-8rem);\n    height: 9rem; } }\n\n@keyframes rotate3d {\n  0% {\n    transform: rotateY(0deg); }\n  50% {\n    border: 10px solid var(red);\n    transform: rotateZ(30deg); }\n  100% {\n    transform: rotateY(-90deg); } }\n\n/* dropdown */\n@keyframes rotate-180 {\n  0% { }\n  100% {\n    transform: rotate(-180deg); } }\n\n@keyframes superposerBar {\n  0% {\n    margin: 0.5rem 0; }\n  100% {\n    margin: 0;\n    opacity: 0; } }\n\n@keyframes rotate-back-in {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 1;\n    transform: rotate(135deg); } }\n\n@keyframes rotate-back-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 1;\n    transform: rotate(-135deg); } }\n\n@keyframes fadeout-demo {\n  from {\n    opacity: 1;\n    z-index: 0; }\n  to {\n    opacity: 0;\n    z-index: -1; } }\n\n@keyframes fade-out-navbar {\n  0% {\n    z-index: 0; }\n  100% {\n    z-index: -1; } }\n\n@keyframes animate-nav {\n  0% {\n    z-index: -1;\n    transform: translateY(-100vh); }\n  50% {\n    z-index: 0;\n    transform: translateY(-100vh); }\n  100% {\n    z-index: 0; } }\n\n@keyframes animate-dropdown-menu {\n  0% {\n    transform: translateY(-100vh); }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes animate-dropdown-menu-labs {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.5; }\n  100% {\n    opacity: 1; } }\n\n@keyframes hiddenBarMiddle {\n  from {\n    background: var(--white); }\n  to {\n    background: var(--noir); } }\n\n@keyframes background-drop {\n  0% {\n    background: var(--blue); }\n  100% {\n    background: var(--blue-1); } }\n\n@keyframes aside-background {\n  from {\n    height: 0rem; }\n  to {\n    height: 100%; } }\n\n/* screen animation */\n@keyframes path-screen {\n  0% {\n    d: path(\"M0\"); }\n  20% {\n    d: path(\"M0,29.697v246.015v15v89\"); }\n  40% {\n    d: path(\"M0,29.697v246.015v15v89.091h190.997v80.5h-74.608v15h272.223v-15h-74.608v-80.5H505v-89\"); }\n  60% {\n    d: path(\"M0,29.697v246.015v15v89.091h190.997v80.5h-74.608v15h272.223v-15h-74.608v-80.5H505v-89.091v-15   V29\"); }\n  80% {\n    d: path(\"M0,29.697v246.015v15v89.091h190.997v80.5h-74.608v15h272.223v-15h-74.608v-80.5H505v-89.091v-15   V29.697H0z M299\"); }\n  100% {\n    d: path(\"M0,29.697v246.015v15v89.091h190.997v80.5h-74.608v15h272.223v-15h-74.608v-80.5H505v-89.091v-15   V29.697H0z M299.003\") !important; } }\n\n/* underline */\n@keyframes underline {\n  0% {\n    width: 60%; }\n  50% {\n    width: 80%; }\n  100% {\n    width: 100%; } }\n\n/* progressions */\n@keyframes progression-html {\n  /*   form{\n    grid-row: 4 / 5;\n  }\n  to{\n    grid-row: 1 / 5;\n    background: var(--green);\n  } */\n  0% {\n    grid-row: 5 / 6;\n    background: var(--red); }\n  25% {\n    grid-row: 4 / 6;\n    background: var(-red-light); }\n  50% {\n    grid-row: 3 / 6;\n    background: var(--orange); }\n  75% {\n    grid-row: 2 / 6;\n    background: var(--orange-light); }\n  100% {\n    grid-row: 1 / 6;\n    background: var(--green-light); } }\n\n@keyframes progression-css {\n  0% {\n    grid-row: 5 / 6;\n    background: var(--red); }\n  33% {\n    grid-row: 4 / 6;\n    background: var(--orange); }\n  66% {\n    grid-row: 3 / 6;\n    background: var(--orange-light); }\n  100% {\n    grid-row: 2 / 6;\n    background: var(--green-light); } }\n\n@keyframes progression-js {\n  0% {\n    grid-row: 5 / 6;\n    background: var(--red); }\n  50% {\n    grid-row: 4 / 6;\n    background: var(-red-light); }\n  100% {\n    grid-row: 3 / 6;\n    background: var(--yellow); } }\n\n@keyframes progression-node {\n  0% {\n    grid-row: 5 / 6;\n    background: var(--red); }\n  100% {\n    grid-row: 4 / 6;\n    background: var(--orange); } }\n\n@keyframes progression-git {\n  0% {\n    grid-row: 5 / 6;\n    background: var(--red); }\n  100% {\n    grid-row: 4 / 6;\n    background: var(--orange); } }\n\n/* arte */\n@keyframes glissement-mot-3 {\n  0% {\n    opacity: 0;\n    transform: translateY(4.5rem); }\n  50% {\n    opacity: 1;\n    transform: translateY(9rem); }\n  100% {\n    opacity: 0;\n    transform: translateY(16rem); } }\n\n@keyframes glissement-mot-last {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 1;\n    transform: translateY(10rem); } }\n\n@keyframes glissement-mot-2 {\n  0% {\n    opacity: 1;\n    transform: translateY(4.5rem); }\n  100% {\n    opacity: 1;\n    transform: translateY(9rem); } }\n\n@keyframes scale-mot {\n  from {\n    opacity: 1; }\n  to {\n    font-size: 8rem; } }\n\n@keyframes agrandir {\n  from {\n    padding: 4.5rem 0; }\n  to {\n    padding: 4.5rem 0; } }\n\n@keyframes arte {\n  0% {\n    justify-self: end;\n    z-index: 0; }\n  50% {\n    z-index: 0; }\n  100% {\n    transform: translateX(-9rem);\n    z-index: 2; } }\n\n@keyframes fadein-generique {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1;\n    z-index: 2; } }\n\n@keyframes display-logo {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes glissement-progression-one {\n  0% {\n    opacity: 0; }\n  50% {\n    transform: translateY(4.5rem);\n    opacity: 1; }\n  100% {\n    opacity: 1;\n    transform: translateY(4.5rem); } }\n\n@keyframes glissement-progression-last {\n  0% {\n    opacity: 1; }\n  100% {\n    transform: translateY(4.5rem);\n    opacity: 1; } }\n\n@keyframes glissement-progression {\n  0% {\n    opacity: 0; }\n  50% {\n    transform: translateY(4.5rem);\n    opacity: 1; }\n  100% {\n    transform: translateY(9rem);\n    opacity: 1; } }\n\n@keyframes text-animation {\n  0% {\n    opacity: 1;\n    font-size: 1rem; }\n  100% {\n    transform: scale(2);\n    opacity: 1; } }\n\n@keyframes rotate-picture {\n  0% {\n    opacity: 0;\n    z-index: 0; }\n  100% {\n    opacity: 1;\n    transform: rotate(-360deg) scale(5) translateY(-0.5rem); } }\n\n@keyframes effet-transition {\n  0% {\n    opacity: 1; }\n  100% {\n    transform: scale(1.2);\n    opacity: 1; } }\n\n@keyframes glissement-x-60 {\n  0% {\n    opacity: 1; }\n  100% {\n    transform: translateX(-55rem); } }\n\n@keyframes glissement-x-50 {\n  0% {\n    opacity: 1; }\n  100% {\n    transform: translateX(-50rem); } }\n\n@keyframes glissement-x-40 {\n  0% {\n    opacity: 1; }\n  100% {\n    transform: translateX(-40rem); } }\n\n@keyframes glissement-x-30 {\n  0% {\n    opacity: 1; }\n  100% {\n    transform: translateX(-40rem); } }\n\n@keyframes glissement-x-25 {\n  0% {\n    opacity: 1; }\n  100% {\n    transform: translateX(-25rem); } }\n\n@keyframes glissement-x-20 {\n  0% {\n    opacity: 1; }\n  100% {\n    transform: translateX(-20rem); } }\n\n@keyframes glissement-x-15 {\n  0% {\n    opacity: 1; }\n  100% {\n    transform: translateX(-15rem); } }\n\n@keyframes glissement-x-10 {\n  0% {\n    opacity: 1; }\n  100% {\n    transform: translateX(-10rem); } }\n\n@keyframes fadeout {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0.5; }\n  100% {\n    opacity: 0; } }\n\n@keyframes glissement-progress {\n  0% {\n    opacity: 1; }\n  100% {\n    grid-column: 6 / 7; } }\n\n@keyframes progress-html {\n  0% {\n    grid-row: 8 / 9; }\n  20% {\n    grid-row: 7 / 9; }\n  40% {\n    grid-row: 6 / 9; }\n  60% {\n    grid-row: 5 / 9; }\n  80% {\n    grid-row: 4 / 9; }\n  100% {\n    grid-row: 3 / 9;\n    background: var(--green); } }\n\n@keyframes progress-css {\n  0% {\n    grid-row: 8 / 9; }\n  25% {\n    grid-row: 7 / 9; }\n  50% {\n    grid-row: 6 / 9; }\n  75% {\n    grid-row: 5 / 9; }\n  100% {\n    grid-row: 4 / 9;\n    background: var(--blue-light); } }\n\n@keyframes progress-git {\n  0% {\n    grid-row: 8 / 9; }\n  50% {\n    grid-row: 7 / 9; }\n  100% {\n    grid-row: 6 / 9;\n    background: var(--orange); } }\n\n@keyframes progress-js {\n  0% {\n    grid-row: 8 / 9; }\n  100% {\n    grid-row: 7 / 9;\n    background: var(--orange-light); } }\n\n@keyframes progress-node {\n  0% {\n    grid-row: 8 / 9; }\n  100% {\n    grid-row: 8 / 9;\n    background: var(--red); } }\n\n@keyframes skill-picture-html {\n  0% {\n    grid-column: 2 / 3; }\n  100% {\n    grid-column: 3 / 4; } }\n\n@keyframes skill-picture-css {\n  0% {\n    grid-column: 2 / 3; }\n  50% {\n    grid-column: 3 / 4; }\n  100% {\n    grid-column: 4 / 5; } }\n\n@keyframes skill-picture-git {\n  0% {\n    grid-column: 2 / 3; }\n  50% {\n    grid-column: 3 / 4; }\n  75% {\n    grid-column: 4 / 5; }\n  100% {\n    grid-column: 5 / 6; } }\n\n@keyframes skill-picture-js {\n  0% {\n    grid-column: 2 / 3; }\n  25% {\n    grid-column: 3 / 4; }\n  50% {\n    grid-column: 4 / 5; }\n  75% {\n    grid-column: 5 / 6; }\n  100% {\n    grid-column: 6 / 7; } }\n\n@keyframes skill-picture-js {\n  0% {\n    grid-column: 2 / 3; }\n  25% {\n    grid-column: 3 / 4; }\n  50% {\n    grid-column: 4 / 5; }\n  75% {\n    grid-column: 5 / 6; }\n  100% {\n    grid-column: 6 / 7; } }\n\n@keyframes skill-picture-node {\n  0% {\n    grid-column: 2 / 3; }\n  20% {\n    grid-column: 3 / 4; }\n  40% {\n    grid-column: 4 / 5; }\n  60% {\n    grid-column: 5 / 6; }\n  80% {\n    grid-column: 6 / 7; }\n  100% {\n    grid-column: 7 / 8; } }\n\n@keyframes gliss-skill-titre {\n  0% {\n    transform: translateY(3rem); }\n  100% {\n    transform: translateY(6rem); } }\n\n@keyframes rotate-skill-picture {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 1;\n    width: 40%;\n    transform: rotate(180deg); }\n  100% {\n    opacity: 1;\n    width: 100%;\n    transform: rotate(360deg); } }\n\n@keyframes skill-titre {\n  0% {\n    opacity: 1; }\n  50% {\n    transform: translateY(-8rem);\n    opacity: 1; }\n  100% {\n    transform: translateY(2rem);\n    opacity: 1;\n    z-index: 3; } }\n\n@keyframes display-skill {\n  0% {\n    z-index: -2; }\n  100% {\n    z-index: 2; } }\n\n@keyframes display-contact {\n  0% {\n    z-index: -3;\n    opacity: 0; }\n  100% {\n    z-index: 2; } }\n\n@keyframes display-introduction {\n  0% {\n    z-index: 0; }\n  100% {\n    z-index: 2; } }\n\n@keyframes display-resume {\n  0% {\n    z-index: -4; }\n  100% {\n    z-index: 4; } }\n\n@keyframes carousel-slide {\n  0% { }\n  50% {\n    transform: translateX(-80rem); }\n  100% {\n    transform: translateX(-160rem); } }\n\n@keyframes first-elem-carousel {\n  0% {\n    opacity: 1; }\n  100% {\n    transform: translateX(-80rem); } }\n\n@keyframes justify-content {\n  0% {\n    justify-content: start; }\n  20% {\n    justify-content: center; }\n  40% {\n    justify-content: end; }\n  60% {\n    justify-content: space-around; }\n  80% {\n    justify-content: space-evenly; }\n  100% {\n    justify-content: space-between; } }\n\n@keyframes justify-start {\n  0% {\n    z-index: 0; }\n  50% {\n    z-index: 1; }\n  100% {\n    z-index: 0; } }\n\n@keyframes justify-center {\n  0% {\n    z-index: 0; }\n  50% {\n    z-index: 1; }\n  100% {\n    z-index: 0; } }\n\n@keyframes justify-end {\n  0% {\n    z-index: 0; }\n  50% {\n    z-index: 1; }\n  100% {\n    z-index: 0; } }\n\n@keyframes justify-space-around {\n  0% {\n    z-index: 0; }\n  50% {\n    z-index: 1; }\n  100% {\n    z-index: 0; } }\n\n@keyframes justify-space-evenly {\n  0% {\n    z-index: 0; }\n  50% {\n    z-index: 1; }\n  100% {\n    z-index: 0; } }\n\n@keyframes justify-space-between {\n  0% {\n    z-index: 0; }\n  50% {\n    z-index: 1; }\n  100% {\n    z-index: 0; } }\n\n@keyframes justify-items {\n  0% {\n    justify-items: stretch; }\n  50% {\n    justify-items: start; }\n  75% {\n    justify-items: center; }\n  100% {\n    justify-items: end; } }\n\n@keyframes justify-items-stretch {\n  0% {\n    z-index: 0; }\n  50% {\n    z-index: 1; }\n  100% {\n    z-index: 0;\n    opacity: 0; } }\n\n@keyframes justify-items-start {\n  0% {\n    z-index: 0; }\n  50% {\n    z-index: 1; }\n  100% {\n    z-index: 0;\n    opacity: 0; } }\n\n@keyframes justify-items-center {\n  0% {\n    z-index: 0; }\n  50% {\n    z-index: 1; }\n  100% {\n    z-index: 0;\n    opacity: 0; } }\n\n@keyframes justify-items-end {\n  0% {\n    z-index: 0; }\n  50% {\n    z-index: 1; }\n  100% {\n    z-index: 0;\n    opacity: 0; } }\n\n@keyframes auto-flow {\n  0% {\n    grid-auto-flow: row dense; }\n  100% {\n    grid-auto-flow: column dense; } }\n\n@keyframes load {\n  0% {\n    border-left: 1px solid var(--white); }\n  25% {\n    border-top: 1px solid var(--white);\n    border-left: 1px solid var(--white); }\n  50% {\n    border-right: 1px solid var(--white);\n    border-top: 1px solid var(--white); }\n  75% {\n    border-bottom: 1px solid var(--white);\n    border-right: 1px solid var(--white); }\n  100% {\n    border: 0; } }\n\n@keyframes img-profil-display {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes html-profil-glissment {\n  0% {\n    grid-column: 7 / 8; }\n  25% {\n    grid-column: 6 / 7; }\n  50% {\n    grid-column: 5 / 6; }\n  75% {\n    grid-column: 4 / 5; }\n  100% {\n    grid-column: 3 / 4;\n    transform: rotate(360deg); } }\n\n@keyframes css-profil-glissment {\n  0% {\n    grid-column: 7 / 8; }\n  50% {\n    grid-column: 6 / 7; }\n  75% {\n    grid-column: 5 / 6; }\n  100% {\n    grid-column: 4 / 5; } }\n\n@keyframes git-profil-glissment {\n  0% {\n    grid-column: 7 / 8; }\n  50% {\n    grid-column: 6 / 7; }\n  100% {\n    grid-column: 5 / 6; } }\n\n@keyframes js-profil-glissment {\n  0% {\n    grid-column: 7 / 8; }\n  100% {\n    grid-column: 6 / 7; } }\n\n@keyframes fadeout-75 {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes trans-barre {\n  0% {\n    opacity: 1; }\n  20% {\n    transform: translateX(2rem);\n    opacity: 0.8; }\n  40% {\n    transform: translateX(2rem);\n    opacity: 0.6; }\n  60% {\n    transform: translateX(2rem);\n    opacity: 0.4; }\n  80% {\n    transform: translateX(2rem);\n    opacity: 0.2; }\n  100% {\n    transform: translateX(2rem);\n    opacity: 0; } }\n\n@keyframes transitionX {\n  0% {\n    opacity: 1; }\n  100% {\n    transform: translateX(50rem); } }\n\n@keyframes fadeout-barre {\n  0% {\n    padding: 2.5rem; }\n  100% {\n    padding: 0; } }\n\n/* Landscape phones and down */\n/* Landscape phone to portrait tablet */\n/* Portrait tablet to landscape and desktop */\n/* Large desktop */\nbody {\n  background: var(--blue); }\n\n.main {\n  line-height: 2.5rem;\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid: \"aside-left page aside-right\" auto / 1fr 2fr 1fr;\n  position: relative;\n  color: var(--white); }\n  @media (min-width: 480px) and (max-width: 767px) {\n    .main {\n      grid: \"aside-right\" 5rem \"page\" auto \"aside-left\" 5rem / auto; } }\n  @media (max-width: 480px) {\n    .main {\n      grid: \"aside-right\" 5rem \"page\" auto \"aside-left\" 5rem / auto; } }\n  .main .aside-left {\n    grid-area: aside-left;\n    max-height: 100vh;\n    position: sticky;\n    top: 0;\n    display: flex;\n    align-items: center;\n    background: var(--blue); }\n    .main .aside-left .socials {\n      flex: 0 0 5rem;\n      position: relative;\n      position: relative; }\n      .main .aside-left .socials .socials-list {\n        background: var(--gray); }\n        .main .aside-left .socials .socials-list .social-elem {\n          display: block;\n          cursor: pointer;\n          position: relative; }\n          .main .aside-left .socials .socials-list .social-elem img {\n            padding: 0.8rem; }\n          .main .aside-left .socials .socials-list .social-elem:hover {\n            transition: all 0.4s;\n            transform: translateX(2rem); }\n          .main .aside-left .socials .socials-list .social-elem::after {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            z-index: -1;\n            background-color: var(--gray); }\n      .main .aside-left .socials::before {\n        content: \"Follow me\";\n        font-size: 1rem;\n        position: absolute;\n        top: -2.2rem;\n        left: 0.2rem; }\n      @media (min-width: 480px) and (max-width: 767px) {\n        .main .aside-left .socials {\n          display: none; } }\n      @media (max-width: 480px) {\n        .main .aside-left .socials {\n          display: none; } }\n    .main .aside-left .background {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background: var(--text);\n      z-index: 1;\n      transform: translateY(-100vh); }\n    @media (min-width: 480px) and (max-width: 767px) {\n      .main .aside-left .icon {\n        display: none; } }\n    @media (max-width: 480px) {\n      .main .aside-left .icon {\n        display: none; } }\n  .main .page {\n    grid-area: page;\n    background-color: var(--blue);\n    display: flex;\n    flex-direction: column;\n    line-height: 2.5rem;\n    position: relative; }\n    .main .page .dropdown-menu {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      transform: translateY(-100vh);\n      z-index: 1; }\n      @media (min-width: 480px) and (max-width: 767px) {\n        .main .page .dropdown-menu {\n          transform: translateY(calc(100vh - 10rem)); } }\n      @media (max-width: 480px) {\n        .main .page .dropdown-menu {\n          transform: translateY(calc(100vh - 10rem)); } }\n      .main .page .dropdown-menu .dropdown-menu-list {\n        min-height: 100vh;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        background: var(--text); }\n        @media (min-width: 480px) and (max-width: 767px) {\n          .main .page .dropdown-menu .dropdown-menu-list {\n            min-height: calc(100vh - 10rem); } }\n        @media (max-width: 480px) {\n          .main .page .dropdown-menu .dropdown-menu-list {\n            min-height: calc(100vh - 10rem); } }\n        .main .page .dropdown-menu .dropdown-menu-list li {\n          padding: 6rem 25rem;\n          text-align: center;\n          margin: 0.5rem 0;\n          background: var(--gray);\n          position: relative; }\n          @media (min-width: 480px) and (max-width: 767px) {\n            .main .page .dropdown-menu .dropdown-menu-list li {\n              padding: 3rem 15rem; } }\n          @media (max-width: 480px) {\n            .main .page .dropdown-menu .dropdown-menu-list li {\n              padding: 3rem 15rem; } }\n          .main .page .dropdown-menu .dropdown-menu-list li::after {\n            content: \"\";\n            width: 0%;\n            height: 75%;\n            background: var(--dark);\n            position: absolute;\n            top: 0;\n            left: 0;\n            opacity: 0.2; }\n          .main .page .dropdown-menu .dropdown-menu-list li::before {\n            content: \"\";\n            width: 0%;\n            height: 25%;\n            background: var(--noir);\n            position: absolute;\n            bottom: 0;\n            right: 0;\n            z-index: 0; }\n          .main .page .dropdown-menu .dropdown-menu-list li a {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            z-index: 1;\n            font-size: 4rem;\n            padding: 2rem;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: var(--text); }\n            @media (min-width: 480px) and (max-width: 767px) {\n              .main .page .dropdown-menu .dropdown-menu-list li a {\n                font-size: 2rem; } }\n            @media (max-width: 480px) {\n              .main .page .dropdown-menu .dropdown-menu-list li a {\n                font-size: 2rem; } }\n          .main .page .dropdown-menu .dropdown-menu-list li:hover::before {\n            transition: all ease 0.8s;\n            width: 100%; }\n          .main .page .dropdown-menu .dropdown-menu-list li:hover::after {\n            transition: all ease 0.8s;\n            transition-delay: 0.1s;\n            padding-left: 100%; }\n      .main .page .dropdown-menu p {\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        color: var(--gray);\n        text-align: center;\n        font-size: 1.4rem;\n        letter-spacing: 0.1rem; }\n  .main .aside-right {\n    grid-area: aside-right;\n    background-color: var(--blue);\n    max-height: 100vh;\n    position: sticky;\n    top: 0; }\n    .main .aside-right .menu {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end; }\n      .main .aside-right .menu .dropdown-toggle {\n        margin-right: 5rem;\n        height: 5rem;\n        width: 5rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        z-index: 2; }\n        @media (min-width: 480px) and (max-width: 767px) {\n          .main .aside-right .menu .dropdown-toggle {\n            margin-right: 1rem;\n            width: 4rem;\n            height: 4rem; } }\n        @media (max-width: 480px) {\n          .main .aside-right .menu .dropdown-toggle {\n            margin-right: 1rem;\n            width: 4rem;\n            height: 4rem; } }\n        .main .aside-right .menu .dropdown-toggle i {\n          flex: 0 0 0.2rem;\n          background: var(--white);\n          margin: 0; }\n          .main .aside-right .menu .dropdown-toggle i:nth-child(2) {\n            margin: 1rem 0;\n            opacity: 1; }\n        .main .aside-right .menu .dropdown-toggle:not(:focus):hover i {\n          transition: all 0.2s;\n          margin: 0.7rem 0; }\n    .main .aside-right .background {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      background: var(--text);\n      z-index: 1;\n      transform: translateY(-100vh); }\n    .main .aside-right .icon {\n      position: absolute;\n      top: calc(50vh - 5rem);\n      right: 0; }\n      @media (min-width: 480px) and (max-width: 767px) {\n        .main .aside-right .icon {\n          display: none; } }\n      @media (max-width: 480px) {\n        .main .aside-right .icon {\n          display: none; } }\n", "",{"version":3,"sources":["webpack://./src/assets/styles/_variables.scss","webpack://./src/assets/styles/_reset.scss","webpack://./src/assets/styles/_classes.scss","webpack://./src/assets/styles/styles.scss","webpack://./src/assets/styles/_utils.scss","webpack://./src/assets/styles/_base.scss","webpack://./src/assets/styles/_animations.scss","webpack://./src/assets/styles/_media-queries.scss"],"names":[],"mappings":"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","sourcesContent":[":root{\n  --PI: 3.14159265358979;\n  --racin-2:1.41421356237;  \n  --font-family: 'Montserrat', sans-serif;\n  --font-family-title:'Oswald', sans-serif;\n  --font-family-secondary: 'Shadows Into Light', cursive;\n  --font-family-ledor:'Montserrat', sans-serif;\n  --font-family-youtube:'Roboto', sans-serif;\n  --text:#333; \n  --red-light:#ff6b6b;\n  --red:#ee5253;\n  --green:#10ac84;\n  --green-light:#1dd1a1;\n  --green-faded:#81ecec;\n  --blue:#1977d2;\n  --blue-1:#1977c2;\n  --blue-2:#1977a2; \n  --blue-3:#1977b2;   \n  --blue-light:#1cbdfd;\n  --blue-faded:#60a3bc;  \n  --gray:#f1f2f6;\n  --gray-light:#f1f2f6;\n  --gray-dark:#dfe6e9;\n  --gray-portfolio:#8a8a8a;\n  --dark:#2f3542;\n  --dark-light:#57606f;\n  --yellow:#fed330;\n  --yellow-light:#f7b731;\n  --orange-light:#fd9644;\n  --white:#ffffff;\n  --text-light:rgba(0,0,0,.5);\n  --pink:#ebd4d4;\n  --brown:#d5ae69;\n  --brown-light:#d4ac66;\n  --orange:#fad390;\n  --dark: #343434;\n  --white:#fff;\n  --background:#faf4f4;\n  --noir:#000;\n  --hint:#aaa;\n  --linkedin:#2779aa;\n  --twitter:#1c9cea;\n  --facebook:#4064ac;\n  --dark:#011741;\n  --sidebar:#f5f5f5;\n  --html:#dd4b26;\n  --css:#254bdd;\n  --youtube-background:#191919;\n  --youtube-navbar:#212121;\n  --youtube-navbar-light:#323232;\n  --youtube-icon:#90908F;\n  --youtube-red:#cc0100;\n  --alerte:#ef3c00;\n  --shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);\n\n}","*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n","@import \"../styles/reset\";\n\n/* text color */\n.text-dark{\n  color: var(--dark);\n}\n.text-red{\n  color: var(--red);\n}\n.text-gray{\n  color: var(--gray);\n}\n.text-green{\n  color: var(--green);\n}\n.text-blue{\n  color: var(--blue);\n}\n/* labs */\n.strong-labs{\n  color: var(--red);\n}\n.labs-content{\n  margin: 5rem 0;\n}\n/* window */\n.window{\n  background: var(--gray);\n  min-height: 40rem;\n  display: flex;\n  flex-direction: column;  \n  .window-titre{\n    position: relative;\n    padding: 0.5rem;\n    background: var(--dark);\n    i{\n      display: block;\n      width: 1.2rem;\n      height: 1.2rem;\n      background-color: var(--red);\n      border-radius: 100%;  \n      position: relative;\n      &::before{\n        content: \"\";\n        position: absolute;\n        right: -1.4rem;\n        width: 100%;\n        height: 100%;\n        background-color: var(--yellow);\n        border-radius: 100%;  \n      }\n      &::after{\n        content: \"\";\n        position: absolute;\n        right: -2.8rem;\n        width: 100%;\n        height: 100%;\n        background-color: var(--green);\n        border-radius: 100%;  \n      } \n    } \n    p{\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: 0;\n      font-size: 1.2rem;\n      font-weight: 700;\n      color: var(--gray);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }      \n  }  \n  .window-content{\n    flex: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;    \n  }\n}\n/* page zindex animation dropdown */\n.Zindex{\n  z-index: 0;\n}\n\n/* Icons */\n.bi{\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  .bi-list{\n    height: 0.2rem;\n    background: var(--text);\n    &::before{\n      content: \"\";\n      width: 100%;\n      height: 0.2rem;\n      background: var(--text);\n      position: absolute;\n      top:0;\n    }\n    &::after{\n      content: \"\";\n      width: 100%;\n      height: 0.2rem;\n      background: var(--text);\n      position: absolute;\n      bottom: 0;\n    }\n  }\n/* &:hover{\n  .bi-list{\n    &::before{\n      transition: all 0.2s;\n      top: -0.2rem;\n    }\n    &::after{\n      transition: all 0.2s;\n      bottom: -0.2rem;\n    }  \n  }\n} */\n}\n.arrow{\n  &-edit{\n    width: 2rem;\n    height: 2rem;\n    border: 0.1rem solid var(--text);\n    display: flex;\n    align-items: center;\n    &::after{\n      content: \"\";\n      width: 100%;\n      height: 0.1rem;\n      background-color: var(--text);\n      transform: rotate(45deg);\n    }\n  }\n  &-soustraire{\n    width: 2rem;\n    height: 0.2rem;\n    background: var(--text);\n    display: block;\n  }\n  &-addition{\n    width: 2rem;\n    height: 2rem;\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    &::after{\n      content: \"\";\n      position: absolute;\n      width: 100%;\n      height: 0.2rem;\n      background: var(--text);\n    }\n    &::before{\n      content: \"\";\n      position: absolute;\n      width: 0.2rem;\n      height: 100%;\n      background: var(--text);\n    }\n  }\n  &-egale{\n    width: 2rem;\n    height: 1rem;\n    position: relative;\n    display: block;\n    &::after{\n      content: \"\";\n      width: 100%;\n      height: 0.2rem;\n      background: var(--text);\n      position: absolute;\n      top: 0;\n    }\n    &::before{\n      content: \"\";\n      width: 100%;\n      height: 0.2rem;\n      background: var(--text);  \n      bottom: 0;\n      position: absolute;\n    }\n  }\n  &-rest-division{\n    width: 2rem;\n    height: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    transform: rotate(-60deg);\n    i{\n      width: 100%;\n      height: 0.1rem;\n      border: 0.1rem solid var(--text);\n      background: var(--text);\n      position: absolute;\n      display: flex;\n      justify-content: center;\n    }\n    &::after{\n      content: \"\";\n      position: absolute;\n      top: 0;\n      width: 0.5rem;\n      height: 0.5rem;\n      border: 0.1rem solid var(--text);\n      border-radius: 100%;\n    }\n    &::before{\n      content: \"\";\n      position: absolute;\n      bottom: 0;\n      width: 0.5rem;\n      height: 0.5rem;\n      border: 0.1rem solid var(--text);\n      border-radius: 100%;\n    } \n  }\n  &-division{\n    width: 2rem;\n    height: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    i{\n      width: 100%;\n      height: 0.1rem;\n      border: 0.1rem solid var(--text);\n      background: var(--text);\n      position: absolute;\n      display: flex;\n      justify-content: center;\n    }\n    &::after{\n      content: \"\";\n      position: absolute;\n      top: 0;\n      width: 0.5rem;\n      height: 0.5rem;\n      background: var(--text);\n      border-radius: 100%;\n    }\n    &::before{\n      content: \"\";\n      position: absolute;\n      bottom: 0;\n      width: 0.5rem;\n      height: 0.5rem;\n      background: var(--text);\n      border-radius: 100%;\n    }  \n  }\n  &-delete{\n    width: 4rem;\n    height: 2.82rem; // 2 racine de 2\n    border-right: 0.2rem solid var(--text);\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    position: relative;\n    i{\n      &:nth-child(1){\n        width: 2rem;\n        height: 2rem;\n        border-left: 0.2rem solid var(--text);\n        border-bottom: 0.2rem solid var(--text);\n        transform: rotate(45deg);    \n      }\n      &:nth-child(2){\n        width: calc(100% - 1rem);    \n        height: 100%;\n        //border: 0.1rem solid var(--green);\n        position: absolute;\n        left: 1rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        &::after{\n          content: \"\";\n          width: 60%;\n          height: 0.2rem;\n          background: var(--text);\n          transform: rotate(45deg);\n          position: absolute;\n        }\n        &::before{\n          content: \"\";\n          width: 60%;\n          height: 0.2rem;\n          background: var(--text);\n          transform: rotate(-45deg); \n          position: absolute;   \n        }\n      }\n\n    }\n    &::after{\n      content: \"\";\n      width: calc(100% - 1rem);\n      height: 0.2rem;\n      background: var(--text);\n      position: absolute;\n      top: 0;\n      left: 1rem;\n    }\n    &::before{\n      content: \"\";\n      width: calc(100% - 1rem);\n      height: 0.2rem;\n      background: var(--text);\n      position: absolute;\n      bottom: 0;\n      left: 1rem;\n    }  \n\n  }\n  &-right{\n    width: 2rem;\n    height: 2rem;\n    display: block;  \n    border-top: 2px solid var(--text);\n    border-right: 2px solid var(--text);  \n    transform: rotate(45deg);\n  }\n  &-top{\n    width: 2rem;\n    height: 2rem;\n    display: block;  \n    border-top: 2px solid var(--text);\n    border-right: 2px solid var(--text);  \n    transform: rotate(-45deg);\n  }\n  &-bottom{\n    width: 2rem;\n    height: 2rem;\n    display: block;  \n    border-top: 2px solid var(--text);\n    border-right: 2px solid var(--text);  \n    transform: rotate(135deg);\n  }    \n  &-left{\n    width: 2rem;\n    height: 2rem;\n    display: block;  \n    border-top: 2px solid var(--text);\n    border-right: 2px solid var(--text);  \n    transform: rotate(-135deg);\n  } \n  &-down-left{\n    width: 2rem;\n    height: 2rem;\n    //border: 0.2rem solid var(--text);\n    //border-right: 2px solid var(--text);   \n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(90deg);\n    &::after{\n      content: \"\";\n      width: 1.4rem;\n      height: 1.4rem;\n      border-bottom: 0.2rem solid var(--text);\n      border-right: 0.2rem solid var(--text);\n      display: block;\n      transform: rotate(45deg);\n      \n    } \n    &::before{\n      content: \"\";\n      width: 0.2rem;\n      height: 100%;\n      display: block;\n      position: absolute;\n      background: var(--text);\n    }\n  }   \n  &-top-b{\n    width: 2rem;\n    height: 2rem;\n    //border: 0.2rem solid var(--text);\n    //border-right: 2px solid var(--text);   \n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(180deg);\n    &::after{\n      content: \"\";\n      width: 1.4rem;\n      height: 1.4rem;\n      border-bottom: 0.2rem solid var(--text);\n      border-right: 0.2rem solid var(--text);\n      display: block;\n      transform: rotate(45deg);\n      \n    } \n    &::before{\n      content: \"\";\n      width: 0.2rem;\n      height: 100%;\n      display: block;\n      position: absolute;\n      background: var(--text);\n    }\n  }     \n  &-right-b{\n    width: 2rem;\n    height: 2rem;\n    //border: 0.2rem solid var(--text);\n    //border-right: 2px solid var(--text);   \n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(-90deg);\n    &::after{\n      content: \"\";\n      width: 1.4rem;\n      height: 1.4rem;\n      border-bottom: 0.2rem solid var(--text);\n      border-right: 0.2rem solid var(--text);\n      display: block;\n      transform: rotate(45deg);\n      \n    } \n    &::before{\n      content: \"\";\n      width: 0.2rem;\n      height: 100%;\n      display: block;\n      position: absolute;\n      background: var(--text);\n    }\n  }  \n  &-bottom-b{\n    width: 2rem;\n    height: 2rem;\n    //border: 0.2rem solid var(--text);\n    //border-right: 2px solid var(--text);   \n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(0deg);\n    &::after{\n      content: \"\";\n      width: 1.4rem;\n      height: 1.4rem;\n      border-bottom: 0.2rem solid var(--text);\n      border-right: 0.2rem solid var(--text);\n      display: block;\n      transform: rotate(45deg);\n      \n    } \n    &::before{\n      content: \"\";\n      width: 0.2rem;\n      height: 100%;\n      display: block;\n      position: absolute;\n      background: var(--text);\n    }\n  }  \n  &-left-b{\n    width: 2rem;\n    height: 2rem;\n    //border: 0.2rem solid var(--text);\n    //border-right: 2px solid var(--text);   \n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(90deg);\n    &::after{\n      content: \"\";\n      width: 1.4rem;\n      height: 1.4rem;\n      border-bottom: 0.2rem solid var(--text);\n      border-right: 0.2rem solid var(--text);\n      display: block;\n      transform: rotate(45deg);\n      \n    } \n    &::before{\n      content: \"\";\n      width: 0.2rem;\n      height: 100%;\n      display: block;\n      position: absolute;\n      background: var(--text);\n    }\n  } \n  &-down-left{\n    width: 2rem;\n    height: 2rem;\n    //border: 0.2rem solid var(--text);\n    //border-right: 2px solid var(--text);   \n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(45deg);\n    &::after{\n      content: \"\";\n      width: 1.4rem;\n      height: 1.4rem;\n      border-bottom: 0.2rem solid var(--text);\n      border-right: 0.2rem solid var(--text);\n      display: block;\n      transform: rotate(45deg);\n      \n    } \n    &::before{\n      content: \"\";\n      width: 0.2rem;\n      height: 100%;\n      display: block;\n      position: absolute;\n      background: var(--text);\n    }\n  }   \n  &-down-right{\n    width: 2rem;\n    height: 2rem;\n    //border: 0.2rem solid var(--text);\n    //border-right: 2px solid var(--text);   \n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(-45deg);\n    &::after{\n      content: \"\";\n      width: 1.4rem;\n      height: 1.4rem;\n      border-bottom: 0.2rem solid var(--text);\n      border-right: 0.2rem solid var(--text);\n      display: block;\n      transform: rotate(45deg);\n      \n    } \n    &::before{\n      content: \"\";\n      width: 0.2rem;\n      height: 100%;\n      display: block;\n      position: absolute;\n      background: var(--text);\n    }\n  }  \n  &-close{\n    width: 2.5rem;\n    height: 2.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    &::after{\n      content: \"\";\n      height: 0.2rem;\n      width: 100%;\n      background: var(--text);\n      position: absolute;\n      transform: rotate(135deg);\n    }\n    &::before{\n      content: \"\";\n      height: 0.2rem;\n      width: 100%;\n      background: var(--text);\n      position: absolute;\n      transform: rotate(-135deg);\n    }\n\n  }\n  &-validate{\n    content: \"\";\n    width: 2.5rem;\n    height: 2.5rem;\n    //background: red;\n    display: flex;\n    transform: rotate(135deg);\n    &::before{\n      content: \"\";\n      width: 100%;\n      height: 0.1rem;\n      background: var(--text);\n      border: 0.1rem solid var(--text);\n      align-self: center;\n    }\n    &::after{\n      content: \"\";\n      width: 0.1rem;\n      height: 50%;\n      background: var(--text);\n      align-self: flex-end;\n      border: 0.1rem solid var(--text);\n    }\n\n  }\n  &-repeat{\n    width: 2rem;\n    height: 2rem;\n    border: 0.2rem solid var(--text);\n    display: flex;\n    //transform: rotate(45deg);\n    background: linear-gradient(to bottom, var(--text) 50%, var(--text) 50%);\n\n  }\n}\n.carret{\n  &-up-fill{\n    width: 2rem;\n    height: 2rem;\n    display: block;\n    position: relative;\n    background: linear-gradient(to bottom left, var(--text) 50%, var(--gray) 50%);\n    transform: rotate(-45deg);\n  }\n  &-right-fill{\n    width: 2rem;\n    height: 2rem;\n    display: block;\n    position: relative;\n    background: linear-gradient(to bottom left, var(--text) 50%, var(--gray) 50%);\n    transform: rotate(45deg);\n  }  \n  &-bottom-fill{\n    width: 2rem;\n    height: 2rem;\n    display: block;\n    position: relative;\n    background: linear-gradient(to bottom left, var(--text) 50%, var(--gray) 50%);\n    transform: rotate(135deg);\n  }    \n  &-left-fill{\n    width: 2rem;\n    height: 2rem;\n    display: block;\n    position: relative;\n    background: linear-gradient(to bottom left, var(--text) 50%, var(--gray) 50%);\n    transform: rotate(-135deg);\n  }      \n}\n\n/* animation dropdown */\n\n.superposer-bar{\n  animation: superposerBar 0.2s forwards 0.1s;\n}\n.rotate-180{\n  animation: rotate-180 ease 0.2s forwards;  \n}\n.rotate-back-in{\n  animation: rotate-back-in 0.1s forwards .6s;\n}\n.rotate-back-out{\n  animation: rotate-back-out 0.1s forwards .6s;\n}\n.animate-dropdown-menu{\n  animation: animate-dropdown-menu .4s ease forwards 0.2s;\n}\n.animate-dropdown-menu-labs{\n  animation: animate-dropdown-menu-labs 2s ease forwards 0.2s;\n}\n.fadeout-demo{\n  animation: fadeout-demo 0.1s forwards .2s;\n}\n/* page structure */\n.fade-out-navbar{\n  z-index: 0;\n}\n.animate-nav{\n  animation: animate-nav .8s ease forwards 0.2s;\n}\n\n.aside-background{\n  animation: aside-background .4s ease forwards .2s;\n}\n\n.background-drop{\n  animation: background-drop 0.1s ease forwards 1s;\n}\n.z-index-1{\n  z-index: 1;\n}\n.fadeout{\n  animation: fadeout 0.2s ease forwards .6s;\n}\n\n/* icon direction */\n\n.icon{\n  width: 8rem;\n  height: 8rem;\n  .icon-direction{\n    cursor: pointer;\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n    .bar-bottom{\n      width: 100%;\n      height: 100%;\n      border-radius: 100%;\n      display: flex;\n      align-items: center;\n      transform: rotate(-45deg);\n      transition: all 0.4s;\n      background: var(--blue);\n      &::after{\n        content: \"\";\n        position: absolute;\n        width: 50%;\n        height: 0.1rem;\n        border: 0.1rem solid var(--white);\n        background: var(--white);  \n      }\n    }\n    .bar-top{\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      border-radius: 100%;\n      display: flex;\n      justify-content: center;\n      transform: rotate(-45deg);  \n      transition: all 0.4s;\n      &::before{\n        content: \"\";\n        display: block;\n        width: 0.1rem;\n        height: 50%;\n        border: 0.1rem solid var(--white);\n        background: var(--white);\n  \n      }\n    }\n    .icon-direction-titre{\n      color: var(--white);\n      margin: 0;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      text-align: end;\n      p{\n        line-height: 8rem;\n        margin: 0;\n        padding: 0;\n        color: var(--white);\n        font-weight: 700;\n        font-size: 1.4rem;    \n        opacity: 1;\n      }\n    }\n    &.left{\n      transform: rotate(180deg);\n      .icon-direction-titre{\n        p{\n          opacity: 0;\n          transition: all 0.4s ease;\n\n        }\n      }\n      &:hover{\n        .icon-direction-titre{\n          transform: rotate(180deg);\n          p{\n            transition: all 0.4s ease;\n            transform: translateX(5.7rem);\n            opacity: 1;\n          }\n        }\n      }\n    }\n    &.right{\n      .icon-direction-titre{\n        p{\n          opacity: 0;\n          transition: all 0.4s;\n        }\n      }\n      &:hover{\n        .icon-direction-titre{\n          p{\n            transition: all 0.4s ease;\n            transform: translateX(-8.5rem);\n            opacity: 1;\n          }\n        }\n      }    \n    }\n    &:hover{\n      .bar-top{\n        transition: all 0.4s;\n        transform: rotate(-35deg);\n      }\n      .bar-bottom{\n        transition: all 0.4s;\n        transform: rotate(-55deg);\n      }\n    }\n  }  \n\n}\n\n\n.annuler-x{\n  position: relative;\n  cursor: pointer;\n  transition: all 0.4s;\n  &:hover{\n    background: var(--blue);\n    color: var(--pink);\n  }\n  &::after{\n    content: 'X';\n    position: absolute;\n    right: 0.5rem;\n    width: 1rem;\n    height: 1rem;\n    //background:var(--red);\n    color: var(--white);\n    border-radius: 0.5rem;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n    align-items: center;\n  }\n   \n}\n.through{\n  position: relative;\n  &::after{\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 0.2rem;\n    background: var(--text);\n  }\n}\n.quote{\n  font-style: italic;\n  &::before{\n    content: \"\\AB\";\n    padding: 0 0.5rem;\n\n  }\n  &::after{\n    content: \"\\BB\";\n    padding: 0 0.5rem;\n  }\n}\n\n.hidden{\n  display: none;\n}\n\n.underline-2{\n  max-width: 2rem;\n  margin: 2rem auto;\n  height: 0.1rem;\n  background: var(--white);\n}\n.underline-4{\n  max-width: 4rem;\n  margin: 2rem auto;\n  height: 0.1rem;\n  background: var(--white);\n}\n.underline-6{\n  display: inline-block;\n  min-width: 6rem;\n  margin: 1.5rem auto;\n  height: 0.1rem;\n  background: var(--pink);\n}\n.underline-8{\n  max-width: 8rem;\n  margin: 2rem auto;\n  height: 0.1rem;\n  background: var(--white);\n}\n/* text */\n\n.title{\n  letter-spacing: 0.2rem;\n  font-weight: 700;\n  font-size: 2.4rem;\n  &-portfolio{\n    background: linear-gradient(to top, var(--white) 40% , var(--pink) 60% );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;          \n  }\n\n}\n.text-hint{\n  color: var(--text);\n  font-size: 1.6rem;\n  font-weight: 100;\n}\n\n\n\n/* buttons */\n\n.btn{\n  border: 0;\n  margin: 2rem 0;\n  outline: 0;\n  cursor: pointer;\n  max-width: 15rem;\n  &-num{\n    width: 4rem;\n    height: 4rem;\n    border: 0.1rem solid var(--white);\n    background: var(--dark);\n    font-size: 2rem;\n    font-weight: 700;\n    margin: 1rem 0;\n    border-radius: 100%;\n  }\n  &-primary{\n    background: var(--blue-light);\n    color: var(--white);\n    padding: 0.5rem 2rem;\n    font-weight: 700;\n    border: none;\n    border-radius: 0.5rem;\n  }\n  &-primary-portfolio{\n    background: var(--white);\n    font-weight: 700;  \n    border-top-right-radius: 2.5rem;\n    border-bottom-right-radius: 2.5rem;  \n    border-top-left-radius: 2.5rem;\n    border-bottom-left-radius: 2.5rem; \n    padding: 1rem 2rem;\n    color: var(--blue);\n    cursor: pointer;\n    text-transform: uppercase;\n    box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);\n  }\n  &-secondary-portfolio{\n    background: var(--green);\n    color: var(--white);\n    font-weight: 400;  \n    border-top-right-radius: 2.5rem;\n    border-bottom-right-radius: 2.5rem;  \n    border-top-left-radius: 2.5rem;\n    border-bottom-left-radius: 2.5rem; \n    padding: 0.5rem 1rem;\n  }\n\n  &-primary-berberes{\n    background: var(--white);\n    color: var(--orange);\n    padding: 2rem 1rem;\n    font-weight: 700;\n\n  }\n  &-secondary-berberes{\n    background: var(--text);\n    color: var(--white);\n    padding: 1.5rem 1rem;\n    font-weight: 700;\n\n  }  \n  &-det{\n    background: linear-gradient(to top, var(--pink) 50%, var(--background) 50% );\n    padding: 1rem;\n  }\n  &-small{\n    outline: 0;\n    background: var(--green);\n    padding: 0.5rem 1rem;\n    border-radius: 0.5rem;\n    color: var(--white);\n  }\n  &-small-white{\n    outline: 0;\n    background: var(--white);\n    padding: 0.5rem 1rem;\n    border-radius: 0.5rem;\n    color: var(--text);\n  }\n}\n\n\n\n.hidden{\n  display: none;\n}\n\n.box-background{\n  background: var(--sidebar);\n}\n.shadow{\n  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);\n\n}\n\n.gradien-vp{\n  background: linear-gradient(to bottom right, white 50%,  #f1f2f6 50%);\n}\n\n\n\n/*\n******* icon ******\n*/\n.fa-html5{\n  color: #dd4b25;\n  font-size: 2.5rem;\n}\n.fa-css3-alt{\n  color:#1a6fb4;\n  font-size: 2.5rem;\n  \n}\n.fa-js{\n  color: #efd81d;\n  font-size: 2.5rem;\n}\n.fa-node-js{\n  color: #74ac5e;\n  font-size: 2.5rem;\n}\n.fa-git-alt{\n  color: #e84e31;\n  font-size: 2.5rem;\n}\n/*\n******* chargements ... ******\n*/\n\n.en-cours{\n  animation-name: chargement;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n  opacity: 1;\n}\n\n@keyframes chargement{\n  from{\n    opacity: 1;\n    transform: translateY(-20px);\n  }to{\n    opacity: 0.5;\n\n  }\n}\n\n.load-page{\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-height: 100vh;\n  background-color: var(--blue-1); \n  z-index: 1;  \n  display: flex;\n  justify-content:center;  \n  align-items: center;\n  animation: fadeout-load 0.8s ease forwards 1.7s;\n  .circles{\n    width: 10rem;\n    height: 10rem;\n    display: flex;\n    align-items: center;\n    border-radius: 100%;\n    overflow: hidden;\n    position: relative;\n    animation: fadeout-load 0.8s ease forwards 1.7s;\n    .circle{\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      &::after{\n        content: \"\";\n        width: 1rem;\n        height: 1rem;\n        background-color: var(--white);\n      }  \n    }\n    .circle-1{\n      animation: rotate-load-1 0.1s ease forwards;\n    }\n    .circle-2{\n      animation: rotate-load-2 0.1s ease forwards 0.1s;\n    }  \n    .circle-3{\n      animation: rotate-load-3 0.1s ease forwards 0.2s;\n    }    \n    .circle-4{\n      animation: rotate-load-4 0.1s ease forwards 0.3s;\n    } \n    .circle-5{\n      animation: rotate-load-5 0.1s ease forwards 0.4s;\n    }     \n    .circle-6{\n      animation: rotate-load-6 0.1s ease forwards 0.5s;\n    }\n    .circle-7{\n      animation: rotate-load-7 0.1s ease forwards 0.6s;\n    }          \n    .circle-8{\n      animation: rotate-load-8 0.1s ease forwards 0.7s;\n    }     \n    .circle-9{\n      animation: rotate-load-9 0.1s ease forwards 0.8s;\n    }  \n    .circle-10{\n      animation: rotate-load-10 0.1s ease forwards 0.8s;\n    }\n    .circle-11{\n      animation: rotate-load-11 0.1s ease forwards 0.9s;\n    }  \n    .circle-12{\n      animation: rotate-load-12 0.1s ease forwards 1s;\n    }       \n    .circle-13{\n      animation: rotate-load-13 0.1s ease forwards 1.1s;\n    }                                             \n    .circle-14{\n      animation: rotate-load-14 0.1s ease forwards 1.2s;\n    }       \n    .circle-15{\n      animation: rotate-load-15 0.1s ease forwards 1.3s;\n    }       \n    .circle-16{\n      animation: rotate-load-16 0.1s ease forwards 1.4s;\n    }       \n    .circle-17{\n      animation: rotate-load-17 0.1s ease forwards 1.5s;\n    }       \n    .circle-18{\n      animation: rotate-load-18 0.1s ease forwards 1.6s;\n    }   \n  }   \n}","@import \"variables\";\n@import \"reset\";\n@import \"classes\";\n@import \"utils\";\n@import \"base\";\n@import \"animations\";\n@import \"./media-queries\";\n\nbody{\n  background: var(--blue);\n}\n.main{\n  line-height: 2.5rem;\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid:\n  \"aside-left page aside-right\" auto / 1fr 2fr 1fr; \n  position: relative;\n  color: var(--white);   \n  @include sm{\n    grid:\n    \"aside-right\" 5rem\n    \"page\" auto\n    \"aside-left\" 5rem / auto;\n  }\n  @include xs{\n    grid:\n    \"aside-right\" 5rem\n    \"page\" auto\n    \"aside-left\" 5rem / auto;\n  }  \n  .aside-left{\n    grid-area: aside-left;\n    max-height: 100vh;\n    position: sticky;\n    top: 0;\n    display: flex;\n    align-items: center;\n    background: var(--blue);\n    .socials{\n      flex: 0 0 5rem;\n      position: relative;\n      .socials-list{\n        background: var(--gray);\n        .social-elem{\n          display: block;\n          cursor: pointer;\n          position: relative;\n          img{\n            padding: 0.8rem;\n          }\n          &:hover{\n            transition: all 0.4s;\n            transform: translateX(2rem);\n          }  \n          &::after{\n            content: \"\";\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            z-index: -1;\n            background-color: var(--gray);\n          }                 \n        }    \n      }\n      position: relative;\n      &::before{\n        content: \"Follow me\";\n        font-size: 1rem;\n        position: absolute;\n        top: -2.2rem;\n        left: 0.2rem;\n      }\n      @include sm{\n        display: none;\n      }    \n      @include xs{\n        display: none;\n      }\n    }\n    .background{\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background: var(--text);\n      z-index: 1;\n      transform: translateY(-100vh);\n    }  \n    .icon{\n      @include sm{\n        display: none;\n      }\n      @include xs{\n        display: none;\n      }  \n    }\n\n  }\n  .page{\n    grid-area: page;\n    background-color: var(--blue);\n    display: flex;\n    flex-direction: column;\n    line-height: 2.5rem;\n    position: relative;\n    .dropdown-menu{\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      transform: translateY(-100vh);\n      @include sm{\n        transform: translateY(calc(100vh - 10rem));\n      }   \n      @include xs{\n        transform: translateY(calc(100vh - 10rem));\n      }      \n      z-index: 1;\n      .dropdown-menu-list{\n        min-height: 100vh; \n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;  \n        background: var(--text);  \n        @include sm{\n          min-height: calc(100vh - 10rem);\n        }    \n        @include xs{\n          min-height: calc(100vh - 10rem);\n        } \n        li{\n          padding: 6rem 25rem;\n          @include sm{\n            padding: 3rem 15rem;\n          }   \n          @include xs{\n            padding: 3rem 15rem;\n          } \n          text-align: center;\n          margin: 0.5rem 0;\n          background: var(--gray);\n          position: relative;\n          &::after{\n            content: \"\";\n            width: 0%;\n            height: 75%;\n            background: var(--dark);\n            position: absolute;\n            top: 0;\n            left: 0;\n            opacity: 0.2;\n          }   \n          &::before{\n            content: \"\";\n            width: 0%;\n            height: 25%;\n            background: var(--noir);\n            position: absolute;\n            bottom: 0;\n            right: 0;\n            z-index: 0;\n          }  \n          a{\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            z-index: 1;\n            font-size: 4rem;\n            padding: 2rem;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: var(--text);\n            @include sm{\n              font-size: 2rem;\n            }    \n            @include xs{\n              font-size: 2rem;\n            }   \n          }   \n          &:hover{\n            &::before{\n              transition: all ease 0.8s;\n              width: 100%;\n            }   \n            &::after{\n              transition: all ease 0.8s;\n              transition-delay: 0.1s;\n              padding-left: 100%;\n            }   \n          }  \n        }    \n      }  \n      p{\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        color: var(--gray);\n        text-align: center;\n        font-size: 1.4rem;\n        letter-spacing: 0.1rem;\n      }\n    }         \n  }\n  .aside-right{\n    grid-area: aside-right;\n    background-color: var(--blue);\n    max-height: 100vh;\n    position: sticky;\n    top: 0; \n    .menu{\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n      .dropdown-toggle{\n        margin-right:5rem;\n        height: 5rem;\n        width: 5rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        z-index: 2;\n        @include sm{\n          margin-right: 1rem;\n          width: 4rem;\n          height: 4rem;\n        }  \n        @include xs{\n          margin-right: 1rem;\n          width: 4rem;\n          height: 4rem;\n        }  \n        i{\n          flex:0 0 0.2rem;\n          background: var(--white);\n          margin:0;\n          &:nth-child(2){\n            margin: 1rem 0;\n            opacity: 1;\n          }\n        } \n        &:not(:focus):hover{\n          i{\n            transition: all 0.2s;\n            margin: 0.7rem 0;\n          }\n        }  \n      }    \n    }  \n    .background{\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      background: var(--text);\n      z-index: 1;\n      transform: translateY(-100vh);\n    }   \n    .icon{\n      position: absolute;\n      top: calc(50vh - 5rem);\n      right: 0;\n      @include sm{\n        display: none;\n      }\n      @include xs{\n        display: none;\n      }  \n    } \n  }\n}\n",".p-x-left{\n  padding-left: 1rem;\n}","html{\n  font-size: 62.5%;\n}\nbody{\n  color: var(--text);\n  font-family: var(--font-family);\n  font-size: 1.6rem;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6{\n  margin: 1rem 0 1rem 0;\n  font-family: var(--font-family-title);\n}\n\np{\n  margin: 1rem 0;\n}\nul{\n  list-style: none;\n}\na{\n  text-decoration: none;\n  color: var(--text);\n}\nimg{\n  max-width: 100%;\n}","/* cube */\n@keyframes rotate-heures{\n  0%{\n    transform: rotateX(0);\n  }100%{\n    transform: rotateX(360deg);\n  }\n}\n/* cylindre */\n@keyframes rotate-cylindre{\n  0%{\n    transform: rotateX(0deg);\n\n  }50%{\n    transform:rotateX(90deg);\n  }100%{\n    transform:rotateX(360deg);\n  }\n}\n\n/* labs content */\n\n@keyframes windowPointer{\n  0%{\n    transform: translateY(0);\n  }\n  100%{\n    transform: translateY(-4rem);\n  }\n}\n\n\n/* YOUTUBE */\n@keyframes youtube-transition{\n  from{\n    transform: translateY(0rem);\n  }to{\n    transform: translateY(10rem);\n  }\n}\n\n@keyframes youtube-scale{\n  from{\n    padding: 1rem 0;\n    font-size: 4rem;\n  }to{\n    padding: 3rem 0;\n    font-size: 8rem;\n  }\n}\n\n\n/* montres */\n\n@keyframes rotate-montre{\n  from{\n    transform: rotate(45deg);\n  }to{\n    transform: rotate(360deg);\n  }\n}\n\n/* portfolio page */\n@keyframes show-lang{\n  0%{\n    opacity: 0;\n  }50%{\n    opacity: 1;\n    transform: translateY(0.2rem);\n  }\n  100%{\n    transform: translateY(0.4px);\n    opacity: 1;\n  }\n}\n@keyframes show-lang-last{\n  0%{\n    opacity: 0;\n  }50%{\n    opacity: 1;\n    transform: translateY(-0.2rem);\n  }\n  100%{\n    transform: translateY(-1.5rem);\n    opacity: 1;\n  }\n}\n/* load */\n\n@keyframes rotate-load{\n  0%{\n    transform: rotate(0deg);\n  }100%{\n    transform: rotate(180deg);\n  }\n}\n@keyframes rotate-load-1{\n  0%{\n    transform: rotate(0deg);\n  }100%{\n    transform: rotate(-20deg);\n  }\n}\n@keyframes rotate-load-2{\n  0%{\n    transform: rotate(-20deg);\n  }100%{\n    transform: rotate(-40deg);\n  }\n}\n@keyframes rotate-load-3{\n  0%{\n    transform: rotate(-40deg);\n  }100%{\n    transform: rotate(-60deg);\n  }\n}\n@keyframes rotate-load-4{\n  0%{\n    transform: rotate(-60deg);\n  }100%{\n    transform: rotate(-80deg);\n  }\n}\n@keyframes rotate-load-5{\n  0%{\n    transform: rotate(-80deg);\n  }100%{\n    transform: rotate(-100deg);\n  }\n}\n@keyframes rotate-load-6{\n  0%{\n    transform: rotate(-100deg);\n  }100%{\n    transform: rotate(-120deg);\n  }\n}\n@keyframes rotate-load-7{\n  0%{\n    transform: rotate(-120deg);\n  }100%{\n    transform: rotate(-140deg);\n  }\n}\n@keyframes rotate-load-8{\n  0%{\n    transform: rotate(-140deg);\n  }100%{\n    transform: rotate(-160deg);\n  }\n}\n@keyframes rotate-load-9{\n  0%{\n    transform: rotate(-160deg);\n  }100%{\n    transform: rotate(-180deg);\n  }\n}\n@keyframes rotate-load-10{\n  0%{\n    transform: rotate(-180deg);\n  }100%{\n    transform: rotate(-200deg);\n  }\n}\n@keyframes rotate-load-11{\n  0%{\n    transform: rotate(-200deg);\n  }100%{\n    transform: rotate(-220deg);\n  }\n}\n@keyframes rotate-load-12{\n  0%{\n    transform: rotate(-220deg);\n  }100%{\n    transform: rotate(-240deg);\n  }\n}\n@keyframes rotate-load-13{\n  0%{\n    transform: rotate(-240deg);\n  }100%{\n    transform: rotate(-260deg);\n  }\n}\n@keyframes rotate-load-14{\n  0%{\n    transform: rotate(-260deg);\n  }100%{\n    transform: rotate(-280deg);\n  }\n}\n@keyframes rotate-load-15{\n  0%{\n    transform: rotate(-280deg);\n  }100%{\n    transform: rotate(-300deg);\n  }\n}\n@keyframes rotate-load-16{\n  0%{\n    transform: rotate(-300deg);\n  }100%{\n    transform: rotate(-320deg);\n  }\n}\n@keyframes rotate-load-17{\n  0%{\n    transform: rotate(-320deg);\n  }100%{\n    transform: rotate(-340deg);\n  }\n}\n@keyframes rotate-load-18{\n  0%{\n    transform: rotate(-340deg);\n  }100%{\n    transform: rotate(-360deg);\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout-load{\n  0%{\n    height: 100%;\n  }50%{\n    transform: translateY(100vh);\n  }100%{\n    transform: translateY(100vh);\n    height: 0;\n    opacity: 1;\n  }\n}\n\n@keyframes remplissage-right{\n  0%{\n    height:1rem;\n  }50%{\n    height: 5rem;\n  }100%{\n    height: 9rem;\n  }\n}\n@keyframes remplissage-top{\n  0%{\n    width:1rem;\n  }100%{\n    width: 9rem;\n  }\n}\n@keyframes remplissage-bottom{\n  0%{\n    width:1rem;\n  }100%{\n    width: 9rem;\n  }\n}\n@keyframes remplissage-left{\n  0%{\n    transform: translateY(-1rem);\n    height: 2rem;\n  }10%{\n    transform: translateY(-2rem);\n    height: 3rem;\n  }20%{\n    transform: translateY(-3rem);\n    height: 4rem;\n  }30%{\n    transform: translateY(-4rem);\n    height: 5rem;\n  }40%{\n    transform: translateY(-5rem);\n    height: 6rem;\n  }50%{\n    transform: translateY(-6rem);\n    height: 7rem;\n  }60%{\n    transform: translateY(-7rem);\n    height: 8rem;\n  }100%{\n    transform: translateY(-8rem);\n    height: 9rem;\n  }  \n}\n\n\n@keyframes rotate3d{\n  0%{\n    transform: rotateY(0deg)\n    \n  }50%{\n    border: 10px solid var(red);\n    transform: rotateZ(30deg);\n  }\n  100%{\n    //transform: translateX(-5rem);\n    //transform: rotateZ(-20deg);  \n    transform: rotateY(-90deg);\n    //transform: rotateZ(-20deg);\n    //transform: rotateY(-90deg);\n  }\n}\n\n/* dropdown */\n\n@keyframes rotate-180{\n  0%{\n\n  }100%{\n    transform: rotate(-180deg);\n  }\n}\n@keyframes superposerBar{\n  0%{\n    margin: 0.5rem 0;\n  }100%{\n    margin:0;\n    opacity: 0; // tres important\n  }\n}\n@keyframes rotate-back-in{\n  0%{\n    opacity: 1;\n  }100%{\n    opacity: 1;\n    transform:rotate(135deg);  \n  }\n}\n@keyframes rotate-back-out{\n  0%{\n    opacity: 1;\n  }100%{\n    opacity: 1;\n    transform:rotate(-135deg);  \n  }\n}\n@keyframes fadeout-demo{\n  from{\n    opacity: 1;\n    z-index: 0;\n  }to{\n    opacity: 0;\n    z-index: -1;\n  }\n}\n@keyframes fade-out-navbar{\n  0%{\n    z-index: 0;\n  }100%{\n    z-index: -1;\n  }\n}\n@keyframes animate-nav{\n  0%{\n    z-index: -1;\n    transform: translateY(-100vh);\n  }50%{\n    z-index: 0;\n    transform: translateY(-100vh);\n  }\n  100%{\n    z-index: 0;\n  }\n}\n@keyframes animate-dropdown-menu{\n  0%{\n    transform: translateY(-100vh);\n  }\n  100%{\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes animate-dropdown-menu-labs{\n  0%{\n    opacity: 0;\n  }\n  50%{\n    opacity: 0.5;\n  }\n  100%{\n    opacity: 1;\n  }\n}\n@keyframes hiddenBarMiddle{\n  from{\n    background: var(--white);\n  }to{\n    background: var(--noir);\n  }\n}\n@keyframes background-drop{\n  0%{\n    background: var(--blue);\n  }100%{\n    background: var(--blue-1);\n  }\n}\n@keyframes aside-background{\n  from{\n    height: 0rem;\n  }to{\n    height: 100%;\n  }\n}\n/* screen animation */\n@keyframes path-screen{\n  0%{\n    d: path('M0');\n  }\n  20%{\n    d: path('M0,29.697v246.015v15v89');\n  }\n  40%{\n    d: path('M0,29.697v246.015v15v89.091h190.997v80.5h-74.608v15h272.223v-15h-74.608v-80.5H505v-89');\n  }\n  60%{\n    d: path('M0,29.697v246.015v15v89.091h190.997v80.5h-74.608v15h272.223v-15h-74.608v-80.5H505v-89.091v-15   V29');\n  }\n  80%{\n    d: path('M0,29.697v246.015v15v89.091h190.997v80.5h-74.608v15h272.223v-15h-74.608v-80.5H505v-89.091v-15   V29.697H0z M299');\n  }\n  100%{\n    d: path('M0,29.697v246.015v15v89.091h190.997v80.5h-74.608v15h272.223v-15h-74.608v-80.5H505v-89.091v-15   V29.697H0z M299.003') !important;\n        \n  }\n}\n\n\n/* underline */\n\n@keyframes underline{\n0%{\n  width: 60%;\n}\n50%{\n  width: 80%;\n}\n100%{\n  width: 100%;\n}\n}\n\n\n/* progressions */\n\n@keyframes progression-html{\n/*   form{\n    grid-row: 4 / 5;\n  }\n  to{\n    grid-row: 1 / 5;\n    background: var(--green);\n  } */\n  0%{\n    grid-row: 5 / 6;\n    background: var(--red);\n  }\n  25%{\n    grid-row: 4 / 6;\n    background: var(-red-light);\n  }\n  50%{\n    grid-row: 3 / 6;\n    background: var(--orange);\n  }\n  75%{\n    grid-row: 2 / 6;\n    background: var(--orange-light);\n  }\n  100%{\n    grid-row: 1 / 6;\n    background: var(--green-light);\n  }  \n\n\n}\n@keyframes progression-css{\n  0%{\n    grid-row: 5 / 6;\n    background: var(--red);\n  }\n  33%{\n    grid-row: 4 / 6;\n    background: var(--orange);\n  }\n  66%{\n    grid-row: 3 / 6;\n    background: var(--orange-light);\n  }\n  100%{\n    grid-row: 2 / 6;\n    background: var(--green-light);\n  }   \n}\n\n@keyframes progression-js{\n  0%{\n    grid-row: 5 / 6;\n    background: var(--red);\n  }\n  50%{\n    grid-row: 4 / 6;\n    background: var(-red-light);\n  }\n  100%{\n    grid-row: 3 / 6;\n    background: var(--yellow);\n  }\n}\n@keyframes progression-node{\n  0%{\n    grid-row: 5 / 6;\n    background: var(--red);\n  }\n  100%{\n    grid-row: 4 / 6;\n    background: var(--orange);\n  } \n}\n@keyframes progression-git{\n  0%{\n    grid-row: 5 / 6;\n    background: var(--red);\n  }\n  100%{\n    grid-row: 4 / 6;\n    background: var(--orange);\n  } \n}\n\n/* arte */\n@keyframes glissement-mot-3 {\n  0%{\n    opacity: 0;\n    transform: translateY(4.5rem);\n  }\n  50%{\n    opacity: 1;\n    transform: translateY(9rem);\n  }\n  100%{\n    opacity: 0 ;\n    transform: translateY(16rem);\n  }\n  \n}\n@keyframes glissement-mot-last {\n  0%{\n    opacity: 1;\n    \n  }50%{\n    opacity: 1;\n  }\n  100%{\n    opacity: 1;\n    transform: translateY(10rem);\n  }\n  \n}  \n@keyframes glissement-mot-2 {\n  0%{\n    opacity: 1;\n    transform: translateY(4.5rem);\n  }\n  100%{\n    opacity: 1;\n    transform: translateY(9rem);\n  }\n}       \n@keyframes scale-mot {\n  from{\n    opacity: 1;\n  }to{\n    font-size: 8rem;\n  }\n}\n\n@keyframes agrandir{\n  from{\n    padding: 4.5rem 0;  \n  }to{\n    padding: 4.5rem 0;\n  }\n}\n@keyframes arte{\n  0%{\n    justify-self: end;\n    z-index: 0;\n  }50%{\n    z-index: 0;    \n  }\n  100%{\n    transform: translateX(-9rem);\n    z-index: 2;\n  }\n}\n@keyframes fadein-generique{\n  0%{\n    opacity: 0;\n  }100%{\n    opacity: 1;\n    z-index: 2;\n  }\n}\n@keyframes display-logo {\n  from{\n    opacity: 0;\n  }to{\n    opacity: 1;\n  }\n}\n@keyframes glissement-progression-one{\n  0%{\n    opacity: 0;\n  }\n  50%{\n    transform: translateY(4.5rem);\n    opacity: 1;\n  }\n  100%{\n    opacity: 1;\n    transform: translateY(4.5rem);\n  }\n}\n@keyframes glissement-progression-last{\n  0%{\n    opacity: 1;\n  }\n  100%{\n    transform: translateY(4.5rem);\n    opacity: 1;\n  }\n}\n@keyframes glissement-progression{\n  0%{\n    opacity: 0;\n  }\n  50%{\n    transform: translateY(4.5rem);\n    opacity: 1;\n  }\n  100%{\n    transform: translateY(9rem);\n    opacity: 1;\n  }\n\n}\n@keyframes text-animation{\n  0%{\n    opacity: 1;\n    font-size: 1rem;\n  }100%{\n    transform: scale(2);\n    opacity: 1;\n  }\n}\n@keyframes rotate-picture{\n  0%{\n    opacity: 0;\n    z-index: 0;\n  }100%{\n    opacity: 1;\n    transform: rotate(-360deg) scale(5) translateY(-0.5rem);\n    //background: red;\n  }\n}\n@keyframes effet-transition{\n  0%{\n    opacity: 1;\n  }\n  100%{\n    transform: scale(1.2);\n    opacity: 1;\n  }\n}\n\n@keyframes glissement-x-60{\n  0%{\n    opacity: 1;\n  }100%{\n    transform: translateX(-55rem);\n  }\n}\n@keyframes glissement-x-50{\n  0%{\n    opacity: 1;\n  }100%{\n    transform: translateX(-50rem);\n  }\n}\n@keyframes glissement-x-40{\n  0%{\n    opacity: 1;\n  }100%{\n    transform: translateX(-40rem);\n  }\n}\n@keyframes glissement-x-30{\n  0%{\n    opacity: 1;\n  }100%{\n    transform: translateX(-40rem);\n  }\n}\n@keyframes glissement-x-25{\n  0%{\n    opacity: 1;\n  }100%{\n    transform: translateX(-25rem);\n  }\n}\n@keyframes glissement-x-20{\n  0%{\n    opacity: 1;\n  }100%{\n    transform: translateX(-20rem);\n  }\n}\n@keyframes glissement-x-15{\n  0%{\n    opacity: 1;\n  }100%{\n    transform: translateX(-15rem);\n  }\n}\n@keyframes glissement-x-10{\n  0%{\n    opacity: 1;\n  }100%{\n    transform: translateX(-10rem);\n  }\n}\n@keyframes fadeout{\n  0%{\n    opacity: 1;\n  }\n  50%{\n    opacity: 0.5;\n  }\n  100%{\n    opacity: 0;\n  }\n}\n@keyframes glissement-progress{\n  0%{\n    opacity: 1;\n  }100%{\n    //transform: translateX(40rem);\n    grid-column: 6 / 7;\n  }\n}\n@keyframes progress-html{\n  0%{\n    grid-row: 8 / 9;\n  }\n  20%{\n    grid-row: 7 / 9;\n\n  }\n  40%{\n    grid-row: 6 / 9;\n\n  }\n  60%{\n    grid-row: 5 / 9;\n\n  }\n  80%{\n    grid-row: 4 / 9;\n\n  }\n  100%{\n    grid-row: 3 / 9;\n    background: var(--green);\n  }    \n}\n\n@keyframes progress-css{\n  0%{\n    grid-row: 8 / 9;\n  }\n  25%{\n    grid-row: 7 / 9;\n\n  }\n  50%{\n    grid-row: 6 / 9;\n\n  }\n  75%{\n    grid-row: 5 / 9;\n\n  }\n  100%{\n    grid-row: 4 / 9;\n    background: var(--blue-light);\n  }   \n}\n\n@keyframes progress-git{\n  0%{\n    grid-row: 8 / 9;\n  }\n  50%{\n    grid-row: 7 / 9;\n\n  }\n  100%{\n    grid-row: 6 / 9;\n    background: var(--orange);\n\n  }\n}\n\n@keyframes progress-js{\n  0%{\n    grid-row: 8 / 9;\n  }\n  100%{\n    grid-row: 7 / 9;\n    background: var(--orange-light);\n\n  }\n}\n@keyframes progress-node{\n  0%{\n    grid-row: 8 / 9;\n  }\n  100%{\n    grid-row: 8 / 9;\n    background: var(--red);\n\n  }\n}\n@keyframes skill-picture-html{\n  0%{\n    grid-column: 2 / 3;\n  }\n  100%{\n    grid-column: 3 / 4;\n  }\n}\n@keyframes skill-picture-css{\n  0%{\n    grid-column: 2 / 3;\n  }\n  50%{\n    grid-column: 3 / 4;\n  }100%{\n    grid-column: 4 / 5;\n  }\n}\n\n@keyframes skill-picture-git{\n  0%{\n    grid-column: 2 / 3;\n  }\n  50%{\n    grid-column: 3 / 4;\n  }75%{\n    grid-column: 4 / 5;\n  }\n  100%{\n    grid-column: 5 / 6;\n  }\n}\n@keyframes skill-picture-js{\n  0%{\n    grid-column: 2 / 3;\n  }\n  25%{\n    grid-column: 3 / 4;\n  }50%{\n    grid-column: 4 / 5;\n  }\n  75%{\n    grid-column: 5 / 6;\n  }100%{\n    grid-column: 6 / 7;\n  }\n}\n@keyframes skill-picture-js{\n  0%{\n    grid-column: 2 / 3;\n  }\n  25%{\n    grid-column: 3 / 4;\n  }50%{\n    grid-column: 4 / 5;\n  }\n  75%{\n    grid-column: 5 / 6;\n  }100%{\n    grid-column: 6 / 7;\n  }\n}\n@keyframes skill-picture-node{\n  0%{\n    grid-column: 2 / 3;\n  }\n  20%{\n    grid-column: 3 / 4;\n  }40%{\n    grid-column: 4 / 5;\n  }\n  60%{\n    grid-column: 5 / 6;\n  }80%{\n    grid-column: 6 / 7;\n  }\n  100%{\n    grid-column: 7 / 8;\n  }\n\n}\n@keyframes gliss-skill-titre{\n  0%{\n    transform: translateY(3rem);\n  }\n  100%{\n    transform: translateY(6rem);\n  }\n}\n\n@keyframes rotate-skill-picture{\n  0%{\n    opacity: 0;\n  }\n  50%{\n    opacity: 1;\n    width: 40%;\n    transform: rotate(180deg);\n  }100%{\n    opacity: 1;\n    width: 100%;\n    transform: rotate(360deg);\n  }\n}\n@keyframes skill-titre{\n  0%{\n    opacity: 1;\n  }\n  50%{\n    transform: translateY(-8rem);\n    opacity: 1;\n  }100%{\n    transform: translateY(2rem);\n    opacity: 1;\n    z-index: 3;\n  }\n}\n@keyframes display-skill{\n  0%{\n    z-index: -2;\n  }100%{\n    z-index: 2;\n  }\n}\n@keyframes display-contact{\n  0%{\n    z-index: -3;\n    opacity: 0;\n  }100%{\n    z-index: 2;\n  }\n}\n@keyframes display-introduction{\n  0%{\n    z-index: 0;\n  }100%{\n    z-index: 2;\n  }\n}\n@keyframes display-resume{\n  0%{\n    z-index: -4;\n  }100%{\n    z-index: 4;\n  }\n}\n\n@keyframes carousel-slide{\n  0%{\n    \n  }\n  50%{\n    transform: translateX(-80rem);\n  }100%{\n    transform: translateX(-160rem);\n  }\n}\n@keyframes first-elem-carousel{\n  0%{\n    opacity: 1;\n  }100%{\n    transform: translateX(-80rem);\n  }\n}\n\n@keyframes justify-content{\n  0%{\n    justify-content: start;\n  }20%{\n    justify-content: center;\n  }40%{\n    justify-content: end;\n  }60%{\n    justify-content: space-around;\n  }80%{\n    justify-content: space-evenly;\n  }100%{\n    justify-content: space-between;\n  }\n}\n@keyframes justify-start{\n  0%{\n    z-index: 0;\n  }50%{\n    z-index: 1;\n  }100%{\n    z-index: 0;\n  }\n}\n@keyframes justify-center{\n  0%{\n    z-index: 0;\n  }50%{\n    z-index: 1;\n  }100%{\n    z-index: 0;\n  }\n}\n@keyframes justify-end{\n  0%{\n    z-index: 0;\n  }50%{\n    z-index: 1;\n  }100%{\n    z-index: 0;\n  }\n}\n@keyframes justify-space-around{\n  0%{\n    z-index: 0;\n  }50%{\n    z-index: 1;\n  }100%{\n    z-index: 0;\n  }\n}\n@keyframes justify-space-evenly{\n  0%{\n    z-index: 0;\n  }50%{\n    z-index: 1;\n  }100%{\n    z-index: 0;\n  }\n}\n@keyframes justify-space-between{\n  0%{\n    z-index: 0;\n  }50%{\n    z-index: 1;\n  }100%{\n    z-index: 0;\n  }\n}\n\n@keyframes justify-items{\n  0%{\n    justify-items: stretch;\n  }50%{\n    justify-items: start;\n  }75%{\n    justify-items: center;\n  }100%{\n    justify-items: end;\n  }\n}\n@keyframes justify-items-stretch{\n  0%{\n    z-index: 0;\n  }50%{\n    z-index: 1;\n  }100%{\n    z-index: 0;\n    opacity: 0;\n  }\n}\n@keyframes justify-items-start{\n  0%{\n    z-index: 0;\n  }50%{\n    z-index: 1;\n  }100%{\n    z-index: 0;\n    opacity: 0;\n  }\n}\n@keyframes justify-items-center{\n  0%{\n    z-index: 0;\n  }50%{\n    z-index: 1;\n  }100%{\n    z-index: 0;\n    opacity: 0;\n  }\n}\n@keyframes justify-items-end{\n  0%{\n    z-index: 0;\n  }50%{\n    z-index: 1;\n  }100%{\n    z-index: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes auto-flow{\n  0%{\n    grid-auto-flow: row dense;\n  }100%{\n    grid-auto-flow: column dense;\n  }\n}\n\n@keyframes load{\n  0%{\n      border-left: 1px solid var(--white); \n    }\n    25%{\n      border-top: 1px solid var(--white);\n      border-left: 1px solid var(--white); \n\n    }50%{\n      border-right: 1px solid var(--white);\n      border-top: 1px solid var(--white);\n    }75%{\n      border-bottom: 1px solid var(--white);\n      border-right: 1px solid var(--white);\n    }\n    100%{\n      border: 0;\n    }\n}\n\n@keyframes img-profil-display{\n  0%{\n    opacity: 0;\n  }100%{\n    opacity: 1;\n  }\n}\n@keyframes html-profil-glissment{\n  0%{\n    grid-column: 7 / 8;\n  }25%{\n    grid-column: 6 / 7;\n  }50%{\n    grid-column: 5 / 6;\n  }75%{\n    grid-column: 4 / 5;\n  }100%{\n    grid-column: 3 / 4;\n    transform: rotate(360deg);\n  }\n}\n@keyframes css-profil-glissment{\n  0%{\n    grid-column: 7 / 8;\n  }50%{\n    grid-column: 6 / 7;\n  }75%{\n    grid-column: 5 / 6;\n  }100%{\n    grid-column: 4 / 5;\n  }\n}\n@keyframes git-profil-glissment{\n  0%{\n    grid-column: 7 / 8;\n  }50%{\n    grid-column: 6 / 7;\n  }100%{\n    grid-column: 5 / 6;\n  }\n}\n@keyframes js-profil-glissment{\n  0%{\n    grid-column: 7 / 8;\n  }100%{\n    grid-column: 6 / 7;\n  }\n}\n\n@keyframes fadeout-75{\n  0%{\n    opacity: 1;\n  }50%{\n    opacity: 1;\n  }75%{\n    opacity: 1;\n  }\n  100%{\n    opacity: 0;\n  }\n}\n@keyframes fadein{\n  0%{\n    opacity: 0;\n  }100%{\n    opacity: 1;\n  }\n}\n\n@keyframes fade{\n  0%{\n    opacity: 1;\n  }100%{\n    opacity: 0;\n  }\n}\n\n\n@keyframes trans-barre{\n  0%{\n    opacity: 1;\n  }20%{\n    transform: translateX(2rem);\n    opacity: 0.8;\n  }40%{\n    transform: translateX(2rem);\n    opacity: 0.6;\n  }60%{\n    transform: translateX(2rem);\n    opacity: 0.4;\n  }80%{\n    transform: translateX(2rem);\n    opacity: 0.2;\n  }\n  100%{\n    transform: translateX(2rem);\n    opacity: 0;\n  }\n}\n\n@keyframes transitionX{\n  0%{\n    opacity: 1;\n  }100%{\n    transform: translateX(50rem);\n  }\n}\n\n@keyframes fadeout-barre{\n  0%{\n    padding: 2.5rem;\n  }100%{\n    padding: 0;\n  }\n}","/* Landscape phones and down */\n@mixin xs {\n  @media (max-width: 480px){\n    @content;\n  }\n  \n}\n\n/* Landscape phone to portrait tablet */\n@mixin sm {\n  @media (min-width: 480px) and (max-width: 767px){\n    @content;\n  }  \n}\n\n/* Portrait tablet to landscape and desktop */\n@mixin md {\n  @media (min-width: 768px) and (max-width: 979px){\n    @content;\n  }\n  \n}\n\n@mixin l {\n  @media (min-width: 980px) and (max-width: 1199px){\n    @content;\n  }\n  \n}\n\n/* Large desktop */\n@mixin xl {\n  @media (min-width: 1200px) and (max-width: 1639px){\n    @content;\n  }\n  \n}\n@mixin xxl {\n  @media (min-width: 1640px){\n    @content;\n  }  \n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.scss ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Landscape phones and down */\n/* Landscape phone to portrait tablet */\n/* Portrait tablet to landscape and desktop */\n/* Large desktop */\n.page-about {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 1rem; }\n  .page-about h1 {\n    font-size: 4rem;\n    text-align: center;\n    margin: 1rem 0; }\n    .page-about h1 strong {\n      color: var(--noir); }\n  .page-about p {\n    font-size: 1.8rem;\n    text-align: center;\n    max-width: 60rem; }\n  @media (min-width: 980px) and (max-width: 1199px) {\n    .page-about h1 {\n      font-size: 3rem; }\n    .page-about p {\n      font-size: 1.6rem; } }\n  @media (min-width: 768px) and (max-width: 979px) {\n    .page-about h1 {\n      font-size: 2.8rem; }\n    .page-about p {\n      font-size: 1.6rem; } }\n  @media (min-width: 480px) and (max-width: 767px) {\n    .page-about h1 {\n      font-size: 2.4rem; }\n    .page-about p {\n      font-size: 1.2rem; } }\n  @media (max-width: 480px) {\n    .page-about h1 {\n      font-size: 2rem; }\n    .page-about p {\n      font-size: 1.2rem; } }\n", "",{"version":3,"sources":["webpack://./src/assets/styles/_media-queries.scss","webpack://./src/index.scss"],"names":[],"mappings":"AAAA,8BAAA;AAQA,uCAAA;AAOA,6CAAA;AAeA,kBAAA;AC5BA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,cAAc,EAAA;EANhB;IAQI,eAAe;IACf,kBAAkB;IAClB,cAAc,EAAA;IAVlB;MAYM,kBAAkB,EAAA;EAZxB;IAgBI,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB,EAAA;EDIlB;ICtBF;MAsBM,eAAe,EAAA;IAtBrB;MAyBM,iBAAiB,EAAA,EAClB;EDXH;ICfF;MA8BM,iBAAiB,EAAA;IA9BvB;MAiCM,iBAAiB,EAAA,EAClB;ED1BH;ICRF;MAsCM,iBAAiB,EAAA;IAtCvB;MAyCM,iBAAiB,EAAA,EAClB;ED1CH;ICAF;MA8CM,eAAe,EAAA;IA9CrB;MAiDM,iBAAiB,EAAA,EAClB","sourcesContent":["/* Landscape phones and down */\n@mixin xs {\n  @media (max-width: 480px){\n    @content;\n  }\n  \n}\n\n/* Landscape phone to portrait tablet */\n@mixin sm {\n  @media (min-width: 480px) and (max-width: 767px){\n    @content;\n  }  \n}\n\n/* Portrait tablet to landscape and desktop */\n@mixin md {\n  @media (min-width: 768px) and (max-width: 979px){\n    @content;\n  }\n  \n}\n\n@mixin l {\n  @media (min-width: 980px) and (max-width: 1199px){\n    @content;\n  }\n  \n}\n\n/* Large desktop */\n@mixin xl {\n  @media (min-width: 1200px) and (max-width: 1639px){\n    @content;\n  }\n  \n}\n@mixin xxl {\n  @media (min-width: 1640px){\n    @content;\n  }  \n}\n","@import \"./assets/styles/media-queries\";\n\n.page-about{\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 1rem;\n  h1{\n    font-size: 4rem;\n    text-align: center;\n    margin: 1rem 0;\n    strong{\n      color: var(--noir);\n    }\n  }\n  p{\n    font-size: 1.8rem;\n    text-align: center;\n    max-width: 60rem;\n  }  \n  @include l{\n    h1{\n      font-size: 3rem;\n    }\n    p{\n      font-size: 1.6rem;\n    }\n  }  \n  @include md{\n    h1{\n      font-size: 2.8rem;\n    }\n    p{\n      font-size: 1.6rem;\n    }\n  }  \n  @include sm{\n    h1{\n      font-size: 2.4rem;\n    }\n    p{\n      font-size: 1.2rem;\n    }\n  }     \n  @include xs{\n    h1{\n      font-size: 2rem;\n    }\n    p{\n      font-size: 1.2rem;\n    }\n  }      \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/styles.scss":
/*!***************************************!*\
  !*** ./src/assets/styles/styles.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/styles.scss */ "./src/assets/styles/styles.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _app_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.js */ "./src/app/app.js");



/* 
const person = {
  name: "adnen",
  age:38,
  famille:{
    pere:{
      nom:"mohamed",
      age:54
    },
    mere:{
      nom:"aroussia",
      age:44
    }
  }
}

const { 
  famille: {mere, pere}
} = person;

console.log(pere, mere);

const {a, ...monReste} = {a:1, b:2, c:3};

console.log(monReste);
console.log(a); */

/* const monObjet2 = {
  a:"cc",
  b:"adnen"
};

const search = "b" in monObjet2;

if(search)
console.log("'b' se trouve dans l'objet")
else
console.log("'b' ne se trouve pas dans l'objet") */

/* 
const monObjet = {a:null, b:4};
delete monObjet.b;
console.log(monObjet.a); */

/* const monObjet = {a:1, b:2, c:3, d:4, e:5};

const {a:toDelete, b:toDelete2, ...copie} = monObjet;
console.log(copie); */

/* const monObjet = {a:1, b:2, c:3, d:4, e:5};
const objet2 = {name:"Aroussia"};

const result = Object.assign({}, monObjet, objet2);
console.log(result);
Object.assign(monObjet, objet2);
console.log(monObjet); */

/* const monObjet = {a:1, b:2, c:3, d:4, e:5};
const copy = {...monObjet};
console.log(copy);
const objet2 = {
  name:"aroussia",
  prenom:"ben salem"
}
const copy2 = {...monObjet, ...objet2};

console.log(copy2); */

/* const obj = {b:{}};
const obj2 = obj.b;
obj2.a = 2;
console.log(obj); // {b:{a:2}}
console.log(obj2); // {a:2}

const obj3 = {a:3};
const obj4 = obj3;
console.log(obj3 === obj4);

obj5 = {a:3};
console.log(obj3 === obj5); */

/* const obj = {a:1, b:2, c:3};

for(const i in obj){
  console.log(obj[i]);
} */

/* for(const i in person){
  console.log(i,":",person[i]);
}
console.log(person);

const json = JSON.stringify(person, null, 1);
console.log(json);
const objet = JSON.parse(json);
console.log(objet); */

/* const person2 = JSON.parse(JSON.stringify(person));
person2.a.test = "test";
console.log(person);  // copie profonde

const person3 = {...person};
person3.a.test = "test";
console.log(person); // copie superficiel */

var person = {
  name: "adnen",
  age: 38,
  civile: "divorcer",
  adresse: "2 avenue rosa parks Lyon 69009",
  a: {}
};

function addition(nb1, nb2) {
  var result = nb1 + nb2;
  console.log(result);
}

addition(2, 24);

function multiplier(nb1, nb2, nb3) {
  var result = nb1 * nb2 * nb3;
  console.log("multiplier(" + nb1 + "*" + nb2 + "*" + nb3 + ")=" + result);
}

multiplier(3, 10, 1);
/* const factorielle = function f(n) { return n < 2 ? console.log(n) : n * f(n - 1) ? console.log(n):console.log(n)};
factorielle(10); */

var division = function division(a, b) {
  var result = a / b;
  console.log("divison(" + a + "/" + b + ")=" + result);
};

division(10, 2);

var majuscule = function majuscule(param) {
  param = param || 'default'; // si la fonction n'as pas de parametre ca affiche DEFAULT

  console.log(param.toUpperCase());
  /*   if(param)
    console.log(param.toUpperCase()); */
};

majuscule('ciao'); // CIAO

majuscule(); // DEFAULT
// fonction additionne n'importe quel nombre d'argument

function add() {
  var result = 0;
  console.log(arguments);

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  } //console.log(result);

}

add(1, 2, 3, 4, 5); // une autre methode

function add2() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  console.log(numbers);
  var total = 0;

  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  } //console.log("total:"+total);

}

add2(3, 2);

var operation = function operation(operator) {
  var total = 0;

  if (operator === "+") {
    for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
      total += i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
    }

    console.log("addition" + total);
  }

  if (operator === "*") {
    total = 1;

    for (var _i = 0; _i < (arguments.length <= 1 ? 0 : arguments.length - 1); _i++) {
      total *= _i + 1 < 1 || arguments.length <= _i + 1 ? undefined : arguments[_i + 1];
    }

    return total;
  }
};

var total = operation("*", 2, 5);
console.log("total" + total); // chaine de portée

function b() {
  var foo = 1;
  a();

  function a() {
    console.log(foo);
  }
}

var foo = 2;
b();
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map