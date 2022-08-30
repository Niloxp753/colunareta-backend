export class FollowUp {
  id?: string;
  startDate: string;
  firstPhoto: string;
  secondPhoto: string;
  returnDate: string;
  note?: string;
  forwarding?: {
    id?: string;
    raiox?: string;
    fisioterapia?: string;
    colete?: string;
    cirurgia?: string;
    angulocob?: string;
  };
  studentId: string;
}
