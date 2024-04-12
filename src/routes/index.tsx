import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Layout } from '../common/Tab/Layout';
import { Home_ } from '../common/Tab/Home';
import { AxiosQuery } from '../pages/Subpage/AxiosQuery';
import { ReactQuery } from '../pages/Subpage/ReactQuery';
import Articles from '../pages/Articles';
import Home from '../pages/Home';
// import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Test from '../pages/Subpage/test';
import Chart from '../pages/Subpage/chart';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/tab"
        element={
          // <PrivateRoute>
          <>
            <Articles />
            <Layout />
          </>
          //</PrivateRoute>
        }
      >
        <Route index element={<Home_ />} />
        <Route path="axios-query" element={<AxiosQuery />} />
        <Route path="react-query" element={<ReactQuery />} />
      </Route>
      <Route
        path="/test"
        element={
          <>
            <Test />
            <Chart />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
