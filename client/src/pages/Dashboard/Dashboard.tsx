import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './useStyles';
import Board from '../../components/Board/Board';
import DashboardBar from '../../components/DashboardBar/DashboardBar';
import { useBoard } from '../../context/useBoardContext';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useEffect } from 'react';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();
  const { setInitialBoardList } = useBoard();

  const { initSocket } = useSocket();

  useEffect(() => {
    setInitialBoardList();
  }, [setInitialBoardList]);

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  return (
    <React.Fragment>
      <DashboardBar />
      <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
        <CssBaseline />
        <Board />
      </Grid>
    </React.Fragment>
  );
}
