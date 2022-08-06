"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitutionService = void 0;
const common_1 = require("@nestjs/common");
let InstitutionService = class InstitutionService {
    create(createInstitutionDto) {
        return 'This action adds a new institution';
    }
    findAll() {
        return `This action returns all institution`;
    }
    findOne(id) {
        return `This action returns a #${id} institution`;
    }
    update(id, updateInstitutionDto) {
        return `This action updates a #${id} institution`;
    }
    remove(id) {
        return `This action removes a #${id} institution`;
    }
};
InstitutionService = __decorate([
    (0, common_1.Injectable)()
], InstitutionService);
exports.InstitutionService = InstitutionService;
//# sourceMappingURL=institution.service.js.map