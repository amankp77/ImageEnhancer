import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/imagekitio-react/dist/imagekitio-react.esm.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var version = "1.5.4";
var errorMessages = {
  MANDATORY_INITIALIZATION_MISSING: {
    message: "Missing urlEndpoint during SDK initialization",
    help: ""
  },
  INVALID_TRANSFORMATION_POSITION: {
    message: "Invalid transformationPosition parameter",
    help: ""
  },
  PRIVATE_KEY_CLIENT_SIDE: {
    message: "privateKey should not be passed on the client side",
    help: ""
  },
  MISSING_UPLOAD_DATA: {
    message: "Missing data for upload",
    help: ""
  },
  MISSING_UPLOAD_FILE_PARAMETER: {
    message: "Missing file parameter for upload",
    help: ""
  },
  MISSING_UPLOAD_FILENAME_PARAMETER: {
    message: "Missing fileName parameter for upload",
    help: ""
  },
  MISSING_AUTHENTICATION_ENDPOINT: {
    message: "Missing authentication endpoint for upload",
    help: ""
  },
  MISSING_PUBLIC_KEY: {
    message: "Missing public key for upload",
    help: ""
  },
  AUTH_ENDPOINT_TIMEOUT: {
    message: "The authenticationEndpoint you provided timed out in 60 seconds",
    help: ""
  },
  AUTH_ENDPOINT_NETWORK_ERROR: {
    message: "Request to authenticationEndpoint failed due to network error",
    help: ""
  },
  AUTH_INVALID_RESPONSE: {
    message: "Invalid response from authenticationEndpoint. The SDK expects a JSON response with three fields i.e. signature, token and expire.",
    help: ""
  },
  UPLOAD_ENDPOINT_NETWORK_ERROR: {
    message: "Request to ImageKit upload endpoint failed due to network error",
    help: ""
  },
  INVALID_UPLOAD_OPTIONS: {
    message: "Invalid uploadOptions parameter",
    help: ""
  }
};
function respond(isError, response, callback) {
  if (typeof callback == "function") {
    if (isError) {
      callback(response, null);
    } else {
      callback(null, response);
    }
  }
}
function getResponseHeaderMap(xhr) {
  var headers = {};
  var responseHeaders = xhr.getAllResponseHeaders();
  if (Object.keys(responseHeaders).length) {
    responseHeaders.trim().split(/[\r\n]+/).map(function(value) {
      return value.split(/: /);
    }).forEach(function(keyValue) {
      headers[keyValue[0].trim()] = keyValue[1].trim();
    });
  }
  return headers;
}
var addResponseHeadersAndBody = function addResponseHeadersAndBody2(body, xhr) {
  var response = _objectSpread2({}, body);
  var responseMetadata = {
    statusCode: xhr.status,
    headers: getResponseHeaderMap(xhr)
  };
  Object.defineProperty(response, "$ResponseMetadata", {
    value: responseMetadata,
    enumerable: false,
    writable: false
  });
  return response;
};
var request = function request2(uploadFileXHR, formData, options, callback) {
  generateSignatureToken(options.authenticationEndpoint).then(function(signaturObj) {
    formData.append("signature", signaturObj.signature);
    formData.append("expire", String(signaturObj.expire));
    formData.append("token", signaturObj.token);
    uploadFile(uploadFileXHR, formData).then(function(result) {
      return respond(false, result, callback);
    }, function(ex) {
      return respond(true, ex, callback);
    });
  }, function(ex) {
    return respond(true, ex, callback);
  });
};
var generateSignatureToken = function generateSignatureToken2(authenticationEndpoint) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 6e4;
    var urlObj = new URL(authenticationEndpoint);
    urlObj.searchParams.set("t", Math.random().toString());
    xhr.open("GET", urlObj.toString());
    xhr.ontimeout = function(e) {
      return reject(errorMessages.AUTH_ENDPOINT_TIMEOUT);
    };
    xhr.onerror = function() {
      return reject(errorMessages.AUTH_ENDPOINT_NETWORK_ERROR);
    };
    xhr.onload = function() {
      if (xhr.status === 200) {
        try {
          var body = JSON.parse(xhr.responseText);
          var obj = {
            signature: body.signature,
            expire: body.expire,
            token: body.token
          };
          if (!obj.signature || !obj.expire || !obj.token) {
            return reject(errorMessages.AUTH_INVALID_RESPONSE);
          }
          return resolve(obj);
        } catch (ex) {
          return reject(errorMessages.AUTH_INVALID_RESPONSE);
        }
      } else {
        return reject(errorMessages.AUTH_INVALID_RESPONSE);
      }
    };
    xhr.send();
  });
};
var uploadFile = function uploadFile2(uploadFileXHR, formData) {
  return new Promise(function(resolve, reject) {
    uploadFileXHR.open("POST", "https://upload.imagekit.io/api/v1/files/upload");
    uploadFileXHR.onerror = function(e) {
      return reject(errorMessages.UPLOAD_ENDPOINT_NETWORK_ERROR);
    };
    uploadFileXHR.onload = function() {
      if (uploadFileXHR.status === 200) {
        try {
          var body = JSON.parse(uploadFileXHR.responseText);
          var uploadResponse = addResponseHeadersAndBody(body, uploadFileXHR);
          return resolve(uploadResponse);
        } catch (ex) {
          return reject(ex);
        }
      } else {
        try {
          var body = JSON.parse(uploadFileXHR.responseText);
          var uploadError = addResponseHeadersAndBody(body, uploadFileXHR);
          return reject(uploadError);
        } catch (ex) {
          return reject(ex);
        }
      }
    };
    uploadFileXHR.send(formData);
  });
};
var upload = function upload2(xhr, uploadOptions, options, callback) {
  if (!uploadOptions.file) {
    respond(true, errorMessages.MISSING_UPLOAD_FILE_PARAMETER, callback);
    return;
  }
  if (!uploadOptions.fileName) {
    respond(true, errorMessages.MISSING_UPLOAD_FILENAME_PARAMETER, callback);
    return;
  }
  if (!options.authenticationEndpoint) {
    respond(true, errorMessages.MISSING_AUTHENTICATION_ENDPOINT, callback);
    return;
  }
  if (!options.publicKey) {
    respond(true, errorMessages.MISSING_PUBLIC_KEY, callback);
    return;
  }
  var formData = new FormData();
  var key;
  for (key in uploadOptions) {
    if (key) {
      if (key === "file" && typeof uploadOptions.file != "string") {
        formData.append("file", uploadOptions.file, String(uploadOptions.fileName));
      } else if (key === "tags" && Array.isArray(uploadOptions.tags)) {
        formData.append("tags", uploadOptions.tags.join(","));
      } else if (key === "responseFields" && Array.isArray(uploadOptions.responseFields)) {
        formData.append("responseFields", uploadOptions.responseFields.join(","));
      } else if (key === "extensions" && Array.isArray(uploadOptions.extensions)) {
        formData.append("extensions", JSON.stringify(uploadOptions.extensions));
      } else if (key === "customMetadata" && _typeof(uploadOptions.customMetadata) === "object" && !Array.isArray(uploadOptions.customMetadata) && uploadOptions.customMetadata !== null) {
        formData.append("customMetadata", JSON.stringify(uploadOptions.customMetadata));
      } else if (uploadOptions[key] !== void 0) {
        formData.append(key, String(uploadOptions[key]));
      }
    }
  }
  formData.append("publicKey", options.publicKey);
  request(xhr, formData, _objectSpread2(_objectSpread2({}, options), {}, {
    authenticationEndpoint: options.authenticationEndpoint
  }), callback);
};
var supportedTransforms = {
  width: "w",
  height: "h",
  aspectRatio: "ar",
  quality: "q",
  crop: "c",
  cropMode: "cm",
  focus: "fo",
  x: "x",
  y: "y",
  format: "f",
  radius: "r",
  background: "bg",
  border: "b",
  rotation: "rt",
  rotate: "rt",
  blur: "bl",
  named: "n",
  overlayImage: "oi",
  overlayImageAspectRatio: "oiar",
  overlayImageBackground: "oibg",
  overlayImageBorder: "oib",
  overlayImageDPR: "oidpr",
  overlayImageQuality: "oiq",
  overlayImageCropping: "oic",
  overlayImageTrim: "oit",
  overlayX: "ox",
  overlayY: "oy",
  overlayFocus: "ofo",
  overlayHeight: "oh",
  overlayWidth: "ow",
  overlayText: "ot",
  overlayTextFontSize: "ots",
  overlayTextFontFamily: "otf",
  overlayTextColor: "otc",
  overlayTextTransparency: "oa",
  overlayAlpha: "oa",
  overlayTextTypography: "ott",
  overlayBackground: "obg",
  overlayTextEncoded: "ote",
  overlayTextWidth: "otw",
  overlayTextBackground: "otbg",
  overlayTextPadding: "otp",
  overlayTextInnerAlignment: "otia",
  overlayRadius: "or",
  progressive: "pr",
  lossless: "lo",
  trim: "t",
  metadata: "md",
  colorProfile: "cp",
  defaultImage: "di",
  dpr: "dpr",
  effectSharpen: "e-sharpen",
  effectUSM: "e-usm",
  effectContrast: "e-contrast",
  effectGray: "e-grayscale",
  original: "orig",
  raw: "raw"
};
var DEFAULT_TRANSFORMATION_POSITION = "path";
var QUERY_TRANSFORMATION_POSITION = "query";
var VALID_TRANSFORMATION_POSITIONS = [DEFAULT_TRANSFORMATION_POSITION, QUERY_TRANSFORMATION_POSITION];
var CHAIN_TRANSFORM_DELIMITER = ":";
var TRANSFORM_DELIMITER = ",";
var TRANSFORM_KEY_VALUE_DELIMITER = "-";
var transformationUtils = {
  getDefault: function getDefault() {
    return DEFAULT_TRANSFORMATION_POSITION;
  },
  addAsQueryParameter: function addAsQueryParameter(options) {
    return options.transformationPosition === QUERY_TRANSFORMATION_POSITION;
  },
  validParameters: function validParameters(options) {
    if (typeof options.transformationPosition == "undefined")
      return false;
    return VALID_TRANSFORMATION_POSITIONS.indexOf(options.transformationPosition) != -1;
  },
  getTransformKey: function getTransformKey(transform) {
    if (!transform) {
      return "";
    }
    return supportedTransforms[transform] || supportedTransforms[transform.toLowerCase()] || "";
  },
  getChainTransformDelimiter: function getChainTransformDelimiter() {
    return CHAIN_TRANSFORM_DELIMITER;
  },
  getTransformDelimiter: function getTransformDelimiter() {
    return TRANSFORM_DELIMITER;
  },
  getTransformKeyValueDelimiter: function getTransformKeyValueDelimiter() {
    return TRANSFORM_KEY_VALUE_DELIMITER;
  }
};
var TRANSFORMATION_PARAMETER = "tr";
function removeTrailingSlash(str) {
  if (typeof str == "string" && str[str.length - 1] == "/") {
    str = str.substring(0, str.length - 1);
  }
  return str;
}
function removeLeadingSlash(str) {
  if (typeof str == "string" && str[0] == "/") {
    str = str.slice(1);
  }
  return str;
}
function pathJoin(parts, sep) {
  var separator = sep || "/";
  var replace = new RegExp(separator + "{1,}", "g");
  return parts.join(separator).replace(replace, separator);
}
var buildURL = function buildURL2(opts) {
  if (!opts.path && !opts.src) {
    return "";
  }
  var urlObj, isSrcParameterUsedForURL, urlEndpointPattern;
  try {
    if (opts.path) {
      urlEndpointPattern = new URL(opts.urlEndpoint).pathname;
      urlObj = new URL(pathJoin([opts.urlEndpoint.replace(urlEndpointPattern, ""), opts.path]));
    } else {
      urlObj = new URL(opts.src);
      isSrcParameterUsedForURL = true;
    }
  } catch (e) {
    console.error(e);
    return "";
  }
  for (var i in opts.queryParameters) {
    urlObj.searchParams.append(i, String(opts.queryParameters[i]));
  }
  var transformationString = constructTransformationString(opts.transformation);
  if (transformationString && transformationString.length) {
    if (transformationUtils.addAsQueryParameter(opts) || isSrcParameterUsedForURL) {
      urlObj.searchParams.append(TRANSFORMATION_PARAMETER, transformationString);
    } else {
      urlObj.pathname = pathJoin([TRANSFORMATION_PARAMETER + transformationUtils.getChainTransformDelimiter() + transformationString, urlObj.pathname]);
    }
  }
  if (urlEndpointPattern) {
    urlObj.pathname = pathJoin([urlEndpointPattern, urlObj.pathname]);
  } else {
    urlObj.pathname = pathJoin([urlObj.pathname]);
  }
  return urlObj.href;
};
function constructTransformationString(transformation) {
  if (!Array.isArray(transformation)) {
    return "";
  }
  var parsedTransforms = [];
  for (var i = 0, l = transformation.length; i < l; i++) {
    var parsedTransformStep = [];
    for (var key in transformation[i]) {
      var transformKey = transformationUtils.getTransformKey(key);
      if (!transformKey) {
        transformKey = key;
      }
      if (transformation[i][key] === "-") {
        parsedTransformStep.push(transformKey);
      } else if (key === "raw") {
        parsedTransformStep.push(transformation[i][key]);
      } else {
        var value = transformation[i][key];
        if (transformKey === "oi" || transformKey === "di") {
          value = removeTrailingSlash(removeLeadingSlash(value || ""));
          value = value.replace(/\//g, "@@");
        }
        parsedTransformStep.push([transformKey, value].join(transformationUtils.getTransformKeyValueDelimiter()));
      }
    }
    parsedTransforms.push(parsedTransformStep.join(transformationUtils.getTransformDelimiter()));
  }
  return parsedTransforms.join(transformationUtils.getChainTransformDelimiter());
}
var url = function url2(urlOpts, defaultOptions) {
  return buildURL(_objectSpread2(_objectSpread2({}, defaultOptions), urlOpts));
};
function mandatoryParametersAvailable(options) {
  return options.urlEndpoint;
}
var promisify = function promisify2(thisContext, fn) {
  return function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === fn.length && typeof args[args.length - 1] !== "undefined") {
      if (typeof args[args.length - 1] !== "function") {
        throw new Error("Callback must be a function.");
      }
      fn.call.apply(fn, [thisContext].concat(args));
    } else {
      return new Promise(function(resolve, reject) {
        var callback = function callback2(err) {
          if (err) {
            return reject(err);
          } else {
            for (var _len2 = arguments.length, results = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              results[_key2 - 1] = arguments[_key2];
            }
            resolve(results.length > 1 ? results : results[0]);
          }
        };
        args.pop();
        args.push(callback);
        fn.call.apply(fn, [thisContext].concat(args));
      });
    }
  };
};
var ImageKit = function() {
  function ImageKit2(opts) {
    _classCallCheck(this, ImageKit2);
    _defineProperty(this, "options", {
      sdkVersion: "javascript-".concat(version),
      publicKey: "",
      urlEndpoint: "",
      transformationPosition: transformationUtils.getDefault()
    });
    this.options = _objectSpread2(_objectSpread2({}, this.options), opts || {});
    if (!mandatoryParametersAvailable(this.options)) {
      throw errorMessages.MANDATORY_INITIALIZATION_MISSING;
    }
    if (!transformationUtils.validParameters(this.options)) {
      throw errorMessages.INVALID_TRANSFORMATION_POSITION;
    }
  }
  _createClass(ImageKit2, [{
    key: "url",
    value: function url$1(urlOptions) {
      return url(urlOptions, this.options);
    }
  }, {
    key: "upload",
    value: function upload$1(uploadOptions, callbackOrOptions, options) {
      var callback;
      if (typeof callbackOrOptions === "function") {
        callback = callbackOrOptions;
      } else {
        options = callbackOrOptions || {};
      }
      if (!uploadOptions || _typeof(uploadOptions) !== "object") {
        return respond(true, errorMessages.INVALID_UPLOAD_OPTIONS, callback);
      }
      var mergedOptions = _objectSpread2(_objectSpread2({}, this.options), options);
      var _ref = uploadOptions || {}, userProvidedXHR = _ref.xhr;
      delete uploadOptions.xhr;
      var xhr = userProvidedXHR || new XMLHttpRequest();
      return promisify(this, upload)(xhr, uploadOptions, mergedOptions, callback);
    }
  }]);
  return ImageKit2;
}();
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var ImageKitContextType = (0, import_react.createContext)(null);
var ImageKitComponent = function(_PureComponent) {
  _inherits(ImageKitComponent2, _PureComponent);
  var _super = _createSuper(ImageKitComponent2);
  function ImageKitComponent2(props, context) {
    var _this;
    _classCallCheck$1(this, ImageKitComponent2);
    _this = _super.call(this, props, context);
    _this.getContext = _this.getContext.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass$1(ImageKitComponent2, [{
    key: "getContext",
    value: function getContext() {
      return this.context || {};
    }
  }, {
    key: "getIKClient",
    value: function getIKClient() {
      var contextOptions = this.getContext();
      if (contextOptions.ikClient) {
        return contextOptions.ikClient;
      }
      var urlEndpoint = this.props.urlEndpoint;
      urlEndpoint = urlEndpoint || contextOptions.urlEndpoint;
      if (!urlEndpoint || urlEndpoint.trim() === "") {
        throw new Error("Missing urlEndpoint during initialization");
      }
      var ikClient = new ImageKit({
        urlEndpoint,
        // @ts-ignore
        sdkVersion: ""
      });
      return ikClient;
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return ImageKitComponent2;
}(import_react.PureComponent);
ImageKitComponent.contextType = ImageKitContextType;
var Props = {
  loading: import_prop_types.default.oneOf(["lazy"]),
  lqip: import_prop_types.default.shape({
    active: import_prop_types.default.bool,
    quality: import_prop_types.default.number,
    threshold: import_prop_types.default.number,
    blur: import_prop_types.default.number,
    raw: import_prop_types.default.string
  }),
  path: import_prop_types.default.string,
  src: import_prop_types.default.string,
  queryParameters: import_prop_types.default.objectOf(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]).isRequired),
  transformation: import_prop_types.default.arrayOf(import_prop_types.default.object.isRequired),
  transformationPosition: import_prop_types.default.oneOf(["path", "query"])
};
var Props$1 = {
  fileName: import_prop_types.default.string,
  tags: import_prop_types.default.arrayOf(import_prop_types.default.string.isRequired),
  useUniqueFileName: import_prop_types.default.bool,
  responseFields: import_prop_types.default.array,
  isPrivateFile: import_prop_types.default.bool,
  folder: import_prop_types.default.string,
  customCoordinates: import_prop_types.default.string,
  extensions: import_prop_types.default.arrayOf(import_prop_types.default.object.isRequired),
  webhookUrl: import_prop_types.default.string,
  overwriteFile: import_prop_types.default.bool,
  overwriteAITags: import_prop_types.default.bool,
  overwriteTags: import_prop_types.default.bool,
  overwriteCustomMetadata: import_prop_types.default.bool,
  customMetadata: import_prop_types.default.any,
  onError: import_prop_types.default.func,
  onSuccess: import_prop_types.default.func,
  onUploadStart: import_prop_types.default.func,
  onUploadProgress: import_prop_types.default.func,
  inputRef: import_prop_types.default.object,
  validateFile: import_prop_types.default.func
};
var Props$2 = {
  publicKey: import_prop_types.default.string,
  urlEndpoint: import_prop_types.default.string,
  authenticationEndpoint: import_prop_types.default.string
};
var IKContextCombinedProps = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, Props$2), Props), Props$1), Props$1), {}, {
  ikClient: import_prop_types.default.instanceOf(ImageKit)
});
var IKContext = function(_ImageKitComponent) {
  _inherits(IKContext2, _ImageKitComponent);
  var _super = _createSuper(IKContext2);
  function IKContext2() {
    _classCallCheck$1(this, IKContext2);
    return _super.apply(this, arguments);
  }
  _createClass$1(IKContext2, [{
    key: "extractContextOptions",
    value: function extractContextOptions(mergedOptions) {
      var result = {};
      var propKeys = Object.keys(IKContextCombinedProps);
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var value = mergedOptions[key];
        if (value) {
          result[key] = value;
        }
      }
      return result;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var mergedOptions = _objectSpread2$1(_objectSpread2$1({}, this.getContext()), this.props);
      var contextOptions = this.extractContextOptions(mergedOptions);
      if (contextOptions.urlEndpoint && contextOptions.urlEndpoint.trim() !== "") {
        contextOptions.ikClient = new ImageKit({
          urlEndpoint: contextOptions.urlEndpoint,
          // @ts-ignore
          sdkVersion: ""
        });
      }
      return import_react.default.createElement(ImageKitContextType.Provider, {
        value: contextOptions
      }, children);
    }
  }]);
  return IKContext2;
}(ImageKitComponent);
IKContext.propTypes = IKContextCombinedProps;
var COMBINED_IMAGE_PROP_TYPES = _objectSpread2$1(_objectSpread2$1({}, Props$2), Props);
var fetchEffectiveConnection = function fetchEffectiveConnection2() {
  try {
    return navigator.connection.effectiveType;
  } catch (ex) {
    return "4g";
  }
};
var areObjectsDifferent = function areObjectsDifferent2(prevProps, newProps, propsAffectingURL2) {
  for (var index = 0; index < propsAffectingURL2.length; index++) {
    if (prevProps[propsAffectingURL2[index]] !== newProps[propsAffectingURL2[index]]) {
      return true;
    }
  }
  return false;
};
var getSrc = function getSrc2(_ref, ikClient, contextOptions) {
  var urlEndpoint = _ref.urlEndpoint, lqip = _ref.lqip, src = _ref.src, path = _ref.path, transformation = _ref.transformation, transformationPosition = _ref.transformationPosition, queryParameters = _ref.queryParameters;
  var options = {
    urlEndpoint: urlEndpoint || contextOptions.urlEndpoint,
    src: src || contextOptions.src || void 0,
    path: path || contextOptions.path || void 0,
    transformation: transformation || contextOptions.transformation,
    transformationPosition: transformationPosition || contextOptions.transformationPosition || void 0,
    queryParameters: queryParameters || contextOptions.queryParameters || {}
  };
  var result = {
    originalSrc: ikClient.url(options)
  };
  if (lqip && lqip.active) {
    var quality = Math.round(lqip.quality || lqip.threshold || 20);
    var blur = Math.round(lqip.blur || 6);
    var newTransformation = options.transformation ? _toConsumableArray(options.transformation) : [];
    if (lqip.raw && typeof lqip.raw === "string" && lqip.raw.trim() != "") {
      newTransformation.push({
        raw: lqip.raw.trim()
      });
    } else {
      newTransformation.push({
        quality: String(quality),
        blur: String(blur)
      });
    }
    result.lqipSrc = ikClient.url(_objectSpread2$1(_objectSpread2$1({}, options), {}, {
      transformation: newTransformation
    }));
  }
  return result;
};
var getIKElementsUrl = function getIKElementsUrl2(_ref2, _ref3) {
  var _ref2$lqip = _ref2.lqip, lqip = _ref2$lqip === void 0 ? null : _ref2$lqip, loading = _ref2.loading;
  var intersected = _ref3.intersected, originalSrcLoaded = _ref3.originalSrcLoaded, originalSrc = _ref3.originalSrc, lqipSrc = _ref3.lqipSrc;
  var isLqipActive = function isLqipActive2(lqip2) {
    return lqip2 && lqip2.active;
  };
  if (loading !== "lazy" && !isLqipActive(lqip)) {
    return originalSrc;
  } else if (loading !== "lazy" && isLqipActive(lqip)) {
    if (originalSrcLoaded) {
      return originalSrc;
    } else {
      return lqipSrc;
    }
  } else if (loading === "lazy" && !isLqipActive(lqip)) {
    if (intersected) {
      return originalSrc;
    } else {
      return "";
    }
  } else {
    if (intersected && originalSrcLoaded) {
      return originalSrc;
    } else {
      return lqipSrc;
    }
  }
};
var propsAffectingURL = ["urlEndpoint", "path", "src", "transformation", "transformationPosition", "queryParameters"];
var IKImage = function(_ImageKitComponent) {
  _inherits(IKImage2, _ImageKitComponent);
  var _super = _createSuper(IKImage2);
  function IKImage2(props, context) {
    var _this;
    _classCallCheck$1(this, IKImage2);
    _this = _super.call(this, props, context);
    _this.imageRef = import_react.default.createRef();
    var _getSrc = getSrc(_this.props, _this.getIKClient(), _this.getContext()), originalSrc = _getSrc.originalSrc, lqipSrc = _getSrc.lqipSrc;
    _this.state = {
      currentUrl: void 0,
      originalSrc,
      lqipSrc,
      originalSrcLoaded: false,
      intersected: false,
      contextOptions: {}
    };
    return _this;
  }
  _createClass$1(IKImage2, [{
    key: "updateImageUrl",
    value: function updateImageUrl() {
      var url3 = getIKElementsUrl(this.props, this.state);
      this.setState({
        currentUrl: url3
      });
    }
  }, {
    key: "triggerOriginalImageLoad",
    value: function triggerOriginalImageLoad() {
      var _this2 = this;
      var img = new Image();
      img.onload = function() {
        _this2.setState({
          originalSrcLoaded: true
        }, function() {
          _this2.updateImageUrl();
        });
      };
      img.src = this.state.originalSrc;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;
      this.updateImageUrl();
      this.setState({
        contextOptions: this.getContext()
      });
      var image = this.imageRef.current;
      var _this$props = this.props, lqip = _this$props.lqip, loading = _this$props.loading;
      if (window && "IntersectionObserver" in window && loading === "lazy") {
        var connectionType = fetchEffectiveConnection();
        var rootMargin = "1250px";
        if (connectionType !== "4g")
          rootMargin = "2500px";
        var imageObserver = new IntersectionObserver(function(entries) {
          var el = entries[0];
          if (el && el.isIntersecting) {
            _this3.setState({
              intersected: true
            }, function() {
              if (lqip && lqip.active)
                _this3.triggerOriginalImageLoad();
              imageObserver.disconnect();
              _this3.updateImageUrl();
            });
          }
        }, {
          rootMargin: "".concat(rootMargin, " 0px ").concat(rootMargin, " 0px")
        });
        imageObserver.observe(image);
        this.setState({
          observe: imageObserver
        });
      } else {
        this.setState({
          intersected: true
        }, function() {
          if (lqip && lqip.active)
            _this3.triggerOriginalImageLoad();
          _this3.updateImageUrl();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var observe = this.state.observe;
      if (observe)
        observe.disconnect();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this4 = this;
      var contextOptions = this.getContext();
      if (areObjectsDifferent(prevProps, this.props, propsAffectingURL) || areObjectsDifferent(prevState.contextOptions, contextOptions, propsAffectingURL)) {
        var _getSrc2 = getSrc(this.props, this.getIKClient(), this.getContext()), originalSrc = _getSrc2.originalSrc, lqipSrc = _getSrc2.lqipSrc;
        this.setState({
          originalSrc,
          lqipSrc
        }, function() {
          _this4.updateImageUrl();
          _this4.setState({
            contextOptions: _this4.getContext()
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var currentUrl = this.state.currentUrl;
      var _this$props2 = this.props, urlEndpoint = _this$props2.urlEndpoint, loading = _this$props2.loading, lqip = _this$props2.lqip, path = _this$props2.path, src = _this$props2.src, transformation = _this$props2.transformation, transformationPosition = _this$props2.transformationPosition, queryParameters = _this$props2.queryParameters, restProps = _objectWithoutProperties(_this$props2, ["urlEndpoint", "loading", "lqip", "path", "src", "transformation", "transformationPosition", "queryParameters"]);
      return import_react.default.createElement("img", _extends({
        alt: this.props.alt || "",
        src: currentUrl,
        ref: this.imageRef
      }, restProps));
    }
  }]);
  return IKImage2;
}(ImageKitComponent);
IKImage.propTypes = COMBINED_IMAGE_PROP_TYPES;
var Props$3 = {
  path: import_prop_types.default.string,
  src: import_prop_types.default.string,
  queryParameters: import_prop_types.default.objectOf(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]).isRequired),
  transformation: import_prop_types.default.arrayOf(import_prop_types.default.object.isRequired),
  transformationPosition: import_prop_types.default.oneOf(["path", "query"])
};
var COMBINED_IMAGE_PROP_TYPES$1 = _objectSpread2$1(_objectSpread2$1({}, Props$2), Props$3);
var propsAffectingURL$1 = ["urlEndpoint", "path", "src", "transformation", "transformationPosition", "queryParameters"];
var IKVideo = function(_ImageKitComponent) {
  _inherits(IKVideo2, _ImageKitComponent);
  var _super = _createSuper(IKVideo2);
  function IKVideo2(props, context) {
    var _this;
    _classCallCheck$1(this, IKVideo2);
    _this = _super.call(this, props, context);
    _this.videoRef = import_react.default.createRef();
    var _getSrc = getSrc(_this.props, _this.getIKClient(), _this.getContext()), originalSrc = _getSrc.originalSrc;
    _this.state = {
      currentUrl: originalSrc,
      contextOptions: {}
    };
    return _this;
  }
  _createClass$1(IKVideo2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        contextOptions: this.getContext()
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;
      var contextOptions = this.getContext();
      if (areObjectsDifferent(prevProps, this.props, propsAffectingURL$1) || areObjectsDifferent(prevState.contextOptions, contextOptions, propsAffectingURL$1)) {
        var _getSrc2 = getSrc(this.props, this.getIKClient(), this.getContext()), originalSrc = _getSrc2.originalSrc;
        this.setState({
          currentUrl: originalSrc
        }, function() {
          _this2.setState({
            contextOptions: _this2.getContext()
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var currentUrl = this.state.currentUrl;
      var _this$props = this.props, urlEndpoint = _this$props.urlEndpoint, path = _this$props.path, src = _this$props.src, transformation = _this$props.transformation, transformationPosition = _this$props.transformationPosition, queryParameters = _this$props.queryParameters, restProps = _objectWithoutProperties(_this$props, ["urlEndpoint", "path", "src", "transformation", "transformationPosition", "queryParameters"]);
      return import_react.default.createElement("video", _extends({}, restProps, {
        ref: this.videoRef
      }), import_react.default.createElement("source", {
        src: currentUrl,
        type: "video/mp4"
      }));
    }
  }]);
  return IKVideo2;
}(ImageKitComponent);
IKVideo.propTypes = COMBINED_IMAGE_PROP_TYPES$1;
var PROP_TYPES = _objectSpread2$1(_objectSpread2$1({}, Props$2), Props$1);
var IKUpload = function(_ImageKitComponent) {
  _inherits(IKUpload2, _ImageKitComponent);
  var _super = _createSuper(IKUpload2);
  function IKUpload2() {
    var _temp, _this;
    _classCallCheck$1(this, IKUpload2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.state = {}, _temp));
  }
  _createClass$1(IKUpload2, [{
    key: "abort",
    value: function abort() {
      if (this.state.xhr) {
        this.state.xhr.abort();
      }
    }
  }, {
    key: "uploadFile",
    value: function uploadFile3(e) {
      var _e$target$files, _this2 = this;
      var contextOptions = this.getContext();
      var _this$props = this.props, fileName = _this$props.fileName, useUniqueFileName = _this$props.useUniqueFileName, tags = _this$props.tags, folder = _this$props.folder, isPrivateFile = _this$props.isPrivateFile, customCoordinates = _this$props.customCoordinates, responseFields = _this$props.responseFields, extensions = _this$props.extensions, webhookUrl = _this$props.webhookUrl, overwriteFile = _this$props.overwriteFile, overwriteAITags = _this$props.overwriteAITags, overwriteTags = _this$props.overwriteTags, overwriteCustomMetadata = _this$props.overwriteCustomMetadata, customMetadata = _this$props.customMetadata, onError = _this$props.onError, onSuccess = _this$props.onSuccess;
      var publicKey = this.props.publicKey || contextOptions.publicKey;
      var authenticationEndpoint = this.props.authenticationEndpoint || contextOptions.authenticationEndpoint;
      var urlEndpoint = this.props.urlEndpoint || contextOptions.urlEndpoint;
      if (!publicKey || publicKey.trim() === "") {
        if (onError && typeof onError === "function") {
          onError({
            message: "Missing publicKey"
          });
        }
        return;
      }
      if (!authenticationEndpoint || authenticationEndpoint.trim() === "") {
        if (onError && typeof onError === "function") {
          onError({
            message: "Missing authenticationEndpoint"
          });
        }
        return;
      }
      if (!urlEndpoint || urlEndpoint.trim() === "") {
        if (onError && typeof onError === "function") {
          onError({
            message: "Missing urlEndpoint"
          });
        }
        return;
      }
      var ikClient = this.getIKClient();
      var file = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0];
      if (!file) {
        return;
      }
      if (this.props.validateFile && !this.props.validateFile(file)) {
        return;
      }
      if (this.props.onUploadStart && typeof this.props.onUploadStart === "function") {
        this.props.onUploadStart(e);
      }
      var xhr = new XMLHttpRequest();
      var progressCb = function progressCb2(e2) {
        if (_this2.props.onUploadProgress && typeof _this2.props.onUploadProgress === "function") {
          _this2.props.onUploadProgress(e2);
        }
      };
      xhr.upload.addEventListener("progress", progressCb);
      var params = {
        file,
        fileName: fileName || file.name,
        useUniqueFileName,
        tags,
        folder,
        isPrivateFile,
        customCoordinates,
        responseFields,
        extensions,
        webhookUrl,
        overwriteFile,
        overwriteAITags,
        overwriteTags,
        overwriteCustomMetadata,
        customMetadata,
        xhr
      };
      ikClient.upload(params, function(err, result) {
        if (err) {
          if (onError && typeof onError === "function") {
            onError(err);
          }
        } else {
          if (onSuccess && typeof onSuccess === "function") {
            onSuccess(result);
          }
        }
        xhr.upload.removeEventListener("progress", progressCb);
      }, {
        publicKey,
        authenticationEndpoint
      });
      this.setState({
        xhr
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props2 = this.props, publicKey = _this$props2.publicKey, urlEndpoint = _this$props2.urlEndpoint, authenticationEndpoint = _this$props2.authenticationEndpoint, fileName = _this$props2.fileName, useUniqueFileName = _this$props2.useUniqueFileName, tags = _this$props2.tags, folder = _this$props2.folder, isPrivateFile = _this$props2.isPrivateFile, customCoordinates = _this$props2.customCoordinates, responseFields = _this$props2.responseFields, onError = _this$props2.onError, onSuccess = _this$props2.onSuccess, onUploadStart = _this$props2.onUploadStart, onUploadProgress = _this$props2.onUploadProgress, inputRef = _this$props2.inputRef, validateFile = _this$props2.validateFile, restProps = _objectWithoutProperties(_this$props2, ["publicKey", "urlEndpoint", "authenticationEndpoint", "fileName", "useUniqueFileName", "tags", "folder", "isPrivateFile", "customCoordinates", "responseFields", "onError", "onSuccess", "onUploadStart", "onUploadProgress", "inputRef", "validateFile"]);
      return import_react.default.createElement("input", _extends({}, restProps, {
        ref: inputRef,
        type: "file",
        onChange: function onChange(e) {
          if (_this3.props.onChange && typeof _this3.props.onChange === "function") {
            _this3.props.onChange(e);
          }
          _this3.uploadFile(e);
        }
      }));
    }
  }]);
  return IKUpload2;
}(ImageKitComponent);
IKUpload.propTypes = PROP_TYPES;
IKUpload.defaultProps = {
  useUniqueFileName: true,
  isPrivateFile: false,
  customCoordinates: "",
  tags: [],
  folder: "/",
  responseFields: []
};
export {
  IKContext,
  ImageKit as IKCore,
  IKImage,
  IKUpload,
  IKVideo
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=imagekitio-react.js.map
