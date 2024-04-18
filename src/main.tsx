import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './style/index.css';
import './style/style.css';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './locale/index';
import keycloak from './keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

const initOptions = {
  onLoad: 'check-sso',
  checkLoginIframe: false,
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
      <App />
    </ReactKeycloakProvider>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </QueryClientProvider>,
  // </React.StrictMode>,
);
