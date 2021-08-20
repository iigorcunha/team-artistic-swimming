import { makeStyles } from '@material-ui/core';

interface PropsButtons {
  colorDashboard: string;
  colorCalendar: string;
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
    color: props.colorDashboard,
    fontSize: 16,
    fontWeight: 400,
  }),
  calendarButton: (props: PropsButtons) => ({
    color: props.colorCalendar,
    fontSize: 16,
    fontWeight: 400,
  }),
  avatar: {
    margin: 0,
    padding: 0,
  },
  menuButton: {
    alignSelf: 'flex-end',
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
