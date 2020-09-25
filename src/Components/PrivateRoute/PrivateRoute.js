import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                loggedInUser.email ? (
                    children
                    ) : (
          <Redirect
            to={{
              pathname: "/Authentication",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;