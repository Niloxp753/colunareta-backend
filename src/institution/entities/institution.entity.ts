import { Studant } from 'src/studants/entities/studant.entity';

export class Institution {
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
  alunos?: Studant[];
}
