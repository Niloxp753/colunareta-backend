"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudantsController = void 0;
const common_1 = require("@nestjs/common");
const studants_service_1 = require("./studants.service");
const create_studant_dto_1 = require("./dto/create-studant.dto");
const update_studant_dto_1 = require("./dto/update-studant.dto");
const swagger_1 = require("@nestjs/swagger");
let StudantsController = class StudantsController {
    constructor(studantsService) {
        this.studantsService = studantsService;
    }
    create(createStudantDto) {
        return this.studantsService.create(createStudantDto);
    }
    findAll() {
        return this.studantsService.findAll();
    }
    findOne(id) {
        return this.studantsService.findOne(id);
    }
    update(id, updateStudantDto) {
        return this.studantsService.update(id, updateStudantDto);
    }
    delete(id) {
        return this.studantsService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Cadastrar um aluno',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_studant_dto_1.CreateStudantDto]),
    __metadata("design:returntype", void 0)
], StudantsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Vizualizar todos os alunos cadastrados',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudantsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Vizualiza um aluno pelo ID',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudantsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Atulizar um aluno pelo ID',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_studant_dto_1.UpdateStudantDto]),
    __metadata("design:returntype", void 0)
], StudantsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: 'Deletar um aluno pelo ID',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudantsController.prototype, "delete", null);
StudantsController = __decorate([
    (0, swagger_1.ApiTags)('studants'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('studant'),
    __metadata("design:paramtypes", [studants_service_1.StudantsService])
], StudantsController);
exports.StudantsController = StudantsController;
//# sourceMappingURL=studants.controller.js.map