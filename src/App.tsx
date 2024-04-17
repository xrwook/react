import Router from './routes';
import Header from './common/Header';

import keycloak, { initOptions } from './keycloak';

keycloak.init(initOptions);

export default function App() {
  return (
    <>
      <div className="App font-mono h-screen">
        <Header />
        <Router />
      </div>
    </>
  );
}
