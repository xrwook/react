import { useEffect, useLayoutEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import useUserInfo from '../store/useUserInfo';
import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { setUser } = useUserInfo((state: any) => state);

  const { keycloak } = useKeycloak();
  useEffect(() => {
    // if (keycloak.authenticated) {
    //   const loadUser = async () => {
    //     const user = await keycloak.loadUserInfo();
    //     setUser(user);
    //   };
    //   loadUser();
    // } else {
    //   keycloak.login();
    // }
  }, [keycloak]);

  useLayoutEffect(() => {
    if (keycloak.authenticated) {
      const loadUser = async () => {
        const user = await keycloak.loadUserInfo();
        setUser(user);
      };
      loadUser();
    } else {
      keycloak.login();
    }
  }, [keycloak]);

  if (keycloak.authenticated) {
    return <Outlet />;
  } else {
    return <></>;
  }
};

export default PrivateRoute;
