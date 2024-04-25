import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Layout } from '../common/Tab/Layout';
import { Home_ } from '../common/Tab/Home';
import { AxiosQuery } from '../pages/Subpage/AxiosQuery';
import { ReactQuery } from '../pages/Subpage/ReactQuery';
import Articles from '../pages/Articles';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Test from '../pages/Subpage/test';
import Chart from '../pages/Subpage/chart';
import SaasBuy from '../pages/Saas/SassBuy';
import Sublayot from '../common/layout/Sublayot';
import New from '../pages/Subpage/New';
import Gird from '../pages/Gird';

const Router = () => {
  return (
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
          path="/buy"
          element={
            <PublicRoute>
              <SaasBuy />
            </PublicRoute>
          }
        />

        <Route
          path="/tab"
          element={
            <>
              <Articles />
              <Layout />
            </>
          }
        >
          <Route index element={<Home_ />} />
          <Route path="axios-query" element={<AxiosQuery />} />
          <Route path="react-query" element={<ReactQuery />} />
        </Route>

        <Route element={<Sublayot />}>
          <Route element={<PrivateRoute />}>
            <Route
              path="/test"
              element={
                <>
                  <Test />
                  <Chart />
                </>
              }
            />
            <Route path="/new" element={<New />} />
          </Route>

          <Route path="/grid" element={<Gird />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
