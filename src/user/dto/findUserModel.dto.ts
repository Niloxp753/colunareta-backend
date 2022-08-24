import { User } from '../entities/user.entity';

export class FindUserModel {
  users: User[];
  totalPages: number;
}
