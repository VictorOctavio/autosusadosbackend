"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./src/app"));

require("./src/db");

var _config = require("./src/config");

_app.default.listen(_config.PORT, function () {
  console.log("server on port ".concat(_config.PORT));
});