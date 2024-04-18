import Router from './routes';
import Header from './common/Header';

import { init } from './keycloak';

init();

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
