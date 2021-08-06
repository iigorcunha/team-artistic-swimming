import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authFooter: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginTop: 17,
    marginBottom: 0,
    paddingBottom: 0,
  },
  accAside: {
    fontSize: 16,
    color: 'black',
    fontWeight: 500,
    textAlign: 'center',
    marginRight: 0,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    marginTop: 16,
    marginBottom: 6,
  },
  link: { textDecoration: 'none' },
  accLabel: {
    width: 0,
    height: 0,
    backgroundColor: '#ffffff',
    color: '#3a8dff',
    boxShadow: 'none',
    marginRight: 0,
    marginTop: 8,
    scrollMarginBottom: 8,
    fontSize: 16,
    fontWeight: 400,
  },
  accBtn: {
    width: 170,
    height: 54,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: '#ffffff',
    //color: '#3a8dff', // light blue
    color: '#838EDE', ////nikko blue
    boxShadow: 'none',
    marginRight: 35,
  },
}));

export default useStyles;
