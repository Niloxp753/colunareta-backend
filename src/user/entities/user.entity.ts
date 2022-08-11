import { Institution } from "@prisma/client";

export class User {
  id?: string;
  nome: string;
  email: string;
  cargo: string;
  senha: string;
  createdAt?: Date;
  updatedAt?: Date;

  instituicoes?: Institution[]
}
