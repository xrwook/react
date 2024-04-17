import { type ReactElement, useEffect } from 'react';
// import { Navigate } from 'react-router';
import keycloak from '../keycloak';

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    // keycloak.login();
    const xxx = async () => {
      const cc = await keycloak.loadUserProfile();
      console.log(cc);
    };
    xxx();
  }, []);
  // return isLoggedIn() ? children : <Navigate to="/" />;
  return children;
};

export default PrivateRoute;
