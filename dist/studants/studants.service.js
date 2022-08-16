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
exports.StudantsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const handle_error_utility_1 = require("../utility/handle-error.utility");
let StudantsService = class StudantsService {
    constructor(prisma) {
        this.prisma = prisma;
        this.studantsSelect = {
            id: true,
            nome: true,
            idade: true,
            telefone: true,
            cpf: true,
            cep: true,
            logradouro: true,
            bairro: true,
            cidade: true,
            estado: true,
            url_image: true,
            consultas: true,
            agConsultas: true,
            instituicaoId: true,
        };
    }
    async create(dto) {
        const data = Object.assign({}, dto);
        return await this.prisma.studant.create({
            data,
            select: this.studantsSelect
        }).catch(handle_error_utility_1.handleError);
    }
    findAll() {
        return this.prisma.studant.findMany();
    }
    async findById(id) {
        const record = await this.prisma.studant.findUnique({ where: { id } });
        if (!record) {
            throw new common_1.NotFoundException(`Registro com o ID '${id}' não encontrado`);
        }
        return record;
    }
    findOne(id) {
        return this.findById(id);
    }
    async update(id, dto) {
        await this.findById(id);
        const data = Object.assign({}, dto);
        return this.prisma.studant.update({
            where: { id },
            data,
            select: this.studantsSelect
        }).catch(handle_error_utility_1.handleError);
    }
    async delete(id) {
        await this.findById(id);
        await this.prisma.studant.delete({ where: { id } });
    }
};
StudantsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudantsService);
exports.StudantsService = StudantsService;
//# sourceMappingURL=studants.service.js.map