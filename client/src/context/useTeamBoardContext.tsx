import { useState, useContext, createContext, FunctionComponent } from 'react';

interface ITeamBoardContext {
  teams: any;
  activeTeam: any;
  userTeamBoards: any;
}

export const TeamBoardContext = createContext<ITeamBoardContext>({
  teams: '',
  activeTeam: '',
  userTeamBoards: '',
});

export const TeamBoardProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [teams, setTeams] = useState<string>('');
  const [activeTeam, setActiveTeam] = useState<string>('');
  const [userTeamBoards, setUserTeamBoards] = useState<string>('');

  return (
    <TeamBoardContext.Provider value={{ teams, activeTeam, userTeamBoards }}>{children}</TeamBoardContext.Provider>
  );
};

export function useTeamBoard(): ITeamBoardContext {
  return useContext(TeamBoardContext);
}
