import React, { useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './pages/Unauthorized/Unauthorized';

import './App.css';

function App(): JSX.Element {
  const [demoUser, setDemoUser] = useState(false);
  const handleDemoLogin = ({ demoUser }: { demoUser: boolean }) => {
    //setDemoUser(demoUser);
    setDemoUser(true);
    console.log('Inside HandleDemoLogin', demoUser);
  };
  //Logout is not used right now
  //const handleDemoLogout = ({ demoUser }: { demoUser: boolean }) => {
  //  //setDemoUser(demoUser);
  //  setDemoUser(false);
  //  console.log('Inside HandleDemoLogout', demoUser);
  //};
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <Switch>
                <Route
                  exact
                  path="/login"
                  render={(props: any) => <Login {...props} demoUser={demoUser} handleDemoLogin={handleDemoLogin} />}
                />
                <Route
                  exact
                  path="/signup"
                  render={(props: any) => <Signup {...props} demoUser={demoUser} handleDemoLogin={handleDemoLogin} />}
                />
                <ProtectedRoute exact path="/dashboard" demoUser={demoUser} component={Dashboard} />
                <Route exact path="/unauthorized" component={Unauthorized} />
                <Route path="*">
                  <Redirect to="/login" />
                </Route>
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;

//<Route exact path="/signup" component={Signup} />
