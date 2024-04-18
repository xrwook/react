import Keycloak from 'keycloak-js';
import type { KeycloakOnLoad, KeycloakInitOptions } from 'keycloak-js';

// const { VITE_KEYCLOAK_URL, VITE_KEYCLOAK_REALM, VITE_KEYCLOAK_CLIENT_ID } =
//   import.meta.env;

// VITE_KEYCLOAK_URL=https://auth.xr-friends.com/auth/
// VITE_KEYCLOAK_REALM=careeasy
// VITE_KEYCLOAK_CLIENT_ID=app

/**
 * keycloak 설정
 */
const keycloakInfo = {
  url: 'https://auth.xr-friends.com/auth/',
  realm: 'careeasy',
  clientId: 'app',
};

/**
 * keycloak 인스턴스 생성
 */
const keycloak = new Keycloak(keycloakInfo);

/**
 * keycloak 초기화 옵션
 */
//'login-required'|'check-sso';
const load: KeycloakOnLoad = 'login-required';
export const initOptions: KeycloakInitOptions = {
  onLoad: load,
  redirectUri: `${window.location.origin}/test`,
  // checkLoginIframe: false,
};

// export const doLogin = keycloak.login;
// export const doLogout = keycloak.logout;
// export const getToken = () => keycloak.token;
// export const getTokenParsed = () => keycloak.tokenParsed;
// export const isLoggedIn = () => !!keycloak.token;

export const init = () => {
  keycloak
    .init(initOptions)
    .then((authenticated) => {
      console.log('authenticated', authenticated);
    })
    .catch((error) => {
      console.log('keycloak error', error);
    });
};

/**
 * keycloak 이벤트 처리
 * @param event
 * @param error
 */
export const onKeycloakEvent = (event: unknown, error: unknown) => {
  console.log('keycloak event ', event, error);
  switch (event) {
    case 'onAuthLogout':
      keycloak.logout();
      break;
    case 'onAuthRefreshError':
      keycloak.logout();
      break;
    case 'onAuthRefreshSuccess':
      //개발계에서만 사용, 실제 운영계에서는 제외
      console.log('auth token:  ', keycloak.token);
      console.log('refresh token:  ', keycloak.refreshToken);
      break;
    default:
      break;
  }
};

export default keycloak;
