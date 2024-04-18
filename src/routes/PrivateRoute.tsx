import { type ReactElement } from 'react';
import { useKeycloak } from '@react-keycloak/web';

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { keycloak } = useKeycloak();
  if (!keycloak.authenticated) {
    keycloak.login();
    return <></>;
  }
  return children;
};

export default PrivateRoute;
