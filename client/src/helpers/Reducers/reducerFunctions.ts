export function addAndSwitchToNewTeam(state: any, action: any) {
  console.log(action, 'New Team will be added to user on dispatch');
}

export function addCollaboratorsToTeam(state: any, action: any) {
  console.log(action, 'New Collaborator will be added to team on dispatch');
}

export function addNewBoardToTeam(state: any, action: any) {
  console.log(action, 'New Board will be added to team on dispatch');
}

export function setSelectedTeamBoard(state: any, action: any) {
  console.log(action, 'New Board will be displayed to user on dispatch');
}

export function removeDeletedTeamBoardFromList(state: any, action: any) {
  console.log(action, 'A Board will be removed from team board list to team on dispatch');
}

export function handleDragAndDropOfTeamBoard(state: any, action: any) {
  console.log(action, 'Board will be rearranged on dispatch');
}
