"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const common_1 = require("@nestjs/common");
function handleError(err) {
    var _a, _b;
    const error = (_a = err.message) === null || _a === void 0 ? void 0 : _a.split('\n');
    const lastErrLine = (_b = error[error.length - 1]) === null || _b === void 0 ? void 0 : _b.trim();
    if (!lastErrLine) {
        console.error(err);
    }
    throw new common_1.UnprocessableEntityException(lastErrLine || 'Algum erro ocorreu ao executar a operação');
}
exports.handleError = handleError;
//# sourceMappingURL=handle-error.utility.js.map