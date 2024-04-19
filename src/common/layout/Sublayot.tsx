import Header from './SubHeader';
import { Outlet } from 'react-router-dom';
const Sublayot = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Sublayot;
