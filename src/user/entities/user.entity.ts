import { Institution } from 'src/institution/entities/institution.entity';

export class User {
  id?: string;
  nome: string;
  email: string;
  cargo: string;
  senha: string;
  createdAt?: Date;
  updatedAt?: Date;

  instituicaoId?: Institution[];
}
