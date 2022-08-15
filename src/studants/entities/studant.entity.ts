import { Consult } from 'src/consult/entities/consult.entity';

export class Studant {
  id: string;
  name: string;
  age: string;
  phone?: string;
  institutionId: string;
  consult?: Consult[];
}
