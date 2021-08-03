import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import { AuthProvider } from './context/useAuthContext';
import { BoardProvider } from './context/useBoardContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import { BackdropProvider } from './context/useBackDropContext';
import './App.css';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <BoardProvider>
              <BackdropProvider>
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/dashboard">
                    <Dashboard />
                  </Route>
                  <Route path="*">
                    <Redirect to="/login" />
                  </Route>
                </Switch>
              </BackdropProvider>
            </BoardProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
