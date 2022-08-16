"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudantDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_studant_dto_1 = require("./create-studant.dto");
class UpdateStudantDto extends (0, mapped_types_1.PartialType)(create_studant_dto_1.CreateStudantDto) {
}
exports.UpdateStudantDto = UpdateStudantDto;
//# sourceMappingURL=update-studant.dto.js.map