import { Consult } from 'src/consult/entities/consult.entity';

export class Studant {
  id?: string;
  nome: string;
  data_nasc: string;
  telefone?: string;
  instituicaoId: string;
  createdAt?: Date;
  updatedAt?: Date;
  consultas?: Consult[];
}
