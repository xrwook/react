import Router from './routes';
import Header from './common/Header';


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
