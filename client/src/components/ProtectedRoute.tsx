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
  console.log('demoUser from protected route: ', demoUser);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedInUser === undefined || !demoUser) {
          return (
            <Redirect
              to={{
                pathname: '/unauthorized',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        } else {
          if (loggedInUser || demoUser) {
            return <Component {...rest} {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: '/unauthorized',
                  state: {
                    from: props.location,
                  },
                }}
              />
            );
          }
        }
      }}
    />
  );
};

export default ProtectedRoute;
