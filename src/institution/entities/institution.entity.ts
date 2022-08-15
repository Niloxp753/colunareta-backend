import { Student } from 'src/studants/entities/student.entity';

export class Institution {
  id: string;
  name: string;
  phone: string;
  cep: string;
  adressNumber: string;
  street: string;
  district: string;
  city: string;
  state: string;
  complement?: string;
  students?: Student[];
}
