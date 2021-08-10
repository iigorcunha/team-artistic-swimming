import { makeStyles } from '@material-ui/core';

interface PropsButtons {
  colorDashboard: string;
  colorCalendar: string; //user: User;
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  logoBox: {
    margin: 0,
    padding: 0,
    marginLeft: '28px',
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    margin: 0,
    padding: 0,
  },
  logoTitle: {
    margin: 0,
    padding: 0,
    marginTop: '3px',
    fontSize: '1.7rem',
    marginLeft: '17px',
    fontWeight: 600,
  },
  button: {
    margin: 0,
  },
  centerButtons: {
    margin: 0,
    padding: 0,
    marginLeft: 290,
    paddingTop: 5,
    width: 295,
    display: 'flex',
    justifyContent: 'space-between',
  },
  dashboardButton: (props: PropsButtons) => ({
    color: props.colorDashboard, //'#666561' or '#759CFC'
    fontSize: 16,
    fontWeight: 400,
  }),
  calendarButton: (props: PropsButtons) => ({
    color: props.colorCalendar, //'#666561' or '#759CFC'
    fontSize: 16,
    fontWeight: 400,
  }),
  createBoardButton: {
    margin: 0,
    color: 'white',
    fontSize: '1rem',
    fontWeight: 500,
    padding: '10px 32px',
    marginLeft: 135,
  },
  avatar: {
    margin: 0,
    padding: 0,
  },
  // ...
  menuButton: {
    alignSelf: 'flex-end',
    //marginRight: theme.spacing(2),
    //marginTop: theme.spacing(1),
  },
  toolbarTop: {
    minHeight: 33,
    alignItems: 'flex-start',
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  toolbarBottom: {
    minHeight: 64,
    alignItems: 'flex-start',
    paddingTop: 9,
    paddingBottom: 11,
    marginRight: 20,
    color: 'white',
  },
  titleBottom: {
    flexGrow: 1,
    fontSize: '1.05rem',
    fontWeight: 600,
    margin: 0,
    padding: 0,
    marginLeft: 28,
    marginTop: 14,
  },
});

export default useStyles;
