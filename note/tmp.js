//  "vendors~share.bundle.js": "exports.ids = [0];
exports.modules = {

/***/ "20eb701f8c9fff13b969":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/lib/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/index.js");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./node_modules/@babel/runtime/core-js/object/assign.js":
      /*!**************************************************************!*\\
        !*** ./node_modules/@babel/runtime/core-js/object/assign.js ***!
        \\**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ \"./node_modules/core-js/library/fn/object/assign.js\");\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/@babel/runtime/core-js/object/assign.js?");
        /***/
      },

      /***/
      "./node_modules/@babel/runtime/core-js/object/define-property.js":
      /*!***********************************************************************!*\\
        !*** ./node_modules/@babel/runtime/core-js/object/define-property.js ***!
        \\***********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ \"./node_modules/core-js/library/fn/object/define-property.js\");\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/@babel/runtime/core-js/object/define-property.js?");
        /***/
      },

      /***/
      "./node_modules/@babel/runtime/core-js/promise.js":
      /*!********************************************************!*\\
        !*** ./node_modules/@babel/runtime/core-js/promise.js ***!
        \\********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("module.exports = __webpack_require__(/*! core-js/library/fn/promise */ \"./node_modules/core-js/library/fn/promise.js\");\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/@babel/runtime/core-js/promise.js?");
        /***/
      },

      /***/
      "./node_modules/@babel/runtime/core-js/symbol.js":
      /*!*******************************************************!*\\
        !*** ./node_modules/@babel/runtime/core-js/symbol.js ***!
        \\*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ \"./node_modules/core-js/library/fn/symbol/index.js\");\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/@babel/runtime/core-js/symbol.js?");
        /***/
      },

      /***/
      "./node_modules/@babel/runtime/core-js/symbol/iterator.js":
      /*!****************************************************************!*\\
        !*** ./node_modules/@babel/runtime/core-js/symbol/iterator.js ***!
        \\****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ \"./node_modules/core-js/library/fn/symbol/iterator.js\");\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/@babel/runtime/core-js/symbol/iterator.js?");
        /***/
      },

      /***/
      "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
      /*!*****************************************************************!*\\
        !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
        \\*****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var _Promise = __webpack_require__(/*! ../core-js/promise */ \"./node_modules/@babel/runtime/core-js/promise.js\");\
\
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\
  try {\
    var info = gen[key](arg);\
    var value = info.value;\
  } catch (error) {\
    reject(error);\
    return;\
  }\
\
  if (info.done) {\
    resolve(value);\
  } else {\
    _Promise.resolve(value).then(_next, _throw);\
  }\
}\
\
function _asyncToGenerator(fn) {\
  return function () {\
    var self = this,\
        args = arguments;\
    return new _Promise(function (resolve, reject) {\
      var gen = fn.apply(self, args);\
\
      function _next(value) {\
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\
      }\
\
      function _throw(err) {\
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\
      }\
\
      _next(undefined);\
    });\
  };\
}\
\
module.exports = _asyncToGenerator;\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/@babel/runtime/helpers/asyncToGenerator.js?");
        /***/
      },

      /***/
      "./node_modules/@babel/runtime/helpers/classCallCheck.js":
      /*!***************************************************************!*\\
        !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
        \\***************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("function _classCallCheck(instance, Constructor) {\
  if (!(instance instanceof Constructor)) {\
    throw new TypeError(\"Cannot call a class as a function\");\
  }\
}\
\
module.exports = _classCallCheck;\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/@babel/runtime/helpers/classCallCheck.js?");
        /***/
      },

      /***/
      "./node_modules/@babel/runtime/helpers/createClass.js":
      /*!************************************************************!*\\
        !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/@babel/runtime/core-js/object/define-property.js\");\
\
function _defineProperties(target, props) {\
  for (var i = 0; i < props.length; i++) {\
    var descriptor = props[i];\
    descriptor.enumerable = descriptor.enumerable || false;\
    descriptor.configurable = true;\
    if (\"value\" in descriptor) descriptor.writable = true;\
\
    _Object$defineProperty(target, descriptor.key, descriptor);\
  }\
}\
\
function _createClass(Constructor, protoProps, staticProps) {\
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\
  if (staticProps) _defineProperties(Constructor, staticProps);\
  return Constructor;\
}\
\
module.exports = _createClass;\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/@babel/runtime/helpers/createClass.js?");
        /***/
      },

      /***/
      "./node_modules/@babel/runtime/helpers/extends.js":
      /*!********************************************************!*\\
        !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
        \\********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ \"./node_modules/@babel/runtime/core-js/object/assign.js\");\
\
function _extends() {\
  module.exports = _extends = _Object$assign || function (target) {\
    for (var i = 1; i < arguments.length; i++) {\
      var source = arguments[i];\
\
      for (var key in source) {\
        if (Object.prototype.hasOwnProperty.call(source, key)) {\
          target[key] = source[key];\
        }\
      }\
    }\
\
    return target;\
  };\
\
  return _extends.apply(this, arguments);\
}\
\
module.exports = _extends;\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/@babel/runtime/helpers/extends.js?");
        /***/
      },

      /***/
      "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
      /*!**********************************************************************!*\\
        !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
        \\**********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("function _interopRequireDefault(obj) {\
  return obj && obj.__esModule ? obj : {\
    default: obj\
  };\
}\
\
module.exports = _interopRequireDefault;\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/@babel/runtime/helpers/interopRequireDefault.js?");
        /***/
      },

      /***/
      "./node_modules/@babel/runtime/helpers/typeof.js":
      /*!*******************************************************!*\\
        !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
        \\*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ \"./node_modules/@babel/runtime/core-js/symbol/iterator.js\");\
\
var _Symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/@babel/runtime/core-js/symbol.js\");\
\
function _typeof2(obj) { if (typeof _Symbol === \"function\" && typeof _Symbol$iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === \"function\" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\
\
function _typeof(obj) {\
  if (typeof _Symbol === \"function\" && _typeof2(_Symbol$iterator) === \"symbol\") {\
    module.exports = _typeof = function _typeof(obj) {\
      return _typeof2(obj);\
    };\
  } else {\
    module.exports = _typeof = function _typeof(obj) {\
      return obj && typeof _Symbol === \"function\" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? \"symbol\" : _typeof2(obj);\
    };\
  }\
\
  return _typeof(obj);\
}\
\
module.exports = _typeof;\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/@babel/runtime/helpers/typeof.js?");
        /***/
      },

      /***/
      "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js":
      /*!****************************************************************************************!*\\
        !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js ***!
        \\****************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("/**\
 * Copyright (c) 2014-present, Facebook, Inc.\
 *\
 * This source code is licensed under the MIT license found in the\
 * LICENSE file in the root directory of this source tree.\
 */\
\
// This method of obtaining a reference to the global object needs to be\
// kept identical to the way it is obtained in runtime.js\
var g = (function() { return this })() || Function(\"return this\")();\
\
// Use `getOwnPropertyNames` because not all browsers support calling\
// `hasOwnProperty` on the global `self` object in a worker. See #183.\
var hadRuntime = g.regeneratorRuntime &&\
  Object.getOwnPropertyNames(g).indexOf(\"regeneratorRuntime\") >= 0;\
\
// Save the old regeneratorRuntime in case it needs to be restored later.\
var oldRuntime = hadRuntime && g.regeneratorRuntime;\
\
// Force reevalutation of runtime.js.\
g.regeneratorRuntime = undefined;\
\
module.exports = __webpack_require__(/*! ./runtime */ \"./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js\");\
\
if (hadRuntime) {\
  // Restore the original runtime.\
  g.regeneratorRuntime = oldRuntime;\
} else {\
  // Remove the global property added by runtime.js.\
  try {\
    delete g.regeneratorRuntime;\
  } catch(e) {\
    g.regeneratorRuntime = undefined;\
  }\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js?");
        /***/
      },

      /***/
      "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
      /*!*********************************************************************************!*\\
        !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
        \\*********************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("/**\
 * Copyright (c) 2014-present, Facebook, Inc.\
 *\
 * This source code is licensed under the MIT license found in the\
 * LICENSE file in the root directory of this source tree.\
 */\
\
!(function(global) {\
  \"use strict\";\
\
  var Op = Object.prototype;\
  var hasOwn = Op.hasOwnProperty;\
  var undefined; // More compressible than void 0.\
  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\
  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\
  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\
  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\
\
  var inModule = typeof module === \"object\";\
  var runtime = global.regeneratorRuntime;\
  if (runtime) {\
    if (inModule) {\
      // If regeneratorRuntime is defined globally and we're in a module,\
      // make the exports object identical to regeneratorRuntime.\
      module.exports = runtime;\
    }\
    // Don't bother evaluating the rest of this file if the runtime was\
    // already defined globally.\
    return;\
  }\
\
  // Define the runtime globally (as expected by generated code) as either\
  // module.exports (if we're in a module) or a new, empty object.\
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\
\
  function wrap(innerFn, outerFn, self, tryLocsList) {\
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\
    var generator = Object.create(protoGenerator.prototype);\
    var context = new Context(tryLocsList || []);\
\
    // The ._invoke method unifies the implementations of the .next,\
    // .throw, and .return methods.\
    generator._invoke = makeInvokeMethod(innerFn, self, context);\
\
    return generator;\
  }\
  runtime.wrap = wrap;\
\
  // Try/catch helper to minimize deoptimizations. Returns a completion\
  // record like context.tryEntries[i].completion. This interface could\
  // have been (and was previously) designed to take a closure to be\
  // invoked without arguments, but in all the cases we care about we\
  // already have an existing method we want to call, so there's no need\
  // to create a new function object. We can even get away with assuming\
  // the method takes exactly one argument, since that happens to be true\
  // in every case, so we don't have to touch the arguments object. The\
  // only additional allocation required is the completion record, which\
  // has a stable shape and so hopefully should be cheap to allocate.\
  function tryCatch(fn, obj, arg) {\
    try {\
      return { type: \"normal\", arg: fn.call(obj, arg) };\
    } catch (err) {\
      return { type: \"throw\", arg: err };\
    }\
  }\
\
  var GenStateSuspendedStart = \"suspendedStart\";\
  var GenStateSuspendedYield = \"suspendedYield\";\
  var GenStateExecuting = \"executing\";\
  var GenStateCompleted = \"completed\";\
\
  // Returning this object from the innerFn has the same effect as\
  // breaking out of the dispatch switch statement.\
  var ContinueSentinel = {};\
\
  // Dummy constructor functions that we use as the .constructor and\
  // .constructor.prototype properties for functions that return Generator\
  // objects. For full spec compliance, you may wish to configure your\
  // minifier not to mangle the names of these two functions.\
  function Generator() {}\
  function GeneratorFunction() {}\
  function GeneratorFunctionPrototype() {}\
\
  // This is a polyfill for %IteratorPrototype% for environments that\
  // don't natively support it.\
  var IteratorPrototype = {};\
  IteratorPrototype[iteratorSymbol] = function () {\
    return this;\
  };\
\
  var getProto = Object.getPrototypeOf;\
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\
  if (NativeIteratorPrototype &&\
      NativeIteratorPrototype !== Op &&\
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\
    // This environment has a native %IteratorPrototype%; use it instead\
    // of the polyfill.\
    IteratorPrototype = NativeIteratorPrototype;\
  }\
\
  var Gp = GeneratorFunctionPrototype.prototype =\
    Generator.prototype = Object.create(IteratorPrototype);\
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\
  GeneratorFunctionPrototype.constructor = GeneratorFunction;\
  GeneratorFunctionPrototype[toStringTagSymbol] =\
    GeneratorFunction.displayName = \"GeneratorFunction\";\
\
  // Helper for defining the .next, .throw, and .return methods of the\
  // Iterator interface in terms of a single ._invoke method.\
  function defineIteratorMethods(prototype) {\
    [\"next\", \"throw\", \"return\"].forEach(function(method) {\
      prototype[method] = function(arg) {\
        return this._invoke(method, arg);\
      };\
    });\
  }\
\
  runtime.isGeneratorFunction = function(genFun) {\
    var ctor = typeof genFun === \"function\" && genFun.constructor;\
    return ctor\
      ? ctor === GeneratorFunction ||\
        // For the native GeneratorFunction constructor, the best we can\
        // do is to check its .name property.\
        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\
      : false;\
  };\
\
  runtime.mark = function(genFun) {\
    if (Object.setPrototypeOf) {\
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\
    } else {\
      genFun.__proto__ = GeneratorFunctionPrototype;\
      if (!(toStringTagSymbol in genFun)) {\
        genFun[toStringTagSymbol] = \"GeneratorFunction\";\
      }\
    }\
    genFun.prototype = Object.create(Gp);\
    return genFun;\
  };\
\
  // Within the body of any async function, `await x` is transformed to\
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\
  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\
  // meant to be awaited.\
  runtime.awrap = function(arg) {\
    return { __await: arg };\
  };\
\
  function AsyncIterator(generator) {\
    function invoke(method, arg, resolve, reject) {\
      var record = tryCatch(generator[method], generator, arg);\
      if (record.type === \"throw\") {\
        reject(record.arg);\
      } else {\
        var result = record.arg;\
        var value = result.value;\
        if (value &&\
            typeof value === \"object\" &&\
            hasOwn.call(value, \"__await\")) {\
          return Promise.resolve(value.__await).then(function(value) {\
            invoke(\"next\", value, resolve, reject);\
          }, function(err) {\
            invoke(\"throw\", err, resolve, reject);\
          });\
        }\
\
        return Promise.resolve(value).then(function(unwrapped) {\
          // When a yielded Promise is resolved, its final value becomes\
          // the .value of the Promise<{value,done}> result for the\
          // current iteration.\
          result.value = unwrapped;\
          resolve(result);\
        }, function(error) {\
          // If a rejected Promise was yielded, throw the rejection back\
          // into the async generator function so it can be handled there.\
          return invoke(\"throw\", error, resolve, reject);\
        });\
      }\
    }\
\
    var previousPromise;\
\
    function enqueue(method, arg) {\
      function callInvokeWithMethodAndArg() {\
        return new Promise(function(resolve, reject) {\
          invoke(method, arg, resolve, reject);\
        });\
      }\
\
      return previousPromise =\
        // If enqueue has been called before, then we want to wait until\
        // all previous Promises have been resolved before calling invoke,\
        // so that results are always delivered in the correct order. If\
        // enqueue has not been called before, then it is important to\
        // call invoke immediately, without waiting on a callback to fire,\
        // so that the async generator function has the opportunity to do\
        // any necessary setup in a predictable way. This predictability\
        // is why the Promise constructor synchronously invokes its\
        // executor callback, and why async functions synchronously\
        // execute code before the first await. Since we implement simple\
        // async functions in terms of async generators, it is especially\
        // important to get this right, even though it requires care.\
        previousPromise ? previousPromise.then(\
          callInvokeWithMethodAndArg,\
          // Avoid propagating failures to Promises returned by later\
          // invocations of the iterator.\
          callInvokeWithMethodAndArg\
        ) : callInvokeWithMethodAndArg();\
    }\
\
    // Define the unified helper method that is used to implement .next,\
    // .throw, and .return (see defineIteratorMethods).\
    this._invoke = enqueue;\
  }\
\
  defineIteratorMethods(AsyncIterator.prototype);\
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\
    return this;\
  };\
  runtime.AsyncIterator = AsyncIterator;\
\
  // Note that simple async functions are implemented on top of\
  // AsyncIterator objects; they just return a Promise for the value of\
  // the final result produced by the iterator.\
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\
    var iter = new AsyncIterator(\
      wrap(innerFn, outerFn, self, tryLocsList)\
    );\
\
    return runtime.isGeneratorFunction(outerFn)\
      ? iter // If outerFn is a generator, return the full iterator.\
      : iter.next().then(function(result) {\
          return result.done ? result.value : iter.next();\
        });\
  };\
\
  function makeInvokeMethod(innerFn, self, context) {\
    var state = GenStateSuspendedStart;\
\
    return function invoke(method, arg) {\
      if (state === GenStateExecuting) {\
        throw new Error(\"Generator is already running\");\
      }\
\
      if (state === GenStateCompleted) {\
        if (method === \"throw\") {\
          throw arg;\
        }\
\
        // Be forgiving, per 25.3.3.3.3 of the spec:\
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\
        return doneResult();\
      }\
\
      context.method = method;\
      context.arg = arg;\
\
      while (true) {\
        var delegate = context.delegate;\
        if (delegate) {\
          var delegateResult = maybeInvokeDelegate(delegate, context);\
          if (delegateResult) {\
            if (delegateResult === ContinueSentinel) continue;\
            return delegateResult;\
          }\
        }\
\
        if (context.method === \"next\") {\
          // Setting context._sent for legacy support of Babel's\
          // function.sent implementation.\
          context.sent = context._sent = context.arg;\
\
        } else if (context.method === \"throw\") {\
          if (state === GenStateSuspendedStart) {\
            state = GenStateCompleted;\
            throw context.arg;\
          }\
\
          context.dispatchException(context.arg);\
\
        } else if (context.method === \"return\") {\
          context.abrupt(\"return\", context.arg);\
        }\
\
        state = GenStateExecuting;\
\
        var record = tryCatch(innerFn, self, context);\
        if (record.type === \"normal\") {\
          // If an exception is thrown from innerFn, we leave state ===\
          // GenStateExecuting and loop back for another invocation.\
          state = context.done\
            ? GenStateCompleted\
            : GenStateSuspendedYield;\
\
          if (record.arg === ContinueSentinel) {\
            continue;\
          }\
\
          return {\
            value: record.arg,\
            done: context.done\
          };\
\
        } else if (record.type === \"throw\") {\
          state = GenStateCompleted;\
          // Dispatch the exception by looping back around to the\
          // context.dispatchException(context.arg) call above.\
          context.method = \"throw\";\
          context.arg = record.arg;\
        }\
      }\
    };\
  }\
\
  // Call delegate.iterator[context.method](context.arg) and handle the\
  // result, either by returning a { value, done } result from the\
  // delegate iterator, or by modifying context.method and context.arg,\
  // setting context.delegate to null, and returning the ContinueSentinel.\
  function maybeInvokeDelegate(delegate, context) {\
    var method = delegate.iterator[context.method];\
    if (method === undefined) {\
      // A .throw or .return when the delegate iterator has no .throw\
      // method always terminates the yield* loop.\
      context.delegate = null;\
\
      if (context.method === \"throw\") {\
        if (delegate.iterator.return) {\
          // If the delegate iterator has a return method, give it a\
          // chance to clean up.\
          context.method = \"return\";\
          context.arg = undefined;\
          maybeInvokeDelegate(delegate, context);\
\
          if (context.method === \"throw\") {\
            // If maybeInvokeDelegate(context) changed context.method from\
            // \"return\" to \"throw\", let that override the TypeError below.\
            return ContinueSentinel;\
          }\
        }\
\
        context.method = \"throw\";\
        context.arg = new TypeError(\
          \"The iterator does not provide a 'throw' method\");\
      }\
\
      return ContinueSentinel;\
    }\
\
    var record = tryCatch(method, delegate.iterator, context.arg);\
\
    if (record.type === \"throw\") {\
      context.method = \"throw\";\
      context.arg = record.arg;\
      context.delegate = null;\
      return ContinueSentinel;\
    }\
\
    var info = record.arg;\
\
    if (! info) {\
      context.method = \"throw\";\
      context.arg = new TypeError(\"iterator result is not an object\");\
      context.delegate = null;\
      return ContinueSentinel;\
    }\
\
    if (info.done) {\
      // Assign the result of the finished delegate to the temporary\
      // variable specified by delegate.resultName (see delegateYield).\
      context[delegate.resultName] = info.value;\
\
      // Resume execution at the desired location (see delegateYield).\
      context.next = delegate.nextLoc;\
\
      // If context.method was \"throw\" but the delegate handled the\
      // exception, let the outer generator proceed normally. If\
      // context.method was \"next\", forget context.arg since it has been\
      // \"consumed\" by the delegate iterator. If context.method was\
      // \"return\", allow the original .return call to continue in the\
      // outer generator.\
      if (context.method !== \"return\") {\
        context.method = \"next\";\
        context.arg = undefined;\
      }\
\
    } else {\
      // Re-yield the result returned by the delegate method.\
      return info;\
    }\
\
    // The delegate iterator is finished, so forget it and continue with\
    // the outer generator.\
    context.delegate = null;\
    return ContinueSentinel;\
  }\
\
  // Define Generator.prototype.{next,throw,return} in terms of the\
  // unified ._invoke helper method.\
  defineIteratorMethods(Gp);\
\
  Gp[toStringTagSymbol] = \"Generator\";\
\
  // A Generator should always return itself as the iterator object when the\
  // @@iterator function is called on it. Some browsers' implementations of the\
  // iterator prototype chain incorrectly implement this, causing the Generator\
  // object to not be returned from this call. This ensures that doesn't happen.\
  // See https://github.com/facebook/regenerator/issues/274 for more details.\
  Gp[iteratorSymbol] = function() {\
    return this;\
  };\
\
  Gp.toString = function() {\
    return \"[object Generator]\";\
  };\
\
  function pushTryEntry(locs) {\
    var entry = { tryLoc: locs[0] };\
\
    if (1 in locs) {\
      entry.catchLoc = locs[1];\
    }\
\
    if (2 in locs) {\
      entry.finallyLoc = locs[2];\
      entry.afterLoc = locs[3];\
    }\
\
    this.tryEntries.push(entry);\
  }\
\
  function resetTryEntry(entry) {\
    var record = entry.completion || {};\
    record.type = \"normal\";\
    delete record.arg;\
    entry.completion = record;\
  }\
\
  function Context(tryLocsList) {\
    // The root entry object (effectively a try statement without a catch\
    // or a finally block) gives us a place to store values thrown from\
    // locations where there is no enclosing try statement.\
    this.tryEntries = [{ tryLoc: \"root\" }];\
    tryLocsList.forEach(pushTryEntry, this);\
    this.reset(true);\
  }\
\
  runtime.keys = function(object) {\
    var keys = [];\
    for (var key in object) {\
      keys.push(key);\
    }\
    keys.reverse();\
\
    // Rather than returning an object with a next method, we keep\
    // things simple and return the next function itself.\
    return function next() {\
      while (keys.length) {\
        var key = keys.pop();\
        if (key in object) {\
          next.value = key;\
          next.done = false;\
          return next;\
        }\
      }\
\
      // To avoid creating an additional object, we just hang the .value\
      // and .done properties off the next function object itself. This\
      // also ensures that the minifier will not anonymize the function.\
      next.done = true;\
      return next;\
    };\
  };\
\
  function values(iterable) {\
    if (iterable) {\
      var iteratorMethod = iterable[iteratorSymbol];\
      if (iteratorMethod) {\
        return iteratorMethod.call(iterable);\
      }\
\
      if (typeof iterable.next === \"function\") {\
        return iterable;\
      }\
\
      if (!isNaN(iterable.length)) {\
        var i = -1, next = function next() {\
          while (++i < iterable.length) {\
            if (hasOwn.call(iterable, i)) {\
              next.value = iterable[i];\
              next.done = false;\
              return next;\
            }\
          }\
\
          next.value = undefined;\
          next.done = true;\
\
          return next;\
        };\
\
        return next.next = next;\
      }\
    }\
\
    // Return an iterator with no values.\
    return { next: doneResult };\
  }\
  runtime.values = values;\
\
  function doneResult() {\
    return { value: undefined, done: true };\
  }\
\
  Context.prototype = {\
    constructor: Context,\
\
    reset: function(skipTempReset) {\
      this.prev = 0;\
      this.next = 0;\
      // Resetting context._sent for legacy support of Babel's\
      // function.sent implementation.\
      this.sent = this._sent = undefined;\
      this.done = false;\
      this.delegate = null;\
\
      this.method = \"next\";\
      this.arg = undefined;\
\
      this.tryEntries.forEach(resetTryEntry);\
\
      if (!skipTempReset) {\
        for (var name in this) {\
          // Not sure about the optimal order of these conditions:\
          if (name.charAt(0) === \"t\" &&\
              hasOwn.call(this, name) &&\
              !isNaN(+name.slice(1))) {\
            this[name] = undefined;\
          }\
        }\
      }\
    },\
\
    stop: function() {\
      this.done = true;\
\
      var rootEntry = this.tryEntries[0];\
      var rootRecord = rootEntry.completion;\
      if (rootRecord.type === \"throw\") {\
        throw rootRecord.arg;\
      }\
\
      return this.rval;\
    },\
\
    dispatchException: function(exception) {\
      if (this.done) {\
        throw exception;\
      }\
\
      var context = this;\
      function handle(loc, caught) {\
        record.type = \"throw\";\
        record.arg = exception;\
        context.next = loc;\
\
        if (caught) {\
          // If the dispatched exception was caught by a catch block,\
          // then let that catch block handle the exception normally.\
          context.method = \"next\";\
          context.arg = undefined;\
        }\
\
        return !! caught;\
      }\
\
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\
        var entry = this.tryEntries[i];\
        var record = entry.completion;\
\
        if (entry.tryLoc === \"root\") {\
          // Exception thrown outside of any try block that could handle\
          // it, so set the completion value of the entire function to\
          // throw the exception.\
          return handle(\"end\");\
        }\
\
        if (entry.tryLoc <= this.prev) {\
          var hasCatch = hasOwn.call(entry, \"catchLoc\");\
          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\
\
          if (hasCatch && hasFinally) {\
            if (this.prev < entry.catchLoc) {\
              return handle(entry.catchLoc, true);\
            } else if (this.prev < entry.finallyLoc) {\
              return handle(entry.finallyLoc);\
            }\
\
          } else if (hasCatch) {\
            if (this.prev < entry.catchLoc) {\
              return handle(entry.catchLoc, true);\
            }\
\
          } else if (hasFinally) {\
            if (this.prev < entry.finallyLoc) {\
              return handle(entry.finallyLoc);\
            }\
\
          } else {\
            throw new Error(\"try statement without catch or finally\");\
          }\
        }\
      }\
    },\
\
    abrupt: function(type, arg) {\
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\
        var entry = this.tryEntries[i];\
        if (entry.tryLoc <= this.prev &&\
            hasOwn.call(entry, \"finallyLoc\") &&\
            this.prev < entry.finallyLoc) {\
          var finallyEntry = entry;\
          break;\
        }\
      }\
\
      if (finallyEntry &&\
          (type === \"break\" ||\
           type === \"continue\") &&\
          finallyEntry.tryLoc <= arg &&\
          arg <= finallyEntry.finallyLoc) {\
        // Ignore the finally entry if control is not jumping to a\
        // location outside the try/catch block.\
        finallyEntry = null;\
      }\
\
      var record = finallyEntry ? finallyEntry.completion : {};\
      record.type = type;\
      record.arg = arg;\
\
      if (finallyEntry) {\
        this.method = \"next\";\
        this.next = finallyEntry.finallyLoc;\
        return ContinueSentinel;\
      }\
\
      return this.complete(record);\
    },\
\
    complete: function(record, afterLoc) {\
      if (record.type === \"throw\") {\
        throw record.arg;\
      }\
\
      if (record.type === \"break\" ||\
          record.type === \"continue\") {\
        this.next = record.arg;\
      } else if (record.type === \"return\") {\
        this.rval = this.arg = record.arg;\
        this.method = \"return\";\
        this.next = \"end\";\
      } else if (record.type === \"normal\" && afterLoc) {\
        this.next = afterLoc;\
      }\
\
      return ContinueSentinel;\
    },\
\
    finish: function(finallyLoc) {\
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\
        var entry = this.tryEntries[i];\
        if (entry.finallyLoc === finallyLoc) {\
          this.complete(entry.completion, entry.afterLoc);\
          resetTryEntry(entry);\
          return ContinueSentinel;\
        }\
      }\
    },\
\
    \"catch\": function(tryLoc) {\
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\
        var entry = this.tryEntries[i];\
        if (entry.tryLoc === tryLoc) {\
          var record = entry.completion;\
          if (record.type === \"throw\") {\
            var thrown = record.arg;\
            resetTryEntry(entry);\
          }\
          return thrown;\
        }\
      }\
\
      // The context.catch method must only be called with a location\
      // argument that corresponds to a known catch block.\
      throw new Error(\"illegal catch attempt\");\
    },\
\
    delegateYield: function(iterable, resultName, nextLoc) {\
      this.delegate = {\
        iterator: values(iterable),\
        resultName: resultName,\
        nextLoc: nextLoc\
      };\
\
      if (this.method === \"next\") {\
        // Deliberately forget the last sent value so that we don't\
        // accidentally pass it on to the delegate.\
        this.arg = undefined;\
      }\
\
      return ContinueSentinel;\
    }\
  };\
})(\
  // In sloppy mode, unbound `this` refers to the global object, fallback to\
  // Function constructor if we're in global strict mode. That is sadly a form\
  // of indirect eval which violates Content Security Policy.\
  (function() { return this })() || Function(\"return this\")()\
);\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js?");
        /***/
      },

      /***/
      "./node_modules/@babel/runtime/regenerator/index.js":
      /*!**********************************************************!*\\
        !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
        \\**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js\");\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/@babel/runtime/regenerator/index.js?");
        /***/
      },

      /***/
      "./node_modules/can-promise/index.js":
      /*!*******************************************!*\\
        !*** ./node_modules/can-promise/index.js ***!
        \\*******************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\
\
var G = __webpack_require__(/*! window-or-global */ \"./node_modules/window-or-global/lib/index.js\")\
\
module.exports = function() {\
  return (\
    typeof G.Promise === 'function' &&\
    typeof G.Promise.prototype.then === 'function'\
  )\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/can-promise/index.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/fn/object/assign.js":
      /*!**********************************************************!*\\
        !*** ./node_modules/core-js/library/fn/object/assign.js ***!
        \\**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("__webpack_require__(/*! ../../modules/es6.object.assign */ \"./node_modules/core-js/library/modules/es6.object.assign.js\");\
module.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.assign;\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/fn/object/assign.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/fn/object/define-property.js":
      /*!*******************************************************************!*\\
        !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
        \\*******************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"./node_modules/core-js/library/modules/es6.object.define-property.js\");\
var $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\
module.exports = function defineProperty(it, key, desc) {\
  return $Object.defineProperty(it, key, desc);\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/fn/object/define-property.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/fn/promise.js":
      /*!****************************************************!*\\
        !*** ./node_modules/core-js/library/fn/promise.js ***!
        \\****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("__webpack_require__(/*! ../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\
__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\
__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\
__webpack_require__(/*! ../modules/es6.promise */ \"./node_modules/core-js/library/modules/es6.promise.js\");\
__webpack_require__(/*! ../modules/es7.promise.finally */ \"./node_modules/core-js/library/modules/es7.promise.finally.js\");\
__webpack_require__(/*! ../modules/es7.promise.try */ \"./node_modules/core-js/library/modules/es7.promise.try.js\");\
module.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Promise;\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/fn/promise.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/fn/symbol/index.js":
      /*!*********************************************************!*\\
        !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
        \\*********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("__webpack_require__(/*! ../../modules/es6.symbol */ \"./node_modules/core-js/library/modules/es6.symbol.js\");\
__webpack_require__(/*! ../../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ \"./node_modules/core-js/library/modules/es7.symbol.async-iterator.js\");\
__webpack_require__(/*! ../../modules/es7.symbol.observable */ \"./node_modules/core-js/library/modules/es7.symbol.observable.js\");\
module.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Symbol;\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/fn/symbol/index.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/fn/symbol/iterator.js":
      /*!************************************************************!*\\
        !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("__webpack_require__(/*! ../../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\
__webpack_require__(/*! ../../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\").f('iterator');\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/fn/symbol/iterator.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_a-function.js":
      /*!*************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_a-function.js ***!
        \\*************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("module.exports = function (it) {\
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\
  return it;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_a-function.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_add-to-unscopables.js":
      /*!*********************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
        \\*********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("module.exports = function () { /* empty */ };\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_add-to-unscopables.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_an-instance.js":
      /*!**************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
        \\**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("module.exports = function (it, Constructor, name, forbiddenField) {\
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\
    throw TypeError(name + ': incorrect invocation!');\
  } return it;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_an-instance.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_an-object.js":
      /*!************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_an-object.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\
module.exports = function (it) {\
  if (!isObject(it)) throw TypeError(it + ' is not an object!');\
  return it;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_an-object.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_array-includes.js":
      /*!*****************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
        \\*****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// false -> Array#indexOf\
// true  -> Array#includes\
var toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\
var toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/library/modules/_to-absolute-index.js\");\
module.exports = function (IS_INCLUDES) {\
  return function ($this, el, fromIndex) {\
    var O = toIObject($this);\
    var length = toLength(O.length);\
    var index = toAbsoluteIndex(fromIndex, length);\
    var value;\
    // Array#includes uses SameValueZero equality algorithm\
    // eslint-disable-next-line no-self-compare\
    if (IS_INCLUDES && el != el) while (length > index) {\
      value = O[index++];\
      // eslint-disable-next-line no-self-compare\
      if (value != value) return true;\
    // Array#indexOf ignores holes, Array#includes - not\
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\
      if (O[index] === el) return IS_INCLUDES || index || 0;\
    } return !IS_INCLUDES && -1;\
  };\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_array-includes.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_classof.js":
      /*!**********************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_classof.js ***!
        \\**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// getting tag from 19.1.3.6 Object.prototype.toString()\
var cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\
var TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\
// ES3 wrong here\
var ARG = cof(function () { return arguments; }()) == 'Arguments';\
\
// fallback for IE11 Script Access Denied error\
var tryGet = function (it, key) {\
  try {\
    return it[key];\
  } catch (e) { /* empty */ }\
};\
\
module.exports = function (it) {\
  var O, T, B;\
  return it === undefined ? 'Undefined' : it === null ? 'Null'\
    // @@toStringTag case\
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\
    // builtinTag case\
    : ARG ? cof(O)\
    // ES3 arguments fallback\
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_classof.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_cof.js":
      /*!******************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_cof.js ***!
        \\******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("var toString = {}.toString;\
\
module.exports = function (it) {\
  return toString.call(it).slice(8, -1);\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_cof.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_core.js":
      /*!*******************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_core.js ***!
        \\*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("var core = module.exports = { version: '2.5.7' };\
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_core.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_ctx.js":
      /*!******************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_ctx.js ***!
        \\******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// optional / simple context binding\
var aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\
module.exports = function (fn, that, length) {\
  aFunction(fn);\
  if (that === undefined) return fn;\
  switch (length) {\
    case 1: return function (a) {\
      return fn.call(that, a);\
    };\
    case 2: return function (a, b) {\
      return fn.call(that, a, b);\
    };\
    case 3: return function (a, b, c) {\
      return fn.call(that, a, b, c);\
    };\
  }\
  return function (/* ...args */) {\
    return fn.apply(that, arguments);\
  };\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_ctx.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_defined.js":
      /*!**********************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_defined.js ***!
        \\**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("// 7.2.1 RequireObjectCoercible(argument)\
module.exports = function (it) {\
  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\
  return it;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_defined.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_descriptors.js":
      /*!**************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
        \\**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// Thank's IE8 for his funny defineProperty\
module.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\
});\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_descriptors.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_dom-create.js":
      /*!*************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
        \\*************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\
var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\
// typeof document.createElement is 'object' in old IE\
var is = isObject(document) && isObject(document.createElement);\
module.exports = function (it) {\
  return is ? document.createElement(it) : {};\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_dom-create.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_enum-bug-keys.js":
      /*!****************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
        \\****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("// IE 8- don't enum bug keys\
module.exports = (\
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\
).split(',');\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_enum-bug-keys.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_enum-keys.js":
      /*!************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// all enumerable object keys, includes symbols\
var getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\
var gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\
var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\
module.exports = function (it) {\
  var result = getKeys(it);\
  var getSymbols = gOPS.f;\
  if (getSymbols) {\
    var symbols = getSymbols(it);\
    var isEnum = pIE.f;\
    var i = 0;\
    var key;\
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\
  } return result;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_enum-keys.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_export.js":
      /*!*********************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_export.js ***!
        \\*********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\
var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\
var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\
var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\
var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\
var PROTOTYPE = 'prototype';\
\
var $export = function (type, name, source) {\
  var IS_FORCED = type & $export.F;\
  var IS_GLOBAL = type & $export.G;\
  var IS_STATIC = type & $export.S;\
  var IS_PROTO = type & $export.P;\
  var IS_BIND = type & $export.B;\
  var IS_WRAP = type & $export.W;\
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\
  var expProto = exports[PROTOTYPE];\
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\
  var key, own, out;\
  if (IS_GLOBAL) source = name;\
  for (key in source) {\
    // contains in native\
    own = !IS_FORCED && target && target[key] !== undefined;\
    if (own && has(exports, key)) continue;\
    // export native or passed\
    out = own ? target[key] : source[key];\
    // prevent global pollution for namespaces\
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\
    // bind timers to global for call from export context\
    : IS_BIND && own ? ctx(out, global)\
    // wrap global constructors for prevent change them in library\
    : IS_WRAP && target[key] == out ? (function (C) {\
      var F = function (a, b, c) {\
        if (this instanceof C) {\
          switch (arguments.length) {\
            case 0: return new C();\
            case 1: return new C(a);\
            case 2: return new C(a, b);\
          } return new C(a, b, c);\
        } return C.apply(this, arguments);\
      };\
      F[PROTOTYPE] = C[PROTOTYPE];\
      return F;\
    // make static versions for prototype methods\
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\
    if (IS_PROTO) {\
      (exports.virtual || (exports.virtual = {}))[key] = out;\
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\
    }\
  }\
};\
// type bitmap\
$export.F = 1;   // forced\
$export.G = 2;   // global\
$export.S = 4;   // static\
$export.P = 8;   // proto\
$export.B = 16;  // bind\
$export.W = 32;  // wrap\
$export.U = 64;  // safe\
$export.R = 128; // real proto method for `library`\
module.exports = $export;\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_export.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_fails.js":
      /*!********************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_fails.js ***!
        \\********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("module.exports = function (exec) {\
  try {\
    return !!exec();\
  } catch (e) {\
    return true;\
  }\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_fails.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_for-of.js":
      /*!*********************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_for-of.js ***!
        \\*********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\
var call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/library/modules/_iter-call.js\");\
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/library/modules/_is-array-iter.js\");\
var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\
var toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\
var BREAK = {};\
var RETURN = {};\
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\
  var f = ctx(fn, that, entries ? 2 : 1);\
  var index = 0;\
  var length, step, iterator, result;\
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\
  // fast case for arrays with default iterator\
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\
    if (result === BREAK || result === RETURN) return result;\
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\
    result = call(iterator, f, step.value, entries);\
    if (result === BREAK || result === RETURN) return result;\
  }\
};\
exports.BREAK = BREAK;\
exports.RETURN = RETURN;\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_for-of.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_global.js":
      /*!*********************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_global.js ***!
        \\*********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\
var global = module.exports = typeof window != 'undefined' && window.Math == Math\
  ? window : typeof self != 'undefined' && self.Math == Math ? self\
  // eslint-disable-next-line no-new-func\
  : Function('return this')();\
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_global.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_has.js":
      /*!******************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_has.js ***!
        \\******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("var hasOwnProperty = {}.hasOwnProperty;\
module.exports = function (it, key) {\
  return hasOwnProperty.call(it, key);\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_has.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_hide.js":
      /*!*******************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_hide.js ***!
        \\*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\
var createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\
module.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\
  return dP.f(object, key, createDesc(1, value));\
} : function (object, key, value) {\
  object[key] = value;\
  return object;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_hide.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_html.js":
      /*!*******************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_html.js ***!
        \\*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\
module.exports = document && document.documentElement;\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_html.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_ie8-dom-define.js":
      /*!*****************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
        \\*****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\
});\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_ie8-dom-define.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_invoke.js":
      /*!*********************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_invoke.js ***!
        \\*********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\
module.exports = function (fn, args, that) {\
  var un = that === undefined;\
  switch (args.length) {\
    case 0: return un ? fn()\
                      : fn.call(that);\
    case 1: return un ? fn(args[0])\
                      : fn.call(that, args[0]);\
    case 2: return un ? fn(args[0], args[1])\
                      : fn.call(that, args[0], args[1]);\
    case 3: return un ? fn(args[0], args[1], args[2])\
                      : fn.call(that, args[0], args[1], args[2]);\
    case 4: return un ? fn(args[0], args[1], args[2], args[3])\
                      : fn.call(that, args[0], args[1], args[2], args[3]);\
  } return fn.apply(that, args);\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_invoke.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_iobject.js":
      /*!**********************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_iobject.js ***!
        \\**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\
var cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\
// eslint-disable-next-line no-prototype-builtins\
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\
  return cof(it) == 'String' ? it.split('') : Object(it);\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_iobject.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_is-array-iter.js":
      /*!****************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
        \\****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// check on default Array iterator\
var Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\
var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\
var ArrayProto = Array.prototype;\
\
module.exports = function (it) {\
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_is-array-iter.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_is-array.js":
      /*!***********************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_is-array.js ***!
        \\***********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// 7.2.2 IsArray(argument)\
var cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\
module.exports = Array.isArray || function isArray(arg) {\
  return cof(arg) == 'Array';\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_is-array.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_is-object.js":
      /*!************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_is-object.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("module.exports = function (it) {\
  return typeof it === 'object' ? it !== null : typeof it === 'function';\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_is-object.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_iter-call.js":
      /*!************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// call something on iterator step with safe closing on error\
var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\
module.exports = function (iterator, fn, value, entries) {\
  try {\
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\
  // 7.4.6 IteratorClose(iterator, completion)\
  } catch (e) {\
    var ret = iterator['return'];\
    if (ret !== undefined) anObject(ret.call(iterator));\
    throw e;\
  }\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_iter-call.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_iter-create.js":
      /*!**************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
        \\**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\
var create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\
var descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\
var IteratorPrototype = {};\
\
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\
__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator'), function () { return this; });\
\
module.exports = function (Constructor, NAME, next) {\
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\
  setToStringTag(Constructor, NAME + ' Iterator');\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_iter-create.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_iter-define.js":
      /*!**************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
        \\**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\
var LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\
var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\
var redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\
var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\
var Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\
var $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/library/modules/_iter-create.js\");\
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\
var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\
var FF_ITERATOR = '@@iterator';\
var KEYS = 'keys';\
var VALUES = 'values';\
\
var returnThis = function () { return this; };\
\
module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\
  $iterCreate(Constructor, NAME, next);\
  var getMethod = function (kind) {\
    if (!BUGGY && kind in proto) return proto[kind];\
    switch (kind) {\
      case KEYS: return function keys() { return new Constructor(this, kind); };\
      case VALUES: return function values() { return new Constructor(this, kind); };\
    } return function entries() { return new Constructor(this, kind); };\
  };\
  var TAG = NAME + ' Iterator';\
  var DEF_VALUES = DEFAULT == VALUES;\
  var VALUES_BUG = false;\
  var proto = Base.prototype;\
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\
  var $default = $native || getMethod(DEFAULT);\
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\
  var methods, key, IteratorPrototype;\
  // Fix native\
  if ($anyNative) {\
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\
      // Set @@toStringTag to native iterators\
      setToStringTag(IteratorPrototype, TAG, true);\
      // fix for some old engines\
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\
    }\
  }\
  // fix Array#{values, @@iterator}.name in V8 / FF\
  if (DEF_VALUES && $native && $native.name !== VALUES) {\
    VALUES_BUG = true;\
    $default = function values() { return $native.call(this); };\
  }\
  // Define iterator\
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\
    hide(proto, ITERATOR, $default);\
  }\
  // Plug for library\
  Iterators[NAME] = $default;\
  Iterators[TAG] = returnThis;\
  if (DEFAULT) {\
    methods = {\
      values: DEF_VALUES ? $default : getMethod(VALUES),\
      keys: IS_SET ? $default : getMethod(KEYS),\
      entries: $entries\
    };\
    if (FORCED) for (key in methods) {\
      if (!(key in proto)) redefine(proto, key, methods[key]);\
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\
  }\
  return methods;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_iter-define.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_iter-detect.js":
      /*!**************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
        \\**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\
var SAFE_CLOSING = false;\
\
try {\
  var riter = [7][ITERATOR]();\
  riter['return'] = function () { SAFE_CLOSING = true; };\
  // eslint-disable-next-line no-throw-literal\
  Array.from(riter, function () { throw 2; });\
} catch (e) { /* empty */ }\
\
module.exports = function (exec, skipClosing) {\
  if (!skipClosing && !SAFE_CLOSING) return false;\
  var safe = false;\
  try {\
    var arr = [7];\
    var iter = arr[ITERATOR]();\
    iter.next = function () { return { done: safe = true }; };\
    arr[ITERATOR] = function () { return iter; };\
    exec(arr);\
  } catch (e) { /* empty */ }\
  return safe;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_iter-detect.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_iter-step.js":
      /*!************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("module.exports = function (done, value) {\
  return { value: value, done: !!done };\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_iter-step.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_iterators.js":
      /*!************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_iterators.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("module.exports = {};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_iterators.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_library.js":
      /*!**********************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_library.js ***!
        \\**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("module.exports = true;\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_library.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_meta.js":
      /*!*******************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_meta.js ***!
        \\*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\")('meta');\
var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\
var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\
var setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\
var id = 0;\
var isExtensible = Object.isExtensible || function () {\
  return true;\
};\
var FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\
  return isExtensible(Object.preventExtensions({}));\
});\
var setMeta = function (it) {\
  setDesc(it, META, { value: {\
    i: 'O' + ++id, // object ID\
    w: {}          // weak collections IDs\
  } });\
};\
var fastKey = function (it, create) {\
  // return primitive with prefix\
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\
  if (!has(it, META)) {\
    // can't set metadata to uncaught frozen object\
    if (!isExtensible(it)) return 'F';\
    // not necessary to add metadata\
    if (!create) return 'E';\
    // add missing metadata\
    setMeta(it);\
  // return object ID\
  } return it[META].i;\
};\
var getWeak = function (it, create) {\
  if (!has(it, META)) {\
    // can't set metadata to uncaught frozen object\
    if (!isExtensible(it)) return true;\
    // not necessary to add metadata\
    if (!create) return false;\
    // add missing metadata\
    setMeta(it);\
  // return hash weak collections IDs\
  } return it[META].w;\
};\
// add metadata on freeze-family methods calling\
var onFreeze = function (it) {\
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\
  return it;\
};\
var meta = module.exports = {\
  KEY: META,\
  NEED: false,\
  fastKey: fastKey,\
  getWeak: getWeak,\
  onFreeze: onFreeze\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_meta.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_microtask.js":
      /*!************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_microtask.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\
var macrotask = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/library/modules/_task.js\").set;\
var Observer = global.MutationObserver || global.WebKitMutationObserver;\
var process = global.process;\
var Promise = global.Promise;\
var isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\")(process) == 'process';\
\
module.exports = function () {\
  var head, last, notify;\
\
  var flush = function () {\
    var parent, fn;\
    if (isNode && (parent = process.domain)) parent.exit();\
    while (head) {\
      fn = head.fn;\
      head = head.next;\
      try {\
        fn();\
      } catch (e) {\
        if (head) notify();\
        else last = undefined;\
        throw e;\
      }\
    } last = undefined;\
    if (parent) parent.enter();\
  };\
\
  // Node.js\
  if (isNode) {\
    notify = function () {\
      process.nextTick(flush);\
    };\
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\
    var toggle = true;\
    var node = document.createTextNode('');\
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\
    notify = function () {\
      node.data = toggle = !toggle;\
    };\
  // environments with maybe non-completely correct, but existent Promise\
  } else if (Promise && Promise.resolve) {\
    // Promise.resolve without an argument throws an error in LG WebOS 2\
    var promise = Promise.resolve(undefined);\
    notify = function () {\
      promise.then(flush);\
    };\
  // for other environments - macrotask based on:\
  // - setImmediate\
  // - MessageChannel\
  // - window.postMessag\
  // - onreadystatechange\
  // - setTimeout\
  } else {\
    notify = function () {\
      // strange IE + webpack dev server bug - use .call(global)\
      macrotask.call(global, flush);\
    };\
  }\
\
  return function (fn) {\
    var task = { fn: fn, next: undefined };\
    if (last) last.next = task;\
    if (!head) {\
      head = task;\
      notify();\
    } last = task;\
  };\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_microtask.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_new-promise-capability.js":
      /*!*************************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
        \\*************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\
// 25.4.1.5 NewPromiseCapability(C)\
var aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\
\
function PromiseCapability(C) {\
  var resolve, reject;\
  this.promise = new C(function ($$resolve, $$reject) {\
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\
    resolve = $$resolve;\
    reject = $$reject;\
  });\
  this.resolve = aFunction(resolve);\
  this.reject = aFunction(reject);\
}\
\
module.exports.f = function (C) {\
  return new PromiseCapability(C);\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_new-promise-capability.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_object-assign.js":
      /*!****************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
        \\****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\
// 19.1.2.1 Object.assign(target, source, ...)\
var getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\
var gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\
var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\
var toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\
var IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\
var $assign = Object.assign;\
\
// should work with symbols and should have deterministic property order (V8 bug)\
module.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\
  var A = {};\
  var B = {};\
  // eslint-disable-next-line no-undef\
  var S = Symbol();\
  var K = 'abcdefghijklmnopqrst';\
  A[S] = 7;\
  K.split('').forEach(function (k) { B[k] = k; });\
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\
  var T = toObject(target);\
  var aLen = arguments.length;\
  var index = 1;\
  var getSymbols = gOPS.f;\
  var isEnum = pIE.f;\
  while (aLen > index) {\
    var S = IObject(arguments[index++]);\
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\
    var length = keys.length;\
    var j = 0;\
    var key;\
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];\
  } return T;\
} : $assign;\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_object-assign.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_object-create.js":
      /*!****************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_object-create.js ***!
        \\****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\
var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\
var dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\");\
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\
var Empty = function () { /* empty */ };\
var PROTOTYPE = 'prototype';\
\
// Create object with fake `null` prototype: use iframe Object with cleared prototype\
var createDict = function () {\
  // Thrash, waste and sodomy: IE GC bug\
  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('iframe');\
  var i = enumBugKeys.length;\
  var lt = '<';\
  var gt = '>';\
  var iframeDocument;\
  iframe.style.display = 'none';\
  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\
  // createDict = iframe.contentWindow.Object;\
  // html.removeChild(iframe);\
  iframeDocument = iframe.contentWindow.document;\
  iframeDocument.open();\
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\
  iframeDocument.close();\
  createDict = iframeDocument.F;\
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\
  return createDict();\
};\
\
module.exports = Object.create || function create(O, Properties) {\
  var result;\
  if (O !== null) {\
    Empty[PROTOTYPE] = anObject(O);\
    result = new Empty();\
    Empty[PROTOTYPE] = null;\
    // add \"__proto__\" for Object.getPrototypeOf polyfill\
    result[IE_PROTO] = O;\
  } else result = createDict();\
  return Properties === undefined ? result : dPs(result, Properties);\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_object-create.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_object-dp.js":
      /*!************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\
var dP = Object.defineProperty;\
\
exports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\
  anObject(O);\
  P = toPrimitive(P, true);\
  anObject(Attributes);\
  if (IE8_DOM_DEFINE) try {\
    return dP(O, P, Attributes);\
  } catch (e) { /* empty */ }\
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\
  if ('value' in Attributes) O[P] = Attributes.value;\
  return O;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_object-dp.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_object-dps.js":
      /*!*************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
        \\*************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\
var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\
var getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\
\
module.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\
  anObject(O);\
  var keys = getKeys(Properties);\
  var length = keys.length;\
  var i = 0;\
  var P;\
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\
  return O;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_object-dps.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_object-gopd.js":
      /*!**************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
        \\**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\
var createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\
var toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\
var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\
var gOPD = Object.getOwnPropertyDescriptor;\
\
exports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\
  O = toIObject(O);\
  P = toPrimitive(P, true);\
  if (IE8_DOM_DEFINE) try {\
    return gOPD(O, P);\
  } catch (e) { /* empty */ }\
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_object-gopd.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_object-gopn-ext.js":
      /*!******************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
        \\******************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\
var toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\
var gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f;\
var toString = {}.toString;\
\
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\
  ? Object.getOwnPropertyNames(window) : [];\
\
var getWindowNames = function (it) {\
  try {\
    return gOPN(it);\
  } catch (e) {\
    return windowNames.slice();\
  }\
};\
\
module.exports.f = function getOwnPropertyNames(it) {\
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_object-gopn-ext.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_object-gopn.js":
      /*!**************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
        \\**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\
var $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\").concat('length', 'prototype');\
\
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\
  return $keys(O, hiddenKeys);\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_object-gopn.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_object-gops.js":
      /*!**************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
        \\**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("exports.f = Object.getOwnPropertySymbols;\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_object-gops.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_object-gpo.js":
      /*!*************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
        \\*************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\
var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\
var toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\
var ObjectProto = Object.prototype;\
\
module.exports = Object.getPrototypeOf || function (O) {\
  O = toObject(O);\
  if (has(O, IE_PROTO)) return O[IE_PROTO];\
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\
    return O.constructor.prototype;\
  } return O instanceof Object ? ObjectProto : null;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_object-gpo.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_object-keys-internal.js":
      /*!***********************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
        \\***********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\
var toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/library/modules/_array-includes.js\")(false);\
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\
\
module.exports = function (object, names) {\
  var O = toIObject(object);\
  var i = 0;\
  var result = [];\
  var key;\
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\
  // Don't enum bug & hidden keys\
  while (names.length > i) if (has(O, key = names[i++])) {\
    ~arrayIndexOf(result, key) || result.push(key);\
  }\
  return result;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_object-keys-internal.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_object-keys.js":
      /*!**************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
        \\**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\
var $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\
\
module.exports = Object.keys || function keys(O) {\
  return $keys(O, enumBugKeys);\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_object-keys.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_object-pie.js":
      /*!*************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
        \\*************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("exports.f = {}.propertyIsEnumerable;\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_object-pie.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_perform.js":
      /*!**********************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_perform.js ***!
        \\**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("module.exports = function (exec) {\
  try {\
    return { e: false, v: exec() };\
  } catch (e) {\
    return { e: true, v: e };\
  }\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_perform.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_promise-resolve.js":
      /*!******************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
        \\******************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\
var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\
\
module.exports = function (C, x) {\
  anObject(C);\
  if (isObject(x) && x.constructor === C) return x;\
  var promiseCapability = newPromiseCapability.f(C);\
  var resolve = promiseCapability.resolve;\
  resolve(x);\
  return promiseCapability.promise;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_promise-resolve.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_property-desc.js":
      /*!****************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
        \\****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("module.exports = function (bitmap, value) {\
  return {\
    enumerable: !(bitmap & 1),\
    configurable: !(bitmap & 2),\
    writable: !(bitmap & 4),\
    value: value\
  };\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_property-desc.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_redefine-all.js":
      /*!***************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
        \\***************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\
module.exports = function (target, src, safe) {\
  for (var key in src) {\
    if (safe && target[key]) target[key] = src[key];\
    else hide(target, key, src[key]);\
  } return target;\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_redefine-all.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_redefine.js":
      /*!***********************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_redefine.js ***!
        \\***********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("module.exports = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_redefine.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_set-species.js":
      /*!**************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_set-species.js ***!
        \\**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\
var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\
var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\
var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\
var SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species');\
\
module.exports = function (KEY) {\
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];\
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\
    configurable: true,\
    get: function () { return this; }\
  });\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_set-species.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_set-to-string-tag.js":
      /*!********************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
        \\********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\
var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\
var TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\
\
module.exports = function (it, tag, stat) {\
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_set-to-string-tag.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_shared-key.js":
      /*!*************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
        \\*************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('keys');\
var uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\
module.exports = function (key) {\
  return shared[key] || (shared[key] = uid(key));\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_shared-key.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_shared.js":
      /*!*********************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_shared.js ***!
        \\*********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\
var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\
var SHARED = '__core-js_shared__';\
var store = global[SHARED] || (global[SHARED] = {});\
\
(module.exports = function (key, value) {\
  return store[key] || (store[key] = value !== undefined ? value : {});\
})('versions', []).push({\
  version: core.version,\
  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\") ? 'pure' : 'global',\
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'\
});\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_shared.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_species-constructor.js":
      /*!**********************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
        \\**********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\
var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\
var aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\
var SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species');\
module.exports = function (O, D) {\
  var C = anObject(O).constructor;\
  var S;\
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_species-constructor.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_string-at.js":
      /*!************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_string-at.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\
var defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\
// true  -> String#at\
// false -> String#codePointAt\
module.exports = function (TO_STRING) {\
  return function (that, pos) {\
    var s = String(defined(that));\
    var i = toInteger(pos);\
    var l = s.length;\
    var a, b;\
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\
    a = s.charCodeAt(i);\
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\
      ? TO_STRING ? s.charAt(i) : a\
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\
  };\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_string-at.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_task.js":
      /*!*******************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_task.js ***!
        \\*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\
var invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/library/modules/_invoke.js\");\
var html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\");\
var cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\");\
var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\
var process = global.process;\
var setTask = global.setImmediate;\
var clearTask = global.clearImmediate;\
var MessageChannel = global.MessageChannel;\
var Dispatch = global.Dispatch;\
var counter = 0;\
var queue = {};\
var ONREADYSTATECHANGE = 'onreadystatechange';\
var defer, channel, port;\
var run = function () {\
  var id = +this;\
  // eslint-disable-next-line no-prototype-builtins\
  if (queue.hasOwnProperty(id)) {\
    var fn = queue[id];\
    delete queue[id];\
    fn();\
  }\
};\
var listener = function (event) {\
  run.call(event.data);\
};\
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\
if (!setTask || !clearTask) {\
  setTask = function setImmediate(fn) {\
    var args = [];\
    var i = 1;\
    while (arguments.length > i) args.push(arguments[i++]);\
    queue[++counter] = function () {\
      // eslint-disable-next-line no-new-func\
      invoke(typeof fn == 'function' ? fn : Function(fn), args);\
    };\
    defer(counter);\
    return counter;\
  };\
  clearTask = function clearImmediate(id) {\
    delete queue[id];\
  };\
  // Node.js 0.8-\
  if (__webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\")(process) == 'process') {\
    defer = function (id) {\
      process.nextTick(ctx(run, id, 1));\
    };\
  // Sphere (JS game engine) Dispatch API\
  } else if (Dispatch && Dispatch.now) {\
    defer = function (id) {\
      Dispatch.now(ctx(run, id, 1));\
    };\
  // Browsers with MessageChannel, includes WebWorkers\
  } else if (MessageChannel) {\
    channel = new MessageChannel();\
    port = channel.port2;\
    channel.port1.onmessage = listener;\
    defer = ctx(port.postMessage, port, 1);\
  // Browsers with postMessage, skip WebWorkers\
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\
    defer = function (id) {\
      global.postMessage(id + '', '*');\
    };\
    global.addEventListener('message', listener, false);\
  // IE8-\
  } else if (ONREADYSTATECHANGE in cel('script')) {\
    defer = function (id) {\
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\
        html.removeChild(this);\
        run.call(id);\
      };\
    };\
  // Rest old browsers\
  } else {\
    defer = function (id) {\
      setTimeout(ctx(run, id, 1), 0);\
    };\
  }\
}\
module.exports = {\
  set: setTask,\
  clear: clearTask\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_task.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_to-absolute-index.js":
      /*!********************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
        \\********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\
var max = Math.max;\
var min = Math.min;\
module.exports = function (index, length) {\
  index = toInteger(index);\
  return index < 0 ? max(index + length, 0) : min(index, length);\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_to-absolute-index.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_to-integer.js":
      /*!*************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
        \\*************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("// 7.1.4 ToInteger\
var ceil = Math.ceil;\
var floor = Math.floor;\
module.exports = function (it) {\
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_to-integer.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_to-iobject.js":
      /*!*************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
        \\*************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\
var IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\
var defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\
module.exports = function (it) {\
  return IObject(defined(it));\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_to-iobject.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_to-length.js":
      /*!************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_to-length.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// 7.1.15 ToLength\
var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\
var min = Math.min;\
module.exports = function (it) {\
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_to-length.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_to-object.js":
      /*!************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_to-object.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// 7.1.13 ToObject(argument)\
var defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\
module.exports = function (it) {\
  return Object(defined(it));\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_to-object.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_to-primitive.js":
      /*!***************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
        \\***************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// 7.1.1 ToPrimitive(input [, PreferredType])\
var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\
// instead of the ES6 spec version, we didn't implement @@toPrimitive case\
// and the second argument - flag - preferred type is a string\
module.exports = function (it, S) {\
  if (!isObject(it)) return it;\
  var fn, val;\
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\
  throw TypeError(\"Can't convert object to primitive value\");\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_to-primitive.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_uid.js":
      /*!******************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_uid.js ***!
        \\******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("var id = 0;\
var px = Math.random();\
module.exports = function (key) {\
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_uid.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_user-agent.js":
      /*!*************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
        \\*************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\
var navigator = global.navigator;\
\
module.exports = navigator && navigator.userAgent || '';\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_user-agent.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_wks-define.js":
      /*!*************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
        \\*************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\
var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\
var LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\
var wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\
var defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\
module.exports = function (name) {\
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_wks-define.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_wks-ext.js":
      /*!**********************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
        \\**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_wks-ext.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/_wks.js":
      /*!******************************************************!*\\
        !*** ./node_modules/core-js/library/modules/_wks.js ***!
        \\******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('wks');\
var uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\
var Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").Symbol;\
var USE_SYMBOL = typeof Symbol == 'function';\
\
var $exports = module.exports = function (name) {\
  return store[name] || (store[name] =\
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\
};\
\
$exports.store = store;\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/_wks.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/core.get-iterator-method.js":
      /*!**************************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
        \\**************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\
var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\
var Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\
module.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIteratorMethod = function (it) {\
  if (it != undefined) return it[ITERATOR]\
    || it['@@iterator']\
    || Iterators[classof(it)];\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/core.get-iterator-method.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/es6.array.iterator.js":
      /*!********************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
        \\********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\
var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/library/modules/_add-to-unscopables.js\");\
var step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\
var Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\
var toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\
\
// 22.1.3.4 Array.prototype.entries()\
// 22.1.3.13 Array.prototype.keys()\
// 22.1.3.29 Array.prototype.values()\
// 22.1.3.30 Array.prototype[@@iterator]()\
module.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\
  this._t = toIObject(iterated); // target\
  this._i = 0;                   // next index\
  this._k = kind;                // kind\
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\
}, function () {\
  var O = this._t;\
  var kind = this._k;\
  var index = this._i++;\
  if (!O || index >= O.length) {\
    this._t = undefined;\
    return step(1);\
  }\
  if (kind == 'keys') return step(0, index);\
  if (kind == 'values') return step(0, O[index]);\
  return step(0, [index, O[index]]);\
}, 'values');\
\
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\
Iterators.Arguments = Iterators.Array;\
\
addToUnscopables('keys');\
addToUnscopables('values');\
addToUnscopables('entries');\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/es6.array.iterator.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/es6.object.assign.js":
      /*!*******************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
        \\*******************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("// 19.1.3.1 Object.assign(target, source)\
var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\
\
$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/library/modules/_object-assign.js\") });\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/es6.object.assign.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/es6.object.define-property.js":
      /*!****************************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
        \\****************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f });\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/es6.object.define-property.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/es6.object.to-string.js":
      /*!**********************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
        \\**********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/es6.object.to-string.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/es6.promise.js":
      /*!*************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
        \\*************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\
var LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\
var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\
var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\
var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\
var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\
var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\
var aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\
var anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/library/modules/_an-instance.js\");\
var forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/library/modules/_for-of.js\");\
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/library/modules/_species-constructor.js\");\
var task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/library/modules/_task.js\").set;\
var microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/library/modules/_microtask.js\")();\
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\
var perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/library/modules/_perform.js\");\
var userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/library/modules/_user-agent.js\");\
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/library/modules/_promise-resolve.js\");\
var PROMISE = 'Promise';\
var TypeError = global.TypeError;\
var process = global.process;\
var versions = process && process.versions;\
var v8 = versions && versions.v8 || '';\
var $Promise = global[PROMISE];\
var isNode = classof(process) == 'process';\
var empty = function () { /* empty */ };\
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\
\
var USE_NATIVE = !!function () {\
  try {\
    // correct subclassing with @@species support\
    var promise = $Promise.resolve(1);\
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species')] = function (exec) {\
      exec(empty, empty);\
    };\
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\
    return (isNode || typeof PromiseRejectionEvent == 'function')\
      && promise.then(empty) instanceof FakePromise\
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\
      // we can't detect it synchronously, so just check versions\
      && v8.indexOf('6.6') !== 0\
      && userAgent.indexOf('Chrome/66') === -1;\
  } catch (e) { /* empty */ }\
}();\
\
// helpers\
var isThenable = function (it) {\
  var then;\
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\
};\
var notify = function (promise, isReject) {\
  if (promise._n) return;\
  promise._n = true;\
  var chain = promise._c;\
  microtask(function () {\
    var value = promise._v;\
    var ok = promise._s == 1;\
    var i = 0;\
    var run = function (reaction) {\
      var handler = ok ? reaction.ok : reaction.fail;\
      var resolve = reaction.resolve;\
      var reject = reaction.reject;\
      var domain = reaction.domain;\
      var result, then, exited;\
      try {\
        if (handler) {\
          if (!ok) {\
            if (promise._h == 2) onHandleUnhandled(promise);\
            promise._h = 1;\
          }\
          if (handler === true) result = value;\
          else {\
            if (domain) domain.enter();\
            result = handler(value); // may throw\
            if (domain) {\
              domain.exit();\
              exited = true;\
            }\
          }\
          if (result === reaction.promise) {\
            reject(TypeError('Promise-chain cycle'));\
          } else if (then = isThenable(result)) {\
            then.call(result, resolve, reject);\
          } else resolve(result);\
        } else reject(value);\
      } catch (e) {\
        if (domain && !exited) domain.exit();\
        reject(e);\
      }\
    };\
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\
    promise._c = [];\
    promise._n = false;\
    if (isReject && !promise._h) onUnhandled(promise);\
  });\
};\
var onUnhandled = function (promise) {\
  task.call(global, function () {\
    var value = promise._v;\
    var unhandled = isUnhandled(promise);\
    var result, handler, console;\
    if (unhandled) {\
      result = perform(function () {\
        if (isNode) {\
          process.emit('unhandledRejection', value, promise);\
        } else if (handler = global.onunhandledrejection) {\
          handler({ promise: promise, reason: value });\
        } else if ((console = global.console) && console.error) {\
          console.error('Unhandled promise rejection', value);\
        }\
      });\
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\
    } promise._a = undefined;\
    if (unhandled && result.e) throw result.v;\
  });\
};\
var isUnhandled = function (promise) {\
  return promise._h !== 1 && (promise._a || promise._c).length === 0;\
};\
var onHandleUnhandled = function (promise) {\
  task.call(global, function () {\
    var handler;\
    if (isNode) {\
      process.emit('rejectionHandled', promise);\
    } else if (handler = global.onrejectionhandled) {\
      handler({ promise: promise, reason: promise._v });\
    }\
  });\
};\
var $reject = function (value) {\
  var promise = this;\
  if (promise._d) return;\
  promise._d = true;\
  promise = promise._w || promise; // unwrap\
  promise._v = value;\
  promise._s = 2;\
  if (!promise._a) promise._a = promise._c.slice();\
  notify(promise, true);\
};\
var $resolve = function (value) {\
  var promise = this;\
  var then;\
  if (promise._d) return;\
  promise._d = true;\
  promise = promise._w || promise; // unwrap\
  try {\
    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\
    if (then = isThenable(value)) {\
      microtask(function () {\
        var wrapper = { _w: promise, _d: false }; // wrap\
        try {\
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\
        } catch (e) {\
          $reject.call(wrapper, e);\
        }\
      });\
    } else {\
      promise._v = value;\
      promise._s = 1;\
      notify(promise, false);\
    }\
  } catch (e) {\
    $reject.call({ _w: promise, _d: false }, e); // wrap\
  }\
};\
\
// constructor polyfill\
if (!USE_NATIVE) {\
  // 25.4.3.1 Promise(executor)\
  $Promise = function Promise(executor) {\
    anInstance(this, $Promise, PROMISE, '_h');\
    aFunction(executor);\
    Internal.call(this);\
    try {\
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\
    } catch (err) {\
      $reject.call(this, err);\
    }\
  };\
  // eslint-disable-next-line no-unused-vars\
  Internal = function Promise(executor) {\
    this._c = [];             // <- awaiting reactions\
    this._a = undefined;      // <- checked in isUnhandled reactions\
    this._s = 0;              // <- state\
    this._d = false;          // <- done\
    this._v = undefined;      // <- value\
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\
    this._n = false;          // <- notify\
  };\
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/library/modules/_redefine-all.js\")($Promise.prototype, {\
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\
    then: function then(onFulfilled, onRejected) {\
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\
      reaction.fail = typeof onRejected == 'function' && onRejected;\
      reaction.domain = isNode ? process.domain : undefined;\
      this._c.push(reaction);\
      if (this._a) this._a.push(reaction);\
      if (this._s) notify(this, false);\
      return reaction.promise;\
    },\
    // 25.4.5.1 Promise.prototype.catch(onRejected)\
    'catch': function (onRejected) {\
      return this.then(undefined, onRejected);\
    }\
  });\
  OwnPromiseCapability = function () {\
    var promise = new Internal();\
    this.promise = promise;\
    this.resolve = ctx($resolve, promise, 1);\
    this.reject = ctx($reject, promise, 1);\
  };\
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\
    return C === $Promise || C === Wrapper\
      ? new OwnPromiseCapability(C)\
      : newGenericPromiseCapability(C);\
  };\
}\
\
$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\
__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\")($Promise, PROMISE);\
__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/library/modules/_set-species.js\")(PROMISE);\
Wrapper = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\")[PROMISE];\
\
// statics\
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\
  // 25.4.4.5 Promise.reject(r)\
  reject: function reject(r) {\
    var capability = newPromiseCapability(this);\
    var $$reject = capability.reject;\
    $$reject(r);\
    return capability.promise;\
  }\
});\
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\
  // 25.4.4.6 Promise.resolve(x)\
  resolve: function resolve(x) {\
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\
  }\
});\
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/library/modules/_iter-detect.js\")(function (iter) {\
  $Promise.all(iter)['catch'](empty);\
})), PROMISE, {\
  // 25.4.4.1 Promise.all(iterable)\
  all: function all(iterable) {\
    var C = this;\
    var capability = newPromiseCapability(C);\
    var resolve = capability.resolve;\
    var reject = capability.reject;\
    var result = perform(function () {\
      var values = [];\
      var index = 0;\
      var remaining = 1;\
      forOf(iterable, false, function (promise) {\
        var $index = index++;\
        var alreadyCalled = false;\
        values.push(undefined);\
        remaining++;\
        C.resolve(promise).then(function (value) {\
          if (alreadyCalled) return;\
          alreadyCalled = true;\
          values[$index] = value;\
          --remaining || resolve(values);\
        }, reject);\
      });\
      --remaining || resolve(values);\
    });\
    if (result.e) reject(result.v);\
    return capability.promise;\
  },\
  // 25.4.4.4 Promise.race(iterable)\
  race: function race(iterable) {\
    var C = this;\
    var capability = newPromiseCapability(C);\
    var reject = capability.reject;\
    var result = perform(function () {\
      forOf(iterable, false, function (promise) {\
        C.resolve(promise).then(capability.resolve, reject);\
      });\
    });\
    if (result.e) reject(result.v);\
    return capability.promise;\
  }\
});\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/es6.promise.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/es6.string.iterator.js":
      /*!*********************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
        \\*********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\
var $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/library/modules/_string-at.js\")(true);\
\
// 21.1.3.27 String.prototype[@@iterator]()\
__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(String, 'String', function (iterated) {\
  this._t = String(iterated); // target\
  this._i = 0;                // next index\
// 21.1.5.2.1 %StringIteratorPrototype%.next()\
}, function () {\
  var O = this._t;\
  var index = this._i;\
  var point;\
  if (index >= O.length) return { value: undefined, done: true };\
  point = $at(O, index);\
  this._i += point.length;\
  return { value: point, done: false };\
});\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/es6.string.iterator.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/es6.symbol.js":
      /*!************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\
// ECMAScript 6 symbols shim\
var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\
var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\
var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\
var redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\
var META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\").KEY;\
var $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\
var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\");\
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\
var uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\
var wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\
var wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\
var wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\");\
var enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/library/modules/_enum-keys.js\");\
var isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/library/modules/_is-array.js\");\
var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\
var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\
var toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\
var createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\
var _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/library/modules/_object-gopn-ext.js\");\
var $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\");\
var $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\
var $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\
var gOPD = $GOPD.f;\
var dP = $DP.f;\
var gOPN = gOPNExt.f;\
var $Symbol = global.Symbol;\
var $JSON = global.JSON;\
var _stringify = $JSON && $JSON.stringify;\
var PROTOTYPE = 'prototype';\
var HIDDEN = wks('_hidden');\
var TO_PRIMITIVE = wks('toPrimitive');\
var isEnum = {}.propertyIsEnumerable;\
var SymbolRegistry = shared('symbol-registry');\
var AllSymbols = shared('symbols');\
var OPSymbols = shared('op-symbols');\
var ObjectProto = Object[PROTOTYPE];\
var USE_NATIVE = typeof $Symbol == 'function';\
var QObject = global.QObject;\
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\
\
// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\
var setSymbolDesc = DESCRIPTORS && $fails(function () {\
  return _create(dP({}, 'a', {\
    get: function () { return dP(this, 'a', { value: 7 }).a; }\
  })).a != 7;\
}) ? function (it, key, D) {\
  var protoDesc = gOPD(ObjectProto, key);\
  if (protoDesc) delete ObjectProto[key];\
  dP(it, key, D);\
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\
} : dP;\
\
var wrap = function (tag) {\
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\
  sym._k = tag;\
  return sym;\
};\
\
var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\
  return typeof it == 'symbol';\
} : function (it) {\
  return it instanceof $Symbol;\
};\
\
var $defineProperty = function defineProperty(it, key, D) {\
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\
  anObject(it);\
  key = toPrimitive(key, true);\
  anObject(D);\
  if (has(AllSymbols, key)) {\
    if (!D.enumerable) {\
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\
      it[HIDDEN][key] = true;\
    } else {\
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\
      D = _create(D, { enumerable: createDesc(0, false) });\
    } return setSymbolDesc(it, key, D);\
  } return dP(it, key, D);\
};\
var $defineProperties = function defineProperties(it, P) {\
  anObject(it);\
  var keys = enumKeys(P = toIObject(P));\
  var i = 0;\
  var l = keys.length;\
  var key;\
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\
  return it;\
};\
var $create = function create(it, P) {\
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\
};\
var $propertyIsEnumerable = function propertyIsEnumerable(key) {\
  var E = isEnum.call(this, key = toPrimitive(key, true));\
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\
};\
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\
  it = toIObject(it);\
  key = toPrimitive(key, true);\
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\
  var D = gOPD(it, key);\
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\
  return D;\
};\
var $getOwnPropertyNames = function getOwnPropertyNames(it) {\
  var names = gOPN(toIObject(it));\
  var result = [];\
  var i = 0;\
  var key;\
  while (names.length > i) {\
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\
  } return result;\
};\
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\
  var IS_OP = it === ObjectProto;\
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\
  var result = [];\
  var i = 0;\
  var key;\
  while (names.length > i) {\
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\
  } return result;\
};\
\
// 19.4.1.1 Symbol([description])\
if (!USE_NATIVE) {\
  $Symbol = function Symbol() {\
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\
    var $set = function (value) {\
      if (this === ObjectProto) $set.call(OPSymbols, value);\
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\
      setSymbolDesc(this, tag, createDesc(1, value));\
    };\
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\
    return wrap(tag);\
  };\
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\
    return this._k;\
  });\
\
  $GOPD.f = $getOwnPropertyDescriptor;\
  $DP.f = $defineProperty;\
  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\
  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\").f = $propertyIsEnumerable;\
  __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\").f = $getOwnPropertySymbols;\
\
  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\")) {\
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\
  }\
\
  wksExt.f = function (name) {\
    return wrap(wks(name));\
  };\
}\
\
$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\
\
for (var es6Symbols = (\
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\
\
for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\
\
$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\
  // 19.4.2.1 Symbol.for(key)\
  'for': function (key) {\
    return has(SymbolRegistry, key += '')\
      ? SymbolRegistry[key]\
      : SymbolRegistry[key] = $Symbol(key);\
  },\
  // 19.4.2.5 Symbol.keyFor(sym)\
  keyFor: function keyFor(sym) {\
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\
  },\
  useSetter: function () { setter = true; },\
  useSimple: function () { setter = false; }\
});\
\
$export($export.S + $export.F * !USE_NATIVE, 'Object', {\
  // 19.1.2.2 Object.create(O [, Properties])\
  create: $create,\
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\
  defineProperty: $defineProperty,\
  // 19.1.2.3 Object.defineProperties(O, Properties)\
  defineProperties: $defineProperties,\
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\
  // 19.1.2.7 Object.getOwnPropertyNames(O)\
  getOwnPropertyNames: $getOwnPropertyNames,\
  // 19.1.2.8 Object.getOwnPropertySymbols(O)\
  getOwnPropertySymbols: $getOwnPropertySymbols\
});\
\
// 24.3.2 JSON.stringify(value [, replacer [, space]])\
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\
  var S = $Symbol();\
  // MS Edge converts symbol values to JSON as {}\
  // WebKit converts symbol values to JSON as null\
  // V8 throws on boxed symbols\
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\
})), 'JSON', {\
  stringify: function stringify(it) {\
    var args = [it];\
    var i = 1;\
    var replacer, $replacer;\
    while (arguments.length > i) args.push(arguments[i++]);\
    $replacer = replacer = args[1];\
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\
    if (!isArray(replacer)) replacer = function (key, value) {\
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\
      if (!isSymbol(value)) return value;\
    };\
    args[1] = replacer;\
    return _stringify.apply($JSON, args);\
  }\
});\
\
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\
// 19.4.3.5 Symbol.prototype[@@toStringTag]\
setToStringTag($Symbol, 'Symbol');\
// 20.2.1.9 Math[@@toStringTag]\
setToStringTag(Math, 'Math', true);\
// 24.3.3 JSON[@@toStringTag]\
setToStringTag(global.JSON, 'JSON', true);\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/es6.symbol.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/es7.promise.finally.js":
      /*!*********************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
        \\*********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("// https://github.com/tc39/proposal-promise-finally\
\
var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\
var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\
var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/library/modules/_species-constructor.js\");\
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/library/modules/_promise-resolve.js\");\
\
$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\
  var C = speciesConstructor(this, core.Promise || global.Promise);\
  var isFunction = typeof onFinally == 'function';\
  return this.then(\
    isFunction ? function (x) {\
      return promiseResolve(C, onFinally()).then(function () { return x; });\
    } : onFinally,\
    isFunction ? function (e) {\
      return promiseResolve(C, onFinally()).then(function () { throw e; });\
    } : onFinally\
  );\
} });\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/es7.promise.finally.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/es7.promise.try.js":
      /*!*****************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
        \\*****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\
// https://github.com/tc39/proposal-promise-try\
var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\
var perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/library/modules/_perform.js\");\
\
$export($export.S, 'Promise', { 'try': function (callbackfn) {\
  var promiseCapability = newPromiseCapability.f(this);\
  var result = perform(callbackfn);\
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\
  return promiseCapability.promise;\
} });\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/es7.promise.try.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
      /*!***************************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
        \\***************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('asyncIterator');\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/es7.symbol.async-iterator.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/es7.symbol.observable.js":
      /*!***********************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
        \\***********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('observable');\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/es7.symbol.observable.js?");
        /***/
      },

      /***/
      "./node_modules/core-js/library/modules/web.dom.iterable.js":
      /*!******************************************************************!*\\
        !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
        \\******************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("__webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/library/modules/es6.array.iterator.js\");\
var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\
var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\
var Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\
\
var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\
  'TextTrackList,TouchList').split(',');\
\
for (var i = 0; i < DOMIterables.length; i++) {\
  var NAME = DOMIterables[i];\
  var Collection = global[NAME];\
  var proto = Collection && Collection.prototype;\
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\
  Iterators[NAME] = Iterators.Array;\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/core-js/library/modules/web.dom.iterable.js?");
        /***/
      },

      /***/
      "./node_modules/dijkstrajs/dijkstra.js":
      /*!*********************************************!*\\
        !*** ./node_modules/dijkstrajs/dijkstra.js ***!
        \\*********************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\
\
/******************************************************************************\
 * Created 2008-08-19.\
 *\
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.\
 *\
 * Copyright (C) 2008\
 *   Wyatt Baldwin <self@wyattbaldwin.com>\
 *   All rights reserved\
 *\
 * Licensed under the MIT license.\
 *\
 *   http://www.opensource.org/licenses/mit-license.php\
 *\
 * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\
 * THE SOFTWARE.\
 *****************************************************************************/\
var dijkstra = {\
  single_source_shortest_paths: function(graph, s, d) {\
    // Predecessor map for each node that has been encountered.\
    // node ID => predecessor node ID\
    var predecessors = {};\
\
    // Costs of shortest paths from s to all nodes encountered.\
    // node ID => cost\
    var costs = {};\
    costs[s] = 0;\
\
    // Costs of shortest paths from s to all nodes encountered; differs from\
    // `costs` in that it provides easy access to the node that currently has\
    // the known shortest path from s.\
    // XXX: Do we actually need both `costs` and `open`?\
    var open = dijkstra.PriorityQueue.make();\
    open.push(s, 0);\
\
    var closest,\
        u, v,\
        cost_of_s_to_u,\
        adjacent_nodes,\
        cost_of_e,\
        cost_of_s_to_u_plus_cost_of_e,\
        cost_of_s_to_v,\
        first_visit;\
    while (!open.empty()) {\
      // In the nodes remaining in graph that have a known cost from s,\
      // find the node, u, that currently has the shortest path from s.\
      closest = open.pop();\
      u = closest.value;\
      cost_of_s_to_u = closest.cost;\
\
      // Get nodes adjacent to u...\
      adjacent_nodes = graph[u] || {};\
\
      // ...and explore the edges that connect u to those nodes, updating\
      // the cost of the shortest paths to any or all of those nodes as\
      // necessary. v is the node across the current edge from u.\
      for (v in adjacent_nodes) {\
        if (adjacent_nodes.hasOwnProperty(v)) {\
          // Get the cost of the edge running from u to v.\
          cost_of_e = adjacent_nodes[v];\
\
          // Cost of s to u plus the cost of u to v across e--this is *a*\
          // cost from s to v that may or may not be less than the current\
          // known cost to v.\
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;\
\
          // If we haven't visited v yet OR if the current known cost from s to\
          // v is greater than the new cost we just found (cost of s to u plus\
          // cost of u to v across e), update v's cost in the cost list and\
          // update v's predecessor in the predecessor list (it's now u).\
          cost_of_s_to_v = costs[v];\
          first_visit = (typeof costs[v] === 'undefined');\
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {\
            costs[v] = cost_of_s_to_u_plus_cost_of_e;\
            open.push(v, cost_of_s_to_u_plus_cost_of_e);\
            predecessors[v] = u;\
          }\
        }\
      }\
    }\
\
    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {\
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');\
      throw new Error(msg);\
    }\
\
    return predecessors;\
  },\
\
  extract_shortest_path_from_predecessor_list: function(predecessors, d) {\
    var nodes = [];\
    var u = d;\
    var predecessor;\
    while (u) {\
      nodes.push(u);\
      predecessor = predecessors[u];\
      u = predecessors[u];\
    }\
    nodes.reverse();\
    return nodes;\
  },\
\
  find_path: function(graph, s, d) {\
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);\
    return dijkstra.extract_shortest_path_from_predecessor_list(\
      predecessors, d);\
  },\
\
  /**\
   * A very naive priority queue implementation.\
   */\
  PriorityQueue: {\
    make: function (opts) {\
      var T = dijkstra.PriorityQueue,\
          t = {},\
          key;\
      opts = opts || {};\
      for (key in T) {\
        if (T.hasOwnProperty(key)) {\
          t[key] = T[key];\
        }\
      }\
      t.queue = [];\
      t.sorter = opts.sorter || T.default_sorter;\
      return t;\
    },\
\
    default_sorter: function (a, b) {\
      return a.cost - b.cost;\
    },\
\
    /**\
     * Add a new item to the queue and ensure the highest priority element\
     * is at the front of the queue.\
     */\
    push: function (value, cost) {\
      var item = {value: value, cost: cost};\
      this.queue.push(item);\
      this.queue.sort(this.sorter);\
    },\
\
    /**\
     * Return the highest priority element in the queue.\
     */\
    pop: function () {\
      return this.queue.shift();\
    },\
\
    empty: function () {\
      return this.queue.length === 0;\
    }\
  }\
};\
\
\
// node.js module exports\
if (true) {\
  module.exports = dijkstra;\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/dijkstrajs/dijkstra.js?");
        /***/
      },

      /***/
      "./node_modules/mustache/mustache.js":
      /*!*******************************************!*\\
        !*** ./node_modules/mustache/mustache.js ***!
        \\*******************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\
 * mustache.js - Logic-less {{mustache}} templates with JavaScript\
 * http://github.com/janl/mustache.js\
 */\
\
/*global define: false Mustache: true*/\
\
(function defineMustache (global, factory) {\
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {\
    factory(exports); // CommonJS\
  } else if (true) {\
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\
\\t\\t\\t\\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD\
  } else {}\
}(this, function mustacheFactory (mustache) {\
\
  var objectToString = Object.prototype.toString;\
  var isArray = Array.isArray || function isArrayPolyfill (object) {\
    return objectToString.call(object) === '[object Array]';\
  };\
\
  function isFunction (object) {\
    return typeof object === 'function';\
  }\
\
  /**\
   * More correct typeof string handling array\
   * which normally returns typeof 'object'\
   */\
  function typeStr (obj) {\
    return isArray(obj) ? 'array' : typeof obj;\
  }\
\
  function escapeRegExp (string) {\
    return string.replace(/[\\\\-\\\\[\\\\]{}()*+?.,\\\\\\\\\\\\^$|#\\\\s]/g, '\\\\\\\\$&');\
  }\
\
  /**\
   * Null safe way of checking whether or not an object,\
   * including its prototype, has a given property\
   */\
  function hasProperty (obj, propName) {\
    return obj != null && typeof obj === 'object' && (propName in obj);\
  }\
\
  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577\
  // See https://github.com/janl/mustache.js/issues/189\
  var regExpTest = RegExp.prototype.test;\
  function testRegExp (re, string) {\
    return regExpTest.call(re, string);\
  }\
\
  var nonSpaceRe = /\\\\S/;\
  function isWhitespace (string) {\
    return !testRegExp(nonSpaceRe, string);\
  }\
\
  var entityMap = {\
    '&': '&amp;',\
    '<': '&lt;',\
    '>': '&gt;',\
    '\"': '&quot;',\
    \"'\": '&#39;',\
    '/': '&#x2F;',\
    '`': '&#x60;',\
    '=': '&#x3D;'\
  };\
\
  function escapeHtml (string) {\
    return String(string).replace(/[&<>\"'`=\\\\/]/g, function fromEntityMap (s) {\
      return entityMap[s];\
    });\
  }\
\
  var whiteRe = /\\\\s*/;\
  var spaceRe = /\\\\s+/;\
  var equalsRe = /\\\\s*=/;\
  var curlyRe = /\\\\s*\\\\}/;\
  var tagRe = /#|\\\\^|\\\\/|>|\\\\{|&|=|!/;\
\
  /**\
   * Breaks up the given `template` string into a tree of tokens. If the `tags`\
   * argument is given here it must be an array with two string values: the\
   * opening and closing tags used in the template (e.g. [ \"<%\", \"%>\" ]). Of\
   * course, the default is to use mustaches (i.e. mustache.tags).\
   *\
   * A token is an array with at least 4 elements. The first element is the\
   * mustache symbol that was used inside the tag, e.g. \"#\" or \"&\". If the tag\
   * did not contain a symbol (i.e. {{myValue}}) this element is \"name\". For\
   * all text that appears outside a symbol this element is \"text\".\
   *\
   * The second element of a token is its \"value\". For mustache tags this is\
   * whatever else was inside the tag besides the opening symbol. For text tokens\
   * this is the text itself.\
   *\
   * The third and fourth elements of the token are the start and end indices,\
   * respectively, of the token in the original template.\
   *\
   * Tokens that are the root node of a subtree contain two more elements: 1) an\
   * array of tokens in the subtree and 2) the index in the original template at\
   * which the closing tag for that section begins.\
   */\
  function parseTemplate (template, tags) {\
    if (!template)\
      return [];\
\
    var sections = [];     // Stack to hold section tokens\
    var tokens = [];       // Buffer to hold the tokens\
    var spaces = [];       // Indices of whitespace tokens on the current line\
    var hasTag = false;    // Is there a {{tag}} on the current line?\
    var nonSpace = false;  // Is there a non-space char on the current line?\
\
    // Strips all whitespace tokens array for the current line\
    // if there was a {{#tag}} on it and otherwise only space.\
    function stripSpace () {\
      if (hasTag && !nonSpace) {\
        while (spaces.length)\
          delete tokens[spaces.pop()];\
      } else {\
        spaces = [];\
      }\
\
      hasTag = false;\
      nonSpace = false;\
    }\
\
    var openingTagRe, closingTagRe, closingCurlyRe;\
    function compileTags (tagsToCompile) {\
      if (typeof tagsToCompile === 'string')\
        tagsToCompile = tagsToCompile.split(spaceRe, 2);\
\
      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)\
        throw new Error('Invalid tags: ' + tagsToCompile);\
\
      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\\\\\\\s*');\
      closingTagRe = new RegExp('\\\\\\\\s*' + escapeRegExp(tagsToCompile[1]));\
      closingCurlyRe = new RegExp('\\\\\\\\s*' + escapeRegExp('}' + tagsToCompile[1]));\
    }\
\
    compileTags(tags || mustache.tags);\
\
    var scanner = new Scanner(template);\
\
    var start, type, value, chr, token, openSection;\
    while (!scanner.eos()) {\
      start = scanner.pos;\
\
      // Match any text between tags.\
      value = scanner.scanUntil(openingTagRe);\
\
      if (value) {\
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {\
          chr = value.charAt(i);\
\
          if (isWhitespace(chr)) {\
            spaces.push(tokens.length);\
          } else {\
            nonSpace = true;\
          }\
\
          tokens.push([ 'text', chr, start, start + 1 ]);\
          start += 1;\
\
          // Check for whitespace on the current line.\
          if (chr === '\\\
')\
            stripSpace();\
        }\
      }\
\
      // Match the opening tag.\
      if (!scanner.scan(openingTagRe))\
        break;\
\
      hasTag = true;\
\
      // Get the tag type.\
      type = scanner.scan(tagRe) || 'name';\
      scanner.scan(whiteRe);\
\
      // Get the tag value.\
      if (type === '=') {\
        value = scanner.scanUntil(equalsRe);\
        scanner.scan(equalsRe);\
        scanner.scanUntil(closingTagRe);\
      } else if (type === '{') {\
        value = scanner.scanUntil(closingCurlyRe);\
        scanner.scan(curlyRe);\
        scanner.scanUntil(closingTagRe);\
        type = '&';\
      } else {\
        value = scanner.scanUntil(closingTagRe);\
      }\
\
      // Match the closing tag.\
      if (!scanner.scan(closingTagRe))\
        throw new Error('Unclosed tag at ' + scanner.pos);\
\
      token = [ type, value, start, scanner.pos ];\
      tokens.push(token);\
\
      if (type === '#' || type === '^') {\
        sections.push(token);\
      } else if (type === '/') {\
        // Check section nesting.\
        openSection = sections.pop();\
\
        if (!openSection)\
          throw new Error('Unopened section \"' + value + '\" at ' + start);\
\
        if (openSection[1] !== value)\
          throw new Error('Unclosed section \"' + openSection[1] + '\" at ' + start);\
      } else if (type === 'name' || type === '{' || type === '&') {\
        nonSpace = true;\
      } else if (type === '=') {\
        // Set the tags for the next time around.\
        compileTags(value);\
      }\
    }\
\
    // Make sure there are no open sections when we're done.\
    openSection = sections.pop();\
\
    if (openSection)\
      throw new Error('Unclosed section \"' + openSection[1] + '\" at ' + scanner.pos);\
\
    return nestTokens(squashTokens(tokens));\
  }\
\
  /**\
   * Combines the values of consecutive text tokens in the given `tokens` array\
   * to a single token.\
   */\
  function squashTokens (tokens) {\
    var squashedTokens = [];\
\
    var token, lastToken;\
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {\
      token = tokens[i];\
\
      if (token) {\
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {\
          lastToken[1] += token[1];\
          lastToken[3] = token[3];\
        } else {\
          squashedTokens.push(token);\
          lastToken = token;\
        }\
      }\
    }\
\
    return squashedTokens;\
  }\
\
  /**\
   * Forms the given array of `tokens` into a nested tree structure where\
   * tokens that represent a section have two additional items: 1) an array of\
   * all tokens that appear in that section and 2) the index in the original\
   * template that represents the end of that section.\
   */\
  function nestTokens (tokens) {\
    var nestedTokens = [];\
    var collector = nestedTokens;\
    var sections = [];\
\
    var token, section;\
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {\
      token = tokens[i];\
\
      switch (token[0]) {\
        case '#':\
        case '^':\
          collector.push(token);\
          sections.push(token);\
          collector = token[4] = [];\
          break;\
        case '/':\
          section = sections.pop();\
          section[5] = token[2];\
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;\
          break;\
        default:\
          collector.push(token);\
      }\
    }\
\
    return nestedTokens;\
  }\
\
  /**\
   * A simple string scanner that is used by the template parser to find\
   * tokens in template strings.\
   */\
  function Scanner (string) {\
    this.string = string;\
    this.tail = string;\
    this.pos = 0;\
  }\
\
  /**\
   * Returns `true` if the tail is empty (end of string).\
   */\
  Scanner.prototype.eos = function eos () {\
    return this.tail === '';\
  };\
\
  /**\
   * Tries to match the given regular expression at the current position.\
   * Returns the matched text if it can match, the empty string otherwise.\
   */\
  Scanner.prototype.scan = function scan (re) {\
    var match = this.tail.match(re);\
\
    if (!match || match.index !== 0)\
      return '';\
\
    var string = match[0];\
\
    this.tail = this.tail.substring(string.length);\
    this.pos += string.length;\
\
    return string;\
  };\
\
  /**\
   * Skips all text until the given regular expression can be matched. Returns\
   * the skipped string, which is the entire tail if no match can be made.\
   */\
  Scanner.prototype.scanUntil = function scanUntil (re) {\
    var index = this.tail.search(re), match;\
\
    switch (index) {\
      case -1:\
        match = this.tail;\
        this.tail = '';\
        break;\
      case 0:\
        match = '';\
        break;\
      default:\
        match = this.tail.substring(0, index);\
        this.tail = this.tail.substring(index);\
    }\
\
    this.pos += match.length;\
\
    return match;\
  };\
\
  /**\
   * Represents a rendering context by wrapping a view object and\
   * maintaining a reference to the parent context.\
   */\
  function Context (view, parentContext) {\
    this.view = view;\
    this.cache = { '.': this.view };\
    this.parent = parentContext;\
  }\
\
  /**\
   * Creates a new context using the given view with this context\
   * as the parent.\
   */\
  Context.prototype.push = function push (view) {\
    return new Context(view, this);\
  };\
\
  /**\
   * Returns the value of the given name in this context, traversing\
   * up the context hierarchy if the value is absent in this context's view.\
   */\
  Context.prototype.lookup = function lookup (name) {\
    var cache = this.cache;\
\
    var value;\
    if (cache.hasOwnProperty(name)) {\
      value = cache[name];\
    } else {\
      var context = this, names, index, lookupHit = false;\
\
      while (context) {\
        if (name.indexOf('.') > 0) {\
          value = context.view;\
          names = name.split('.');\
          index = 0;\
\
          /**\
           * Using the dot notion path in `name`, we descend through the\
           * nested objects.\
           *\
           * To be certain that the lookup has been successful, we have to\
           * check if the last object in the path actually has the property\
           * we are looking for. We store the result in `lookupHit`.\
           *\
           * This is specially necessary for when the value has been set to\
           * `undefined` and we want to avoid looking up parent contexts.\
           **/\
          while (value != null && index < names.length) {\
            if (index === names.length - 1)\
              lookupHit = hasProperty(value, names[index]);\
\
            value = value[names[index++]];\
          }\
        } else {\
          value = context.view[name];\
          lookupHit = hasProperty(context.view, name);\
        }\
\
        if (lookupHit)\
          break;\
\
        context = context.parent;\
      }\
\
      cache[name] = value;\
    }\
\
    if (isFunction(value))\
      value = value.call(this.view);\
\
    return value;\
  };\
\
  /**\
   * A Writer knows how to take a stream of tokens and render them to a\
   * string, given a context. It also maintains a cache of templates to\
   * avoid the need to parse the same template twice.\
   */\
  function Writer () {\
    this.cache = {};\
  }\
\
  /**\
   * Clears all cached templates in this writer.\
   */\
  Writer.prototype.clearCache = function clearCache () {\
    this.cache = {};\
  };\
\
  /**\
   * Parses and caches the given `template` and returns the array of tokens\
   * that is generated from the parse.\
   */\
  Writer.prototype.parse = function parse (template, tags) {\
    var cache = this.cache;\
    var tokens = cache[template];\
\
    if (tokens == null)\
      tokens = cache[template] = parseTemplate(template, tags);\
\
    return tokens;\
  };\
\
  /**\
   * High-level method that is used to render the given `template` with\
   * the given `view`.\
   *\
   * The optional `partials` argument may be an object that contains the\
   * names and templates of partials that are used in the template. It may\
   * also be a function that is used to load partial templates on the fly\
   * that takes a single argument: the name of the partial.\
   */\
  Writer.prototype.render = function render (template, view, partials) {\
    var tokens = this.parse(template);\
    var context = (view instanceof Context) ? view : new Context(view);\
    return this.renderTokens(tokens, context, partials, template);\
  };\
\
  /**\
   * Low-level method that renders the given array of `tokens` using\
   * the given `context` and `partials`.\
   *\
   * Note: The `originalTemplate` is only ever used to extract the portion\
   * of the original template that was contained in a higher-order section.\
   * If the template doesn't use higher-order sections, this argument may\
   * be omitted.\
   */\
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {\
    var buffer = '';\
\
    var token, symbol, value;\
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {\
      value = undefined;\
      token = tokens[i];\
      symbol = token[0];\
\
      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);\
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);\
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);\
      else if (symbol === '&') value = this.unescapedValue(token, context);\
      else if (symbol === 'name') value = this.escapedValue(token, context);\
      else if (symbol === 'text') value = this.rawValue(token);\
\
      if (value !== undefined)\
        buffer += value;\
    }\
\
    return buffer;\
  };\
\
  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {\
    var self = this;\
    var buffer = '';\
    var value = context.lookup(token[1]);\
\
    // This function is used to render an arbitrary template\
    // in the current context by higher-order sections.\
    function subRender (template) {\
      return self.render(template, context, partials);\
    }\
\
    if (!value) return;\
\
    if (isArray(value)) {\
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {\
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);\
      }\
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {\
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);\
    } else if (isFunction(value)) {\
      if (typeof originalTemplate !== 'string')\
        throw new Error('Cannot use higher-order sections without the original template');\
\
      // Extract the portion of the original template that the section contains.\
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);\
\
      if (value != null)\
        buffer += value;\
    } else {\
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);\
    }\
    return buffer;\
  };\
\
  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {\
    var value = context.lookup(token[1]);\
\
    // Use JavaScript's definition of falsy. Include empty arrays.\
    // See https://github.com/janl/mustache.js/issues/186\
    if (!value || (isArray(value) && value.length === 0))\
      return this.renderTokens(token[4], context, partials, originalTemplate);\
  };\
\
  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {\
    if (!partials) return;\
\
    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];\
    if (value != null)\
      return this.renderTokens(this.parse(value), context, partials, value);\
  };\
\
  Writer.prototype.unescapedValue = function unescapedValue (token, context) {\
    var value = context.lookup(token[1]);\
    if (value != null)\
      return value;\
  };\
\
  Writer.prototype.escapedValue = function escapedValue (token, context) {\
    var value = context.lookup(token[1]);\
    if (value != null)\
      return mustache.escape(value);\
  };\
\
  Writer.prototype.rawValue = function rawValue (token) {\
    return token[1];\
  };\
\
  mustache.name = 'mustache.js';\
  mustache.version = '2.3.0';\
  mustache.tags = [ '{{', '}}' ];\
\
  // All high-level mustache.* functions use this writer.\
  var defaultWriter = new Writer();\
\
  /**\
   * Clears all cached templates in the default writer.\
   */\
  mustache.clearCache = function clearCache () {\
    return defaultWriter.clearCache();\
  };\
\
  /**\
   * Parses and caches the given template in the default writer and returns the\
   * array of tokens it contains. Doing this ahead of time avoids the need to\
   * parse templates on the fly as they are rendered.\
   */\
  mustache.parse = function parse (template, tags) {\
    return defaultWriter.parse(template, tags);\
  };\
\
  /**\
   * Renders the `template` with the given `view` and `partials` using the\
   * default writer.\
   */\
  mustache.render = function render (template, view, partials) {\
    if (typeof template !== 'string') {\
      throw new TypeError('Invalid template! Template should be a \"string\" ' +\
                          'but \"' + typeStr(template) + '\" was given as the first ' +\
                          'argument for mustache#render(template, view, partials)');\
    }\
\
    return defaultWriter.render(template, view, partials);\
  };\
\
  // This is here for backwards compatibility with 0.4.x.,\
  /*eslint-disable */ // eslint wants camel cased function name\
  mustache.to_html = function to_html (template, view, partials, send) {\
    /*eslint-enable*/\
\
    var result = mustache.render(template, view, partials);\
\
    if (isFunction(send)) {\
      send(result);\
    } else {\
      return result;\
    }\
  };\
\
  // Export the escaping function so that the user may override it.\
  // See https://github.com/janl/mustache.js/issues/244\
  mustache.escape = escapeHtml;\
\
  // Export these mainly for testing, but also for advanced usage.\
  mustache.Scanner = Scanner;\
  mustache.Context = Context;\
  mustache.Writer = Writer;\
\
  return mustache;\
}));\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/mustache/mustache.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/browser.js":
      /*!********************************************!*\\
        !*** ./node_modules/qrcode/lib/browser.js ***!
        \\********************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var canPromise = __webpack_require__(/*! can-promise */ \"./node_modules/can-promise/index.js\")\
var QRCode = __webpack_require__(/*! ./core/qrcode */ \"./node_modules/qrcode/lib/core/qrcode.js\")\
var CanvasRenderer = __webpack_require__(/*! ./renderer/canvas */ \"./node_modules/qrcode/lib/renderer/canvas.js\")\
var SvgRenderer = __webpack_require__(/*! ./renderer/svg-tag.js */ \"./node_modules/qrcode/lib/renderer/svg-tag.js\")\
\
function renderCanvas (renderFunc, canvas, text, opts, cb) {\
  var args = [].slice.call(arguments, 1)\
  var argsNum = args.length\
  var isLastArgCb = typeof args[argsNum - 1] === 'function'\
\
  if (!isLastArgCb && !canPromise()) {\
    throw new Error('Callback required as last argument')\
  }\
\
  if (isLastArgCb) {\
    if (argsNum < 2) {\
      throw new Error('Too few arguments provided')\
    }\
\
    if (argsNum === 2) {\
      cb = text\
      text = canvas\
      canvas = opts = undefined\
    } else if (argsNum === 3) {\
      if (canvas.getContext && typeof cb === 'undefined') {\
        cb = opts\
        opts = undefined\
      } else {\
        cb = opts\
        opts = text\
        text = canvas\
        canvas = undefined\
      }\
    }\
  } else {\
    if (argsNum < 1) {\
      throw new Error('Too few arguments provided')\
    }\
\
    if (argsNum === 1) {\
      text = canvas\
      canvas = opts = undefined\
    } else if (argsNum === 2 && !canvas.getContext) {\
      opts = text\
      text = canvas\
      canvas = undefined\
    }\
\
    return new Promise(function (resolve, reject) {\
      try {\
        var data = QRCode.create(text, opts)\
        resolve(renderFunc(data, canvas, opts))\
      } catch (e) {\
        reject(e)\
      }\
    })\
  }\
\
  try {\
    var data = QRCode.create(text, opts)\
    cb(null, renderFunc(data, canvas, opts))\
  } catch (e) {\
    cb(e)\
  }\
}\
\
exports.create = QRCode.create\
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)\
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)\
\
// only svg for now.\
exports.toString = renderCanvas.bind(null, function (data, _, opts) {\
  return SvgRenderer.render(data, opts)\
})\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/browser.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/alignment-pattern.js":
      /*!***********************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/alignment-pattern.js ***!
        \\***********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("/**\
 * Alignment pattern are fixed reference pattern in defined positions\
 * in a matrix symbology, which enables the decode software to re-synchronise\
 * the coordinate mapping of the image modules in the event of moderate amounts\
 * of distortion of the image.\
 *\
 * Alignment patterns are present only in QR Code symbols of version 2 or larger\
 * and their number depends on the symbol version.\
 */\
\
var getSymbolSize = __webpack_require__(/*! ./utils */ \"./node_modules/qrcode/lib/core/utils.js\").getSymbolSize\
\
/**\
 * Calculate the row/column coordinates of the center module of each alignment pattern\
 * for the specified QR Code version.\
 *\
 * The alignment patterns are positioned symmetrically on either side of the diagonal\
 * running from the top left corner of the symbol to the bottom right corner.\
 *\
 * Since positions are simmetrical only half of the coordinates are returned.\
 * Each item of the array will represent in turn the x and y coordinate.\
 * @see {@link getPositions}\
 *\
 * @param  {Number} version QR Code version\
 * @return {Array}          Array of coordinate\
 */\
exports.getRowColCoords = function getRowColCoords (version) {\
  if (version === 1) return []\
\
  var posCount = Math.floor(version / 7) + 2\
  var size = getSymbolSize(version)\
  var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2\
  var positions = [size - 7] // Last coord is always (size - 7)\
\
  for (var i = 1; i < posCount - 1; i++) {\
    positions[i] = positions[i - 1] - intervals\
  }\
\
  positions.push(6) // First coord is always 6\
\
  return positions.reverse()\
}\
\
/**\
 * Returns an array containing the positions of each alignment pattern.\
 * Each array's element represent the center point of the pattern as (x, y) coordinates\
 *\
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}\
 * and filtering out the items that overlaps with finder pattern\
 *\
 * @example\
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.\
 * The alignment patterns, therefore, are to be centered on (row, column)\
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).\
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns\
 * and are not therefore used for alignment patterns.\
 *\
 * var pos = getPositions(7)\
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]\
 *\
 * @param  {Number} version QR Code version\
 * @return {Array}          Array of coordinates\
 */\
exports.getPositions = function getPositions (version) {\
  var coords = []\
  var pos = exports.getRowColCoords(version)\
  var posLength = pos.length\
\
  for (var i = 0; i < posLength; i++) {\
    for (var j = 0; j < posLength; j++) {\
      // Skip if position is occupied by finder patterns\
      if ((i === 0 && j === 0) ||             // top-left\
          (i === 0 && j === posLength - 1) || // bottom-left\
          (i === posLength - 1 && j === 0)) { // top-right\
        continue\
      }\
\
      coords.push([pos[i], pos[j]])\
    }\
  }\
\
  return coords\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/alignment-pattern.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/alphanumeric-data.js":
      /*!***********************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/alphanumeric-data.js ***!
        \\***********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Mode = __webpack_require__(/*! ./mode */ \"./node_modules/qrcode/lib/core/mode.js\")\
\
/**\
 * Array of characters available in alphanumeric mode\
 *\
 * As per QR Code specification, to each character\
 * is assigned a value from 0 to 44 which in this case coincides\
 * with the array index\
 *\
 * @type {Array}\
 */\
var ALPHA_NUM_CHARS = [\
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',\
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',\
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',\
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'\
]\
\
function AlphanumericData (data) {\
  this.mode = Mode.ALPHANUMERIC\
  this.data = data\
}\
\
AlphanumericData.getBitsLength = function getBitsLength (length) {\
  return 11 * Math.floor(length / 2) + 6 * (length % 2)\
}\
\
AlphanumericData.prototype.getLength = function getLength () {\
  return this.data.length\
}\
\
AlphanumericData.prototype.getBitsLength = function getBitsLength () {\
  return AlphanumericData.getBitsLength(this.data.length)\
}\
\
AlphanumericData.prototype.write = function write (bitBuffer) {\
  var i\
\
  // Input data characters are divided into groups of two characters\
  // and encoded as 11-bit binary codes.\
  for (i = 0; i + 2 <= this.data.length; i += 2) {\
    // The character value of the first character is multiplied by 45\
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45\
\
    // The character value of the second digit is added to the product\
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])\
\
    // The sum is then stored as 11-bit binary number\
    bitBuffer.put(value, 11)\
  }\
\
  // If the number of input data characters is not a multiple of two,\
  // the character value of the final character is encoded as a 6-bit binary number.\
  if (this.data.length % 2) {\
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)\
  }\
}\
\
module.exports = AlphanumericData\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/alphanumeric-data.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/bit-buffer.js":
      /*!****************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/bit-buffer.js ***!
        \\****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("function BitBuffer () {\
  this.buffer = []\
  this.length = 0\
}\
\
BitBuffer.prototype = {\
\
  get: function (index) {\
    var bufIndex = Math.floor(index / 8)\
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1\
  },\
\
  put: function (num, length) {\
    for (var i = 0; i < length; i++) {\
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)\
    }\
  },\
\
  getLengthInBits: function () {\
    return this.length\
  },\
\
  putBit: function (bit) {\
    var bufIndex = Math.floor(this.length / 8)\
    if (this.buffer.length <= bufIndex) {\
      this.buffer.push(0)\
    }\
\
    if (bit) {\
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))\
    }\
\
    this.length++\
  }\
}\
\
module.exports = BitBuffer\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/bit-buffer.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/bit-matrix.js":
      /*!****************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/bit-matrix.js ***!
        \\****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Buffer = __webpack_require__(/*! ../utils/buffer */ \"./node_modules/qrcode/lib/utils/typedarray-buffer.js\")\
\
/**\
 * Helper class to handle QR Code symbol modules\
 *\
 * @param {Number} size Symbol size\
 */\
function BitMatrix (size) {\
  if (!size || size < 1) {\
    throw new Error('BitMatrix size must be defined and greater than 0')\
  }\
\
  this.size = size\
  this.data = new Buffer(size * size)\
  this.data.fill(0)\
  this.reservedBit = new Buffer(size * size)\
  this.reservedBit.fill(0)\
}\
\
/**\
 * Set bit value at specified location\
 * If reserved flag is set, this bit will be ignored during masking process\
 *\
 * @param {Number}  row\
 * @param {Number}  col\
 * @param {Boolean} value\
 * @param {Boolean} reserved\
 */\
BitMatrix.prototype.set = function (row, col, value, reserved) {\
  var index = row * this.size + col\
  this.data[index] = value\
  if (reserved) this.reservedBit[index] = true\
}\
\
/**\
 * Returns bit value at specified location\
 *\
 * @param  {Number}  row\
 * @param  {Number}  col\
 * @return {Boolean}\
 */\
BitMatrix.prototype.get = function (row, col) {\
  return this.data[row * this.size + col]\
}\
\
/**\
 * Applies xor operator at specified location\
 * (used during masking process)\
 *\
 * @param {Number}  row\
 * @param {Number}  col\
 * @param {Boolean} value\
 */\
BitMatrix.prototype.xor = function (row, col, value) {\
  this.data[row * this.size + col] ^= value\
}\
\
/**\
 * Check if bit at specified location is reserved\
 *\
 * @param {Number}   row\
 * @param {Number}   col\
 * @return {Boolean}\
 */\
BitMatrix.prototype.isReserved = function (row, col) {\
  return this.reservedBit[row * this.size + col]\
}\
\
module.exports = BitMatrix\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/bit-matrix.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/byte-data.js":
      /*!***************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/byte-data.js ***!
        \\***************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Buffer = __webpack_require__(/*! ../utils/buffer */ \"./node_modules/qrcode/lib/utils/typedarray-buffer.js\")\
var Mode = __webpack_require__(/*! ./mode */ \"./node_modules/qrcode/lib/core/mode.js\")\
\
function ByteData (data) {\
  this.mode = Mode.BYTE\
  this.data = new Buffer(data)\
}\
\
ByteData.getBitsLength = function getBitsLength (length) {\
  return length * 8\
}\
\
ByteData.prototype.getLength = function getLength () {\
  return this.data.length\
}\
\
ByteData.prototype.getBitsLength = function getBitsLength () {\
  return ByteData.getBitsLength(this.data.length)\
}\
\
ByteData.prototype.write = function (bitBuffer) {\
  for (var i = 0, l = this.data.length; i < l; i++) {\
    bitBuffer.put(this.data[i], 8)\
  }\
}\
\
module.exports = ByteData\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/byte-data.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/error-correction-code.js":
      /*!***************************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/error-correction-code.js ***!
        \\***************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var ECLevel = __webpack_require__(/*! ./error-correction-level */ \"./node_modules/qrcode/lib/core/error-correction-level.js\")\\r\
\\r\
var EC_BLOCKS_TABLE = [\\r\
// L  M  Q  H\\r\
  1, 1, 1, 1,\\r\
  1, 1, 1, 1,\\r\
  1, 1, 2, 2,\\r\
  1, 2, 2, 4,\\r\
  1, 2, 4, 4,\\r\
  2, 4, 4, 4,\\r\
  2, 4, 6, 5,\\r\
  2, 4, 6, 6,\\r\
  2, 5, 8, 8,\\r\
  4, 5, 8, 8,\\r\
  4, 5, 8, 11,\\r\
  4, 8, 10, 11,\\r\
  4, 9, 12, 16,\\r\
  4, 9, 16, 16,\\r\
  6, 10, 12, 18,\\r\
  6, 10, 17, 16,\\r\
  6, 11, 16, 19,\\r\
  6, 13, 18, 21,\\r\
  7, 14, 21, 25,\\r\
  8, 16, 20, 25,\\r\
  8, 17, 23, 25,\\r\
  9, 17, 23, 34,\\r\
  9, 18, 25, 30,\\r\
  10, 20, 27, 32,\\r\
  12, 21, 29, 35,\\r\
  12, 23, 34, 37,\\r\
  12, 25, 34, 40,\\r\
  13, 26, 35, 42,\\r\
  14, 28, 38, 45,\\r\
  15, 29, 40, 48,\\r\
  16, 31, 43, 51,\\r\
  17, 33, 45, 54,\\r\
  18, 35, 48, 57,\\r\
  19, 37, 51, 60,\\r\
  19, 38, 53, 63,\\r\
  20, 40, 56, 66,\\r\
  21, 43, 59, 70,\\r\
  22, 45, 62, 74,\\r\
  24, 47, 65, 77,\\r\
  25, 49, 68, 81\\r\
]\\r\
\\r\
var EC_CODEWORDS_TABLE = [\\r\
// L  M  Q  H\\r\
  7, 10, 13, 17,\\r\
  10, 16, 22, 28,\\r\
  15, 26, 36, 44,\\r\
  20, 36, 52, 64,\\r\
  26, 48, 72, 88,\\r\
  36, 64, 96, 112,\\r\
  40, 72, 108, 130,\\r\
  48, 88, 132, 156,\\r\
  60, 110, 160, 192,\\r\
  72, 130, 192, 224,\\r\
  80, 150, 224, 264,\\r\
  96, 176, 260, 308,\\r\
  104, 198, 288, 352,\\r\
  120, 216, 320, 384,\\r\
  132, 240, 360, 432,\\r\
  144, 280, 408, 480,\\r\
  168, 308, 448, 532,\\r\
  180, 338, 504, 588,\\r\
  196, 364, 546, 650,\\r\
  224, 416, 600, 700,\\r\
  224, 442, 644, 750,\\r\
  252, 476, 690, 816,\\r\
  270, 504, 750, 900,\\r\
  300, 560, 810, 960,\\r\
  312, 588, 870, 1050,\\r\
  336, 644, 952, 1110,\\r\
  360, 700, 1020, 1200,\\r\
  390, 728, 1050, 1260,\\r\
  420, 784, 1140, 1350,\\r\
  450, 812, 1200, 1440,\\r\
  480, 868, 1290, 1530,\\r\
  510, 924, 1350, 1620,\\r\
  540, 980, 1440, 1710,\\r\
  570, 1036, 1530, 1800,\\r\
  570, 1064, 1590, 1890,\\r\
  600, 1120, 1680, 1980,\\r\
  630, 1204, 1770, 2100,\\r\
  660, 1260, 1860, 2220,\\r\
  720, 1316, 1950, 2310,\\r\
  750, 1372, 2040, 2430\\r\
]\\r\
\\r\
/**\\r\
 * Returns the number of error correction block that the QR Code should contain\\r\
 * for the specified version and error correction level.\\r\
 *\\r\
 * @param  {Number} version              QR Code version\\r\
 * @param  {Number} errorCorrectionLevel Error correction level\\r\
 * @return {Number}                      Number of error correction blocks\\r\
 */\\r\
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {\\r\
  switch (errorCorrectionLevel) {\\r\
    case ECLevel.L:\\r\
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]\\r\
    case ECLevel.M:\\r\
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]\\r\
    case ECLevel.Q:\\r\
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]\\r\
    case ECLevel.H:\\r\
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]\\r\
    default:\\r\
      return undefined\\r\
  }\\r\
}\\r\
\\r\
/**\\r\
 * Returns the number of error correction codewords to use for the specified\\r\
 * version and error correction level.\\r\
 *\\r\
 * @param  {Number} version              QR Code version\\r\
 * @param  {Number} errorCorrectionLevel Error correction level\\r\
 * @return {Number}                      Number of error correction codewords\\r\
 */\\r\
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {\\r\
  switch (errorCorrectionLevel) {\\r\
    case ECLevel.L:\\r\
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]\\r\
    case ECLevel.M:\\r\
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]\\r\
    case ECLevel.Q:\\r\
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]\\r\
    case ECLevel.H:\\r\
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]\\r\
    default:\\r\
      return undefined\\r\
  }\\r\
}\\r\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/error-correction-code.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/error-correction-level.js":
      /*!****************************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/error-correction-level.js ***!
        \\****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("exports.L = { bit: 1 }\
exports.M = { bit: 0 }\
exports.Q = { bit: 3 }\
exports.H = { bit: 2 }\
\
function fromString (string) {\
  if (typeof string !== 'string') {\
    throw new Error('Param is not a string')\
  }\
\
  var lcStr = string.toLowerCase()\
\
  switch (lcStr) {\
    case 'l':\
    case 'low':\
      return exports.L\
\
    case 'm':\
    case 'medium':\
      return exports.M\
\
    case 'q':\
    case 'quartile':\
      return exports.Q\
\
    case 'h':\
    case 'high':\
      return exports.H\
\
    default:\
      throw new Error('Unknown EC Level: ' + string)\
  }\
}\
\
exports.isValid = function isValid (level) {\
  return level && typeof level.bit !== 'undefined' &&\
    level.bit >= 0 && level.bit < 4\
}\
\
exports.from = function from (value, defaultValue) {\
  if (exports.isValid(value)) {\
    return value\
  }\
\
  try {\
    return fromString(value)\
  } catch (e) {\
    return defaultValue\
  }\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/error-correction-level.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/finder-pattern.js":
      /*!********************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/finder-pattern.js ***!
        \\********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var getSymbolSize = __webpack_require__(/*! ./utils */ \"./node_modules/qrcode/lib/core/utils.js\").getSymbolSize\
var FINDER_PATTERN_SIZE = 7\
\
/**\
 * Returns an array containing the positions of each finder pattern.\
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates\
 *\
 * @param  {Number} version QR Code version\
 * @return {Array}          Array of coordinates\
 */\
exports.getPositions = function getPositions (version) {\
  var size = getSymbolSize(version)\
\
  return [\
    // top-left\
    [0, 0],\
    // top-right\
    [size - FINDER_PATTERN_SIZE, 0],\
    // bottom-left\
    [0, size - FINDER_PATTERN_SIZE]\
  ]\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/finder-pattern.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/format-info.js":
      /*!*****************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/format-info.js ***!
        \\*****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Utils = __webpack_require__(/*! ./utils */ \"./node_modules/qrcode/lib/core/utils.js\")\
\
var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)\
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)\
var G15_BCH = Utils.getBCHDigit(G15)\
\
/**\
 * Returns format information with relative error correction bits\
 *\
 * The format information is a 15-bit sequence containing 5 data bits,\
 * with 10 error correction bits calculated using the (15, 5) BCH code.\
 *\
 * @param  {Number} errorCorrectionLevel Error correction level\
 * @param  {Number} mask                 Mask pattern\
 * @return {Number}                      Encoded format information bits\
 */\
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {\
  var data = ((errorCorrectionLevel.bit << 3) | mask)\
  var d = data << 10\
\
  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {\
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))\
  }\
\
  // xor final data with mask pattern in order to ensure that\
  // no combination of Error Correction Level and data mask pattern\
  // will result in an all-zero data string\
  return ((data << 10) | d) ^ G15_MASK\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/format-info.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/galois-field.js":
      /*!******************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/galois-field.js ***!
        \\******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Buffer = __webpack_require__(/*! ../utils/buffer */ \"./node_modules/qrcode/lib/utils/typedarray-buffer.js\")\
\
var EXP_TABLE = new Buffer(512)\
var LOG_TABLE = new Buffer(256)\
\
/**\
 * Precompute the log and anti-log tables for faster computation later\
 *\
 * For each possible value in the galois field 2^8, we will pre-compute\
 * the logarithm and anti-logarithm (exponential) of this value\
 *\
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}\
 */\
;(function initTables () {\
  var x = 1\
  for (var i = 0; i < 255; i++) {\
    EXP_TABLE[i] = x\
    LOG_TABLE[x] = i\
\
    x <<= 1 // multiply by 2\
\
    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.\
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.\
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)\
      x ^= 0x11D\
    }\
  }\
\
  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to\
  // stay inside the bounds (because we will mainly use this table for the multiplication of\
  // two GF numbers, no more).\
  // @see {@link mul}\
  for (i = 255; i < 512; i++) {\
    EXP_TABLE[i] = EXP_TABLE[i - 255]\
  }\
}())\
\
/**\
 * Returns log value of n inside Galois Field\
 *\
 * @param  {Number} n\
 * @return {Number}\
 */\
exports.log = function log (n) {\
  if (n < 1) throw new Error('log(' + n + ')')\
  return LOG_TABLE[n]\
}\
\
/**\
 * Returns anti-log value of n inside Galois Field\
 *\
 * @param  {Number} n\
 * @return {Number}\
 */\
exports.exp = function exp (n) {\
  return EXP_TABLE[n]\
}\
\
/**\
 * Multiplies two number inside Galois Field\
 *\
 * @param  {Number} x\
 * @param  {Number} y\
 * @return {Number}\
 */\
exports.mul = function mul (x, y) {\
  if (x === 0 || y === 0) return 0\
\
  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized\
  // @see {@link initTables}\
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/galois-field.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/kanji-data.js":
      /*!****************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/kanji-data.js ***!
        \\****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Mode = __webpack_require__(/*! ./mode */ \"./node_modules/qrcode/lib/core/mode.js\")\
var Utils = __webpack_require__(/*! ./utils */ \"./node_modules/qrcode/lib/core/utils.js\")\
\
function KanjiData (data) {\
  this.mode = Mode.KANJI\
  this.data = data\
}\
\
KanjiData.getBitsLength = function getBitsLength (length) {\
  return length * 13\
}\
\
KanjiData.prototype.getLength = function getLength () {\
  return this.data.length\
}\
\
KanjiData.prototype.getBitsLength = function getBitsLength () {\
  return KanjiData.getBitsLength(this.data.length)\
}\
\
KanjiData.prototype.write = function (bitBuffer) {\
  var i\
\
  // In the Shift JIS system, Kanji characters are represented by a two byte combination.\
  // These byte values are shifted from the JIS X 0208 values.\
  // JIS X 0208 gives details of the shift coded representation.\
  for (i = 0; i < this.data.length; i++) {\
    var value = Utils.toSJIS(this.data[i])\
\
    // For characters with Shift JIS values from 0x8140 to 0x9FFC:\
    if (value >= 0x8140 && value <= 0x9FFC) {\
      // Subtract 0x8140 from Shift JIS value\
      value -= 0x8140\
\
    // For characters with Shift JIS values from 0xE040 to 0xEBBF\
    } else if (value >= 0xE040 && value <= 0xEBBF) {\
      // Subtract 0xC140 from Shift JIS value\
      value -= 0xC140\
    } else {\
      throw new Error(\
        'Invalid SJIS character: ' + this.data[i] + '\\\
' +\
        'Make sure your charset is UTF-8')\
    }\
\
    // Multiply most significant byte of result by 0xC0\
    // and add least significant byte to product\
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)\
\
    // Convert result to a 13-bit binary string\
    bitBuffer.put(value, 13)\
  }\
}\
\
module.exports = KanjiData\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/kanji-data.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/mask-pattern.js":
      /*!******************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/mask-pattern.js ***!
        \\******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("/**\
 * Data mask pattern reference\
 * @type {Object}\
 */\
exports.Patterns = {\
  PATTERN000: 0,\
  PATTERN001: 1,\
  PATTERN010: 2,\
  PATTERN011: 3,\
  PATTERN100: 4,\
  PATTERN101: 5,\
  PATTERN110: 6,\
  PATTERN111: 7\
}\
\
/**\
 * Weighted penalty scores for the undesirable features\
 * @type {Object}\
 */\
var PenaltyScores = {\
  N1: 3,\
  N2: 3,\
  N3: 40,\
  N4: 10\
}\
\
/**\
 * Check if mask pattern value is valid\
 *\
 * @param  {Number}  mask    Mask pattern\
 * @return {Boolean}         true if valid, false otherwise\
 */\
exports.isValid = function isValid (mask) {\
  return mask && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7\
}\
\
/**\
 * Returns mask pattern from a value.\
 * If value is not valid, returns undefined\
 *\
 * @param  {Number|String} value        Mask pattern value\
 * @return {Number}                     Valid mask pattern or undefined\
 */\
exports.from = function from (value) {\
  return exports.isValid(value) ? parseInt(value, 10) : undefined\
}\
\
/**\
* Find adjacent modules in row/column with the same color\
* and assign a penalty value.\
*\
* Points: N1 + i\
* i is the amount by which the number of adjacent modules of the same color exceeds 5\
*/\
exports.getPenaltyN1 = function getPenaltyN1 (data) {\
  var size = data.size\
  var points = 0\
  var sameCountCol = 0\
  var sameCountRow = 0\
  var lastCol = null\
  var lastRow = null\
\
  for (var row = 0; row < size; row++) {\
    sameCountCol = sameCountRow = 0\
    lastCol = lastRow = null\
\
    for (var col = 0; col < size; col++) {\
      var module = data.get(row, col)\
      if (module === lastCol) {\
        sameCountCol++\
      } else {\
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)\
        lastCol = module\
        sameCountCol = 1\
      }\
\
      module = data.get(col, row)\
      if (module === lastRow) {\
        sameCountRow++\
      } else {\
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)\
        lastRow = module\
        sameCountRow = 1\
      }\
    }\
\
    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)\
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)\
  }\
\
  return points\
}\
\
/**\
 * Find 2x2 blocks with the same color and assign a penalty value\
 *\
 * Points: N2 * (m - 1) * (n - 1)\
 */\
exports.getPenaltyN2 = function getPenaltyN2 (data) {\
  var size = data.size\
  var points = 0\
\
  for (var row = 0; row < size - 1; row++) {\
    for (var col = 0; col < size - 1; col++) {\
      var last = data.get(row, col) +\
        data.get(row, col + 1) +\
        data.get(row + 1, col) +\
        data.get(row + 1, col + 1)\
\
      if (last === 4 || last === 0) points++\
    }\
  }\
\
  return points * PenaltyScores.N2\
}\
\
/**\
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,\
 * preceded or followed by light area 4 modules wide\
 *\
 * Points: N3 * number of pattern found\
 */\
exports.getPenaltyN3 = function getPenaltyN3 (data) {\
  var size = data.size\
  var points = 0\
  var bitsCol = 0\
  var bitsRow = 0\
\
  for (var row = 0; row < size; row++) {\
    bitsCol = bitsRow = 0\
    for (var col = 0; col < size; col++) {\
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)\
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++\
\
      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)\
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++\
    }\
  }\
\
  return points * PenaltyScores.N3\
}\
\
/**\
 * Calculate proportion of dark modules in entire symbol\
 *\
 * Points: N4 * k\
 *\
 * k is the rating of the deviation of the proportion of dark modules\
 * in the symbol from 50% in steps of 5%\
 */\
exports.getPenaltyN4 = function getPenaltyN4 (data) {\
  var darkCount = 0\
  var modulesCount = data.data.length\
\
  for (var i = 0; i < modulesCount; i++) darkCount += data.data[i]\
\
  var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)\
\
  return k * PenaltyScores.N4\
}\
\
/**\
 * Return mask value at given position\
 *\
 * @param  {Number} maskPattern Pattern reference value\
 * @param  {Number} i           Row\
 * @param  {Number} j           Column\
 * @return {Boolean}            Mask value\
 */\
function getMaskAt (maskPattern, i, j) {\
  switch (maskPattern) {\
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0\
    case exports.Patterns.PATTERN001: return i % 2 === 0\
    case exports.Patterns.PATTERN010: return j % 3 === 0\
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0\
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0\
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0\
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0\
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0\
\
    default: throw new Error('bad maskPattern:' + maskPattern)\
  }\
}\
\
/**\
 * Apply a mask pattern to a BitMatrix\
 *\
 * @param  {Number}    pattern Pattern reference number\
 * @param  {BitMatrix} data    BitMatrix data\
 */\
exports.applyMask = function applyMask (pattern, data) {\
  var size = data.size\
\
  for (var col = 0; col < size; col++) {\
    for (var row = 0; row < size; row++) {\
      if (data.isReserved(row, col)) continue\
      data.xor(row, col, getMaskAt(pattern, row, col))\
    }\
  }\
}\
\
/**\
 * Returns the best mask pattern for data\
 *\
 * @param  {BitMatrix} data\
 * @return {Number} Mask pattern reference number\
 */\
exports.getBestMask = function getBestMask (data, setupFormatFunc) {\
  var numPatterns = Object.keys(exports.Patterns).length\
  var bestPattern = 0\
  var lowerPenalty = Infinity\
\
  for (var p = 0; p < numPatterns; p++) {\
    setupFormatFunc(p)\
    exports.applyMask(p, data)\
\
    // Calculate penalty\
    var penalty =\
      exports.getPenaltyN1(data) +\
      exports.getPenaltyN2(data) +\
      exports.getPenaltyN3(data) +\
      exports.getPenaltyN4(data)\
\
    // Undo previously applied mask\
    exports.applyMask(p, data)\
\
    if (penalty < lowerPenalty) {\
      lowerPenalty = penalty\
      bestPattern = p\
    }\
  }\
\
  return bestPattern\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/mask-pattern.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/mode.js":
      /*!**********************************************!*\\
        !*** ./node_modules/qrcode/lib/core/mode.js ***!
        \\**********************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Version = __webpack_require__(/*! ./version */ \"./node_modules/qrcode/lib/core/version.js\")\
var Regex = __webpack_require__(/*! ./regex */ \"./node_modules/qrcode/lib/core/regex.js\")\
\
/**\
 * Numeric mode encodes data from the decimal digit set (0 - 9)\
 * (byte values 30HEX to 39HEX).\
 * Normally, 3 data characters are represented by 10 bits.\
 *\
 * @type {Object}\
 */\
exports.NUMERIC = {\
  id: 'Numeric',\
  bit: 1 << 0,\
  ccBits: [10, 12, 14]\
}\
\
/**\
 * Alphanumeric mode encodes data from a set of 45 characters,\
 * i.e. 10 numeric digits (0 - 9),\
 *      26 alphabetic characters (A - Z),\
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).\
 * Normally, two input characters are represented by 11 bits.\
 *\
 * @type {Object}\
 */\
exports.ALPHANUMERIC = {\
  id: 'Alphanumeric',\
  bit: 1 << 1,\
  ccBits: [9, 11, 13]\
}\
\
/**\
 * In byte mode, data is encoded at 8 bits per character.\
 *\
 * @type {Object}\
 */\
exports.BYTE = {\
  id: 'Byte',\
  bit: 1 << 2,\
  ccBits: [8, 16, 16]\
}\
\
/**\
 * The Kanji mode efficiently encodes Kanji characters in accordance with\
 * the Shift JIS system based on JIS X 0208.\
 * The Shift JIS values are shifted from the JIS X 0208 values.\
 * JIS X 0208 gives details of the shift coded representation.\
 * Each two-byte character value is compacted to a 13-bit binary codeword.\
 *\
 * @type {Object}\
 */\
exports.KANJI = {\
  id: 'Kanji',\
  bit: 1 << 3,\
  ccBits: [8, 10, 12]\
}\
\
/**\
 * Mixed mode will contain a sequences of data in a combination of any of\
 * the modes described above\
 *\
 * @type {Object}\
 */\
exports.MIXED = {\
  bit: -1\
}\
\
/**\
 * Returns the number of bits needed to store the data length\
 * according to QR Code specifications.\
 *\
 * @param  {Mode}   mode    Data mode\
 * @param  {Number} version QR Code version\
 * @return {Number}         Number of bits\
 */\
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {\
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)\
\
  if (!Version.isValid(version)) {\
    throw new Error('Invalid version: ' + version)\
  }\
\
  if (version >= 1 && version < 10) return mode.ccBits[0]\
  else if (version < 27) return mode.ccBits[1]\
  return mode.ccBits[2]\
}\
\
/**\
 * Returns the most efficient mode to store the specified data\
 *\
 * @param  {String} dataStr Input data string\
 * @return {Mode}           Best mode\
 */\
exports.getBestModeForData = function getBestModeForData (dataStr) {\
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC\
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC\
  else if (Regex.testKanji(dataStr)) return exports.KANJI\
  else return exports.BYTE\
}\
\
/**\
 * Return mode name as string\
 *\
 * @param {Mode} mode Mode object\
 * @returns {String}  Mode name\
 */\
exports.toString = function toString (mode) {\
  if (mode && mode.id) return mode.id\
  throw new Error('Invalid mode')\
}\
\
/**\
 * Check if input param is a valid mode object\
 *\
 * @param   {Mode}    mode Mode object\
 * @returns {Boolean} True if valid mode, false otherwise\
 */\
exports.isValid = function isValid (mode) {\
  return mode && mode.bit && mode.ccBits\
}\
\
/**\
 * Get mode object from its name\
 *\
 * @param   {String} string Mode name\
 * @returns {Mode}          Mode object\
 */\
function fromString (string) {\
  if (typeof string !== 'string') {\
    throw new Error('Param is not a string')\
  }\
\
  var lcStr = string.toLowerCase()\
\
  switch (lcStr) {\
    case 'numeric':\
      return exports.NUMERIC\
    case 'alphanumeric':\
      return exports.ALPHANUMERIC\
    case 'kanji':\
      return exports.KANJI\
    case 'byte':\
      return exports.BYTE\
    default:\
      throw new Error('Unknown mode: ' + string)\
  }\
}\
\
/**\
 * Returns mode from a value.\
 * If value is not a valid mode, returns defaultValue\
 *\
 * @param  {Mode|String} value        Encoding mode\
 * @param  {Mode}        defaultValue Fallback value\
 * @return {Mode}                     Encoding mode\
 */\
exports.from = function from (value, defaultValue) {\
  if (exports.isValid(value)) {\
    return value\
  }\
\
  try {\
    return fromString(value)\
  } catch (e) {\
    return defaultValue\
  }\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/mode.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/numeric-data.js":
      /*!******************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/numeric-data.js ***!
        \\******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Mode = __webpack_require__(/*! ./mode */ \"./node_modules/qrcode/lib/core/mode.js\")\
\
function NumericData (data) {\
  this.mode = Mode.NUMERIC\
  this.data = data.toString()\
}\
\
NumericData.getBitsLength = function getBitsLength (length) {\
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)\
}\
\
NumericData.prototype.getLength = function getLength () {\
  return this.data.length\
}\
\
NumericData.prototype.getBitsLength = function getBitsLength () {\
  return NumericData.getBitsLength(this.data.length)\
}\
\
NumericData.prototype.write = function write (bitBuffer) {\
  var i, group, value\
\
  // The input data string is divided into groups of three digits,\
  // and each group is converted to its 10-bit binary equivalent.\
  for (i = 0; i + 3 <= this.data.length; i += 3) {\
    group = this.data.substr(i, 3)\
    value = parseInt(group, 10)\
\
    bitBuffer.put(value, 10)\
  }\
\
  // If the number of input digits is not an exact multiple of three,\
  // the final one or two digits are converted to 4 or 7 bits respectively.\
  var remainingNum = this.data.length - i\
  if (remainingNum > 0) {\
    group = this.data.substr(i)\
    value = parseInt(group, 10)\
\
    bitBuffer.put(value, remainingNum * 3 + 1)\
  }\
}\
\
module.exports = NumericData\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/numeric-data.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/polynomial.js":
      /*!****************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/polynomial.js ***!
        \\****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Buffer = __webpack_require__(/*! ../utils/buffer */ \"./node_modules/qrcode/lib/utils/typedarray-buffer.js\")\
var GF = __webpack_require__(/*! ./galois-field */ \"./node_modules/qrcode/lib/core/galois-field.js\")\
\
/**\
 * Multiplies two polynomials inside Galois Field\
 *\
 * @param  {Buffer} p1 Polynomial\
 * @param  {Buffer} p2 Polynomial\
 * @return {Buffer}    Product of p1 and p2\
 */\
exports.mul = function mul (p1, p2) {\
  var coeff = new Buffer(p1.length + p2.length - 1)\
  coeff.fill(0)\
\
  for (var i = 0; i < p1.length; i++) {\
    for (var j = 0; j < p2.length; j++) {\
      coeff[i + j] ^= GF.mul(p1[i], p2[j])\
    }\
  }\
\
  return coeff\
}\
\
/**\
 * Calculate the remainder of polynomials division\
 *\
 * @param  {Buffer} divident Polynomial\
 * @param  {Buffer} divisor  Polynomial\
 * @return {Buffer}          Remainder\
 */\
exports.mod = function mod (divident, divisor) {\
  var result = new Buffer(divident)\
\
  while ((result.length - divisor.length) >= 0) {\
    var coeff = result[0]\
\
    for (var i = 0; i < divisor.length; i++) {\
      result[i] ^= GF.mul(divisor[i], coeff)\
    }\
\
    // remove all zeros from buffer head\
    var offset = 0\
    while (offset < result.length && result[offset] === 0) offset++\
    result = result.slice(offset)\
  }\
\
  return result\
}\
\
/**\
 * Generate an irreducible generator polynomial of specified degree\
 * (used by Reed-Solomon encoder)\
 *\
 * @param  {Number} degree Degree of the generator polynomial\
 * @return {Buffer}        Buffer containing polynomial coefficients\
 */\
exports.generateECPolynomial = function generateECPolynomial (degree) {\
  var poly = new Buffer([1])\
  for (var i = 0; i < degree; i++) {\
    poly = exports.mul(poly, [1, GF.exp(i)])\
  }\
\
  return poly\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/polynomial.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/qrcode.js":
      /*!************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/qrcode.js ***!
        \\************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Buffer = __webpack_require__(/*! ../utils/buffer */ \"./node_modules/qrcode/lib/utils/typedarray-buffer.js\")\
var Utils = __webpack_require__(/*! ./utils */ \"./node_modules/qrcode/lib/core/utils.js\")\
var ECLevel = __webpack_require__(/*! ./error-correction-level */ \"./node_modules/qrcode/lib/core/error-correction-level.js\")\
var BitBuffer = __webpack_require__(/*! ./bit-buffer */ \"./node_modules/qrcode/lib/core/bit-buffer.js\")\
var BitMatrix = __webpack_require__(/*! ./bit-matrix */ \"./node_modules/qrcode/lib/core/bit-matrix.js\")\
var AlignmentPattern = __webpack_require__(/*! ./alignment-pattern */ \"./node_modules/qrcode/lib/core/alignment-pattern.js\")\
var FinderPattern = __webpack_require__(/*! ./finder-pattern */ \"./node_modules/qrcode/lib/core/finder-pattern.js\")\
var MaskPattern = __webpack_require__(/*! ./mask-pattern */ \"./node_modules/qrcode/lib/core/mask-pattern.js\")\
var ECCode = __webpack_require__(/*! ./error-correction-code */ \"./node_modules/qrcode/lib/core/error-correction-code.js\")\
var ReedSolomonEncoder = __webpack_require__(/*! ./reed-solomon-encoder */ \"./node_modules/qrcode/lib/core/reed-solomon-encoder.js\")\
var Version = __webpack_require__(/*! ./version */ \"./node_modules/qrcode/lib/core/version.js\")\
var FormatInfo = __webpack_require__(/*! ./format-info */ \"./node_modules/qrcode/lib/core/format-info.js\")\
var Mode = __webpack_require__(/*! ./mode */ \"./node_modules/qrcode/lib/core/mode.js\")\
var Segments = __webpack_require__(/*! ./segments */ \"./node_modules/qrcode/lib/core/segments.js\")\
var isArray = __webpack_require__(/*! isarray */ \"./node_modules/qrcode/node_modules/isarray/index.js\")\
\
/**\
 * QRCode for JavaScript\
 *\
 * modified by Ryan Day for nodejs support\
 * Copyright (c) 2011 Ryan Day\
 *\
 * Licensed under the MIT license:\
 *   http://www.opensource.org/licenses/mit-license.php\
 *\
//---------------------------------------------------------------------\
// QRCode for JavaScript\
//\
// Copyright (c) 2009 Kazuhiko Arase\
//\
// URL: http://www.d-project.com/\
//\
// Licensed under the MIT license:\
//   http://www.opensource.org/licenses/mit-license.php\
//\
// The word \"QR Code\" is registered trademark of\
// DENSO WAVE INCORPORATED\
//   http://www.denso-wave.com/qrcode/faqpatent-e.html\
//\
//---------------------------------------------------------------------\
*/\
\
/**\
 * Add finder patterns bits to matrix\
 *\
 * @param  {BitMatrix} matrix  Modules matrix\
 * @param  {Number}    version QR Code version\
 */\
function setupFinderPattern (matrix, version) {\
  var size = matrix.size\
  var pos = FinderPattern.getPositions(version)\
\
  for (var i = 0; i < pos.length; i++) {\
    var row = pos[i][0]\
    var col = pos[i][1]\
\
    for (var r = -1; r <= 7; r++) {\
      if (row + r <= -1 || size <= row + r) continue\
\
      for (var c = -1; c <= 7; c++) {\
        if (col + c <= -1 || size <= col + c) continue\
\
        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||\
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||\
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {\
          matrix.set(row + r, col + c, true, true)\
        } else {\
          matrix.set(row + r, col + c, false, true)\
        }\
      }\
    }\
  }\
}\
\
/**\
 * Add timing pattern bits to matrix\
 *\
 * Note: this function must be called before {@link setupAlignmentPattern}\
 *\
 * @param  {BitMatrix} matrix Modules matrix\
 */\
function setupTimingPattern (matrix) {\
  var size = matrix.size\
\
  for (var r = 8; r < size - 8; r++) {\
    var value = r % 2 === 0\
    matrix.set(r, 6, value, true)\
    matrix.set(6, r, value, true)\
  }\
}\
\
/**\
 * Add alignment patterns bits to matrix\
 *\
 * Note: this function must be called after {@link setupTimingPattern}\
 *\
 * @param  {BitMatrix} matrix  Modules matrix\
 * @param  {Number}    version QR Code version\
 */\
function setupAlignmentPattern (matrix, version) {\
  var pos = AlignmentPattern.getPositions(version)\
\
  for (var i = 0; i < pos.length; i++) {\
    var row = pos[i][0]\
    var col = pos[i][1]\
\
    for (var r = -2; r <= 2; r++) {\
      for (var c = -2; c <= 2; c++) {\
        if (r === -2 || r === 2 || c === -2 || c === 2 ||\
          (r === 0 && c === 0)) {\
          matrix.set(row + r, col + c, true, true)\
        } else {\
          matrix.set(row + r, col + c, false, true)\
        }\
      }\
    }\
  }\
}\
\
/**\
 * Add version info bits to matrix\
 *\
 * @param  {BitMatrix} matrix  Modules matrix\
 * @param  {Number}    version QR Code version\
 */\
function setupVersionInfo (matrix, version) {\
  var size = matrix.size\
  var bits = Version.getEncodedBits(version)\
  var row, col, mod\
\
  for (var i = 0; i < 18; i++) {\
    row = Math.floor(i / 3)\
    col = i % 3 + size - 8 - 3\
    mod = ((bits >> i) & 1) === 1\
\
    matrix.set(row, col, mod, true)\
    matrix.set(col, row, mod, true)\
  }\
}\
\
/**\
 * Add format info bits to matrix\
 *\
 * @param  {BitMatrix} matrix               Modules matrix\
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level\
 * @param  {Number}    maskPattern          Mask pattern reference value\
 */\
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {\
  var size = matrix.size\
  var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)\
  var i, mod\
\
  for (i = 0; i < 15; i++) {\
    mod = ((bits >> i) & 1) === 1\
\
    // vertical\
    if (i < 6) {\
      matrix.set(i, 8, mod, true)\
    } else if (i < 8) {\
      matrix.set(i + 1, 8, mod, true)\
    } else {\
      matrix.set(size - 15 + i, 8, mod, true)\
    }\
\
    // horizontal\
    if (i < 8) {\
      matrix.set(8, size - i - 1, mod, true)\
    } else if (i < 9) {\
      matrix.set(8, 15 - i - 1 + 1, mod, true)\
    } else {\
      matrix.set(8, 15 - i - 1, mod, true)\
    }\
  }\
\
  // fixed module\
  matrix.set(size - 8, 8, 1, true)\
}\
\
/**\
 * Add encoded data bits to matrix\
 *\
 * @param  {BitMatrix} matrix Modules matrix\
 * @param  {Buffer}    data   Data codewords\
 */\
function setupData (matrix, data) {\
  var size = matrix.size\
  var inc = -1\
  var row = size - 1\
  var bitIndex = 7\
  var byteIndex = 0\
\
  for (var col = size - 1; col > 0; col -= 2) {\
    if (col === 6) col--\
\
    while (true) {\
      for (var c = 0; c < 2; c++) {\
        if (!matrix.isReserved(row, col - c)) {\
          var dark = false\
\
          if (byteIndex < data.length) {\
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)\
          }\
\
          matrix.set(row, col - c, dark)\
          bitIndex--\
\
          if (bitIndex === -1) {\
            byteIndex++\
            bitIndex = 7\
          }\
        }\
      }\
\
      row += inc\
\
      if (row < 0 || size <= row) {\
        row -= inc\
        inc = -inc\
        break\
      }\
    }\
  }\
}\
\
/**\
 * Create encoded codewords from data input\
 *\
 * @param  {Number}   version              QR Code version\
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level\
 * @param  {ByteData} data                 Data input\
 * @return {Buffer}                        Buffer containing encoded codewords\
 */\
function createData (version, errorCorrectionLevel, segments) {\
  // Prepare data buffer\
  var buffer = new BitBuffer()\
\
  segments.forEach(function (data) {\
    // prefix data with mode indicator (4 bits)\
    buffer.put(data.mode.bit, 4)\
\
    // Prefix data with character count indicator.\
    // The character count indicator is a string of bits that represents the\
    // number of characters that are being encoded.\
    // The character count indicator must be placed after the mode indicator\
    // and must be a certain number of bits long, depending on the QR version\
    // and data mode\
    // @see {@link Mode.getCharCountIndicator}.\
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))\
\
    // add binary data sequence to buffer\
    data.write(buffer)\
  })\
\
  // Calculate required number of bits\
  var totalCodewords = Utils.getSymbolTotalCodewords(version)\
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)\
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8\
\
  // Add a terminator.\
  // If the bit string is shorter than the total number of required bits,\
  // a terminator of up to four 0s must be added to the right side of the string.\
  // If the bit string is more than four bits shorter than the required number of bits,\
  // add four 0s to the end.\
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {\
    buffer.put(0, 4)\
  }\
\
  // If the bit string is fewer than four bits shorter, add only the number of 0s that\
  // are needed to reach the required number of bits.\
\
  // After adding the terminator, if the number of bits in the string is not a multiple of 8,\
  // pad the string on the right with 0s to make the string's length a multiple of 8.\
  while (buffer.getLengthInBits() % 8 !== 0) {\
    buffer.putBit(0)\
  }\
\
  // Add pad bytes if the string is still shorter than the total number of required bits.\
  // Extend the buffer to fill the data capacity of the symbol corresponding to\
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)\
  // and 00010001 (0x11) alternately.\
  var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8\
  for (var i = 0; i < remainingByte; i++) {\
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)\
  }\
\
  return createCodewords(buffer, version, errorCorrectionLevel)\
}\
\
/**\
 * Encode input data with Reed-Solomon and return codewords with\
 * relative error correction bits\
 *\
 * @param  {BitBuffer} bitBuffer            Data to encode\
 * @param  {Number}    version              QR Code version\
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level\
 * @return {Buffer}                         Buffer containing encoded codewords\
 */\
function createCodewords (bitBuffer, version, errorCorrectionLevel) {\
  // Total codewords for this QR code version (Data + Error correction)\
  var totalCodewords = Utils.getSymbolTotalCodewords(version)\
\
  // Total number of error correction codewords\
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)\
\
  // Total number of data codewords\
  var dataTotalCodewords = totalCodewords - ecTotalCodewords\
\
  // Total number of blocks\
  var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)\
\
  // Calculate how many blocks each group should contain\
  var blocksInGroup2 = totalCodewords % ecTotalBlocks\
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2\
\
  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)\
\
  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)\
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1\
\
  // Number of EC codewords is the same for both groups\
  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1\
\
  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount\
  var rs = new ReedSolomonEncoder(ecCount)\
\
  var offset = 0\
  var dcData = new Array(ecTotalBlocks)\
  var ecData = new Array(ecTotalBlocks)\
  var maxDataSize = 0\
  var buffer = new Buffer(bitBuffer.buffer)\
\
  // Divide the buffer into the required number of blocks\
  for (var b = 0; b < ecTotalBlocks; b++) {\
    var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2\
\
    // extract a block of data from buffer\
    dcData[b] = buffer.slice(offset, offset + dataSize)\
\
    // Calculate EC codewords for this data block\
    ecData[b] = rs.encode(dcData[b])\
\
    offset += dataSize\
    maxDataSize = Math.max(maxDataSize, dataSize)\
  }\
\
  // Create final data\
  // Interleave the data and error correction codewords from each block\
  var data = new Buffer(totalCodewords)\
  var index = 0\
  var i, r\
\
  // Add data codewords\
  for (i = 0; i < maxDataSize; i++) {\
    for (r = 0; r < ecTotalBlocks; r++) {\
      if (i < dcData[r].length) {\
        data[index++] = dcData[r][i]\
      }\
    }\
  }\
\
  // Apped EC codewords\
  for (i = 0; i < ecCount; i++) {\
    for (r = 0; r < ecTotalBlocks; r++) {\
      data[index++] = ecData[r][i]\
    }\
  }\
\
  return data\
}\
\
/**\
 * Build QR Code symbol\
 *\
 * @param  {String} data                 Input string\
 * @param  {Number} version              QR Code version\
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level\
 * @param  {MaskPattern} maskPattern     Mask pattern\
 * @return {Object}                      Object containing symbol data\
 */\
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {\
  var segments\
\
  if (isArray(data)) {\
    segments = Segments.fromArray(data)\
  } else if (typeof data === 'string') {\
    var estimatedVersion = version\
\
    if (!estimatedVersion) {\
      var rawSegments = Segments.rawSplit(data)\
\
      // Estimate best version that can contain raw splitted segments\
      estimatedVersion = Version.getBestVersionForData(rawSegments,\
        errorCorrectionLevel)\
    }\
\
    // Build optimized segments\
    // If estimated version is undefined, try with the highest version\
    segments = Segments.fromString(data, estimatedVersion || 40)\
  } else {\
    throw new Error('Invalid data')\
  }\
\
  // Get the min version that can contain data\
  var bestVersion = Version.getBestVersionForData(segments,\
      errorCorrectionLevel)\
\
  // If no version is found, data cannot be stored\
  if (!bestVersion) {\
    throw new Error('The amount of data is too big to be stored in a QR Code')\
  }\
\
  // If not specified, use min version as default\
  if (!version) {\
    version = bestVersion\
\
  // Check if the specified version can contain the data\
  } else if (version < bestVersion) {\
    throw new Error('\\\
' +\
      'The chosen QR Code version cannot contain this amount of data.\\\
' +\
      'Minimum version required to store current data is: ' + bestVersion + '.\\\
'\
    )\
  }\
\
  var dataBits = createData(version, errorCorrectionLevel, segments)\
\
  // Allocate matrix buffer\
  var moduleCount = Utils.getSymbolSize(version)\
  var modules = new BitMatrix(moduleCount)\
\
  // Add function modules\
  setupFinderPattern(modules, version)\
  setupTimingPattern(modules)\
  setupAlignmentPattern(modules, version)\
\
  // Add temporary dummy bits for format info just to set them as reserved.\
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}\
  // since the masking operation must be performed only on the encoding region.\
  // These blocks will be replaced with correct values later in code.\
  setupFormatInfo(modules, errorCorrectionLevel, 0)\
\
  if (version >= 7) {\
    setupVersionInfo(modules, version)\
  }\
\
  // Add data codewords\
  setupData(modules, dataBits)\
\
  if (!maskPattern) {\
    // Find best mask pattern\
    maskPattern = MaskPattern.getBestMask(modules,\
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))\
  }\
\
  // Apply mask pattern\
  MaskPattern.applyMask(maskPattern, modules)\
\
  // Replace format info bits with correct values\
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)\
\
  return {\
    modules: modules,\
    version: version,\
    errorCorrectionLevel: errorCorrectionLevel,\
    maskPattern: maskPattern,\
    segments: segments\
  }\
}\
\
/**\
 * QR Code\
 *\
 * @param {String | Array} data                 Input data\
 * @param {Object} options                      Optional configurations\
 * @param {Number} options.version              QR Code version\
 * @param {String} options.errorCorrectionLevel Error correction level\
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis\
 */\
exports.create = function create (data, options) {\
  if (typeof data === 'undefined' || data === '') {\
    throw new Error('No input text')\
  }\
\
  var errorCorrectionLevel = ECLevel.M\
  var version\
  var mask\
\
  if (typeof options !== 'undefined') {\
    // Use higher error correction level as default\
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)\
    version = Version.from(options.version)\
    mask = MaskPattern.from(options.maskPattern)\
\
    if (options.toSJISFunc) {\
      Utils.setToSJISFunction(options.toSJISFunc)\
    }\
  }\
\
  return createSymbol(data, version, errorCorrectionLevel, mask)\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/qrcode.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/reed-solomon-encoder.js":
      /*!**************************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/reed-solomon-encoder.js ***!
        \\**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Buffer = __webpack_require__(/*! ../utils/buffer */ \"./node_modules/qrcode/lib/utils/typedarray-buffer.js\")\
var Polynomial = __webpack_require__(/*! ./polynomial */ \"./node_modules/qrcode/lib/core/polynomial.js\")\
\
function ReedSolomonEncoder (degree) {\
  this.genPoly = undefined\
  this.degree = degree\
\
  if (this.degree) this.initialize(this.degree)\
}\
\
/**\
 * Initialize the encoder.\
 * The input param should correspond to the number of error correction codewords.\
 *\
 * @param  {Number} degree\
 */\
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {\
  // create an irreducible generator polynomial\
  this.degree = degree\
  this.genPoly = Polynomial.generateECPolynomial(this.degree)\
}\
\
/**\
 * Encodes a chunk of data\
 *\
 * @param  {Buffer} data Buffer containing input data\
 * @return {Buffer}      Buffer containing encoded data\
 */\
ReedSolomonEncoder.prototype.encode = function encode (data) {\
  if (!this.genPoly) {\
    throw new Error('Encoder not initialized')\
  }\
\
  // Calculate EC for this data block\
  // extends data size to data+genPoly size\
  var pad = new Buffer(this.degree)\
  pad.fill(0)\
  var paddedData = Buffer.concat([data, pad], data.length + this.degree)\
\
  // The error correction codewords are the remainder after dividing the data codewords\
  // by a generator polynomial\
  var remainder = Polynomial.mod(paddedData, this.genPoly)\
\
  // return EC data blocks (last n byte, where n is the degree of genPoly)\
  // If coefficients number in remainder are less than genPoly degree,\
  // pad with 0s to the left to reach the needed number of coefficients\
  var start = this.degree - remainder.length\
  if (start > 0) {\
    var buff = new Buffer(this.degree)\
    buff.fill(0)\
    remainder.copy(buff, start)\
\
    return buff\
  }\
\
  return remainder\
}\
\
module.exports = ReedSolomonEncoder\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/reed-solomon-encoder.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/regex.js":
      /*!***********************************************!*\\
        !*** ./node_modules/qrcode/lib/core/regex.js ***!
        \\***********************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("var numeric = '[0-9]+'\
var alphanumeric = '[A-Z $%*+\\\\\\\\-./:]+'\
var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +\
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +\
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +\
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'\
kanji = kanji.replace(/u/g, '\\\\\\\\u')\
\
var byte = '(?:(?![A-Z0-9 $%*+\\\\\\\\-./:]|' + kanji + ').)+'\
\
exports.KANJI = new RegExp(kanji, 'g')\
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\\\\\\\-./:]+', 'g')\
exports.BYTE = new RegExp(byte, 'g')\
exports.NUMERIC = new RegExp(numeric, 'g')\
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')\
\
var TEST_KANJI = new RegExp('^' + kanji + '$')\
var TEST_NUMERIC = new RegExp('^' + numeric + '$')\
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\\\\\\\-./:]+$')\
\
exports.testKanji = function testKanji (str) {\
  return TEST_KANJI.test(str)\
}\
\
exports.testNumeric = function testNumeric (str) {\
  return TEST_NUMERIC.test(str)\
}\
\
exports.testAlphanumeric = function testAlphanumeric (str) {\
  return TEST_ALPHANUMERIC.test(str)\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/regex.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/segments.js":
      /*!**************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/segments.js ***!
        \\**************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Mode = __webpack_require__(/*! ./mode */ \"./node_modules/qrcode/lib/core/mode.js\")\
var NumericData = __webpack_require__(/*! ./numeric-data */ \"./node_modules/qrcode/lib/core/numeric-data.js\")\
var AlphanumericData = __webpack_require__(/*! ./alphanumeric-data */ \"./node_modules/qrcode/lib/core/alphanumeric-data.js\")\
var ByteData = __webpack_require__(/*! ./byte-data */ \"./node_modules/qrcode/lib/core/byte-data.js\")\
var KanjiData = __webpack_require__(/*! ./kanji-data */ \"./node_modules/qrcode/lib/core/kanji-data.js\")\
var Regex = __webpack_require__(/*! ./regex */ \"./node_modules/qrcode/lib/core/regex.js\")\
var Utils = __webpack_require__(/*! ./utils */ \"./node_modules/qrcode/lib/core/utils.js\")\
var dijkstra = __webpack_require__(/*! dijkstrajs */ \"./node_modules/dijkstrajs/dijkstra.js\")\
\
/**\
 * Returns UTF8 byte length\
 *\
 * @param  {String} str Input string\
 * @return {Number}     Number of byte\
 */\
function getStringByteLength (str) {\
  return unescape(encodeURIComponent(str)).length\
}\
\
/**\
 * Get a list of segments of the specified mode\
 * from a string\
 *\
 * @param  {Mode}   mode Segment mode\
 * @param  {String} str  String to process\
 * @return {Array}       Array of object with segments data\
 */\
function getSegments (regex, mode, str) {\
  var segments = []\
  var result\
\
  while ((result = regex.exec(str)) !== null) {\
    segments.push({\
      data: result[0],\
      index: result.index,\
      mode: mode,\
      length: result[0].length\
    })\
  }\
\
  return segments\
}\
\
/**\
 * Extracts a series of segments with the appropriate\
 * modes from a string\
 *\
 * @param  {String} dataStr Input string\
 * @return {Array}          Array of object with segments data\
 */\
function getSegmentsFromString (dataStr) {\
  var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)\
  var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)\
  var byteSegs\
  var kanjiSegs\
\
  if (Utils.isKanjiModeEnabled()) {\
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)\
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)\
  } else {\
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)\
    kanjiSegs = []\
  }\
\
  var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)\
\
  return segs\
    .sort(function (s1, s2) {\
      return s1.index - s2.index\
    })\
    .map(function (obj) {\
      return {\
        data: obj.data,\
        mode: obj.mode,\
        length: obj.length\
      }\
    })\
}\
\
/**\
 * Returns how many bits are needed to encode a string of\
 * specified length with the specified mode\
 *\
 * @param  {Number} length String length\
 * @param  {Mode} mode     Segment mode\
 * @return {Number}        Bit length\
 */\
function getSegmentBitsLength (length, mode) {\
  switch (mode) {\
    case Mode.NUMERIC:\
      return NumericData.getBitsLength(length)\
    case Mode.ALPHANUMERIC:\
      return AlphanumericData.getBitsLength(length)\
    case Mode.KANJI:\
      return KanjiData.getBitsLength(length)\
    case Mode.BYTE:\
      return ByteData.getBitsLength(length)\
  }\
}\
\
/**\
 * Merges adjacent segments which have the same mode\
 *\
 * @param  {Array} segs Array of object with segments data\
 * @return {Array}      Array of object with segments data\
 */\
function mergeSegments (segs) {\
  return segs.reduce(function (acc, curr) {\
    var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null\
    if (prevSeg && prevSeg.mode === curr.mode) {\
      acc[acc.length - 1].data += curr.data\
      return acc\
    }\
\
    acc.push(curr)\
    return acc\
  }, [])\
}\
\
/**\
 * Generates a list of all possible nodes combination which\
 * will be used to build a segments graph.\
 *\
 * Nodes are divided by groups. Each group will contain a list of all the modes\
 * in which is possible to encode the given text.\
 *\
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.\
 * The group for '12345' will contain then 3 objects, one for each\
 * possible encoding mode.\
 *\
 * Each node represents a possible segment.\
 *\
 * @param  {Array} segs Array of object with segments data\
 * @return {Array}      Array of object with segments data\
 */\
function buildNodes (segs) {\
  var nodes = []\
  for (var i = 0; i < segs.length; i++) {\
    var seg = segs[i]\
\
    switch (seg.mode) {\
      case Mode.NUMERIC:\
        nodes.push([seg,\
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },\
          { data: seg.data, mode: Mode.BYTE, length: seg.length }\
        ])\
        break\
      case Mode.ALPHANUMERIC:\
        nodes.push([seg,\
          { data: seg.data, mode: Mode.BYTE, length: seg.length }\
        ])\
        break\
      case Mode.KANJI:\
        nodes.push([seg,\
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }\
        ])\
        break\
      case Mode.BYTE:\
        nodes.push([\
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }\
        ])\
    }\
  }\
\
  return nodes\
}\
\
/**\
 * Builds a graph from a list of nodes.\
 * All segments in each node group will be connected with all the segments of\
 * the next group and so on.\
 *\
 * At each connection will be assigned a weight depending on the\
 * segment's byte length.\
 *\
 * @param  {Array} nodes    Array of object with segments data\
 * @param  {Number} version QR Code version\
 * @return {Object}         Graph of all possible segments\
 */\
function buildGraph (nodes, version) {\
  var table = {}\
  var graph = {'start': {}}\
  var prevNodeIds = ['start']\
\
  for (var i = 0; i < nodes.length; i++) {\
    var nodeGroup = nodes[i]\
    var currentNodeIds = []\
\
    for (var j = 0; j < nodeGroup.length; j++) {\
      var node = nodeGroup[j]\
      var key = '' + i + j\
\
      currentNodeIds.push(key)\
      table[key] = { node: node, lastCount: 0 }\
      graph[key] = {}\
\
      for (var n = 0; n < prevNodeIds.length; n++) {\
        var prevNodeId = prevNodeIds[n]\
\
        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {\
          graph[prevNodeId][key] =\
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -\
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)\
\
          table[prevNodeId].lastCount += node.length\
        } else {\
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length\
\
          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +\
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost\
        }\
      }\
    }\
\
    prevNodeIds = currentNodeIds\
  }\
\
  for (n = 0; n < prevNodeIds.length; n++) {\
    graph[prevNodeIds[n]]['end'] = 0\
  }\
\
  return { map: graph, table: table }\
}\
\
/**\
 * Builds a segment from a specified data and mode.\
 * If a mode is not specified, the more suitable will be used.\
 *\
 * @param  {String} data             Input data\
 * @param  {Mode | String} modesHint Data mode\
 * @return {Segment}                 Segment\
 */\
function buildSingleSegment (data, modesHint) {\
  var mode\
  var bestMode = Mode.getBestModeForData(data)\
\
  mode = Mode.from(modesHint, bestMode)\
\
  // Make sure data can be encoded\
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {\
    throw new Error('\"' + data + '\"' +\
      ' cannot be encoded with mode ' + Mode.toString(mode) +\
      '.\\\
 Suggested mode is: ' + Mode.toString(bestMode))\
  }\
\
  // Use Mode.BYTE if Kanji support is disabled\
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {\
    mode = Mode.BYTE\
  }\
\
  switch (mode) {\
    case Mode.NUMERIC:\
      return new NumericData(data)\
\
    case Mode.ALPHANUMERIC:\
      return new AlphanumericData(data)\
\
    case Mode.KANJI:\
      return new KanjiData(data)\
\
    case Mode.BYTE:\
      return new ByteData(data)\
  }\
}\
\
/**\
 * Builds a list of segments from an array.\
 * Array can contain Strings or Objects with segment's info.\
 *\
 * For each item which is a string, will be generated a segment with the given\
 * string and the more appropriate encoding mode.\
 *\
 * For each item which is an object, will be generated a segment with the given\
 * data and mode.\
 * Objects must contain at least the property \"data\".\
 * If property \"mode\" is not present, the more suitable mode will be used.\
 *\
 * @param  {Array} array Array of objects with segments data\
 * @return {Array}       Array of Segments\
 */\
exports.fromArray = function fromArray (array) {\
  return array.reduce(function (acc, seg) {\
    if (typeof seg === 'string') {\
      acc.push(buildSingleSegment(seg, null))\
    } else if (seg.data) {\
      acc.push(buildSingleSegment(seg.data, seg.mode))\
    }\
\
    return acc\
  }, [])\
}\
\
/**\
 * Builds an optimized sequence of segments from a string,\
 * which will produce the shortest possible bitstream.\
 *\
 * @param  {String} data    Input string\
 * @param  {Number} version QR Code version\
 * @return {Array}          Array of segments\
 */\
exports.fromString = function fromString (data, version) {\
  var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())\
\
  var nodes = buildNodes(segs)\
  var graph = buildGraph(nodes, version)\
  var path = dijkstra.find_path(graph.map, 'start', 'end')\
\
  var optimizedSegs = []\
  for (var i = 1; i < path.length - 1; i++) {\
    optimizedSegs.push(graph.table[path[i]].node)\
  }\
\
  return exports.fromArray(mergeSegments(optimizedSegs))\
}\
\
/**\
 * Splits a string in various segments with the modes which\
 * best represent their content.\
 * The produced segments are far from being optimized.\
 * The output of this function is only used to estimate a QR Code version\
 * which may contain the data.\
 *\
 * @param  {string} data Input string\
 * @return {Array}       Array of segments\
 */\
exports.rawSplit = function rawSplit (data) {\
  return exports.fromArray(\
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())\
  )\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/segments.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/utils.js":
      /*!***********************************************!*\\
        !*** ./node_modules/qrcode/lib/core/utils.js ***!
        \\***********************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("var toSJISFunction\
var CODEWORDS_COUNT = [\
  0, // Not used\
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,\
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,\
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,\
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706\
]\
\
/**\
 * Returns the QR Code size for the specified version\
 *\
 * @param  {Number} version QR Code version\
 * @return {Number}         size of QR code\
 */\
exports.getSymbolSize = function getSymbolSize (version) {\
  if (!version) throw new Error('\"version\" cannot be null or undefined')\
  if (version < 1 || version > 40) throw new Error('\"version\" should be in range from 1 to 40')\
  return version * 4 + 17\
}\
\
/**\
 * Returns the total number of codewords used to store data and EC information.\
 *\
 * @param  {Number} version QR Code version\
 * @return {Number}         Data length in bits\
 */\
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {\
  return CODEWORDS_COUNT[version]\
}\
\
/**\
 * Encode data with Bose-Chaudhuri-Hocquenghem\
 *\
 * @param  {Number} data Value to encode\
 * @return {Number}      Encoded value\
 */\
exports.getBCHDigit = function (data) {\
  var digit = 0\
\
  while (data !== 0) {\
    digit++\
    data >>>= 1\
  }\
\
  return digit\
}\
\
exports.setToSJISFunction = function setToSJISFunction (f) {\
  if (typeof f !== 'function') {\
    throw new Error('\"toSJISFunc\" is not a valid function.')\
  }\
\
  toSJISFunction = f\
}\
\
exports.isKanjiModeEnabled = function () {\
  return typeof toSJISFunction !== 'undefined'\
}\
\
exports.toSJIS = function toSJIS (kanji) {\
  return toSJISFunction(kanji)\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/utils.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/core/version.js":
      /*!*************************************************!*\\
        !*** ./node_modules/qrcode/lib/core/version.js ***!
        \\*************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Utils = __webpack_require__(/*! ./utils */ \"./node_modules/qrcode/lib/core/utils.js\")\
var ECCode = __webpack_require__(/*! ./error-correction-code */ \"./node_modules/qrcode/lib/core/error-correction-code.js\")\
var ECLevel = __webpack_require__(/*! ./error-correction-level */ \"./node_modules/qrcode/lib/core/error-correction-level.js\")\
var Mode = __webpack_require__(/*! ./mode */ \"./node_modules/qrcode/lib/core/mode.js\")\
var isArray = __webpack_require__(/*! isarray */ \"./node_modules/qrcode/node_modules/isarray/index.js\")\
\
// Generator polynomial used to encode version information\
var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)\
var G18_BCH = Utils.getBCHDigit(G18)\
\
function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {\
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {\
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {\
      return currentVersion\
    }\
  }\
\
  return undefined\
}\
\
function getReservedBitsCount (mode, version) {\
  // Character count indicator + mode indicator bits\
  return Mode.getCharCountIndicator(mode, version) + 4\
}\
\
function getTotalBitsFromDataArray (segments, version) {\
  var totalBits = 0\
\
  segments.forEach(function (data) {\
    var reservedBits = getReservedBitsCount(data.mode, version)\
    totalBits += reservedBits + data.getBitsLength()\
  })\
\
  return totalBits\
}\
\
function getBestVersionForMixedData (segments, errorCorrectionLevel) {\
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {\
    var length = getTotalBitsFromDataArray(segments, currentVersion)\
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {\
      return currentVersion\
    }\
  }\
\
  return undefined\
}\
\
/**\
 * Check if QR Code version is valid\
 *\
 * @param  {Number}  version QR Code version\
 * @return {Boolean}         true if valid version, false otherwise\
 */\
exports.isValid = function isValid (version) {\
  return !isNaN(version) && version >= 1 && version <= 40\
}\
\
/**\
 * Returns version number from a value.\
 * If value is not a valid version, returns defaultValue\
 *\
 * @param  {Number|String} value        QR Code version\
 * @param  {Number}        defaultValue Fallback value\
 * @return {Number}                     QR Code version number\
 */\
exports.from = function from (value, defaultValue) {\
  if (exports.isValid(value)) {\
    return parseInt(value, 10)\
  }\
\
  return defaultValue\
}\
\
/**\
 * Returns how much data can be stored with the specified QR code version\
 * and error correction level\
 *\
 * @param  {Number} version              QR Code version (1-40)\
 * @param  {Number} errorCorrectionLevel Error correction level\
 * @param  {Mode}   mode                 Data mode\
 * @return {Number}                      Quantity of storable data\
 */\
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {\
  if (!exports.isValid(version)) {\
    throw new Error('Invalid QR Code version')\
  }\
\
  // Use Byte mode as default\
  if (typeof mode === 'undefined') mode = Mode.BYTE\
\
  // Total codewords for this QR code version (Data + Error correction)\
  var totalCodewords = Utils.getSymbolTotalCodewords(version)\
\
  // Total number of error correction codewords\
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)\
\
  // Total number of data codewords\
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8\
\
  if (mode === Mode.MIXED) return dataTotalCodewordsBits\
\
  var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)\
\
  // Return max number of storable codewords\
  switch (mode) {\
    case Mode.NUMERIC:\
      return Math.floor((usableBits / 10) * 3)\
\
    case Mode.ALPHANUMERIC:\
      return Math.floor((usableBits / 11) * 2)\
\
    case Mode.KANJI:\
      return Math.floor(usableBits / 13)\
\
    case Mode.BYTE:\
    default:\
      return Math.floor(usableBits / 8)\
  }\
}\
\
/**\
 * Returns the minimum version needed to contain the amount of data\
 *\
 * @param  {Segment} data                    Segment of data\
 * @param  {Number} [errorCorrectionLevel=H] Error correction level\
 * @param  {Mode} mode                       Data mode\
 * @return {Number}                          QR Code version\
 */\
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {\
  var seg\
\
  var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)\
\
  if (isArray(data)) {\
    if (data.length > 1) {\
      return getBestVersionForMixedData(data, ecl)\
    }\
\
    if (data.length === 0) {\
      return 1\
    }\
\
    seg = data[0]\
  } else {\
    seg = data\
  }\
\
  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)\
}\
\
/**\
 * Returns version information with relative error correction bits\
 *\
 * The version information is included in QR Code symbols of version 7 or larger.\
 * It consists of an 18-bit sequence containing 6 data bits,\
 * with 12 error correction bits calculated using the (18, 6) Golay code.\
 *\
 * @param  {Number} version QR Code version\
 * @return {Number}         Encoded version info bits\
 */\
exports.getEncodedBits = function getEncodedBits (version) {\
  if (!exports.isValid(version) || version < 7) {\
    throw new Error('Invalid QR Code version')\
  }\
\
  var d = version << 12\
\
  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {\
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))\
  }\
\
  return (version << 12) | d\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/core/version.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/renderer/canvas.js":
      /*!****************************************************!*\\
        !*** ./node_modules/qrcode/lib/renderer/canvas.js ***!
        \\****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Utils = __webpack_require__(/*! ./utils */ \"./node_modules/qrcode/lib/renderer/utils.js\")\
\
function clearCanvas (ctx, canvas, size) {\
  ctx.clearRect(0, 0, canvas.width, canvas.height)\
\
  if (!canvas.style) canvas.style = {}\
  canvas.height = size\
  canvas.width = size\
  canvas.style.height = size + 'px'\
  canvas.style.width = size + 'px'\
}\
\
function getCanvasElement () {\
  try {\
    return document.createElement('canvas')\
  } catch (e) {\
    throw new Error('You need to specify a canvas element')\
  }\
}\
\
exports.render = function render (qrData, canvas, options) {\
  var opts = options\
  var canvasEl = canvas\
\
  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {\
    opts = canvas\
    canvas = undefined\
  }\
\
  if (!canvas) {\
    canvasEl = getCanvasElement()\
  }\
\
  opts = Utils.getOptions(opts)\
  var size = Utils.getImageWidth(qrData.modules.size, opts)\
\
  var ctx = canvasEl.getContext('2d')\
  var image = ctx.createImageData(size, size)\
  Utils.qrToImageData(image.data, qrData, opts)\
\
  clearCanvas(ctx, canvasEl, size)\
  ctx.putImageData(image, 0, 0)\
\
  return canvasEl\
}\
\
exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {\
  var opts = options\
\
  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {\
    opts = canvas\
    canvas = undefined\
  }\
\
  if (!opts) opts = {}\
\
  var canvasEl = exports.render(qrData, canvas, opts)\
\
  var type = opts.type || 'image/png'\
  var rendererOpts = opts.rendererOpts || {}\
\
  return canvasEl.toDataURL(type, rendererOpts.quality)\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/renderer/canvas.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/renderer/svg-tag.js":
      /*!*****************************************************!*\\
        !*** ./node_modules/qrcode/lib/renderer/svg-tag.js ***!
        \\*****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var Utils = __webpack_require__(/*! ./utils */ \"./node_modules/qrcode/lib/renderer/utils.js\")\
\
function getColorAttrib (color, attrib) {\
  var alpha = color.a / 255\
  var str = attrib + '=\"' + color.hex + '\"'\
\
  return alpha < 1\
    ? str + ' ' + attrib + '-opacity=\"' + alpha.toFixed(2).slice(1) + '\"'\
    : str\
}\
\
function svgCmd (cmd, x, y) {\
  var str = cmd + x\
  if (typeof y !== 'undefined') str += ' ' + y\
\
  return str\
}\
\
function qrToPath (data, size, margin) {\
  var path = ''\
  var moveBy = 0\
  var newRow = false\
  var lineLength = 0\
\
  for (var i = 0; i < data.length; i++) {\
    var col = Math.floor(i % size)\
    var row = Math.floor(i / size)\
\
    if (!col && !newRow) newRow = true\
\
    if (data[i]) {\
      lineLength++\
\
      if (!(i > 0 && col > 0 && data[i - 1])) {\
        path += newRow\
          ? svgCmd('M', col + margin, 0.5 + row + margin)\
          : svgCmd('m', moveBy, 0)\
\
        moveBy = 0\
        newRow = false\
      }\
\
      if (!(col + 1 < size && data[i + 1])) {\
        path += svgCmd('h', lineLength)\
        lineLength = 0\
      }\
    } else {\
      moveBy++\
    }\
  }\
\
  return path\
}\
\
exports.render = function render (qrData, options, cb) {\
  var opts = Utils.getOptions(options)\
  var size = qrData.modules.size\
  var data = qrData.modules.data\
  var qrcodesize = size + opts.margin * 2\
\
  var bg = !opts.color.light.a\
    ? ''\
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +\
      ' d=\"M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z\"/>'\
\
  var path =\
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +\
    ' d=\"' + qrToPath(data, size, opts.margin) + '\"/>'\
\
  var viewBox = 'viewBox=\"' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '\"'\
\
  var width = !opts.width ? '' : 'width=\"' + opts.width + '\" height=\"' + opts.width + '\" '\
\
  var svgTag = '<svg xmlns=\"http://www.w3.org/2000/svg\" ' + width + viewBox + '>' + bg + path + '</svg>'\
\
  if (typeof cb === 'function') {\
    cb(null, svgTag)\
  }\
\
  return svgTag\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/renderer/svg-tag.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/renderer/utils.js":
      /*!***************************************************!*\\
        !*** ./node_modules/qrcode/lib/renderer/utils.js ***!
        \\***************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("function hex2rgba (hex) {\
  if (typeof hex !== 'string') {\
    throw new Error('Color should be defined as hex string')\
  }\
\
  var hexCode = hex.slice().replace('#', '').split('')\
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {\
    throw new Error('Invalid hex color: ' + hex)\
  }\
\
  // Convert from short to long form (fff -> ffffff)\
  if (hexCode.length === 3 || hexCode.length === 4) {\
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {\
      return [c, c]\
    }))\
  }\
\
  // Add default alpha value\
  if (hexCode.length === 6) hexCode.push('F', 'F')\
\
  var hexValue = parseInt(hexCode.join(''), 16)\
\
  return {\
    r: (hexValue >> 24) & 255,\
    g: (hexValue >> 16) & 255,\
    b: (hexValue >> 8) & 255,\
    a: hexValue & 255,\
    hex: '#' + hexCode.slice(0, 6).join('')\
  }\
}\
\
exports.getOptions = function getOptions (options) {\
  if (!options) options = {}\
  if (!options.color) options.color = {}\
\
  var margin = typeof options.margin === 'undefined' ||\
    options.margin === null ||\
    options.margin < 0 ? 4 : options.margin\
\
  var width = options.width && options.width >= 21 ? options.width : undefined\
  var scale = options.scale || 4\
\
  return {\
    width: width,\
    scale: width ? 4 : scale,\
    margin: margin,\
    color: {\
      dark: hex2rgba(options.color.dark || '#000000ff'),\
      light: hex2rgba(options.color.light || '#ffffffff')\
    },\
    type: options.type,\
    rendererOpts: options.rendererOpts || {}\
  }\
}\
\
exports.getScale = function getScale (qrSize, opts) {\
  return opts.width && opts.width >= qrSize + opts.margin * 2\
    ? opts.width / (qrSize + opts.margin * 2)\
    : opts.scale\
}\
\
exports.getImageWidth = function getImageWidth (qrSize, opts) {\
  var scale = exports.getScale(qrSize, opts)\
  return Math.floor((qrSize + opts.margin * 2) * scale)\
}\
\
exports.qrToImageData = function qrToImageData (imgData, qr, opts) {\
  var size = qr.modules.size\
  var data = qr.modules.data\
  var scale = exports.getScale(size, opts)\
  var symbolSize = Math.floor((size + opts.margin * 2) * scale)\
  var scaledMargin = opts.margin * scale\
  var palette = [opts.color.light, opts.color.dark]\
\
  for (var i = 0; i < symbolSize; i++) {\
    for (var j = 0; j < symbolSize; j++) {\
      var posDst = (i * symbolSize + j) * 4\
      var pxColor = opts.color.light\
\
      if (i >= scaledMargin && j >= scaledMargin &&\
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {\
        var iSrc = Math.floor((i - scaledMargin) / scale)\
        var jSrc = Math.floor((j - scaledMargin) / scale)\
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]\
      }\
\
      imgData[posDst++] = pxColor.r\
      imgData[posDst++] = pxColor.g\
      imgData[posDst++] = pxColor.b\
      imgData[posDst] = pxColor.a\
    }\
  }\
}\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/renderer/utils.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/lib/utils/typedarray-buffer.js":
      /*!************************************************************!*\\
        !*** ./node_modules/qrcode/lib/utils/typedarray-buffer.js ***!
        \\************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("/**\
 * Implementation of a subset of node.js Buffer methods for the browser.\
 * Based on https://github.com/feross/buffer\
 */\
\
/* eslint-disable no-proto */\
\
\
\
var isArray = __webpack_require__(/*! isarray */ \"./node_modules/qrcode/node_modules/isarray/index.js\")\
\
function typedArraySupport () {\
  // Can typed array instances be augmented?\
  try {\
    var arr = new Uint8Array(1)\
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}\
    return arr.foo() === 42\
  } catch (e) {\
    return false\
  }\
}\
\
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()\
\
var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT\
    ? 0x7fffffff\
    : 0x3fffffff\
\
function Buffer (arg, offset, length) {\
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {\
    return new Buffer(arg, offset, length)\
  }\
\
  if (typeof arg === 'number') {\
    return allocUnsafe(this, arg)\
  }\
\
  return from(this, arg, offset, length)\
}\
\
if (Buffer.TYPED_ARRAY_SUPPORT) {\
  Buffer.prototype.__proto__ = Uint8Array.prototype\
  Buffer.__proto__ = Uint8Array\
\
  // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97\
  if (typeof Symbol !== 'undefined' && Symbol.species &&\
      Buffer[Symbol.species] === Buffer) {\
    Object.defineProperty(Buffer, Symbol.species, {\
      value: null,\
      configurable: true,\
      enumerable: false,\
      writable: false\
    })\
  }\
}\
\
function checked (length) {\
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when\
  // length is NaN (which is otherwise coerced to zero.)\
  if (length >= K_MAX_LENGTH) {\
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +\
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')\
  }\
  return length | 0\
}\
\
function isnan (val) {\
  return val !== val // eslint-disable-line no-self-compare\
}\
\
function createBuffer (that, length) {\
  var buf\
  if (Buffer.TYPED_ARRAY_SUPPORT) {\
    buf = new Uint8Array(length)\
    buf.__proto__ = Buffer.prototype\
  } else {\
    // Fallback: Return an object instance of the Buffer class\
    buf = that\
    if (buf === null) {\
      buf = new Buffer(length)\
    }\
    buf.length = length\
  }\
\
  return buf\
}\
\
function allocUnsafe (that, size) {\
  var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0)\
\
  if (!Buffer.TYPED_ARRAY_SUPPORT) {\
    for (var i = 0; i < size; ++i) {\
      buf[i] = 0\
    }\
  }\
\
  return buf\
}\
\
function fromString (that, string) {\
  var length = byteLength(string) | 0\
  var buf = createBuffer(that, length)\
\
  var actual = buf.write(string)\
\
  if (actual !== length) {\
    // Writing a hex string, for example, that contains invalid characters will\
    // cause everything after the first invalid character to be ignored. (e.g.\
    // 'abxxcd' will be treated as 'ab')\
    buf = buf.slice(0, actual)\
  }\
\
  return buf\
}\
\
function fromArrayLike (that, array) {\
  var length = array.length < 0 ? 0 : checked(array.length) | 0\
  var buf = createBuffer(that, length)\
  for (var i = 0; i < length; i += 1) {\
    buf[i] = array[i] & 255\
  }\
  return buf\
}\
\
function fromArrayBuffer (that, array, byteOffset, length) {\
  if (byteOffset < 0 || array.byteLength < byteOffset) {\
    throw new RangeError('\\\\'offset\\\\' is out of bounds')\
  }\
\
  if (array.byteLength < byteOffset + (length || 0)) {\
    throw new RangeError('\\\\'length\\\\' is out of bounds')\
  }\
\
  var buf\
  if (byteOffset === undefined && length === undefined) {\
    buf = new Uint8Array(array)\
  } else if (length === undefined) {\
    buf = new Uint8Array(array, byteOffset)\
  } else {\
    buf = new Uint8Array(array, byteOffset, length)\
  }\
\
  if (Buffer.TYPED_ARRAY_SUPPORT) {\
    // Return an augmented `Uint8Array` instance, for best performance\
    buf.__proto__ = Buffer.prototype\
  } else {\
    // Fallback: Return an object instance of the Buffer class\
    buf = fromArrayLike(that, buf)\
  }\
\
  return buf\
}\
\
function fromObject (that, obj) {\
  if (Buffer.isBuffer(obj)) {\
    var len = checked(obj.length) | 0\
    var buf = createBuffer(that, len)\
\
    if (buf.length === 0) {\
      return buf\
    }\
\
    obj.copy(buf, 0, 0, len)\
    return buf\
  }\
\
  if (obj) {\
    if ((typeof ArrayBuffer !== 'undefined' &&\
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {\
      if (typeof obj.length !== 'number' || isnan(obj.length)) {\
        return createBuffer(that, 0)\
      }\
      return fromArrayLike(that, obj)\
    }\
\
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {\
      return fromArrayLike(that, obj.data)\
    }\
  }\
\
  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')\
}\
\
function utf8ToBytes (string, units) {\
  units = units || Infinity\
  var codePoint\
  var length = string.length\
  var leadSurrogate = null\
  var bytes = []\
\
  for (var i = 0; i < length; ++i) {\
    codePoint = string.charCodeAt(i)\
\
    // is surrogate component\
    if (codePoint > 0xD7FF && codePoint < 0xE000) {\
      // last char was a lead\
      if (!leadSurrogate) {\
        // no lead yet\
        if (codePoint > 0xDBFF) {\
          // unexpected trail\
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\
          continue\
        } else if (i + 1 === length) {\
          // unpaired lead\
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\
          continue\
        }\
\
        // valid lead\
        leadSurrogate = codePoint\
\
        continue\
      }\
\
      // 2 leads in a row\
      if (codePoint < 0xDC00) {\
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\
        leadSurrogate = codePoint\
        continue\
      }\
\
      // valid surrogate pair\
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000\
    } else if (leadSurrogate) {\
      // valid bmp char, but last char was a lead\
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\
    }\
\
    leadSurrogate = null\
\
    // encode utf8\
    if (codePoint < 0x80) {\
      if ((units -= 1) < 0) break\
      bytes.push(codePoint)\
    } else if (codePoint < 0x800) {\
      if ((units -= 2) < 0) break\
      bytes.push(\
        codePoint >> 0x6 | 0xC0,\
        codePoint & 0x3F | 0x80\
      )\
    } else if (codePoint < 0x10000) {\
      if ((units -= 3) < 0) break\
      bytes.push(\
        codePoint >> 0xC | 0xE0,\
        codePoint >> 0x6 & 0x3F | 0x80,\
        codePoint & 0x3F | 0x80\
      )\
    } else if (codePoint < 0x110000) {\
      if ((units -= 4) < 0) break\
      bytes.push(\
        codePoint >> 0x12 | 0xF0,\
        codePoint >> 0xC & 0x3F | 0x80,\
        codePoint >> 0x6 & 0x3F | 0x80,\
        codePoint & 0x3F | 0x80\
      )\
    } else {\
      throw new Error('Invalid code point')\
    }\
  }\
\
  return bytes\
}\
\
function byteLength (string) {\
  if (Buffer.isBuffer(string)) {\
    return string.length\
  }\
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&\
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {\
    return string.byteLength\
  }\
  if (typeof string !== 'string') {\
    string = '' + string\
  }\
\
  var len = string.length\
  if (len === 0) return 0\
\
  return utf8ToBytes(string).length\
}\
\
function blitBuffer (src, dst, offset, length) {\
  for (var i = 0; i < length; ++i) {\
    if ((i + offset >= dst.length) || (i >= src.length)) break\
    dst[i + offset] = src[i]\
  }\
  return i\
}\
\
function utf8Write (buf, string, offset, length) {\
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)\
}\
\
function from (that, value, offset, length) {\
  if (typeof value === 'number') {\
    throw new TypeError('\"value\" argument must not be a number')\
  }\
\
  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {\
    return fromArrayBuffer(that, value, offset, length)\
  }\
\
  if (typeof value === 'string') {\
    return fromString(that, value, offset)\
  }\
\
  return fromObject(that, value)\
}\
\
Buffer.prototype.write = function write (string, offset, length) {\
  // Buffer#write(string)\
  if (offset === undefined) {\
    length = this.length\
    offset = 0\
  // Buffer#write(string, encoding)\
  } else if (length === undefined && typeof offset === 'string') {\
    length = this.length\
    offset = 0\
  // Buffer#write(string, offset[, length])\
  } else if (isFinite(offset)) {\
    offset = offset | 0\
    if (isFinite(length)) {\
      length = length | 0\
    } else {\
      length = undefined\
    }\
  }\
\
  var remaining = this.length - offset\
  if (length === undefined || length > remaining) length = remaining\
\
  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {\
    throw new RangeError('Attempt to write outside buffer bounds')\
  }\
\
  return utf8Write(this, string, offset, length)\
}\
\
Buffer.prototype.slice = function slice (start, end) {\
  var len = this.length\
  start = ~~start\
  end = end === undefined ? len : ~~end\
\
  if (start < 0) {\
    start += len\
    if (start < 0) start = 0\
  } else if (start > len) {\
    start = len\
  }\
\
  if (end < 0) {\
    end += len\
    if (end < 0) end = 0\
  } else if (end > len) {\
    end = len\
  }\
\
  if (end < start) end = start\
\
  var newBuf\
  if (Buffer.TYPED_ARRAY_SUPPORT) {\
    newBuf = this.subarray(start, end)\
    // Return an augmented `Uint8Array` instance\
    newBuf.__proto__ = Buffer.prototype\
  } else {\
    var sliceLen = end - start\
    newBuf = new Buffer(sliceLen, undefined)\
    for (var i = 0; i < sliceLen; ++i) {\
      newBuf[i] = this[i + start]\
    }\
  }\
\
  return newBuf\
}\
\
Buffer.prototype.copy = function copy (target, targetStart, start, end) {\
  if (!start) start = 0\
  if (!end && end !== 0) end = this.length\
  if (targetStart >= target.length) targetStart = target.length\
  if (!targetStart) targetStart = 0\
  if (end > 0 && end < start) end = start\
\
  // Copy 0 bytes; we're done\
  if (end === start) return 0\
  if (target.length === 0 || this.length === 0) return 0\
\
  // Fatal error conditions\
  if (targetStart < 0) {\
    throw new RangeError('targetStart out of bounds')\
  }\
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')\
  if (end < 0) throw new RangeError('sourceEnd out of bounds')\
\
  // Are we oob?\
  if (end > this.length) end = this.length\
  if (target.length - targetStart < end - start) {\
    end = target.length - targetStart + start\
  }\
\
  var len = end - start\
  var i\
\
  if (this === target && start < targetStart && targetStart < end) {\
    // descending copy from end\
    for (i = len - 1; i >= 0; --i) {\
      target[i + targetStart] = this[i + start]\
    }\
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {\
    // ascending copy from start\
    for (i = 0; i < len; ++i) {\
      target[i + targetStart] = this[i + start]\
    }\
  } else {\
    Uint8Array.prototype.set.call(\
      target,\
      this.subarray(start, start + len),\
      targetStart\
    )\
  }\
\
  return len\
}\
\
Buffer.prototype.fill = function fill (val, start, end) {\
  // Handle string cases:\
  if (typeof val === 'string') {\
    if (typeof start === 'string') {\
      start = 0\
      end = this.length\
    } else if (typeof end === 'string') {\
      end = this.length\
    }\
    if (val.length === 1) {\
      var code = val.charCodeAt(0)\
      if (code < 256) {\
        val = code\
      }\
    }\
  } else if (typeof val === 'number') {\
    val = val & 255\
  }\
\
  // Invalid ranges are not set to a default, so can range check early.\
  if (start < 0 || this.length < start || this.length < end) {\
    throw new RangeError('Out of range index')\
  }\
\
  if (end <= start) {\
    return this\
  }\
\
  start = start >>> 0\
  end = end === undefined ? this.length : end >>> 0\
\
  if (!val) val = 0\
\
  var i\
  if (typeof val === 'number') {\
    for (i = start; i < end; ++i) {\
      this[i] = val\
    }\
  } else {\
    var bytes = Buffer.isBuffer(val)\
      ? val\
      : new Buffer(val)\
    var len = bytes.length\
    for (i = 0; i < end - start; ++i) {\
      this[i + start] = bytes[i % len]\
    }\
  }\
\
  return this\
}\
\
Buffer.concat = function concat (list, length) {\
  if (!isArray(list)) {\
    throw new TypeError('\"list\" argument must be an Array of Buffers')\
  }\
\
  if (list.length === 0) {\
    return createBuffer(null, 0)\
  }\
\
  var i\
  if (length === undefined) {\
    length = 0\
    for (i = 0; i < list.length; ++i) {\
      length += list[i].length\
    }\
  }\
\
  var buffer = allocUnsafe(null, length)\
  var pos = 0\
  for (i = 0; i < list.length; ++i) {\
    var buf = list[i]\
    if (!Buffer.isBuffer(buf)) {\
      throw new TypeError('\"list\" argument must be an Array of Buffers')\
    }\
    buf.copy(buffer, pos)\
    pos += buf.length\
  }\
  return buffer\
}\
\
Buffer.byteLength = byteLength\
\
Buffer.prototype._isBuffer = true\
Buffer.isBuffer = function isBuffer (b) {\
  return !!(b != null && b._isBuffer)\
}\
\
module.exports = Buffer\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/lib/utils/typedarray-buffer.js?");
        /***/
      },

      /***/
      "./node_modules/qrcode/node_modules/isarray/index.js":
      /*!***********************************************************!*\\
        !*** ./node_modules/qrcode/node_modules/isarray/index.js ***!
        \\***********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("var toString = {}.toString;\
\
module.exports = Array.isArray || function (arr) {\
  return toString.call(arr) == '[object Array]';\
};\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/qrcode/node_modules/isarray/index.js?");
        /***/
      },

      /***/
      "./node_modules/scriptjs/dist/script.js":
      /*!**********************************************!*\\
        !*** ./node_modules/scriptjs/dist/script.js ***!
        \\**********************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\
  * $script.js JS loader & dependency manager\
  * https://github.com/ded/script.js\
  * (c) Dustin Diaz 2014 | License MIT\
  */\
\
(function (name, definition) {\
  if (typeof module != 'undefined' && module.exports) module.exports = definition()\
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\
\\t\\t\\t\\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_FACTORY__),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\
  else {}\
})('$script', function () {\
  var doc = document\
    , head = doc.getElementsByTagName('head')[0]\
    , s = 'string'\
    , f = false\
    , push = 'push'\
    , readyState = 'readyState'\
    , onreadystatechange = 'onreadystatechange'\
    , list = {}\
    , ids = {}\
    , delay = {}\
    , scripts = {}\
    , scriptpath\
    , urlArgs\
\
  function every(ar, fn) {\
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f\
    return 1\
  }\
  function each(ar, fn) {\
    every(ar, function (el) {\
      return !fn(el)\
    })\
  }\
\
  function $script(paths, idOrDone, optDone) {\
    paths = paths[push] ? paths : [paths]\
    var idOrDoneIsDone = idOrDone && idOrDone.call\
      , done = idOrDoneIsDone ? idOrDone : optDone\
      , id = idOrDoneIsDone ? paths.join('') : idOrDone\
      , queue = paths.length\
    function loopFn(item) {\
      return item.call ? item() : list[item]\
    }\
    function callback() {\
      if (!--queue) {\
        list[id] = 1\
        done && done()\
        for (var dset in delay) {\
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])\
        }\
      }\
    }\
    setTimeout(function () {\
      each(paths, function loading(path, force) {\
        if (path === null) return callback()\
        \
        if (!force && !/^https?:\\\\/\\\\//.test(path) && scriptpath) {\
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;\
        }\
        \
        if (scripts[path]) {\
          if (id) ids[id] = 1\
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)\
        }\
\
        scripts[path] = 1\
        if (id) ids[id] = 1\
        create(path, callback)\
      })\
    }, 0)\
    return $script\
  }\
\
  function create(path, fn) {\
    var el = doc.createElement('script'), loaded\
    el.onload = el.onerror = el[onreadystatechange] = function () {\
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;\
      el.onload = el[onreadystatechange] = null\
      loaded = 1\
      scripts[path] = 2\
      fn()\
    }\
    el.async = 1\
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;\
    head.insertBefore(el, head.lastChild)\
  }\
\
  $script.get = create\
\
  $script.order = function (scripts, id, done) {\
    (function callback(s) {\
      s = scripts.shift()\
      !scripts.length ? $script(s, id, done) : $script(s, callback)\
    }())\
  }\
\
  $script.path = function (p) {\
    scriptpath = p\
  }\
  $script.urlArgs = function (str) {\
    urlArgs = str;\
  }\
  $script.ready = function (deps, ready, req) {\
    deps = deps[push] ? deps : [deps]\
    var missing = [];\
    !each(deps, function (dep) {\
      list[dep] || missing[push](dep);\
    }) && every(deps, function (dep) {return list[dep]}) ?\
      ready() : !function (key) {\
      delay[key] = delay[key] || []\
      delay[key][push](ready)\
      req && req(missing)\
    }(deps.join('|'))\
    return $script\
  }\
\
  $script.done = function (idOrDone) {\
    $script([null], idOrDone)\
  }\
\
  return $script\
});\
\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/scriptjs/dist/script.js?");
        /***/
      },

      /***/
      "./node_modules/webpack/buildin/amd-define.js":
      /*!***************************************!*\\
        !*** (webpack)/buildin/amd-define.js ***!
        \\***************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("module.exports = function() {\
\\tthrow new Error(\"define cannot be used indirect\");\
};\
\
\
//# sourceURL=webpack://TX_SHARE/(webpack)/buildin/amd-define.js?");
        /***/
      },

      /***/
      "./node_modules/webpack/buildin/amd-options.js":
      /*!****************************************!*\\
        !*** (webpack)/buildin/amd-options.js ***!
        \\****************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\
module.exports = __webpack_amd_options__;\
\
/* WEBPACK VAR INJECTION */}.call(this, {}))\
\
//# sourceURL=webpack://TX_SHARE/(webpack)/buildin/amd-options.js?");
        /***/
      },

      /***/
      "./node_modules/webpack/buildin/global.js":
      /*!***********************************!*\\
        !*** (webpack)/buildin/global.js ***!
        \\***********************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("var g;\
\
// This works in non-strict mode\
g = (function() {\
\\treturn this;\
})();\
\
try {\
\\t// This works if eval is allowed (see CSP)\
\\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\
} catch (e) {\
\\t// This works if the window reference is available\
\\tif (typeof window === \"object\") g = window;\
}\
\
// g can still be undefined, but nothing to do about it...\
// We return undefined, instead of nothing here, so it's\
// easier to handle this case. if(!global) { ...}\
\
module.exports = g;\
\
\
//# sourceURL=webpack://TX_SHARE/(webpack)/buildin/global.js?");
        /***/
      },

      /***/
      "./node_modules/window-or-global/lib/index.js":
      /*!****************************************************!*\\
        !*** ./node_modules/window-or-global/lib/index.js ***!
        \\****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("/* WEBPACK VAR INJECTION */(function(global) {\
module.exports = (typeof self === 'object' && self.self === self && self) ||\
  (typeof global === 'object' && global.global === global && global) ||\
  this\
\
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\
\
//# sourceURL=webpack://TX_SHARE/./node_modules/window-or-global/lib/index.js?");
        /***/
      },

      /***/
      "./src/index.js":
      /*!**********************!*\\
        !*** ./src/index.js ***!
        \\**********************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\
  if (true) {\
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/core-js/promise */ \"./node_modules/@babel/runtime/core-js/promise.js\"), __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"), __webpack_require__(/*! scriptjs */ \"./node_modules/scriptjs/dist/script.js\"), __webpack_require__(/*! ./util/browser.js */ \"./src/util/browser.js\"), __webpack_require__(/*! ./plugins/qq.js */ \"./src/plugins/qq.js\"), __webpack_require__(/*! ./plugins/qmusic.js */ \"./src/plugins/qmusic.js\"), __webpack_require__(/*! ./plugins/weixin.js */ \"./src/plugins/weixin.js\"), __webpack_require__(/*! ./plugins/qzone.js */ \"./src/plugins/qzone.js\"), __webpack_require__(/*! ./plugins/weishi.js */ \"./src/plugins/weishi.js\"), __webpack_require__(/*! ./plugins/webapi.js */ \"./src/plugins/webapi.js\"), __webpack_require__(/*! ./plugins/theme */ \"./src/plugins/theme.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\
\\t\\t\\t\\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\
  } else { var mod; }\
})(this, function (_exports, _promise, _regenerator, _asyncToGenerator2, _classCallCheck2, _createClass2, _scriptjs, _browser, _qq, _qmusic, _weixin, _qzone, _weishi, _webapi, _theme) {\
  'use strict';\
\
  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\
\
  Object.defineProperty(_exports, \"__esModule\", {\
    value: true\
  });\
  _exports.default = void 0;\
  _promise = _interopRequireDefault(_promise);\
  _regenerator = _interopRequireDefault(_regenerator);\
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);\
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);\
  _createClass2 = _interopRequireDefault(_createClass2);\
  _scriptjs = _interopRequireDefault(_scriptjs);\
  _browser = _interopRequireDefault(_browser);\
  _qq = _interopRequireDefault(_qq);\
  _qmusic = _interopRequireDefault(_qmusic);\
  _weixin = _interopRequireDefault(_weixin);\
  _qzone = _interopRequireDefault(_qzone);\
  _weishi = _interopRequireDefault(_weishi);\
  _webapi = _interopRequireDefault(_webapi);\
  _theme = _interopRequireDefault(_theme);\
\
  /**\
   * @description tx公用的share组件\
   * @method config\
   * @param {Object} [opts]\
   * @param {String} [otps.mountId=''] optional default theme uses body dom to mount\
   * @param {Object} [otps.uiState={}] optional\
   * @param {Object} [otps.mountId={}] optional\
   * @param {Object} [otps.wxConfig={}] optional\
   * @param {Object} [otps.shareInfo=...] please see the default define in the code.\
   * @example 1\
   * Just load the script and then using global variable TX_SHARE to config.\
   * @see following example 2 demo,TX_SHARE behavior is the same with instance of Share.\
   * TX_SHARE.api...\
   * TX_SHARE.ui...\
   * TX_SHARE.shareInfo...\
   * @example 2\
   * import Share from 'tx-share'\
   * const share= new Share()\
   * share.config({shareInfo : { type: 'link' ,base64:'' ,link: '',title: '',imgUrl: '',desc: ''},callback:_=>_,mountId=\"xxxx\",uiState={},wxConfig})\
   * share.api.share2qq()\
   * share.api.share2wx()\
   * share.api.share2weibo()\
   * share.api.share2timeLine()\
   * share.api.share2qz()\
   *\
   * share.ui.update() // you should call update after you set new share info to update the UI.\
   * share.ui.open()\
   * share.ui.close()\
   * if you want to change the behavior of share, inject a plugin to modify anything.\
   * plugin1= master => { master.api={},master.ui={} }\
   * share.use(plugin1,opts)\
   *\
   * @class Share\
   */\
  var Share =\
  /*#__PURE__*/\
  function () {\
    function Share() {\
      (0, _classCallCheck2.default)(this, Share);\
      this.browser = (0, _browser.default)();\
      this.api = {\
        openNativeShare: function openNativeShare(_) {\
          return _;\
        },\
        setShareInfo: function setShareInfo(_) {\
          return _;\
        },\
        share2weibo: function share2weibo(_) {\
          return _;\
        },\
        share2qq: function share2qq(_) {\
          return _;\
        },\
        share2qz: function share2qz(_) {\
          return _;\
        },\
        share2wx: function share2wx(_) {\
          return _;\
        },\
        share2timeLine: function share2timeLine(_) {\
          return _;\
        },\
        initWx: function () {\
          var _initWx = (0, _asyncToGenerator2.default)(\
          /*#__PURE__*/\
          _regenerator.default.mark(function _callee(_) {\
            return _regenerator.default.wrap(function _callee$(_context) {\
              while (1) {\
                switch (_context.prev = _context.next) {\
                  case 0:\
                    return _context.abrupt(\"return\", _);\
\
                  case 1:\
                  case \"end\":\
                    return _context.stop();\
                }\
              }\
            }, _callee, this);\
          }));\
\
          return function initWx(_x) {\
            return _initWx.apply(this, arguments);\
          };\
        }()\
      };\
      this.ui = {};\
    }\
\
    (0, _createClass2.default)(Share, [{\
      key: \"config\",\
      value: function () {\
        var _config = (0, _asyncToGenerator2.default)(\
        /*#__PURE__*/\
        _regenerator.default.mark(function _callee2() {\
          var _ref,\
              _ref$shareInfo,\
              shareInfo,\
              _ref$callback,\
              callback,\
              _ref$uiState,\
              uiState,\
              _ref$wxConfig,\
              wxConfig,\
              _ref$mountId,\
              mountId,\
              _args2 = arguments;\
\
          return _regenerator.default.wrap(function _callee2$(_context2) {\
            while (1) {\
              switch (_context2.prev = _context2.next) {\
                case 0:\
                  _ref = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref$shareInfo = _ref.shareInfo, shareInfo = _ref$shareInfo === void 0 ? {} : _ref$shareInfo, _ref$callback = _ref.callback, callback = _ref$callback === void 0 ? function (_) {\
                    return _;\
                  } : _ref$callback, _ref$uiState = _ref.uiState, uiState = _ref$uiState === void 0 ? null : _ref$uiState, _ref$wxConfig = _ref.wxConfig, wxConfig = _ref$wxConfig === void 0 ? null : _ref$wxConfig, _ref$mountId = _ref.mountId, mountId = _ref$mountId === void 0 ? '' : _ref$mountId;\
                  this.shareInfo = shareInfo;\
                  this.shareCallback = callback;\
                  _context2.next = 5;\
                  return this.use(_theme.default, {\
                    mountId: mountId,\
                    uiState: uiState\
                  });\
\
                case 5:\
                  _context2.next = 7;\
                  return this.use(_webapi.default);\
\
                case 7:\
                  _context2.next = 9;\
                  return this.use(_weixin.default);\
\
                case 9:\
                  _context2.next = 11;\
                  return this.use(_qzone.default);\
\
                case 11:\
                  _context2.next = 13;\
                  return this.use(_weishi.default);\
\
                case 13:\
                  _context2.next = 15;\
                  return this.use(_qmusic.default);\
\
                case 15:\
                  _context2.next = 17;\
                  return this.use(_qq.default);\
\
                case 17:\
                  wxConfig && this.api.initWx(wxConfig);\
                  this.setDefaultShareInfo();\
                  this.ui.update();\
                  return _context2.abrupt(\"return\", this);\
\
                case 21:\
                case \"end\":\
                  return _context2.stop();\
              }\
            }\
          }, _callee2, this);\
        }));\
\
        return function config() {\
          return _config.apply(this, arguments);\
        };\
      }()\
    }, {\
      key: \"setDefaultShareInfo\",\
      value: function setDefaultShareInfo() {\
        var firstImg = document.getElementsByTagName('img')[0];\
        this.shareInfo = this.shareInfo.link ? this.shareInfo : {\
          type: 'link'\
          /**link| base64*/\
          ,\
          base64: ''\
          /**optional only support jpeg or jpg data url*/\
          ,\
          link: window.location.href\
          /** reuqired ,url link*/\
          ,\
          title: document.title,\
          imgUrl: firstImg && firstImg.src,\
          desc: ''\
        };\
        !this.shareInfo.manualSet && this.api.setShareInfo(this.shareInfo, this.shareCallback);\
      }\
    }, {\
      key: \"use\",\
      value: function () {\
        var _use = (0, _asyncToGenerator2.default)(\
        /*#__PURE__*/\
        _regenerator.default.mark(function _callee3(plugins, opts) {\
          return _regenerator.default.wrap(function _callee3$(_context3) {\
            while (1) {\
              switch (_context3.prev = _context3.next) {\
                case 0:\
                  _context3.next = 2;\
                  return plugins(this, opts);\
\
                case 2:\
                case \"end\":\
                  return _context3.stop();\
              }\
            }\
          }, _callee3, this);\
        }));\
\
        return function use(_x2, _x3) {\
          return _use.apply(this, arguments);\
        };\
      }()\
    }, {\
      key: \"load\",\
      value: function load(url) {\
        (0, _scriptjs.default)(url, 'bundle');\
        return new _promise.default(function (res, rej) {\
          return _scriptjs.default.ready('bundle', function (_) {\
            return res(_);\
          });\
        });\
      }\
    }]);\
    return Share;\
  }();\
\
  var _default = Share;\
  _exports.default = _default;\
});\
\
//# sourceURL=webpack://TX_SHARE/./src/index.js?");
        /***/
      },

      /***/
      "./src/plugins/qmusic.js":
      /*!*******************************!*\\
        !*** ./src/plugins/qmusic.js ***!
        \\*******************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\
  if (true) {\
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\"), __webpack_require__(/*! ../util/overWrite */ \"./src/util/overWrite.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\
\\t\\t\\t\\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\
  } else { var mod; }\
})(this, function (_exports, _regenerator, _asyncToGenerator2, _overWrite) {\
  \"use strict\";\
\
  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\
\
  Object.defineProperty(_exports, \"__esModule\", {\
    value: true\
  });\
  _exports.default = void 0;\
  _regenerator = _interopRequireDefault(_regenerator);\
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);\
  _overWrite = _interopRequireDefault(_overWrite);\
\
  /**\
   * @description qqmusic 的browser client或者webview，会自动加载qq music的sdk，然后覆盖master api的分享方法\
   */\
  var _default =\
  /*#__PURE__*/\
  function () {\
    var _ref = (0, _asyncToGenerator2.default)(\
    /*#__PURE__*/\
    _regenerator.default.mark(function _callee(master) {\
      var commonShare;\
      return _regenerator.default.wrap(function _callee$(_context) {\
        while (1) {\
          switch (_context.prev = _context.next) {\
            case 0:\
              if (!master.browser.isQQYY) {\
                _context.next = 7;\
                break;\
              }\
\
              if (window.M) {\
                _context.next = 4;\
                break;\
              }\
\
              _context.next = 4;\
              return master.load('//y.gtimg.cn/music/h5/client/jsbridge.js');\
\
            case 4:\
              master.isSupportBase64 = false;\
\
              commonShare = function commonShare() {\
                return M.client.invoke('other', 'callShareWeb', {\
                  imgUrl: master.shareInfo.imgUrl,\
                  link: master.shareInfo.link,\
                  title: master.shareInfo.title,\
                  desc: master.shareInfo.desc\
                });\
              };\
\
              (0, _overWrite.default)(master.api, {\
                openNativeShare: function openNativeShare(_) {\
                  return commonShare() || true;\
                },\
                setShareInfo: function setShareInfo(s, callback) {\
                  master.shareCallback = callback;\
                  master.shareInfo = s;\
\
                  var initShare = function initShare(data, callback) {\
                    return M.client.invoke('ui', 'setActionBtn', {\
                      type: 'icon',\
                      content: 'share'\
                    }, function (_) {\
                      return M.client.invoke('other', 'callShareWeb', data, callback);\
                    });\
                  };\
\
                  initShare({\
                    imgUrl: master.shareInfo.imgUrl,\
                    link: master.shareInfo.link,\
                    title: master.shareInfo.title,\
                    desc: master.shareInfo.desc\
                  }, function (data) {\
                    return master.shareCallback(data);\
                  });\
                },\
                share2qq: commonShare,\
                share2qz: commonShare,\
                share2wx: commonShare,\
                share2timeLine: commonShare,\
                share2weibo: commonShare\
              });\
\
            case 7:\
            case \"end\":\
              return _context.stop();\
          }\
        }\
      }, _callee, this);\
    }));\
\
    return function (_x) {\
      return _ref.apply(this, arguments);\
    };\
  }();\
\
  _exports.default = _default;\
});\
\
//# sourceURL=webpack://TX_SHARE/./src/plugins/qmusic.js?");
        /***/
      },

      /***/
      "./src/plugins/qq.js":
      /*!***************************!*\\
        !*** ./src/plugins/qq.js ***!
        \\***************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\
  if (true) {\
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\"), __webpack_require__(/*! ../util/overWrite */ \"./src/util/overWrite.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\
\\t\\t\\t\\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\
  } else { var mod; }\
})(this, function (_exports, _regenerator, _asyncToGenerator2, _overWrite) {\
  \"use strict\";\
\
  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\
\
  Object.defineProperty(_exports, \"__esModule\", {\
    value: true\
  });\
  _exports.default = void 0;\
  _regenerator = _interopRequireDefault(_regenerator);\
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);\
  _overWrite = _interopRequireDefault(_overWrite);\
\
  /**\
   * @description qq 的browser client或者webview，会自动加载qq的sdk，然后覆盖master api的分享方法\
   */\
  var _default =\
  /*#__PURE__*/\
  function () {\
    var _ref = (0, _asyncToGenerator2.default)(\
    /*#__PURE__*/\
    _regenerator.default.mark(function _callee(master) {\
      var shareLinkAux, shareImgAux;\
      return _regenerator.default.wrap(function _callee$(_context) {\
        while (1) {\
          switch (_context.prev = _context.next) {\
            case 0:\
              if (!master.browser.isQQ) {\
                _context.next = 8;\
                break;\
              }\
\
              master.isSupportBase64 = true;\
\
              if (window.mqq) {\
                _context.next = 5;\
                break;\
              }\
\
              _context.next = 5;\
              return master.load('//qzonestyle.gtimg.cn/qzone/hybrid/lib/qqapi.js');\
\
            case 5:\
              shareLinkAux = function shareLinkAux(client) {\
                var sinfo = master.shareInfo;\
                window.mqq.ui.shareMessage({\
                  title: sinfo.title,\
                  desc: sinfo.desc,\
                  share_type: client,\
                  share_url: sinfo.link,\
                  image_url: sinfo.imgUrl,\
                  shareElement: sinfo.shareElement || '',\
                  flash_url: sinfo.flash_url || '',\
                  puin: sinfo.puin || '',\
                  appid: sinfo.appid || '',\
                  sourceName: sinfo.sourceName || '',\
                  toUin: sinfo.toUin || ''\
                }, function (data) {\
                  return master.shareCallback(data);\
                });\
              };\
\
              shareImgAux = function shareImgAux(cmd) {\
                return window.mqq.invoke('Qzone', 'sharePicture', {\
                  type: cmd,\
                  base64: master.shareInfo.base64.replace('data:image/jpeg;', 'data:image/jpg;')\
                  /** qq 目前支持jpg的base64 */\
\
                }, function (data) {\
                  return master.shareCallback(data);\
                });\
              };\
\
              (0, _overWrite.default)(master.api, {\
                openNativeShare: function openNativeShare(_) {\
                  return window.mqq.invoke('ui', 'showShareMenu') || true;\
                },\
                setShareInfo: function setShareInfo(s, callback) {\
                  master.shareCallback = callback;\
                  master.shareInfo = s;\
                  window.mqq.invoke('data', 'setShareInfo', {\
                    share_url: master.shareInfo.link,\
                    title: master.shareInfo.title,\
                    desc: master.shareInfo.desc,\
                    image_url: master.shareInfo.imgUrl,\
                    appid: master.shareInfo.appid,\
                    source_name: master.shareInfo.sourceName\
                  }, function (data) {\
                    return master.shareCallback(data);\
                  });\
                },\
                share2qq: function share2qq(_) {\
                  return master.shareInfo.type === 'base64' ? shareImgAux('0') : shareLinkAux(0);\
                },\
                share2qz: function share2qz(_) {\
                  return master.shareInfo.type === 'base64' ? shareImgAux('1') : shareLinkAux(1);\
                },\
                share2wx: function share2wx(_) {\
                  return master.shareInfo.type === 'base64' ? shareImgAux('2') : shareLinkAux(2);\
                },\
                share2timeLine: function share2timeLine(_) {\
                  return master.shareInfo.type === 'base64' ? shareImgAux('3') : shareLinkAux(3);\
                }\
              });\
\
            case 8:\
            case \"end\":\
              return _context.stop();\
          }\
        }\
      }, _callee, this);\
    }));\
\
    return function (_x) {\
      return _ref.apply(this, arguments);\
    };\
  }();\
\
  _exports.default = _default;\
});\
\
//# sourceURL=webpack://TX_SHARE/./src/plugins/qq.js?");
        /***/
      },

      /***/
      "./src/plugins/qzone.js":
      /*!******************************!*\\
        !*** ./src/plugins/qzone.js ***!
        \\******************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\
  if (true) {\
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\"), __webpack_require__(/*! ../util/overWrite */ \"./src/util/overWrite.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\
\\t\\t\\t\\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\
  } else { var mod; }\
})(this, function (_exports, _regenerator, _asyncToGenerator2, _overWrite) {\
  \"use strict\";\
\
  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\
\
  Object.defineProperty(_exports, \"__esModule\", {\
    value: true\
  });\
  _exports.default = void 0;\
  _regenerator = _interopRequireDefault(_regenerator);\
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);\
  _overWrite = _interopRequireDefault(_overWrite);\
\
  /**\
   * @description 如果是qzone 的browser client或者webview，会自动加载qzone的sdk，然后覆盖master api的分享方法\
   */\
  var _default =\
  /*#__PURE__*/\
  function () {\
    var _ref = (0, _asyncToGenerator2.default)(\
    /*#__PURE__*/\
    _regenerator.default.mark(function _callee(master) {\
      var shareLinkAux, shareImgAux;\
      return _regenerator.default.wrap(function _callee$(_context) {\
        while (1) {\
          switch (_context.prev = _context.next) {\
            case 0:\
              if (!master.browser.isQzone) {\
                _context.next = 8;\
                break;\
              }\
\
              master.isSupportBase64 = true;\
\
              if (window.mqq) {\
                _context.next = 5;\
                break;\
              }\
\
              _context.next = 5;\
              return master.load('//qzonestyle.gtimg.cn/qzone/hybrid/lib/jsbridge.js');\
\
            case 5:\
              shareLinkAux = function shareLinkAux(cmd) {\
                var sinfo = master.shareInfo;\
                window.mqq.invoke('share', cmd, {\
                  title: sinfo.title,\
                  imgUrl: sinfo.imgUrl,\
                  link: sinfo.link,\
                  desc: sinfo.desc\
                }, function (data) {\
                  return master.shareCallback(data);\
                });\
              };\
\
              shareImgAux = function shareImgAux(cmd) {\
                return window.mqq.invoke('Qzone', 'sharePicture', {\
                  type: cmd,\
                  base64: master.shareInfo.base64\
                }, function (data) {\
                  return master.shareCallback(data);\
                });\
              };\
\
              (0, _overWrite.default)(master.api, {\
                openNativeShare: function openNativeShare(_) {\
                  return window.mqq.invoke('ui', 'showShareMenu') || true;\
                },\
                setShareInfo: function setShareInfo(s, callback) {\
                  master.shareInfo = s;\
                  master.callback = callback;\
                  window.mqq.invoke('data', 'setShareInfo', {\
                    share_url: master.shareInfo.link,\
                    title: master.shareInfo.title,\
                    desc: master.shareInfo.desc,\
                    image_url: master.shareInfo.imgUrl\
                  }, function (data) {\
                    return master.shareCallback(data);\
                  });\
                },\
                share2qq: function share2qq(_) {\
                  return master.shareInfo.type === 'base64' ? shareImgAux('0') : shareLinkAux('toQQ');\
                },\
                share2qz: function share2qz(_) {\
                  return master.shareInfo.type === 'base64' ? shareImgAux('1') : shareLinkAux('toQz');\
                },\
                share2wx: function share2wx(_) {\
                  return master.shareInfo.type === 'base64' ? shareImgAux('2') : shareLinkAux('toWX');\
                },\
                share2timeLine: function share2timeLine(_) {\
                  return master.shareInfo.type === 'base64' ? shareImgAux('3') : shareLinkAux('toTL');\
                }\
              });\
\
            case 8:\
            case \"end\":\
              return _context.stop();\
          }\
        }\
      }, _callee, this);\
    }));\
\
    return function (_x) {\
      return _ref.apply(this, arguments);\
    };\
  }();\
\
  _exports.default = _default;\
});\
\
//# sourceURL=webpack://TX_SHARE/./src/plugins/qzone.js?");
        /***/
      },

      /***/
      "./src/plugins/theme.js":
      /*!******************************!*\\
        !*** ./src/plugins/theme.js ***!
        \\******************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\
  if (true) {\
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"), __webpack_require__(/*! mustache */ \"./node_modules/mustache/mustache.js\"), __webpack_require__(/*! ../util/toggleClass */ \"./src/util/toggleClass.js\"), __webpack_require__(/*! ../util/uuid */ \"./src/util/uuid.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\
\\t\\t\\t\\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\
  } else { var mod; }\
})(this, function (_exports, _extends2, _classCallCheck2, _createClass2, _mustache, _toggleClass, _uuid) {\
  \"use strict\";\
\
  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\
\
  Object.defineProperty(_exports, \"__esModule\", {\
    value: true\
  });\
  _exports.default = void 0;\
  _extends2 = _interopRequireDefault(_extends2);\
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);\
  _createClass2 = _interopRequireDefault(_createClass2);\
  _mustache = _interopRequireDefault(_mustache);\
  _toggleClass = _interopRequireDefault(_toggleClass);\
  _uuid = _interopRequireDefault(_uuid);\
\
  var _default = function _default(master, opts) {\
    var uuid = (0, _uuid.default)();\
\
    var UI =\
    /*#__PURE__*/\
    function () {\
      function UI(state, mountId) {\
        var themeHtml = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\\\
<link media=\\\\\"all\\\\\" rel=\\\\\"stylesheet\\\\\" href=\\\\\"//qzs.qzone.qq.com/qz-proj/weishi-mobile/mod-pop-share.css\\\\\">\\\
<div class=\\\\\"pop pop-share show\\\\\" id=\\\\\"pop-share-{{uuid}}\\\\\">\\\
    <div class=\\\\\"mod-box\\\\\">\\\
        {{#isPreview}}\\\
        <div class=\\\\\"box-hd\\\\\">\\\
            <h4 class=\\\\\"tit\\\\\">\\\
                {{#shareInfo.link}} {{#isSupportBase64}} {{copy.chooseShare}} {{/isSupportBase64}} {{/shareInfo.link}}\\\
            </h4>\\\
            <button class=\\\\\"btn-close\\\\\">\\\
                <i style=\\\\\"overflow:visible\\\\\" class=\\\\\"icon icon-close icon-share-close\\\\\" id=\\\\\"icon-share-close-{{uuid}}\\\\\"></i>\\\
            </button>\\\
        </div>\\\
        <div class=\\\\\"box-bd\\\\\">\\\
            <ul class=\\\\\"type-list\\\\\">\\\
                {{#isSupportBase64}}\\\
                <li class=\\\\\"type-item {{#type}}act{{/type}}\\\\\" id=\\\\\"tx-share-option-1-{{uuid}}\\\\\">\\\
                    <h5 class=\\\\\"type-tit\\\\\">{{copy.shareImage}}</h5>\\\
                    <div class=\\\\\"share-card-wrap\\\\\">\\\
                        <img src=\\\\\"{{shareInfo.base64}}\\\\\" style=\\\\\"width:100%\\\\\" />\\\
                    </div>\\\
                    {{#shareInfo.link}} {{#isSupportBase64}}\\\
                    <i style=\\\\\"overflow:visible\\\\\" class=\\\\\"icon icon-check\\\\\"></i>\\\
                     {{/isSupportBase64}} {{/shareInfo.link}}\\\
                </li>\\\
                {{/isSupportBase64}}\\\
                {{#shareInfo.link}}\\\
                <li class=\\\\\"type-item      {{#isSupportBase64}}{{^type}}act{{/type}}    {{/isSupportBase64}} \\\\\" id=\\\\\"tx-share-option-2-{{uuid}}\\\\\">\\\
                    <h5 class=\\\\\"type-tit\\\\\">{{copy.shareLink}}</h5>\\\
                    <div class=\\\\\"share-link-wrap\\\\\">\\\
                        <div class=\\\\\"pic\\\\\" style=\\\\\"background-image:url({{shareInfo.imgUrl}})\\\\\"></div>\\\
                        <p class=\\\\\"txt\\\\\">{{shareInfo.desc}}</p>\\\
                    </div>\\\
                    {{#shareInfo.link}} {{#isSupportBase64}}\\\
                    <i style=\\\\\"overflow:visible\\\\\" class=\\\\\"icon icon-check\\\\\"></i>\\\
                    {{/isSupportBase64}} {{/shareInfo.link}}\\\
                </li>\\\
                {{/shareInfo.link}}\\\
            </ul>\\\
        </div>\\\
        {{/isPreview}}\\\
        <div class=\\\\\"box-ft\\\\\">\\\
            <h4 class=\\\\\"tit\\\\\">\\\
                <span>\\\\u5206\\\\u4EAB\\\\u5230</span>\\\
                {{^isPreview}}\\\
                <button class=\\\\\"btn-close\\\\\">\\\
                  <i style=\\\\\"overflow:visible\\\\\" class=\\\\\"icon icon-close icon-share-close\\\\\" id=\\\\\"icon-share-close-{{uuid}}\\\\\"></i>\\\
                </button>\\\
                {{/isPreview}}\\\
            </h4>\\\
            <ul class=\\\\\"share-list\\\\\">\\\
                {{#shareConfig.qq}}\\\
                <li class=\\\\\"share-item\\\\\">\\\
                    <i style=\\\\\"overflow:visible\\\\\" class=\\\\\"icon icon-share-qq\\\\\" id=\\\\\"icon-share-qq-{{uuid}}\\\\\"></i>\\\
                    <span class=\\\\\"txt\\\\\">QQ</span>\\\
                </li>\\\
                {{/shareConfig.qq}}{{#shareConfig.qz}}\\\
                <li class=\\\\\"share-item\\\\\">\\\
                    <i style=\\\\\"overflow:visible\\\\\" class=\\\\\"icon icon-share-qz\\\\\" id=\\\\\"icon-share-qz-{{uuid}}\\\\\"></i>\\\
                    <span class=\\\\\"txt\\\\\">QQ\\\\u7A7A\\\\u95F4</span>\\\
                </li>\\\
                {{/shareConfig.qz}}{{#shareConfig.wx}}\\\
                <li class=\\\\\"share-item\\\\\">\\\
                    <i style=\\\\\"overflow:visible\\\\\" class=\\\\\"icon icon-share-wx\\\\\" id=\\\\\"icon-share-wx-{{uuid}}\\\\\"></i>\\\
                    <span class=\\\\\"txt\\\\\">\\\\u5FAE\\\\u4FE1</span>\\\
                </li>\\\
                {{/shareConfig.wx}} {{#shareConfig.timeLine}}\\\
                <li class=\\\\\"share-item\\\\\">\\\
                    <i style=\\\\\"overflow:visible\\\\\" class=\\\\\"icon icon-share-pyq\\\\\" id=\\\\\"icon-share-pyq-{{uuid}}\\\\\"></i>\\\
                    <span class=\\\\\"txt\\\\\">\\\\u670B\\\\u53CB\\\\u5708</span>\\\
                </li>\\\
                {{/shareConfig.timeLine}}{{#shareConfig.weibo}}\\\
                <li class=\\\\\"share-item\\\\\">\\\
                    <i style=\\\\\"overflow:visible\\\\\" class=\\\\\"icon icon-share-wb\\\\\" id=\\\\\"icon-share-wb-{{uuid}}\\\\\"></i>\\\
                    <span class=\\\\\"txt\\\\\">\\\\u5FAE\\\\u535A</span>\\\
                </li>\\\
                {{/shareConfig.weibo}}\\\
            </ul>\\\
        </div>\\\
    </div>\\\
</div>\";\
        (0, _classCallCheck2.default)(this, UI);\
        var mergeState = (0, _extends2.default)({\
          copy: {\
            chooseShare: '选择分享方式',\
            shareImage: '分享图',\
            shareLink: '分享链接'\
          },\
          uuid: uuid,\
          isPreview: true,\
          isSupportBase64: master.isSupportBase64 && master.shareInfo.base64,\
          shareInfo: master.shareInfo,\
          type: master.shareInfo.type === 'base64',\
          shareConfig: {\
            qq: true,\
            qz: true,\
            wx: true,\
            timeLine: true,\
            weibo: true\
          }\
        }, opts.uiState);\
        this.state = mergeState;\
        this.mountId = opts.mountId || 'tx-share-dom';\
        this.themeHtml = themeHtml;\
        if (!document.getElementById(this.mountId)) this.appendDom();\
        if (!document.getElementById(this.mountId + '-mask')) this.appendMaskDom();\
      }\
\
      (0, _createClass2.default)(UI, [{\
        key: \"renderToHtml\",\
        value: function renderToHtml() {\
          return _mustache.default.render(this.themeHtml, this.state);\
        }\
      }, {\
        key: \"appendMaskDom\",\
        value: function appendMaskDom() {\
          var d = document.createElement('div');\
          d.id = this.mountId + '-mask';\
          d.innerHTML = '<div class=\"mod-tip-mask\" > <div class=\"arrow\"></div> <p class=\"tip\">点击右上角分享给好友</p></div >';\
          d.style.display = 'none';\
          document.body.appendChild(d);\
        }\
      }, {\
        key: \"appendDom\",\
        value: function appendDom() {\
          var d = document.createElement('div');\
          d.id = this.mountId;\
          d.style.display = 'none';\
          document.body.appendChild(d);\
        }\
      }, {\
        key: \"getMountDom\",\
        value: function getMountDom() {\
          var mountId = this.mountId;\
          var mountDom = document.getElementById(mountId);\
\
          if (!mountDom) {\
            ;\
            (console.error || console.log)('MoundID:', mountId, 'is not found!');\
            return null;\
          }\
\
          return mountDom;\
        }\
      }, {\
        key: \"update\",\
        value: function update() {\
          if (!this.getMountDom()) return;\
          this.state.shareInfo = master.shareInfo;\
          this.state.isSupportBase64 = master.isSupportBase64 && master.shareInfo.base64;\
          this.state.type = master.shareInfo.type === 'base64';\
          this.getMountDom().innerHTML = this.renderToHtml();\
          this.afterInstall();\
        }\
      }, {\
        key: \"setState\",\
        value: function setState(s) {\
          this.state = s;\
          this.update();\
        }\
      }, {\
        key: \"openMask\",\
        value: function openMask() {\
          var overMask = document.getElementById('tx-share-dom-mask');\
          overMask.style.display = 'block';\
          overMask.addEventListener('click', function () {\
            return overMask.style.display = 'none';\
          });\
        }\
      }, {\
        key: \"closeMask\",\
        value: function closeMask() {\
          var overMask = document.getElementById('tx-share-dom-mask');\
          overMask.style.display = 'none';\
        }\
      }, {\
        key: \"open\",\
        value: function open() {\
          if (master.browser.isWX) {\
            this.openMask();\
            return;\
          }\
\
          if (!this.getMountDom()) return;\
          this.getMountDom().style.display = 'block';\
        }\
      }, {\
        key: \"close\",\
        value: function close() {\
          if (master.browser.isWX) {\
            this.openMask();\
            return;\
          }\
\
          if (!this.getMountDom()) return;\
          this.getMountDom().style.display = 'none';\
        }\
      }, {\
        key: \"afterInstall\",\
        value: function afterInstall() {\
          var that = this;\
          document.getElementById('icon-share-close-' + uuid).addEventListener('click', function (e) {\
            return that.close(e);\
          });\
          document.getElementById('pop-share-' + uuid).addEventListener('click', function (e) {\
            var target = e.target || e.srcElement;\
\
            if (target === this) {\
              that.close(e);\
            }\
          });\
          that.state.shareConfig.qq && document.getElementById('icon-share-qq-' + uuid).addEventListener('click', function (e) {\
            return master.api.share2qq(e);\
          });\
          that.state.shareConfig.qz && document.getElementById('icon-share-qz-' + uuid).addEventListener('click', function (e) {\
            return master.api.share2qz(e);\
          });\
          that.state.shareConfig.wx && document.getElementById('icon-share-wx-' + uuid).addEventListener('click', function (e) {\
            return master.api.share2wx(e);\
          });\
          that.state.shareConfig.timeLine && document.getElementById('icon-share-pyq-' + uuid).addEventListener('click', function (e) {\
            return master.api.share2timeLine(e);\
          });\
          that.state.shareConfig.weibo && document.getElementById('icon-share-wb-' + uuid).addEventListener('click', function (e) {\
            return master.api.share2weibo(e);\
          });\
          var option1 = document.getElementById('tx-share-option-1-' + uuid);\
          var option2 = document.getElementById('tx-share-option-2-' + uuid);\
          option2 && option2.addEventListener('click', function (e) {\
            master.shareInfo.type = 'link';\
            (0, _toggleClass.default)(option2, 'act');\
            (0, _toggleClass.default)(option1, 'act');\
          });\
          option1 && option1.addEventListener('click', function (e) {\
            master.shareInfo.type = 'base64';\
            (0, _toggleClass.default)(option2, 'act');\
            (0, _toggleClass.default)(option1, 'act');\
          });\
        }\
      }]);\
      return UI;\
    }();\
\
    master.ui = new UI();\
  };\
\
  _exports.default = _default;\
});\
\
//# sourceURL=webpack://TX_SHARE/./src/plugins/theme.js?");
        /***/
      },

      /***/
      "./src/plugins/webapi.js":
      /*!*******************************!*\\
        !*** ./src/plugins/webapi.js ***!
        \\*******************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\
  if (true) {\
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\"), __webpack_require__(/*! ../util/overWrite */ \"./src/util/overWrite.js\"), __webpack_require__(/*! qrcode */ \"./node_modules/qrcode/lib/browser.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\
\\t\\t\\t\\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\
  } else { var mod; }\
})(this, function (_exports, _regenerator, _asyncToGenerator2, _overWrite, _qrcode) {\
  \"use strict\";\
\
  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\
\
  Object.defineProperty(_exports, \"__esModule\", {\
    value: true\
  });\
  _exports.default = void 0;\
  _regenerator = _interopRequireDefault(_regenerator);\
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);\
  _overWrite = _interopRequireDefault(_overWrite);\
  _qrcode = _interopRequireDefault(_qrcode);\
\
  /**\
   * @description 默认的分享方法，都是通过webapi 的方式来分享。\
   */\
  var _default =\
  /*#__PURE__*/\
  function () {\
    var _ref = (0, _asyncToGenerator2.default)(\
    /*#__PURE__*/\
    _regenerator.default.mark(function _callee3(master) {\
      var openit, showQRcode;\
      return _regenerator.default.wrap(function _callee3$(_context3) {\
        while (1) {\
          switch (_context3.prev = _context3.next) {\
            case 0:\
              openit = function openit(u, n, p) {\
                var o = function o(_) {\
                  var z = window.open(u, n, p);\
\
                  if (!z) {\
                    location.href = u;\
                  } else {\
                    z.focus();\
                  }\
                };\
\
                master.browser.mozilla ? setTimeout(o, 0) : o();\
              };\
\
              showQRcode = function showQRcode(t, imgrul) {\
                var dialogContainer = document.createElement('div');\
                var dialog = document.createElement('div');\
                var close = document.createElement('div');\
                var img = document.createElement('img');\
                dialog.style.position = 'absolute';\
                dialog.style.margin = 'auto';\
                dialog.style.left = '50%';\
                dialog.style.top = '50%';\
                dialog.style.transform = 'translate(-50%, -50%)';\
                dialog.style.width = '40vw';\
                dialog.style.height = '40vw';\
                dialog.style.maxWidth = '200px';\
                dialog.style.maxHeight = '200px';\
                dialog.style.backgroundColor = 'red';\
                dialog.style.zIndex = 99999;\
                close.style.position = 'absolute';\
                close.style.right = '-10px';\
                close.style.top = '-10px';\
                close.style.backgroundColor = 'rgba(0,0,0,.8)';\
                close.style.color = 'white';\
                close.style.fontSize = '16px';\
                close.style.padding = '5px 12px';\
                close.style.borderRadius = '50%';\
                close.innerHTML = '<span class=\"_close\">x</span>';\
\
                close.onclick = function (e) {\
                  e.stopPropagation();\
                  e.preventDefault();\
                  t.setAttribute('isShow', '');\
                  document.body.removeChild(dialog);\
                };\
\
                img.src = imgrul;\
                img.crossOrigin = 'Anonymous';\
                img.style.width = '100%';\
                img.style.height = '100%';\
                dialog.appendChild(img);\
                dialog.appendChild(close);\
                document.body.appendChild(dialog);\
              };\
\
              (0, _overWrite.default)(master.api, {\
                openNativeShare: function openNativeShare(_) {\
                  return false;\
                },\
                setShareInfo: function setShareInfo(s) {\
                  return master.shareInfo = s;\
                },\
                share2qq: function share2qq() {\
                  var shareInfo = master.shareInfo;\
                  var w = '//connect.qq.com/widget/shareqq/index.html',\
                      q = ['?url=', encodeURIComponent(shareInfo.link), '&title=', encodeURIComponent(shareInfo.title), '&dec=', encodeURIComponent(shareInfo.desc)].join(''),\
                      p = [w, q].join('');\
                  openit(p, 'qq', 'toolbar=0,status=0,resizable=1,width=440,height=430');\
                  master.shareCallback();\
                },\
                share2weibo: function share2weibo() {\
                  var shareInfo = master.shareInfo;\
                  var w = '//service.weibo.com/share/share.php',\
                      q = ['?url=', encodeURIComponent(shareInfo.link), '&title=', encodeURIComponent(shareInfo.title), '&description=', encodeURIComponent(shareInfo.desc), shareInfo.link, '&content=utf-8', '&pic=', encodeURIComponent(shareInfo.imgUrl)].join(''),\
                      p = [w, q].join('');\
                  openit(p, 'sina', 'toolbar=0,status=0,resizable=1,width=440,height=430');\
                  master.shareCallback();\
                },\
                share2qz: function share2qz() {\
                  var shareInfo = {\
                    url: master.shareInfo.link,\
                    jumpUrl: master.shareInfo.link,\
                    title: master.shareInfo.title,\
                    desc: master.shareInfo.desc,\
                    pic: master.shareInfo.imgUrl\
                  };\
                  var buff = [],\
                      p;\
\
                  for (var k in shareInfo) {\
                    buff.push(k + '=' + encodeURIComponent(shareInfo[k] || ''));\
                  }\
\
                  p = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + buff.join('&');\
                  openit(p, 'qzoneshare', 'width=700, height=480, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no');\
                  master.shareCallback();\
                },\
                share2timeLine: function () {\
                  var _share2timeLine = (0, _asyncToGenerator2.default)(\
                  /*#__PURE__*/\
                  _regenerator.default.mark(function _callee(e) {\
                    var t, shareInfo;\
                    return _regenerator.default.wrap(function _callee$(_context) {\
                      while (1) {\
                        switch (_context.prev = _context.next) {\
                          case 0:\
                            t = e.target || e.srcElement;\
\
                            if (!t.getAttribute('isShow')) {\
                              _context.next = 3;\
                              break;\
                            }\
\
                            return _context.abrupt(\"return\");\
\
                          case 3:\
                            t.setAttribute('isShow', true);\
                            shareInfo = master.shareInfo; // const qrcode = await import('qrcode')\
\
                            _qrcode.default.toDataURL(shareInfo.link, function (err, url) {\
                              showQRcode(t, url);\
                              master.shareCallback();\
                            });\
\
                          case 6:\
                          case \"end\":\
                            return _context.stop();\
                        }\
                      }\
                    }, _callee, this);\
                  }));\
\
                  return function share2timeLine(_x2) {\
                    return _share2timeLine.apply(this, arguments);\
                  };\
                }(),\
                share2wx: function () {\
                  var _share2wx = (0, _asyncToGenerator2.default)(\
                  /*#__PURE__*/\
                  _regenerator.default.mark(function _callee2(e) {\
                    var t, shareInfo;\
                    return _regenerator.default.wrap(function _callee2$(_context2) {\
                      while (1) {\
                        switch (_context2.prev = _context2.next) {\
                          case 0:\
                            t = e.target || e.srcElement;\
\
                            if (!t.getAttribute('isShow')) {\
                              _context2.next = 3;\
                              break;\
                            }\
\
                            return _context2.abrupt(\"return\");\
\
                          case 3:\
                            t.setAttribute('isShow', true);\
                            shareInfo = master.shareInfo; // const qrcode = await import('qrcode')\
\
                            _qrcode.default.toDataURL(shareInfo.link, function (err, url) {\
                              showQRcode(t, url);\
                              master.shareCallback();\
                            });\
\
                          case 6:\
                          case \"end\":\
                            return _context2.stop();\
                        }\
                      }\
                    }, _callee2, this);\
                  }));\
\
                  return function share2wx(_x3) {\
                    return _share2wx.apply(this, arguments);\
                  };\
                }()\
              });\
\
            case 3:\
            case \"end\":\
              return _context3.stop();\
          }\
        }\
      }, _callee3, this);\
    }));\
\
    return function (_x) {\
      return _ref.apply(this, arguments);\
    };\
  }();\
\
  _exports.default = _default;\
});\
\
//# sourceURL=webpack://TX_SHARE/./src/plugins/webapi.js?");
        /***/
      },

      /***/
      "./src/plugins/weishi.js":
      /*!*******************************!*\\
        !*** ./src/plugins/weishi.js ***!
        \\*******************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\
  if (true) {\
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\"), __webpack_require__(/*! ../util/overWrite */ \"./src/util/overWrite.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\
\\t\\t\\t\\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\
  } else { var mod; }\
})(this, function (_exports, _regenerator, _asyncToGenerator2, _overWrite) {\
  \"use strict\";\
\
  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\
\
  Object.defineProperty(_exports, \"__esModule\", {\
    value: true\
  });\
  _exports.default = void 0;\
  _regenerator = _interopRequireDefault(_regenerator);\
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);\
  _overWrite = _interopRequireDefault(_overWrite);\
\
  /**\
   * @description 如果是weishi client或者webview，会自动加载weishi的sdk，然后覆盖master api的分享方法\
   */\
  var _default =\
  /*#__PURE__*/\
  function () {\
    var _ref = (0, _asyncToGenerator2.default)(\
    /*#__PURE__*/\
    _regenerator.default.mark(function _callee(master) {\
      var shareLinkAux, shareImgWxAux, shareImgQQAux;\
      return _regenerator.default.wrap(function _callee$(_context) {\
        while (1) {\
          switch (_context.prev = _context.next) {\
            case 0:\
              if (!master.browser.isWS) {\
                _context.next = 9;\
                break;\
              }\
\
              master.isSupportBase64 = true;\
\
              if (window.mqq) {\
                _context.next = 5;\
                break;\
              }\
\
              _context.next = 5;\
              return master.load('//qzonestyle.gtimg.cn/qzone/hybrid/app/weishi/lib/wsapi.js');\
\
            case 5:\
              shareLinkAux = function shareLinkAux(sinfo, cmd) {\
                window.mqq.invoke('share', cmd, {\
                  type: 'url',\
                  title: sinfo.title,\
                  imgUrl: sinfo.imgUrl,\
                  link: sinfo.link,\
                  desc: sinfo.desc\
                }, function (data) {\
                  return master.shareCallback(data);\
                });\
              };\
\
              shareImgWxAux = function shareImgWxAux(sinfo, cmd) {\
                return window.mqq.invoke('share', cmd, {\
                  type: 'url',\
                  title: sinfo.title,\
                  content: sinfo.base64,\
                  link: sinfo.link,\
                  desc: sinfo.desc\
                }, function (data) {\
                  return master.shareCallback(data);\
                });\
              };\
\
              shareImgQQAux = function shareImgQQAux(sinfo, cmd) {\
                return window.mqq.invoke('share', cmd, {\
                  type: 'image',\
                  content: sinfo.base64,\
                  appName: sinfo.appName || '',\
                  link: sinfo.link,\
                  desc: sinfo.desc\
                }, function (data) {\
                  return master.shareCallback(data);\
                });\
              };\
\
              (0, _overWrite.default)(master.api, {\
                openNativeShare: function openNativeShare(_) {\
                  return window.mqq.invoke('ui', 'showShareMenu') || true;\
                },\
                setShareInfo: function setShareInfo(s, callback) {\
                  master.shareInfo = s;\
                  master.shareCallback = callback;\
                  window.mqq.invoke('data', 'setShareInfo', {\
                    share_url: master.shareInfo.link,\
                    jump_url: master.shareInfo.link,\
                    title: master.shareInfo.title,\
                    weibo_title: master.shareInfo.title,\
                    summary: master.shareInfo.desc,\
                    weibo_summary: master.shareInfo.desc,\
                    desc: master.shareInfo.desc,\
                    image_url: master.shareInfo.imgUrl,\
                    pic_url: master.shareInfo.imgUrl,\
                    weibo_pic_url: master.shareInfo.imgUrl,\
                    source_name: master.shareInfo.sourceName || ''\
                  }, function (data) {\
                    return master.shareCallback(data);\
                  });\
                },\
                share2qq: function share2qq(_) {\
                  return master.shareInfo.type === 'base64' ? shareImgQQAux(master.shareInfo, 'shareQQ') : shareLinkAux(master.shareInfo, 'shareQQ');\
                },\
                share2wx: function share2wx(_) {\
                  return master.shareInfo.type === 'base64' ? shareImgWxAux(master.shareInfo, 'shareAppMessage') : shareLinkAux(master.shareInfo, 'shareAppMessage');\
                },\
                share2qz: function share2qz(_) {\
                  return master.shareInfo.type === 'base64' ? shareImgQQAux(master.shareInfo, 'shareQZone') : shareLinkAux(master.shareInfo, 'shareQZone');\
                },\
                share2timeLine: function share2timeLine(_) {\
                  return master.shareInfo.type === 'base64' ? shareImgWxAux(master.shareInfo, 'shareTimeline') : shareLinkAux(master.shareInfo, 'shareTimeline');\
                }\
              });\
\
            case 9:\
            case \"end\":\
              return _context.stop();\
          }\
        }\
      }, _callee, this);\
    }));\
\
    return function (_x) {\
      return _ref.apply(this, arguments);\
    };\
  }();\
\
  _exports.default = _default;\
});\
\
//# sourceURL=webpack://TX_SHARE/./src/plugins/weishi.js?");
        /***/
      },

      /***/
      "./src/plugins/weixin.js":
      /*!*******************************!*\\
        !*** ./src/plugins/weixin.js ***!
        \\*******************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\
  if (true) {\
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\"), __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\"), __webpack_require__(/*! @babel/runtime/core-js/promise */ \"./node_modules/@babel/runtime/core-js/promise.js\"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\"), __webpack_require__(/*! ../util/overWrite */ \"./src/util/overWrite.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\
\\t\\t\\t\\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\
  } else { var mod; }\
})(this, function (_exports, _regenerator, _typeof2, _promise, _asyncToGenerator2, _overWrite) {\
  \"use strict\";\
\
  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\
\
  Object.defineProperty(_exports, \"__esModule\", {\
    value: true\
  });\
  _exports.default = void 0;\
  _regenerator = _interopRequireDefault(_regenerator);\
  _typeof2 = _interopRequireDefault(_typeof2);\
  _promise = _interopRequireDefault(_promise);\
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);\
  _overWrite = _interopRequireDefault(_overWrite);\
\
  /**\
   * @description 如果是wechat 的browser client或者webview，会自动加载weixin的sdk，然后覆盖master api的分享方法\
   */\
  var _default =\
  /*#__PURE__*/\
  function () {\
    var _ref = (0, _asyncToGenerator2.default)(\
    /*#__PURE__*/\
    _regenerator.default.mark(function _callee3(master) {\
      var loadWxlib, wxjsBridge, common;\
      return _regenerator.default.wrap(function _callee3$(_context3) {\
        while (1) {\
          switch (_context3.prev = _context3.next) {\
            case 0:\
              if (!master.browser.isWX) {\
                _context3.next = 12;\
                break;\
              }\
\
              loadWxlib =\
              /*#__PURE__*/\
              function () {\
                var _ref2 = (0, _asyncToGenerator2.default)(\
                /*#__PURE__*/\
                _regenerator.default.mark(function _callee() {\
                  return _regenerator.default.wrap(function _callee$(_context) {\
                    while (1) {\
                      switch (_context.prev = _context.next) {\
                        case 0:\
                          if (!(\"function\" == \"function\" && (__webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\") || __webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\").cmd) && seajs)) {\
                            _context.next = 4;\
                            break;\
                          }\
\
                          return _context.abrupt(\"return\", new _promise.default(function (res, rej) {\
                            seajs.use('//res.wx.qq.com/open/js/jweixin-1.0.0.js', function (wx) {\
                              res(wx);\
                              window.wx = wx;\
                            });\
                          }));\
\
                        case 4:\
                          return _context.abrupt(\"return\", master.load('//res.wx.qq.com/open/js/jweixin-1.0.0.js'));\
\
                        case 5:\
                        case \"end\":\
                          return _context.stop();\
                      }\
                    }\
                  }, _callee, this);\
                }));\
\
                return function loadWxlib() {\
                  return _ref2.apply(this, arguments);\
                };\
              }();\
\
              master.isSupportBase64 = false;\
              /** 兼容旧版本的微信 */\
\
              _context3.next = 5;\
              return new _promise.default(function (res, rej) {\
                if ((0, _typeof2.default)(window.WeixinJSBridge) === 'object' && typeof window.WeixinJSBridge.invoke === 'function') {\
                  res(window.WeixinJSBridge);\
                }\
\
                if (document.addEventListener) {\
                  document.addEventListener('window.WeixinJSBridgeReady', res(window.WeixinJSBridge), false);\
                } else if (document.attachEvent) {\
                  document.attachEvent('window.WeixinJSBridgeReady', res(window.WeixinJSBridge));\
                  document.attachEvent('onwindow.WeixinJSBridgeReady', res(window.WeixinJSBridge));\
                }\
\
                setTimeout(function () {\
                  return res(null);\
                }, 20);\
              });\
\
            case 5:\
              wxjsBridge = _context3.sent;\
\
              if (wxjsBridge) {\
                (0, _overWrite.default)(master.api, {\
                  share2wx: function share2wx(_) {\
                    window.WeixinJSBridge.invoke('sendAppMessage', master.shareInfo, function (_) {\
                      return master.shareCallback(_);\
                    });\
                  },\
                  share2timeLine: function share2timeLine(_) {\
                    window.WeixinJSBridge.invoke('shareTimeline', master.shareInfo, function (_) {\
                      return master.shareCallback(_);\
                    });\
                  },\
                  share2weibo: function share2weibo() {\
                    window.WeixinJSBridge.invoke('shareWeibo', {\
                      content: master.shareInfo.title + ' \\\
 ' + master.shareInfo.desc + ' \\\
 ' + master.shareInfo.link,\
                      url: data.link\
                    }, function (res) {});\
                  }\
                });\
              }\
\
              _context3.next = 9;\
              return loadWxlib();\
\
            case 9:\
              common = function common(s, callback) {\
                master.shareInfo = s;\
                master.shareCallback = callback;\
                var wsinfo = {\
                  title: master.shareInfo.title,\
                  desc: master.shareInfo.desc,\
                  link: master.shareInfo.link,\
                  imgUrl: master.shareInfo.imgUrl,\
                  // type: master.shareInfo.contentType,\
                  // dataUrl: master.shareInfo.dataUrl || '',\
                  success: function success(_) {\
                    return master.shareCallback(_);\
                  },\
                  cancel: function cancel(_) {\
                    return master.shareCallback(_);\
                  }\
                };\
                wx.onMenuShareAppMessage(wsinfo);\
                wx.onMenuShareQZone(wsinfo);\
                wx.onMenuShareQQ(wsinfo);\
                wx.onMenuShareAppMessage(wsinfo);\
                wx.onMenuShareTimeline(wsinfo);\
                wx.onMenuShareWeibo(wsinfo);\
              };\
\
              (0, _overWrite.default)(master.ui, {\
                open: master.ui.openMask,\
                close: master.ui.closeMask\
              });\
              (0, _overWrite.default)(master.api, {\
                initWx: function () {\
                  var _initWx = (0, _asyncToGenerator2.default)(\
                  /*#__PURE__*/\
                  _regenerator.default.mark(function _callee2(opts) {\
                    var wx;\
                    return _regenerator.default.wrap(function _callee2$(_context2) {\
                      while (1) {\
                        switch (_context2.prev = _context2.next) {\
                          case 0:\
                            wx = window.wx;\
                            wx.config({\
                              debug: opts.debug,\
                              // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。\
                              appId: opts.appId,\
                              // 必填，公众号的唯一标识\
                              timestamp: opts.timestamp,\
                              // 必填，生成签名的时间戳\
                              nonceStr: opts.nonceStr,\
                              // 必填，生成签名的随机串\
                              signature: opts.signature,\
                              // 必填，签名，见附录1\
                              jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'showOptionMenu', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem']\
                            });\
                            _context2.next = 4;\
                            return new _promise.default(function (res, rej) {\
                              wx.ready(function () {\
                                common(master.shareInfo, master.shareCallback);\
                                (0, _overWrite.default)(master.api, {\
                                  openNativeShare: function openNativeShare(_) {\
                                    return wx.showMenuItems({\
                                      menuList: ['menuItem:share:appMessage', 'menuItem:share:timeline', 'menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:favorite', 'menuItem:share:facebook', 'menuItem: share: QZone']\
                                    }) || true;\
                                  },\
                                  setShareInfo: common\
                                });\
                                res(true);\
                                setTimeout(function () {\
                                  return rej(false);\
                                }, 300);\
                              });\
                            });\
\
                          case 4:\
                          case \"end\":\
                            return _context2.stop();\
                        }\
                      }\
                    }, _callee2, this);\
                  }));\
\
                  return function initWx(_x2) {\
                    return _initWx.apply(this, arguments);\
                  };\
                }()\
              });\
\
            case 12:\
            case \"end\":\
              return _context3.stop();\
          }\
        }\
      }, _callee3, this);\
    }));\
\
    return function (_x) {\
      return _ref.apply(this, arguments);\
    };\
  }();\
\
  _exports.default = _default;\
});\
\
//# sourceURL=webpack://TX_SHARE/./src/plugins/weixin.js?");
        /***/
      },

      /***/
      "./src/util/browser.js":
      /*!*****************************!*\\
        !*** ./src/util/browser.js ***!
        \\*****************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\
  if (true) {\
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\
\\t\\t\\t\\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\
  } else { var mod; }\
})(this, function (_exports) {\
  \"use strict\";\
\
  Object.defineProperty(_exports, \"__esModule\", {\
    value: true\
  });\
  _exports.default = void 0;\
\
  var _default = function _default() {\
    var ua = navigator.userAgent || '';\
    var iPad = ua.match(/(iPad).*OS\\\\s([\\\\d_]+)/),\
        iPhone = !iPad && ua.match(/(iPhone\\\\sOS)\\\\s([\\\\d_]+)/),\
        iPod = ua.match(/(iPod).*OS\\\\s([\\\\d_]+)/),\
        android = ua.match(/(Android)\\\\s+([\\\\d.]+)/) || ua.match(/Android/),\
        wp = ua.match(/Windows Phone ([\\\\d.]+)/),\
        isMobile = iPad || iPhone || iPad || wp || android;\
    var isWX = ua.match(/MicroMessenger\\\\/([\\\\d\\\\.]+)/),\
        //微信\
    isQQ = ua.match(/QQ\\\\/([\\\\d\\\\.]+)/),\
        //手Q\
    isQzone = ua.match('Qzone'),\
        //手空\
    isQQBrowser = ua.match('MQQBrowser'),\
        //qq浏览器\
    isFM = ua.match('_FM_'),\
        //企鹅FM\
    isQQYY = ua.match('QQMusic'),\
        // qqmusic\
    isWS = ua.match('_WEISHI_'),\
        //微视\
    isPITU = ua.match('_PITU_'); //天天P图，不然就被误认为QQ浏览器了\
\
    var client = 'other';\
\
    if (isQQ) {\
      client = 'qq';\
    } else if (isQzone) {\
      client = 'qzone';\
    } else if (isWX) {\
      client = 'wx';\
    } else if (isFM) {\
      client = 'fm';\
    } else if (isWS) {\
      client = 'ws';\
    } else if (isPITU) {\
      client = 'ttpic';\
    } else if (isQQBrowser) {\
      client = 'QQBrowser';\
    }\
\
    var quaString = ua.match(/Qzone\\\\/[^ ]*/) && ua.match(/Qzone\\\\/[^ ]*/)[0] || '';\
\
    if (quaString && quaString != '') {\
      quaString = quaString.replace('Qzone/', '');\
    } //手Q也来一发\
\
\
    if (!quaString || quaString == '') {\
      //手Q android userua\
      //Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; MI NOTE LTE Build/KTU84P) AppleWebKit/533.1 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.4 TBS/025489 Mobile Safari/533.1 V1_AND_SQ_6.2.1_334_YYB_D QQ/6.2.1.2690 NetType/WIFI WebP/0.3.0 Pixel/1080\
      //手Q ios userua\
      //user-ua: Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13D15 QQ/6.2.2.402 Pixel/750 NetType/WIFI Mem/51\
      //需要输出成V1_IPH_SQ_6.2.2_1_APP_A\
      //先把android的搞出来\
      var qqQuaReg = /(V\\\\S+_\\\\S+_\\\\S+_\\\\S+_\\\\S+_\\\\S+_\\\\S+)/;\
      quaString = ua.match(qqQuaReg) && ua.match(qqQuaReg)[1] || '';\
\
      if (!quaString || quaString == '') {\
        //再把ios的qq版本号转换出来\
        quaString = ua.match(/QQ\\\\/[^ ]*/) && ua.match(/QQ\\\\/[^ ]*/)[0] || '';\
\
        if (quaString && quaString != '') {\
          quaString = quaString.replace('QQ/', '');\
          var quaArr = quaString.split('.');\
\
          if (quaArr && quaArr.length == 4) {\
            quaString = 'V1_IPH_SQ_' + quaArr[0] + '.' + quaArr[1] + '.' + quaArr[2] + '_1_APP_A';\
          } else {\
            quaString = '';\
          }\
        }\
      }\
    }\
\
    var msie, version, mozilla, webkit, opera, m;\
\
    if (window.ActiveXObject || window.msIsStaticHTML) {\
      msie = true;\
      (window.XMLHttpRequest || ua.indexOf('MSIE 7.0') > -1) && (version = 7);\
      (window.XDomainRequest || ua.indexOf('Trident/4.0') > -1) && (version = 8);\
      ua.indexOf('Trident/5.0') > -1 && (version = 9);\
      ua.indexOf('Trident/6.0') > -1 && (version = 10);\
      ua.indexOf('Trident/7.0') > -1 && (version = 11);\
    } else if (document.getBoxObjectFor || typeof window.mozInnerScreenX != 'undefined') {\
      r = /(?:Firefox|GranParadiso|Iceweasel|Minefield).(\\\\d+\\\\.\\\\d+)/i;\
      mozilla = true;\
      version = parseFloat((r.exec(ua) || r.exec('Firefox/3.3'))[1], 10);\
    } else if (!navigator.taintEnabled) {\
      webkit = true;\
      m = /AppleWebKit.(\\\\d+\\\\.\\\\d+)/i.exec(ua);\
      version = m ? parseFloat(m[1], 10) : document.evalbrowserte ? document.querySelector ? 525 : 420 : 419;\
    } else if (window.opera) {\
      opera = true;\
      version = parseFloat(window.opera.version(), 10);\
    }\
\
    return {\
      os: {\
        iPad: iPad,\
        iPhone: iPhone,\
        android: android,\
        wp: wp\
      },\
      client: client,\
      isMobile: isMobile,\
      isWX: isWX,\
      isQzone: isQzone,\
      isQQ: isQQ,\
      isQQYY: isQQYY,\
      isFM: isFM,\
      isWS: isWS,\
      isPITU: isPITU,\
      isQQBrowser: isQQBrowser,\
      msie: msie,\
      version: version,\
      mozilla: mozilla,\
      webkit: webkit,\
      opera: opera,\
      quaString: quaString\
    };\
  };\
\
  _exports.default = _default;\
});\
\
//# sourceURL=webpack://TX_SHARE/./src/util/browser.js?");
        /***/
      },

      /***/
      "./src/util/overWrite.js":
      /*!*******************************!*\\
        !*** ./src/util/overWrite.js ***!
        \\*******************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\
  if (true) {\
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\
\\t\\t\\t\\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\
  } else { var mod; }\
})(this, function (_exports) {\
  \"use strict\";\
\
  Object.defineProperty(_exports, \"__esModule\", {\
    value: true\
  });\
  _exports.default = void 0;\
\
  var _default = function _default(obj, newObj) {\
    for (var t in newObj) {\
      if (newObj[t] !== undefined) {\
        obj[t] = newObj[t];\
      }\
    }\
  };\
\
  _exports.default = _default;\
});\
\
//# sourceURL=webpack://TX_SHARE/./src/util/overWrite.js?");
        /***/
      },

      /***/
      "./src/util/toggleClass.js":
      /*!*********************************!*\\
        !*** ./src/util/toggleClass.js ***!
        \\*********************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\
  if (true) {\
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\
\\t\\t\\t\\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\
  } else { var mod; }\
})(this, function (_exports) {\
  \"use strict\";\
\
  Object.defineProperty(_exports, \"__esModule\", {\
    value: true\
  });\
  _exports.default = toggleClass;\
\
  function toggleClass(element, className) {\
    if (!element || !className) {\
      return;\
    }\
\
    var classString = element.className,\
        nameIndex = classString.indexOf(className);\
\
    if (nameIndex == -1) {\
      classString += ' ' + className;\
    } else {\
      classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);\
    }\
\
    element.className = classString;\
  }\
});\
\
//# sourceURL=webpack://TX_SHARE/./src/util/toggleClass.js?");
        /***/
      },

      /***/
      "./src/util/uuid.js":
      /*!**************************!*\\
        !*** ./src/util/uuid.js ***!
        \\**************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\
  if (true) {\
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\
\\t\\t\\t\\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\
\\t\\t\\t\\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\
  } else { var mod; }\
})(this, function (_exports) {\
  \"use strict\";\
\
  Object.defineProperty(_exports, \"__esModule\", {\
    value: true\
  });\
  _exports.default = guid;\
\
  function guid() {\
    function s4() {\
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);\
    }\
\
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();\
  }\
});\
\
//# sourceURL=webpack://TX_SHARE/./src/util/uuid.js?");
        /***/
      }
      /******/

    })["default"]
  );
});

/***/ })

};;
//# sourceMappingURL=vendors~share.bundle.js.map",
 "server.bundle.js": "module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ \t// The module cache
/******/ \tvar installedModules = {};
/******/
/******/ \t// object to store loaded chunks
/******/ \t// "0" means "already loaded"
/******/ \tvar installedChunks = {
/******/ \t\t1: 0
/******/ \t};
/******/
/******/ \t// object to store loaded and loading wasm modules
/******/ \tvar installedWasmModules = {};
/******/
/******/ \t// The require function
/******/ \tfunction __webpack_require__(moduleId) {
/******/
/******/ \t\t// Check if module is in cache
/******/ \t\tif(installedModules[moduleId]) {
/******/ \t\t\treturn installedModules[moduleId].exports;
/******/ \t\t}
/******/ \t\t// Create a new module (and put it into the cache)
/******/ \t\tvar module = installedModules[moduleId] = {
/******/ \t\t\ti: moduleId,
/******/ \t\t\tl: false,
/******/ \t\t\texports: {}
/******/ \t\t};
/******/
/******/ \t\t// Execute the module function
/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ \t\t// Flag the module as loaded
/******/ \t\tmodule.l = true;
/******/
/******/ \t\t// Return the exports of the module
/******/ \t\treturn module.exports;
/******/ \t}
/******/
/******/ \t// This file contains only the entry chunk.
/******/ \t// The chunk loading function for additional chunks
/******/ \t__webpack_require__.e = function requireEnsure(chunkId) {
/******/ \t\tvar promises = [];
/******/
/******/
/******/ \t\t// require() chunk loading for javascript
/******/
/******/ \t\t// "0" is the signal for "already loaded"
/******/ \t\tif(installedChunks[chunkId] !== 0) {
/******/ \t\t\tvar chunk = require("./" + ({"0":"vendors~share"}[chunkId]||chunkId) + ".bundle.js");
/******/ \t\t\tvar moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ \t\t\tfor(var moduleId in moreModules) {
/******/ \t\t\t\tmodules[moduleId] = moreModules[moduleId];
/******/ \t\t\t}
/******/ \t\t\tfor(var i = 0; i < chunkIds.length; i++)
/******/ \t\t\t\tinstalledChunks[chunkIds[i]] = 0;
/******/ \t\t}
/******/ \t\treturn Promise.all(promises);
/******/ \t};
/******/
/******/ \t// expose the modules object (__webpack_modules__)
/******/ \t__webpack_require__.m = modules;
/******/
/******/ \t// expose the module cache
/******/ \t__webpack_require__.c = installedModules;
/******/
/******/ \t// define getter function for harmony exports
/******/ \t__webpack_require__.d = function(exports, name, getter) {
/******/ \t\tif(!__webpack_require__.o(exports, name)) {
/******/ \t\t\tObject.defineProperty(exports, name, {
/******/ \t\t\t\tconfigurable: false,
/******/ \t\t\t\tenumerable: true,
/******/ \t\t\t\tget: getter
/******/ \t\t\t});
/******/ \t\t}
/******/ \t};
/******/
/******/ \t// define __esModule on exports
/******/ \t__webpack_require__.r = function(exports) {
/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });
/******/ \t};
/******/
/******/ \t// getDefaultExport function for compatibility with non-harmony modules
/******/ \t__webpack_require__.n = function(module) {
/******/ \t\tvar getter = module && module.__esModule ?
/******/ \t\t\tfunction getDefault() { return module['default']; } :
/******/ \t\t\tfunction getModuleExports() { return module; };
/******/ \t\t__webpack_require__.d(getter, 'a', getter);
/******/ \t\treturn getter;
/******/ \t};
/******/
/******/ \t// Object.prototype.hasOwnProperty.call
/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ \t// __webpack_public_path__
/******/ \t__webpack_require__.p = "";
/******/
/******/ \t// uncaught error handler for webpack runtime
/******/ \t__webpack_require__.oe = function(err) {
/******/ \t\tprocess.nextTick(function() {
/******/ \t\t\tthrow err; // catch this error by using import().catch()
/******/ \t\t});
/******/ \t};
/******/
/******/ \t// object with all compiled WebAssembly.Modules
/******/ \t__webpack_require__.w = {};
/******/
/******/
/******/ \t// Load entry module and return exports
/******/ \treturn __webpack_require__(__webpack_require__.s = "3c3c513c0bde5f841628");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0deac0a26c0d846d7869":
/***/ (function(module, exports) {

module.exports = require("hybrid/node_modules/qz");

/***/ }),

/***/ "33a202e5454f63bdca61":
/***/ (function(module, exports) {

module.exports = require("node-webpack/runtime/requestModel/dev/sync.bundle");

/***/ }),

/***/ "3c3c513c0bde5f841628":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var api_namespaceObject = {};
__webpack_require__.d(api_namespaceObject, "getData", function() { return getData; });
__webpack_require__.d(api_namespaceObject, "getFollowStatus", function() { return getFollowStatus; });
__webpack_require__.d(api_namespaceObject, "getWeixinAuth", function() { return getWeixinAuth; });
__webpack_require__.d(api_namespaceObject, "getFeedById", function() { return getFeedById; });
__webpack_require__.d(api_namespaceObject, "getProfileById", function() { return getProfileById; });
__webpack_require__.d(api_namespaceObject, "errorCodeMap", function() { return errorCodeMap; });

// EXTERNAL MODULE: external "node-webpack/runtime/vue"
var vue_ = __webpack_require__("564382267519ae7fa9d8");
var vue_default = /*#__PURE__*/__webpack_require__.n(vue_);

// EXTERNAL MODULE: external "node-webpack/runtime/vuex"
var vuex_ = __webpack_require__("89016d801741250312fc");
var vuex_default = /*#__PURE__*/__webpack_require__.n(vuex_);

// EXTERNAL MODULE: external "hybrid/node_modules/qz"
var qz_ = __webpack_require__("0deac0a26c0d846d7869");
var qz_default = /*#__PURE__*/__webpack_require__.n(qz_);

// CONCATENATED MODULE: ./hybrid/app/weishi/wact/pages/profess/src/store.js



vue_default.a.use(vuex_default.a);
function createStore() {
  return new vuex_default.a.Store({
    state: {
      data: {},
      sharedStar: {},
      pageContext: {},
      followStatus: {}
    },
    mutations: {
      setPageData(state, {
        data,
        baseInfo
      }) {
        state.pageContext = baseInfo;
        state.data = data;
      },

      setFollowStatus(state, followStatus) {
        state.followStatus = Object.assign(state.followStatus, followStatus);
      }

    },
    actions: {}
  });
}
// CONCATENATED MODULE: ./node-webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node-webpack/node_modules/vue-loader/lib??vue-loader-options!./hybrid/app/weishi/wact/pages/profess/src/App.vue?vue&type=template&id=2089401e
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"report",rawName:"v-report",value:({type:'read',tag:'pv'}),expression:"{type:'read',tag:'pv'}"}],staticClass:"page-act-court ",class:{'out-app':!_vm.isWs},attrs:{"id":"app"}},[_vm._ssrNode("<header class=\"layout-hd\"><h1 aria-label=\"跟她表白吧\" class=\"title\"></h1></header> "),_vm._ssrNode("<section class=\"layout-bd\">","</section>",[_c('Coverflow',{attrs:{"list":_vm.list,"curInit":_vm.pageContext.cur,"isUsingSwipping":_vm.isUsingSwipping,"afterHook":_vm.slideChanged},scopedSlots:_vm._u([{key:"list",fn:function(sp){return _vm._l((sp.list),function(v,i){return _c('li',{key:'__star__'+i,staticClass:"star-i",class:{cur:i===sp.cur}},[(_vm.showDetail(sp.length,sp.cur,i))?_c('section',{staticClass:"inner",style:(("background-image:url(" + (v.starAvatar) + ")"))},[_c('div',{staticClass:"mod-figure"},[_c('div',{staticClass:"figure-txt"},[_c('p',{staticClass:"name"}),_vm._v(" "),_c('p',{staticClass:"info"})]),_vm._v(" "),(_vm.followStatus[v.starId+'']!==1)?_c('div',{directives:[{name:"report",rawName:"v-report.click",value:({type:'click',tag:'follow',params:{starId:v.starId}}),expression:"{type:'click',tag:'follow',params:{starId:v.starId}}",modifiers:{"click":true}}],staticClass:"figure-act",on:{"click":function (e){ return _vm._follow(e,v.starId); }}},[_c('button',{staticClass:"btn btn-follow ",class:{act: _vm.followButton[v.starId+'']}})]):_vm._e()]),_vm._v(" "),_c('ul',{staticClass:"video"},_vm._l((v.videoList),function(io,ii){return _c('li',{key:'video__i__'+ii+'__',staticClass:"video-i"},[_c('section',{directives:[{name:"report",rawName:"v-report.click",value:({type:'read',tag:'video',params:{starId:v.starId,feedId:io.videoId}}),expression:"{type:'read',tag:'video',params:{starId:v.starId,feedId:io.videoId}}",modifiers:{"click":true}}],staticClass:"poster trblBor ",style:(("background-image:url(" + (io.videoCover) + ")")),on:{"click":function($event){_vm.showVideo(io.videoId,io.videoCover)}}},[_c('i',{staticClass:"icon icon-play "})])])}))]):_vm._e()])})}}])}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"btn-group\">","</section>",[_c('button',{directives:[{name:"report",rawName:"v-report.click",value:({type:'read',tag:'confess',params:{starId:_vm.list[this.cur]['starId']}} ),expression:"{type:'read',tag:'confess',params:{starId:list[this.cur]['starId']}} ",modifiers:{"click":true}}],staticClass:"btn btn-nor",staticStyle:{"background-color":"white"},on:{"click":function($event){_vm.confess()}}},[_vm._ssrNode("<span>向她表白</span>")]),_vm._ssrNode(" "),_c('button',{directives:[{name:"report",rawName:"v-report.click",value:({type:'read',tag:'share',params:{starId:_vm.list[this.cur]['starId']}} ),expression:"{type:'read',tag:'share',params:{starId:list[this.cur]['starId']}} ",modifiers:{"click":true}}],staticClass:"btn btn-nor",staticStyle:{"background-color":"white"},on:{"click":_vm.openShare}},[_vm._ssrNode("<span>帮她脱单</span>")])],2)],2),_vm._ssrNode(" <section aria-hidden=\"true\" class=\"layout-ft\"><div class=\"rule-wrap\">"+(_vm._s(_vm.rules))+"</div> <b class=\"brand\"></b></section> "),(_vm.reportAux)?_c('div',{directives:[{name:"report",rawName:"v-report",value:({type:'read',tag:'share2',params:{starId:_vm.list[this.cur]['starId']}} ),expression:"{type:'read',tag:'share2',params:{starId:list[this.cur]['starId']}} "}],staticStyle:{"display":"none"}},[]):_vm._e(),_vm._ssrNode(" "),(_vm.isShowVideo)?_c('pop-video',_vm._b({attrs:{"videoId":_vm.curVideo,"videoCover":_vm.videoCover,"followStatus":_vm.followStatus,"close":_vm.closeVideo}},'pop-video',_vm.list[this.cur],false)):_vm._e()],2)}
var staticRenderFns = []

// CONCATENATED MODULE: ./hybrid/app/weishi/wact/pages/profess/src/App.vue?vue&type=template&id=2089401e

// CONCATENATED MODULE: ./node-webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node-webpack/node_modules/vue-loader/lib??vue-loader-options!./hybrid/app/weishi/common/components/coverflow.vue?vue&type=template&id=5b6669a6
var coverflowvue_type_template_id_5b6669a6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"wrap1 _wrap1\">","</section>",[_vm._ssrNode("<section class=\"wrap2 _wrap2\">","</section>",[_vm._ssrNode("<ul class=\"star _star\""+(_vm._ssrStyle(null,("transform : rotateY(" + _vm.rotate + "deg);transition:transform .5s ease-out"), null))+">","</ul>",[_vm._t("list",null,{cur:_vm.cur,list:_vm.list,length:_vm.itemLen})],2)])]),_vm._ssrNode(" "),(!_vm.isUsingSwipping)?_vm._ssrNode("<section class=\"ctrl\">","</section>",[_c('button',{directives:[{name:"report",rawName:"v-report.click",value:({type:'read',tag:'leftSlide',params:{}}),expression:"{type:'read',tag:'leftSlide',params:{}}",modifiers:{"click":true}}],staticClass:"btn btn-ctrl-left",attrs:{"aria-label":"左滑"},on:{"click":function($event){$event.preventDefault();$event.stopPropagation();_vm.changeSlide(-1)}}},[_vm._ssrNode("<i class=\"icon icon-ctrl\"></i>")]),_vm._ssrNode(" "),_c('button',{directives:[{name:"report",rawName:"v-report.click",value:({type:'read',tag:'rightSlide',params:{}}),expression:"{type:'read',tag:'rightSlide',params:{}}",modifiers:{"click":true}}],staticClass:"btn btn-ctrl-right",attrs:{"aria-label":"右滑"},on:{"click":function($event){$event.preventDefault();$event.stopPropagation();_vm.changeSlide(1)}}},[_vm._ssrNode("<i class=\"icon icon-ctrl\"></i>")])],2):_vm._e()],2)}
var coverflowvue_type_template_id_5b6669a6_staticRenderFns = []

// CONCATENATED MODULE: ./hybrid/app/weishi/common/components/coverflow.vue?vue&type=template&id=5b6669a6

// CONCATENATED MODULE: ./node-webpack/node_modules/babel-loader/lib??ref--6-0!./node-webpack/node_modules/vue-loader/lib??vue-loader-options!./hybrid/app/weishi/common/components/coverflow.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var coverflowvue_type_script_lang_js = ({
  props: {
    list: {
      type: Array,
      required: true
    },
    curInit: {
      type: Number,
      default: 0
    },
    isUsingSwipping: {
      type: Boolean,
      default: true
    },
    beforeHook: {
      type: Function,
      default: _ => _
    },
    afterHook: {
      type: Function,
      default: _ => _
    }
  },

  data() {
    return {
      cur: 0,
      rotate: 0,
      startFixedPos: 0,
      startRotate: 0,
      startX: 0,
      startY: 0,
      itemLen: 0
    };
  },

  created() {
    this.cur = this.curInit;
    this.changeRotate(this.cur * -20);
    this.itemLen = this.list.length;
  },

  methods: {
    changeRotate(v) {
      this.rotate = v;
    },

    changeSlide(i) {
      this.changeRotate(this.rotate - i * 20);
      this.cur = (this.cur + this.itemLen + i) % this.itemLen;
      this.afterHook(this);
    },

    touchstart(e) {
      this.beforeHook(this, e);
      if (!this.isUsingSwipping) return;
      this.startX = e.changedTouches[0].pageX;
      this.startY = e.changedTouches[0].pageY;
      this.startRotate = this.rotate;
      this.startFixedPos = (this.rotate / -20).toFixed(0) * -20; //   this.$refs.slider.style.transition = `none`
    },

    touchmove(e) {
      const p = e.changedTouches[0];
      const disx = p.pageX - this.startX;
      const disy = p.pageY - this.startY;

      if (disy > 20) {
        return;
      } //   /** do nothing in weishi 4.4*/


      if (!this.isUsingSwipping) return; //   /** disable scroll when swiping */

      if (Math.abs(disx) > 5) e.preventDefault(); //   this.changeRotate(this.startRotate + disx / 20.0)
    },

    touchend(e) {
      let direction = 0;
      if (!this.isUsingSwipping) return;
      const p = e.changedTouches[0];
      const disx = p.pageX - this.startX;
      const disy = p.pageY - this.startY;

      if (Math.abs(disx) > 35) {
        direction = disx > 0 ? 1 : -1;
        this.cur -= direction;
        this.cur = (this.cur + this.itemLen) % this.itemLen;
      } //   this.$refs.slider.style.transition = `transform .3s ease-out`


      this.changeRotate(this.startFixedPos + 20 * direction);
      this.afterHook(this, e);
    }

  }
});
// CONCATENATED MODULE: ./hybrid/app/weishi/common/components/coverflow.vue?vue&type=script&lang=js
 /* harmony default export */ var components_coverflowvue_type_script_lang_js = (coverflowvue_type_script_lang_js);
// CONCATENATED MODULE: ./node-webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./hybrid/app/weishi/common/components/coverflow.vue





/* normalize component */

var component = normalizeComponent(
  components_coverflowvue_type_script_lang_js,
  coverflowvue_type_template_id_5b6669a6_render,
  coverflowvue_type_template_id_5b6669a6_staticRenderFns,
  false,
  null,
  null,
  "2b00722c"

)

/* harmony default export */ var coverflow = (component.exports);
// CONCATENATED MODULE: ./node-webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node-webpack/node_modules/vue-loader/lib??vue-loader-options!./hybrid/app/weishi/wact/pages/profess/src/PopVideo.vue?vue&type=template&id=0c9210d8
var PopVideovue_type_template_id_0c9210d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{directives:[{name:"report",rawName:"v-report",value:({type:'read',tag:'showVideo',params:{videoId:_vm.videoId}}),expression:"{type:'read',tag:'showVideo',params:{videoId:videoId}}"}],staticClass:"pop show"},[_vm._ssrNode("<section class=\"pop-inner player\">","</section>",[_c('button',{directives:[{name:"report",rawName:"v-report",value:({type:'read',tag:'closeVideo',params:{videoId:_vm.videoId}}),expression:"{type:'read',tag:'closeVideo',params:{videoId:videoId}}"}],staticClass:"btn-icon",attrs:{"aria-label":"关闭弹窗"},on:{"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.close($event)}}},[_vm._ssrNode("<i class=\"icon icon-close-b\"></i>")]),_vm._ssrNode(" "),_c('section',{directives:[{name:"report",rawName:"v-report.click",value:({type:'read',tag:'playVideo',params:{videoId:_vm.videoId}}),expression:"{type:'read',tag:'playVideo',params:{videoId:videoId}}",modifiers:{"click":true}}],staticClass:"video-wrap",on:{"click":_vm.togglePlay}},[_vm._ssrNode("<div class=\"video-container\""+(_vm._ssrStyle(null,_vm.videoStyle, null))+"></div> "+((!_vm.isPlay)?("<button aria-label=\"播放\" class=\"btn-icon\"><i class=\"icon icon-play\"></i></button>"):"<!---->"))]),_vm._ssrNode(" "+((!_vm.isloaded)?("<section class=\"global-loading\"></section>"):"<!---->")+" "),_vm._ssrNode("<section class=\"user\">","</section>",[_vm._ssrNode("<section class=\"star\">","</section>",[_vm._ssrNode("<b class=\"avatar\""+(_vm._ssrStyle(null,("background-image:url(" + _vm.avatar + ")"), null))+"></b> "),_vm._ssrNode("<section class=\"info\">","</section>",[_vm._ssrNode("<h2 class=\"name\">"+_vm._ssrEscape(_vm._s(_vm.starName))+"</h2> "),(_vm.followStatus[_vm.starId+'']!==1)?_c('button',{directives:[{name:"report",rawName:"v-report.click",value:({type:'click',tag:'follow2',params:{starId:_vm.starId}}),expression:"{type:'click',tag:'follow2',params:{starId:starId}}",modifiers:{"click":true}}],staticClass:"btn btn-icon ",class:{act: _vm.followButton},on:{"click":_vm._follow}},[]):_vm._e(),_vm._ssrNode(" "),_c('button',{directives:[{name:"report",rawName:"v-report.click",value:({type:'confess2',tag:'follow2',params:{starId:_vm.starId}}),expression:"{type:'confess2',tag:'follow2',params:{starId:starId}}",modifiers:{"click":true}}],staticClass:"btn btn-court",on:{"click":_vm.confess}},[_vm._ssrNode("<i class=\" icon icon-court \"></i> <span>去表白</span>")])],2)],2),_vm._ssrNode(" <section class=\"watermark \"><i class=\"icon icon-logo-watermark \"></i> <b class=\"uploader \"></b></section>")],2)],2)])}
var PopVideovue_type_template_id_0c9210d8_staticRenderFns = []

// CONCATENATED MODULE: ./hybrid/app/weishi/wact/pages/profess/src/PopVideo.vue?vue&type=template&id=0c9210d8

// EXTERNAL MODULE: external "hybrid/app/weishi/wsUtil/dist/wsUtil.bundle.js"
var wsUtil_bundle_js_ = __webpack_require__("441a2910122a512806b0");
var wsUtil_bundle_js_default = /*#__PURE__*/__webpack_require__.n(wsUtil_bundle_js_);

// CONCATENATED MODULE: ./hybrid/app/weishi/wact/pages/profess/src/lib/follow.js


/**
 * @description follow some one, it requires auth info
 * @param  {object} authInfo
 * @param  {string} personId
 * @param  {number} type=1
 */

/* harmony default export */ var follow = (function (authInfo, personId, type = 1, callback) {
  if (qz_default.a.browser.client == 'ws') {
    if (!(authInfo.openid && authInfo.openkey && authInfo.personid)) {
      qz_default.a.msg.show('请先登录微视');
    } else {
      qz_default.a.ajax.request({
        type: 'POST',
        url: '//' + window.location.host + '/webapp/json/weishi/Follow',
        data: JSON.stringify({
          person_id: personId,
          type: type //类型：1=关注，2=取关

        }),
        requestType: 'json',
        dataType: 'json',
        contentType: 'application/json'
      }).done(function (d) {
        if (callback) callback();
      }).fail(function (d) {
        qz_default.a.msg.show(d && d.msg || '关注失败');
      });
    }
  } else {
    wsUtil_bundle_js_default.a.openSchema('person', {
      person_id: personId,
      needDownload: true
    });
  }
});
// CONCATENATED MODULE: ./hybrid/app/weishi/wact/pages/profess/src/lib/player.js
/* harmony default export */ var player = (callback => {
  new Promise((res, rej) => {
    seajs.use('hybridPath/common/videoPlayer/index', play => {
      callback(null, play);
      res(play);
    });
  });
});
// CONCATENATED MODULE: ./hybrid/app/weishi/wact/pages/profess/src/api.js

/**
 * @description config 的详细信息
 */

function getData() {
  return {
    dataMap: {
      type: 'meteor',
      flag1: '765',
      flag2: '3',
      noDefinitelyNeed: false
    },

    handlerDataFun(data, ret = {}) {
      ret.data = data;
    }

  };
}
function getFollowStatus(params) {
  return {
    dataMap: {
      type: 'webapp',
      params1: 'weishi',
      params2: 'BatchCheckFollow',
      data: {
        person_ids: params.idList
      }
    },

    handlerDataFun(data, ret = {}) {
      ret.data = data;
    }

  };
}
const getWeixinAuth = _ => qz_default.a.ajax.request({
  url: 'http://activity.qzone.qq.com/fcg-bin/fcg_act_weixin_jssdk_sig',
  type: "GET",
  dataType: "jsonp",
  data: {
    url: location.href.replace(location.hash, '')
  },
  success: function (result) {
    return JSON.stringify(result);
  }
});
const getFeedById = params => ({
  dataMap: {
    type: 'webapp',
    params1: 'weishi',
    params2: 'GetFeedDetail',
    data: {
      feed_id: params.id
    }
  },

  handlerDataFun(data, ret = {}) {
    ret.data = data;
  }

});
const getProfileById = params => ({
  dataMap: {
    type: 'webapp',
    params1: 'weishi',
    params2: 'GetPersonalPage',
    data: {
      person_id: params.id
    }
  },

  handlerDataFun(data, ret = {}) {
    ret.data = data;
  }

});
/**
 * 错误处理
 * @param  {} data
 */

function errorCodeMap(data) {
  let map = {
    '-3000': '请登录'
  };
  return {
    code: data.code,
    errorMsg: map[data.code] || data.errorMsg || '系统繁忙，请稍候再试'
  };
}
// EXTERNAL MODULE: external "node-webpack/runtime/requestModel/dev/sync.bundle"
var sync_bundle_ = __webpack_require__("33a202e5454f63bdca61");

// CONCATENATED MODULE: ./node-webpack/node_modules/babel-loader/lib??ref--6-0!./node-webpack/node_modules/vue-loader/lib??vue-loader-options!./hybrid/app/weishi/wact/pages/profess/src/PopVideo.vue?vue&type=script&lang=js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const SIZE = 60;






/* harmony default export */ var PopVideovue_type_script_lang_js = ({
  props: {
    videoId: {
      type: String,
      default: ''
    },
    starId: {
      type: String,
      default: ''
    },
    starName: {
      type: String,
      default: ''
    },
    videoCover: {
      type: String,
      default: ''
    },
    callback: {
      type: Function,
      default: _ => _
    },
    close: {
      type: Function,
      default: _ => _
    }
  },
  computed: Object.assign({}, Object(vuex_["mapState"])({
    pageContext: s => s.pageContext,
    followStatus: s => {
      return s.followStatus;
    }
  })),

  data() {
    return {
      historyChange: false,
      historyChangeFunc: _ => _,
      isPlay: true,
      avatar: '',
      isFollow: false,
      videoStyle: '',
      isloaded: false,
      followButton: false
    };
  },

  methods: Object.assign({}, Object(vuex_["mapMutations"])(['setFollowStatus']), {
    _follow() {
      follow(this.pageContext.authInfo, this.starId, 1, _ => {
        this.followButton = true;
        setTimeout(() => this.setFollowStatus(_defineProperty({}, this.starId, 1)), 2000);
      });
    },

    togglePlay() {
      if (this.player.paused()) {
        this.isPlay = true;
        this.player.play();
      } else {
        this.isPlay = false;
        this.player.pause();
      }
    },

    gotoProfile() {
      wsUtil_bundle_js_default.a.openSchema('person', {
        person_id: this.starId,
        needDownload: true
      });
    },

    confess() {
      this.player.pause();
      wsUtil_bundle_js_default.a.openSchema('feed', {
        feed_id: this.videoId,
        needDownload: true
      });
    },

    fullScreenPlay(currFeed) {
      let winWidth = window.innerWidth;
      let winHeight = window.innerHeight;
      let containerWidth = window.innerWidth;
      let containerHeight = window.innerHeight;
      let videoWidth = currFeed.video.width;
      let videoHeight = currFeed.video.height;
      let showWidth, showHeight, nowLeft, nowTop;

      if (containerHeight / containerWidth < videoHeight / videoWidth || videoHeight < videoWidth * 1.33) {
        //宽撑满
        showWidth = winWidth;
        showHeight = parseInt(containerHeight / containerWidth * showWidth);
        nowLeft = 0;
        nowTop = (this.$refs.videoContainer.getBoundingClientRect.height - showHeight) / 2;
      } else {
        //高撑满
        showHeight = winHeight;
        showWidth = parseInt(containerWidth / containerHeight * showHeight);
        nowLeft = (winWidth - showWidth) / 2;
        nowTop = 0;
      }

      this.videoStyle = `height:${showHeight};width:${showWidth};margin-left:${nowLeft};margin-top:${nowTop};`;
    }

  }),

  destroyed() {
    var _window$history;

    this.historyChangeFunc = window.removeEventListener('popstate', this.historyChangeFunc);
    if (!this.historyChange) (_window$history = window.history) === null || _window$history === void 0 ? void 0 : _window$history.back();
    this.historyChange = false;
  },

  mounted() {
    var _window$history2;

    this.historyChangeFunc = event => {
      event.preventDefault();
      event.stopPropagation();
      this.historyChange = true;
      this.close();
    };

    window.addEventListener('popstate', this.historyChangeFunc);
    (_window$history2 = window.history) === null || _window$history2 === void 0 ? void 0 : _window$history2.pushState({}, '', window.location.href.replace('#playVideo', '') + '#playVideo');
    Object(sync_bundle_["getData"])({
      api: api_namespaceObject,
      dataset: ['getProfileById'],
      params: {
        id: this.starId,
        onError: _ => console.log(_)
      }
    }).then(data => {
      var _data$data, _data$data$person;

      return this.avatar = data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : (_data$data$person = _data$data.person) === null || _data$data$person === void 0 ? void 0 : _data$data$person.avatar;
    });
    Object(sync_bundle_["getData"])({
      api: api_namespaceObject,
      dataset: ['getFeedById'],
      params: {
        id: this.videoId,
        onError: _ => console.log(_)
      }
    }).then(data => {
      var _data$data2, _data$data2$feed, _feed$video_spec_urls, _feed$video_spec_urls2;

      if (!(data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : (_data$data2$feed = _data$data2.feed) === null || _data$data2$feed === void 0 ? void 0 : _data$data2$feed.video_url)) {
        return;
      }

      const feed = data.data.feed;
      const url = (feed === null || feed === void 0 ? void 0 : (_feed$video_spec_urls = feed.video_spec_urls[2]) === null || _feed$video_spec_urls === void 0 ? void 0 : _feed$video_spec_urls.url) || (feed === null || feed === void 0 ? void 0 : (_feed$video_spec_urls2 = feed.video_spec_urls[0]) === null || _feed$video_spec_urls2 === void 0 ? void 0 : _feed$video_spec_urls2.url) || feed.video_url;
      player((err, instanceFactory) => {
        var _data$data3, _data$data3$feed, _data$data3$feed$vide;

        this.player = instanceFactory({
          container: this.$refs.videoContainer,
          url: url,
          poster: this.videoCover || (data === null || data === void 0 ? void 0 : (_data$data3 = data.data) === null || _data$data3 === void 0 ? void 0 : (_data$data3$feed = _data$data3.feed) === null || _data$data3$feed === void 0 ? void 0 : (_data$data3$feed$vide = _data$data3$feed.video_cover) === null || _data$data3$feed$vide === void 0 ? void 0 : _data$data3$feed$vide.static_cover.url),
          autoplay: false,
          videoSize: 'cover',
          width: '100%',
          height: '100%',
          preload: 'true',
          loop: true
        });
        this.isloaded = true;
        setTimeout(() => {
          this.togglePlay();
          this.fullScreenPlay(feed);
        }, 0);
      });
    });
  }

});
// CONCATENATED MODULE: ./hybrid/app/weishi/wact/pages/profess/src/PopVideo.vue?vue&type=script&lang=js
 /* harmony default export */ var src_PopVideovue_type_script_lang_js = (PopVideovue_type_script_lang_js);
// CONCATENATED MODULE: ./hybrid/app/weishi/wact/pages/profess/src/PopVideo.vue



function injectStyles (context) {

  var style0 = __webpack_require__("f959d907d0d6a0ce8413")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PopVideo_component = normalizeComponent(
  src_PopVideovue_type_script_lang_js,
  PopVideovue_type_template_id_0c9210d8_render,
  PopVideovue_type_template_id_0c9210d8_staticRenderFns,
  false,
  injectStyles,
  null,
  "83f8a7b2"

)

/* harmony default export */ var PopVideo = (PopVideo_component.exports);
// CONCATENATED MODULE: ./hybrid/app/weishi/wact/pages/profess/src/util/reportConfig.js
/* harmony default export */ var reportConfig = ({
  cpReadCfg: {
    pv: {
      actiontype: 5,
      subactiontype: 345,
      reserves: 1
    },
    video: {
      actiontype: 5,
      subactiontype: 345,
      reserves: 2
    },
    confess: {
      actiontype: 5,
      subactiontype: 345,
      reserves: 3
    },
    follow: {
      actiontype: 5,
      subactiontype: 345,
      reserves: 4
    },
    share: {
      actiontype: 5,
      subactiontype: 345,
      reserves: 5
    },
    share: {
      actiontype: 5,
      subactiontype: 345,
      reserves: 6
    },
    showVideo: {
      actiontype: 5,
      subactiontype: 346,
      reserves: 1
    },
    follow2: {
      actiontype: 5,
      subactiontype: 346,
      reserves: 2
    },
    confess2: {
      actiontype: 5,
      subactiontype: 346,
      reserves: 3
    }
  },
  cpWriteCfg: {},
  cpRecommendCfg: {}
});
// CONCATENATED MODULE: ./hybrid/app/weishi/wact/pages/profess/src/util/initReport.js



/* harmony default export */ var initReport = (function (pageContext, wsUtil = wsUtil_bundle_js_default.a, lib = qz_default.a) {
  let tcssPath, cpReadCfg, cpWriteCfg, cpRecommendCfg;
  tcssPath = lib.browser.client || 'qzone';
  ({
    cpReadCfg,
    cpWriteCfg,
    cpRecommendCfg
  } = reportConfig);
  wsUtil.report.init('love', {
    tcssPath: tcssPath,
    cpReadCfg: cpReadCfg,
    cpWriteCfg: cpWriteCfg,
    cpRecommendCfg: cpRecommendCfg
  }); // wsUtil.report.log = 1

  return wsUtil.report;
});
// CONCATENATED MODULE: ./node-webpack/node_modules/babel-loader/lib??ref--6-0!./node-webpack/node_modules/vue-loader/lib??vue-loader-options!./hybrid/app/weishi/wact/pages/profess/src/App.vue?vue&type=script&lang=js
function Appvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var Appvue_type_script_lang_js = ({
  data() {
    return {
      cur: 0,
      isWs: false,
      isPC: false,
      curVideo: '',
      videoCover: '',
      isShowVideo: false,
      reportAux: '',
      isUsingSwipping: true,
      followButton: {}
    };
  },

  components: {
    PopVideo: PopVideo,
    Coverflow: coverflow
  },
  computed: Object.assign({}, Object(vuex_["mapState"])({
    list: s => {
      const list = s.data.data.starList;
      const idList = list.map(o => o.starId);
      const length = list.length;

      while (list.length < 18) {
        list.push(list[list.length % length]);
      }

      return list;
    },
    rules: s => {
      return s.data.data.rules;
    },
    followStatus: s => {
      return s.followStatus;
    },
    pageContext: s => s.pageContext
  })),
  methods: Object.assign({}, Object(vuex_["mapMutations"])(['setFollowStatus']), {
    slideChanged(ins, e) {
      if (this.cur === ins.cur) return;
      this.isFollow = false;
      this.cur = ins.cur;
      const obj = ins.list[ins.cur] || {};
      this.setShare(obj, this.cur);
    },

    openShare() {
      qz_default.a.browser.isWX ? this.share.ui.openMask() : this.share.ui.open();
    },

    setShare(obj, cur) {
      this.reportAux = '';
      this.share.config({
        shareInfo: {
          manualSet: wsUtil_bundle_js_default.a.pageInfo.compareWSVersion('4.5.0', 'eq') && qz_default.a.browser.platform === 'android',
          type: 'link',
          base64: '',
          link: window.location.origin + window.location.pathname + '?' + qz_default.a.util.toUrlParam(Object.assign(qz_default.a.util.getQueryObj(window.location.href), {
            cur
          })),
          title: document.title || '向她表白吧',
          imgUrl: obj.shareImg ? obj.shareImg : 'http://qzonestyle.gtimg.cn/qzone/qzact/act/external/weishi/logo-100.png',
          desc: obj.shareCopy || '向表白吧'
        },
        callback: data => this.reportAux = this.list[this.cur]['starId'],
        wxConfig: this.wsconfig,
        uiState: {
          isPreview: false
        }
      });
    },

    confess() {
      wsUtil_bundle_js_default.a.openSchema('feed', {
        feed_id: this.list[this.cur]['professId'],
        needDownload: true
      });
    },

    showVideo(id, videoCover) {
      this.isShowVideo = true;
      this.curVideo = id;
      this.videoCover = videoCover;
    },

    closeVideo() {
      this.isShowVideo = false;
    },

    showDetail(l, c, i) {
      return Math.abs(i - c) < 2 || Math.abs(c - i - l) < 2 || Math.abs(c - i + l) < 2;
    },

    _follow(e, id) {
      e.stopPropagation();
      e.preventDefault();
      follow(this.pageContext.authInfo, id, 1, _ => {
        setTimeout(() => {
          this.setFollowStatus(Appvue_type_script_lang_js_defineProperty({}, id, 1));
        }, 2000);
        this.followButton[id + ''] = true;
        this.followButton = Object.assign({}, this.followButton);
      });
    },

    async initShare(wsconfig) {
      const {
        default: SHARE
      } = await __webpack_require__.e(/* import() | share */ 0).then(function() { var module = __webpack_require__("20eb701f8c9fff13b969"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
      this.share = new SHARE();
      this.wsconfig = wsconfig.code === 0 ? wsconfig.data : null;
      this.setShare(this.list[this.cur], this.cur);
    }

  }),

  mounted() {
    this.isPC = !qz_default.a.browser.isMobile;
    this.isWs = qz_default.a.browser.client === 'ws';
    this.isAndroid = qz_default.a.browser.platform === 'android';
    this.cur = this.pageContext.cur;
    this.isUsingSwipping = !this.isPC && !this.isWs || this.isAndroid || wsUtil_bundle_js_default.a.pageInfo.compareWSVersion('4.4.0', 'nlt');
    /** Following is help to preload video play async to speed up the loading pop video.*/

    player(_ => _);
    getWeixinAuth().done(r => this.initShare(r));
    initReport(this.pageContext);
    window.mqq && window.mqq.invoke('ui', 'setNavigationBarColor', {
      titleColor: '#ffffff',
      backgroundColor: '#15102E',
      iconStyle: 'black'
    });
  }

});
// CONCATENATED MODULE: ./hybrid/app/weishi/wact/pages/profess/src/App.vue?vue&type=script&lang=js
 /* harmony default export */ var src_Appvue_type_script_lang_js = (Appvue_type_script_lang_js);
// CONCATENATED MODULE: ./hybrid/app/weishi/wact/pages/profess/src/App.vue





/* normalize component */

var App_component = normalizeComponent(
  src_Appvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6be1b734"

)

/* harmony default export */ var App = (App_component.exports);
// CONCATENATED MODULE: ./hybrid/app/weishi/common/directive/report.js

/**
 * @description common report tool for weishi
 * You should init your own wsUtil report before using this tool
 * @description format: v-report.[EventMethod?]="[expressionWithdata]"
 * @example <img v-report/> [Will send a pv request]
 * @example <img v-report.click="{type:'write',tag:tagname,params:null}" [Send reportWrite if img is clicked!]
 * @example <img v-report="{type:'write',tag:tagname,params:null}" [Send reportWrite if img created]
 * @example <img v-report.click="{type:'click'}" [Send reportClick if img is clicked!]
 * @example <img v-report.show="{type:'click'}" [Send reportClick if img is visable!]
 */

/* harmony default export */ var report = ({
  install(Vue, option = {}) {
    const _ = wsUtil_bundle_js_default.a.report;

    const isElementInViewport = el => {
      var rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    };

    let _intervalHandle;

    Vue.directive('report', {
      bind(el, binding, vnode) {
        let reportFun, tag, params, table, pageName, type;
        /**Why the desctructin object not work? */

        if (binding.value) {
          const v = binding.value;
          tag = v.tag;
          params = v.params;
          table = v.table;
          pageName = v.pageName;
          type = v.type;
        }

        switch (type) {
          case 'click':
            reportFun = () => _.reportClick(tag, params);

            break;

          case 'write':
            reportFun = () => _.reportWrite(tag, params);

            break;

          case 'read':
            reportFun = () => _.reportRead(tag, params);

            break;

          case 'recommend':
            reportFun = () => _.reportRecmmend(tag, params);

            break;

          case 'raw':
            reportFun = () => _.reportRecmmend(params, table);

            break;

          case 'pageSpeed':
            reportFun = () => _.reportPageSpeed(pageName);

            break;

          default:
            reportFun = () => _.reportPV();

        }

        let m = binding.modifiers;
        Object.keys(m).forEach(function (key) {
          m[key.split(':')[0]] = m[key];
        });

        if (m.click) {
          el.addEventListener('click', reportFun);
          return;
        }

        if (m.show) {
          if (!_intervalHandle) {
            _intervalHandle = window.setInterval(() => {
              if (isElementInViewport(el)) {
                console.log(el, 'is visible!!');
                window.clearInterval(_intervalHandle);
              }
            }, 500);
          }

          return;
        }

        reportFun();
      },

      unbind() {
        if (_intervalHandle) {
          window.clearInterval(_intervalHandle);
        }
      }

    });
  }

});
// CONCATENATED MODULE: ./hybrid/app/weishi/wact/pages/profess/src/app.js





vue_default.a.use(vuex_default.a);
vue_default.a.use(report);
function createApp() {
  const store = createStore();
  const app = new vue_default.a({
    store,
    render: h => h(App)
  });
  return {
    app,
    store
  };
}
// CONCATENATED MODULE: ./hybrid/app/weishi/wact/pages/profess/src/entry-server.js



/* harmony default export */ var entry_server = __webpack_exports__["default"] = (context => {
  return new Promise(async (resolve, reject) => {
    const {
      app,
      store
    } = createApp();
    const data = await Object(sync_bundle_["getData"])({
      api: api_namespaceObject,
      dataset: ['getData'],
      params: context.baseInfo
    });
    const idList = data.data.starList && data.data.starList.map(o => o.starId);
    const followStatus = await Object(sync_bundle_["getData"])({
      api: api_namespaceObject,
      dataset: ['getFollowStatus'],
      params: {
        idList,
        onError: _ => console.log(_)
      }
    });

    if (followStatus) {
      store.commit('setFollowStatus', followStatus.data.results);
    }

    if (data) {
      store.commit('setPageData', {
        data,
        baseInfo: context.baseInfo
      });
      context.state = store.state;
      resolve(app);
    } else {
      reject('The network is not accessable!!');
      context.baseInfo.onError({
        errorMsg: '直出出错啦'
      });
    }
  });
});

/***/ }),

/***/ "441a2910122a512806b0":
/***/ (function(module, exports) {

module.exports = require("hybrid/app/weishi/wsUtil/dist/wsUtil.bundle.js");

/***/ }),

/***/ "564382267519ae7fa9d8":
/***/ (function(module, exports) {

module.exports = require("node-webpack/runtime/vue");

/***/ }),

/***/ "89016d801741250312fc":
/***/ (function(module, exports) {

module.exports = require("node-webpack/runtime/vuex");

/***/ }),

/***/ "a92560e128fb7720920b":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("ae5ec3b525368749b8ab")(false);
// imports


// module
exports.push([module.i, "\
div[id^='vpjs-videoBigPlayButton'] {\
  display: none !important;\
  opacity: 0 !important;\
}\
", ""]);

// exports


/***/ }),

/***/ "ae5ec3b525368749b8ab":
/***/ (function(module, exports) {

/*
\tMIT License http://www.opensource.org/licenses/mit-license.php
\tAuthor Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
\tvar list = [];

\t// return the list of modules as css string
\tlist.toString = function toString() {
\t\treturn this.map(function (item) {
\t\t\tvar content = cssWithMappingToString(item, useSourceMap);
\t\t\tif(item[2]) {
\t\t\t\treturn "@media " + item[2] + "{" + content + "}";
\t\t\t} else {
\t\t\t\treturn content;
\t\t\t}
\t\t}).join("");
\t};

\t// import a list of modules into the list
\tlist.i = function(modules, mediaQuery) {
\t\tif(typeof modules === "string")
\t\t\tmodules = [[null, modules, ""]];
\t\tvar alreadyImportedModules = {};
\t\tfor(var i = 0; i < this.length; i++) {
\t\t\tvar id = this[i][0];
\t\t\tif(typeof id === "number")
\t\t\t\talreadyImportedModules[id] = true;
\t\t}
\t\tfor(i = 0; i < modules.length; i++) {
\t\t\tvar item = modules[i];
\t\t\t// skip already imported module
\t\t\t// this implementation is not 100% perfect for weird media query combinations
\t\t\t//  when a module is imported multiple times with different media queries.
\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)
\t\t\tif(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
\t\t\t\tif(mediaQuery && !item[2]) {
\t\t\t\t\titem[2] = mediaQuery;
\t\t\t\t} else if(mediaQuery) {
\t\t\t\t\titem[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
\t\t\t\t}
\t\t\t\tlist.push(item);
\t\t\t}
\t\t}
\t};
\treturn list;
};

function cssWithMappingToString(item, useSourceMap) {
\tvar content = item[1] || '';
\tvar cssMapping = item[3];
\tif (!cssMapping) {
\t\treturn content;
\t}

\tif (useSourceMap && typeof btoa === 'function') {
\t\tvar sourceMapping = toComment(cssMapping);
\t\tvar sourceURLs = cssMapping.sources.map(function (source) {
\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
\t\t});

\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\
');
\t}

\treturn [content].join('\
');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
\t// eslint-disable-next-line no-undef
\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

\treturn '/*# ' + data + ' */';
}


/***/ }),

/***/ "f959d907d0d6a0ce8413":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_webpack_node_modules_css_loader_index_js_node_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_webpack_node_modules_less_loader_dist_cjs_js_node_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PopVideo_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a92560e128fb7720920b");
/* harmony import */ var _node_webpack_node_modules_css_loader_index_js_node_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_webpack_node_modules_less_loader_dist_cjs_js_node_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PopVideo_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_webpack_node_modules_css_loader_index_js_node_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_webpack_node_modules_less_loader_dist_cjs_js_node_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PopVideo_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_webpack_node_modules_css_loader_index_js_node_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_webpack_node_modules_less_loader_dist_cjs_js_node_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PopVideo_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_webpack_node_modules_css_loader_index_js_node_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_webpack_node_modules_less_loader_dist_cjs_js_node_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PopVideo_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_webpack_node_modules_css_loader_index_js_node_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_webpack_node_modules_less_loader_dist_cjs_js_node_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PopVideo_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ })

/******/ });
//# sourceMappingURL=server.bundle.js.map"
