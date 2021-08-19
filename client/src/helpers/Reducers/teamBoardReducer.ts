import { Team } from '../../interface/Team';
import { ActiveTeamAction } from '../../interface/TeamBoardActions';
import {
  addCollaboratorsToTeam,
  addNewBoardToTeam,
  setSelectedTeamBoard,
  removeDeletedTeamBoardFromList,
  handleDragAndDropOfTeamBoard,
} from './reducerFunctions';

const INVITE_COLLABORATOR = 'INVITE_COLLABORATOR';
const CREATE_TEAM_BOARD = 'CREATE_TEAM_BOARD';
const GET_ALL_TEAM_BOARDS = 'GET_ALL_TEAM_BOARDS';
const SET_TEAM_BOARD = 'SET_TEAM_BOARD';
const DELETE_TEAM_BOARD = 'DELETE_TEAM_BOARD';
const HANDLE_TEAM_BOARD_REARRANGEMENT = 'HANDLE_TEAM_BOARD_REARRANGEMENT';

export const invitedCollaboator = (team: Team): ActiveTeamAction => {
  return {
    type: INVITE_COLLABORATOR,
    team,
  };
};

export const createdNewTeamBoard = (team: Team): ActiveTeamAction => {
  return {
    type: CREATE_TEAM_BOARD,
    team,
  };
};

export const gotAllTeamBoards = (team: Team): ActiveTeamAction => {
  return {
    type: GET_ALL_TEAM_BOARDS,
    team,
  };
};

export const setTeamBoard = (team: Team): ActiveTeamAction => {
  return {
    type: SET_TEAM_BOARD,
    team,
  };
};

export const removeTeamBoard = (team: Team): ActiveTeamAction => {
  return {
    type: DELETE_TEAM_BOARD,
    team,
  };
};

export const reArrangeTeamBoard = (team: Team): ActiveTeamAction => {
  return {
    type: HANDLE_TEAM_BOARD_REARRANGEMENT,
    team,
  };
};

export default function reducer(draft: Team, action: ActiveTeamAction): Team {
  switch (action.type) {
    case INVITE_COLLABORATOR:
      return addCollaboratorsToTeam(draft, action);
    case CREATE_TEAM_BOARD:
      return addNewBoardToTeam(draft, action);
    case GET_ALL_TEAM_BOARDS:
      return action.team;
    case SET_TEAM_BOARD:
      return setSelectedTeamBoard(draft, action);
    case DELETE_TEAM_BOARD:
      return removeDeletedTeamBoardFromList(draft, action);
    case HANDLE_TEAM_BOARD_REARRANGEMENT:
      return handleDragAndDropOfTeamBoard(draft, action);
    default:
      return draft;
  }
}
