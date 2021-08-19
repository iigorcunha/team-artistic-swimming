import React, { useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Calendar from './pages/Calendar/Calendar';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import { AppProvider } from './context';

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
        <AppProvider>
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
            <ProtectedRoute exact path="/calendar" demoUser={demoUser} component={Calendar} />
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </AppProvider>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
