import { Outlet } from 'react-router-dom';
import { Top } from './Top';

export const Layout = () => {
  return (
    <div className="p-8">
      <Top />
      <Outlet />
    </div>
  );
};
