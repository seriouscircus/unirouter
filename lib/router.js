'use strict';

exports.__esModule = true;
exports.configureRouter = configureRouter;
exports.default = getRouter;

var _unilocCaseSensitive = require('uniloc-case-sensitive');

var _unilocCaseSensitive2 = _interopRequireDefault(_unilocCaseSensitive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _unilocCaseSensitive2.default)();

function configureRouter(routes, aliases) {
  router = (0, _unilocCaseSensitive2.default)(routes, aliases);
}

function getRouter() {
  return router;
}
//# sourceMappingURL=router.js.map