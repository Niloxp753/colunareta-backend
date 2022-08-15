import { Consult } from 'src/consult/entities/consult.entity';

export class Student {
  id?: string;
  name: string;
  age: string;
  phone?: string;
  institutionId: string;
  consult?: Consult[];
}
