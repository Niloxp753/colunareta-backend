import { User } from 'src/user/entities/user.entity';
export declare class Institution {
    id: string;
    nome: string;
    telefone: string;
    cep: string;
    numero: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
    complemento: string;
    usuarios: User[];
    createdAt?: Date;
    updatedAt?: Date;
}
