import Keycloak from 'keycloak-js';
const keycloakConfig = {
  url: 'https://auth.xr-friends.com/auth/',
  realm: 'careeasy',
  clientId: 'app',
};
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;
