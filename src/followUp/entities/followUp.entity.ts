import { Forwarding } from '../model/followUp.enum';

export class FollowUp {
  id?: string;
  startDate: string;
  firstPhoto: string;
  secondPhoto: string;
  returnDate: string;
  note?: string;
  forwarding: Forwarding[];
  studentId: string;
}
