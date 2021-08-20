import { TeamsList } from '../../interface/Team';
import { UserTeamAction } from '../../interface/TeamBoardActions';
import { addAndSwitchToNewTeam } from './reducerFunctions';

const CREATE_TEAM = 'CREATE_TEAM';
const GET_ALL_TEAMS_LIST = 'GET_ALL_TEAMS_LIST';

export const createdNewTeam = (teams: TeamsList): UserTeamAction => {
  return {
    type: CREATE_TEAM,
    teams,
  };
};

export const gotAllTeams = (teams: TeamsList): UserTeamAction => {
  return {
    type: GET_ALL_TEAMS_LIST,
    teams,
  };
};

export default function reducer(draft: TeamsList, action: UserTeamAction): TeamsList {
  switch (action.type) {
    case CREATE_TEAM:
      return addAndSwitchToNewTeam(draft, action);
    case GET_ALL_TEAMS_LIST:
      return action.teams;
    default:
      return draft;
  }
}
