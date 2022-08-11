
export class Studant {
  id?: string;
  nome: string;
  data_nasc: string;
  telefone?: string;
  instituicaoId: string;
  createdAt?: Date;
  updatedAt?: Date;
  consultas: Consult[];
}
