import { UserTeamBoardsAction } from "../../interface/TeamBoardActions";

  const GET_USER_COLLABORATION_BOARDS = 'GET_USER_COLLABORATION_BOARDS';
  
  export const getUsersTeamBoards = (boards: any): UserTeamBoardsAction => {
    return {
      type: GET_USER_COLLABORATION_BOARDS,
      boards,
    };
  };
  
  export default function reducer(draft: any, action: UserTeamBoardsAction): void {
    switch (action.type) {
      case GET_USER_COLLABORATION_BOARDS:
        return action.boards;
      default:
        return draft;
    }
  }