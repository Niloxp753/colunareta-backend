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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInstitutionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateInstitutionDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Nome completo da instituição',
        example: 'CE Joaquim Tavora',
    }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/, {
        message: 'escreva um número válido.',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'Número de telefone da instituição',
        example: '(21)2203-0000',
    }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^[0-9]{5}-[0-9]{3}$/, {
        message: 'escreva um cep válido.',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'Cep do endereço da instituição',
        example: '24220-000',
    }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "cep", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Número do endereço da instituição',
        example: 'SN',
    }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "numero", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Endereço onde fica a instituição',
        example: 'Praça Prefeito Ferraz',
    }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "logradouro", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Bairro onde fica a instituição',
        example: 'Icaraí',
    }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "bairro", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Cidade onde fica a instituição',
        example: 'Niterói',
    }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "cidade", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Estado onde fica a instituição',
        example: 'RJ',
    }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Complemento onde fica a instituição',
        example: 'Instituição próxima ao campo São Bento',
    }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "complemento", void 0);
exports.CreateInstitutionDto = CreateInstitutionDto;
//# sourceMappingURL=create-institution.dto.js.map