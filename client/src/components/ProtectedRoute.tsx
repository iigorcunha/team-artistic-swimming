import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useAuth } from '../context/useAuthContext';
import { useSocket } from '../context/useSocketContext';
import { useEffect } from 'react';
interface Props extends RouteProps {
  component: React.ComponentType;
  demoUser: boolean;
}

//#14 Protected route
const ProtectedRoute = ({ component: Component, demoUser, ...rest }: Props): JSX.Element => {
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

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
