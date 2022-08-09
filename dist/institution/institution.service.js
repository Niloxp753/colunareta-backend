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
exports.handleError = exports.InstitutionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InstitutionService = class InstitutionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        if (dto.usuarios) {
            return await this.prisma.institution
                .create({
                data: {
                    nome: dto.nome,
                    telefone: dto.telefone,
                    cep: dto.cep,
                    logradouro: dto.logradouro,
                    bairro: dto.bairro,
                    cidade: dto.cidade,
                    estado: dto.estado,
                    usuarios: {
                        connect: {
                            id: dto.usuarios,
                        },
                    },
                },
                include: {
                    usuarios: true,
                },
            })
                .catch(handleError);
        }
    }
    findAll() {
        return `This action returns all institution`;
    }
    findOne(id) {
        return `This action returns a #${id} institution`;
    }
    update(id, dto) {
        return `This action updates a #${id} institution`;
    }
    delete(id) {
        return `This action removes a #${id} institution`;
    }
};
InstitutionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InstitutionService);
exports.InstitutionService = InstitutionService;
function handleError(error) {
    var _a, _b;
    const errorLines = (_a = error.message) === null || _a === void 0 ? void 0 : _a.split('\n');
    const lastErrorLine = (_b = errorLines[errorLines.length - 1]) === null || _b === void 0 ? void 0 : _b.trim();
    if (!lastErrorLine) {
        console.error(error);
    }
    throw new common_1.UnprocessableEntityException(lastErrorLine || 'Algum erro aconteceu ao executar a operação');
}
exports.handleError = handleError;
//# sourceMappingURL=institution.service.js.map