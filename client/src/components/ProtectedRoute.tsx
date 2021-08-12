import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useAuth } from './../context/useAuthContext';

interface Props extends RouteProps {
  component: React.ComponentType;
  demoUser: boolean;
}

//#14 Protected route
const ProtectedRoute = ({ component: Component, demoUser, ...rest }: Props): JSX.Element => {
  const { loggedInUser } = useAuth();
  //console.log('demoUser from protected route: ', demoUser);
  console.log('loggedinuser: ');
  console.log(loggedInUser);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedInUser || demoUser) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
