import { Team, TeamsList } from "../../interface/Team";
import { ActiveTeamAction, UserTeamAction } from "../../interface/TeamBoardActions";

export function addAndSwitchToNewTeam(state: TeamsList, action: UserTeamAction) {
  console.log(action, 'New Team will be added to user on dispatch');
  return state;
}

export function addCollaboratorsToTeam(state: Team, action: ActiveTeamAction) {
  console.log(action, 'New Collaborator will be added to team on dispatch');
  return state;
}

export function addNewBoardToTeam(state: Team, action: ActiveTeamAction) {
  console.log(action, 'New Board will be added to team on dispatch');
  return state;
}

export function setSelectedTeamBoard(state: Team, action: ActiveTeamAction) {
  console.log(action, 'New Board will be displayed to user on dispatch');
  return state;
}

export function removeDeletedTeamBoardFromList(state: Team, action: ActiveTeamAction) {
  console.log(action, 'A Board will be removed from team board list to team on dispatch');
  return state;
}

export function handleDragAndDropOfTeamBoard(state: Team, action: ActiveTeamAction) {
  console.log(action, 'Board will be rearranged on dispatch');
  return state;
}
