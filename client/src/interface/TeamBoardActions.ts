import { Team, TeamsList } from "./Team";

export interface ActiveTeamAction {
  type: string;
  team: Team;
}

export interface UserTeamAction {
  type: string;
  teams: TeamsList;
}
