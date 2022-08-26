import { FollowUp } from 'src/followUp/entities/followUp.entity';

export class Student {
  id?: string;
  name: string;
  age: string;
  phone?: string;
  institutionId: string;
  consult?: FollowUp[];
}
