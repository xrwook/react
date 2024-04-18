import Router from './routes';
import Header from './common/Header';
import { useKeycloak } from '@react-keycloak/web';

export default function App() {
  const { initialized } = useKeycloak();
  if (!initialized) {
    return <></>;
  }
  return (
    <>
      <div className="App font-mono h-screen">
        <Header />
        <Router />
      </div>
    </>
  );
}
