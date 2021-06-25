"use strict";
var modules = ({
  "./src/title.js": ((unuse_module, exports, require) => {
    require.r(exports);
    require.d(exports, {
      "default": () => (EXPORT),
      "name": () => (name)
    });
    const EXPORT = ('age');
    const name = 'name';
  })
});
var cache = {};

function require(moduleId) {
  var cachedModule = cache[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  var module = cache[moduleId] = {
    exports: {}
  };
  modules[moduleId](module, module.exports, require);
  return module.exports;
}
require.d = (exports, definition) => {
  for (var key in definition) {
    if (require.o(definition, key) && !require.o(exports, key)) {
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: definition[key]
      });
    }
  }
};
require.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
require.r = (exports) => {
  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    Object.defineProperty(exports, Symbol.toStringTag, {
      value: 'Module'
    });
  }
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
};
var exports = {};
require.r(exports);
var _title__WEBPACK_IMPORTED_MODULE_0__ = require("./src/title.js");
console.log(_title__WEBPACK_IMPORTED_MODULE_0__.default, _title__WEBPACK_IMPORTED_MODULE_0__.name);