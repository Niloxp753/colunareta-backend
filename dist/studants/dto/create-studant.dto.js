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
exports.CreateStudantDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateStudantDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Nome do aluno',
        example: 'Alex Faria',
    }),
    __metadata("design:type", String)
], CreateStudantDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Idade do aluno',
        example: '25',
    }),
    __metadata("design:type", Number)
], CreateStudantDto.prototype, "idade", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Telefone de contato do aluno',
        example: '62921212121',
    }),
    __metadata("design:type", String)
], CreateStudantDto.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'CPF do aluno',
        example: '00000000000',
    }),
    __metadata("design:type", String)
], CreateStudantDto.prototype, "cpf", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'CEP de onde o aluno residi',
        example: '74820610',
    }),
    __metadata("design:type", String)
], CreateStudantDto.prototype, "cep", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Nome do logradouro onde o aluno residi',
        example: 'Rua José Silva Tavares',
    }),
    __metadata("design:type", String)
], CreateStudantDto.prototype, "logradouro", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Nome do bairro onde o aluno residi',
        example: 'Lagoinha',
    }),
    __metadata("design:type", String)
], CreateStudantDto.prototype, "bairro", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Nome da cidade onde o aluno residi',
        example: 'Alex Faria',
    }),
    __metadata("design:type", String)
], CreateStudantDto.prototype, "cidade", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Nome do estado onde o aluno residi',
        example: 'São Paulo',
    }),
    __metadata("design:type", String)
], CreateStudantDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, swagger_1.ApiProperty)({
        description: 'Imagem URL do aluno',
        example: 'https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg',
    }),
    __metadata("design:type", String)
], CreateStudantDto.prototype, "url_image", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Consultas agendadas para o aluno',
        example: '...',
    }),
    __metadata("design:type", String)
], CreateStudantDto.prototype, "consultas", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Agendar consulta para o aluno',
        example: '...',
    }),
    __metadata("design:type", String)
], CreateStudantDto.prototype, "agConsultas", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Id da instituição onde o aluno estuda',
        example: '...',
    }),
    __metadata("design:type", String)
], CreateStudantDto.prototype, "instituicaoId", void 0);
exports.CreateStudantDto = CreateStudantDto;
//# sourceMappingURL=create-studant.dto.js.map