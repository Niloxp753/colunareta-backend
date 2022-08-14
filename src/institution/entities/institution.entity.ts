import { Studant } from 'src/studants/entities/studant.entity';

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
  complement: string;
  students?: Studant[];
}
