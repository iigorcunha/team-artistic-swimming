import { Board } from './Board';
import { User } from './User';

export interface TeamBoard extends Board {
  description: string;
  team: string;
}

export interface Team {
  boards: TeamBoard[];
  collaborators: User[];
  name: string;
  owner: User;
  description: string;
  _id: string;
}

export type TeamsList = Pick<Team, 'name' | '_id'>;
