import { useContext, createContext, FunctionComponent } from 'react';
import { Team, TeamsList } from '../interface/Team';
import { useImmer } from 'use-immer';

interface ITeamBoardContext {
  teams: TeamsList;
  activeTeam: Team;
}

export const TeamBoardContext = createContext<ITeamBoardContext>({
  teams: {} as TeamsList,
  activeTeam: {} as Team,
});

export const TeamBoardProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [teams, setTeams] = useImmer<TeamsList>({} as TeamsList);
  const [activeTeam, setActiveTeam] = useImmer<Team>({} as Team);

  return <TeamBoardContext.Provider value={{ teams, activeTeam }}>{children}</TeamBoardContext.Provider>;
};

export function useTeamBoard(): ITeamBoardContext {
  return useContext(TeamBoardContext);
}
