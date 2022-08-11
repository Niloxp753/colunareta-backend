import { Consult } from "@prisma/client";

export class Studant {
  id?: string;
  nome: string;
  data_nasc: string;
  telefone?: string;
  instituicaoId: string;
  consultaId: string;
  createdAt?: Date;
  updatedAt?: Date;
  consultas: Consult[];
}
