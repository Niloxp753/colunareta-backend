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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
        this.userSelect = {
            id: true,
            nome: true,
            email: true,
            cargo: true,
            createdAt: true,
            updatedAt: true,
        };
    }
    findAll() {
        return this.prisma.user.findMany({
            select: this.userSelect,
        });
    }
    async findById(id) {
        const record = await this.prisma.user.findUnique({
            where: { id },
            select: this.userSelect,
        });
        if (!record) {
            throw new common_1.NotFoundException(`Registro com o ID '${id}' não encontrado`);
        }
        return record;
    }
    async findOne(id) {
        return this.findById(id);
    }
    async create(dto) {
        const data = Object.assign({}, dto);
        return this.prisma.user.create({ data });
    }
    async update(id, dto) {
        await this.findById(id);
        const data = Object.assign({}, dto);
        return this.prisma.user
            .update({
            where: { id },
            data,
            select: this.userSelect,
        })
            .catch(this.handleError);
    }
    async remove(id) {
        await this.findById(id);
        await this.prisma.user.delete({ where: { id } });
    }
    handleError(error) {
        var _a, _b;
        const errorLines = (_a = error.message) === null || _a === void 0 ? void 0 : _a.split('\n');
        const lastErrorLine = (_b = errorLines[errorLines.length - 1]) === null || _b === void 0 ? void 0 : _b.trim();
        if (!lastErrorLine) {
            console.error(error);
        }
        throw new common_1.UnprocessableEntityException(lastErrorLine || 'Algum erro ocorreu ao executar a operação');
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map