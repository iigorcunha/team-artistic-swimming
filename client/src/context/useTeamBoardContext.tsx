import { useState, useContext, createContext, FunctionComponent } from 'react';

interface ITeamBoardContext {
  teams: any;
  activeTeam: any;
}

export const TeamBoardContext = createContext<ITeamBoardContext>({
  teams: '',
  activeTeam: '',
});

export const TeamBoardProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [teams, setTeams] = useState<string>('');
  const [activeTeam, setActiveTeam] = useState<string>('');

  return (
    <TeamBoardContext.Provider value={{ teams, activeTeam }}>{children}</TeamBoardContext.Provider>
  );
};

export function useTeamBoard(): ITeamBoardContext {
  return useContext(TeamBoardContext);
}
