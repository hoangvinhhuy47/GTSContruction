import { Routes, Route } from "react-router-dom";

import { privateRoutes } from "./private";
import { flattenRoutes, randomId } from "common/functions";

import HomeLayout from "layout/Home";

// Home page
import Home from "pages/Home";

// Notfound page
import NotFound from "pages/NotFound";
import { publicRoutes } from "./public";
import { LoginLayout } from "layout/LoginLayout";
import { DashboardLayout } from "layout/DashboardLayout";

const Router: React.FC = () => {
  const privates = flattenRoutes(privateRoutes);
  const publics = flattenRoutes(publicRoutes);
  return (
    <Routes>
      <Route path="/" element={<LoginLayout />}>
        {publics.map(({ path, name, Element }) => {
          const Page = Element as React.FC;
          return (
            <Route
              path={path}
              element={<Page />}
              key={`route-${name}-${randomId()}`}
            />
          );
        })}
      </Route>
      {/* <Route element={<PrivateRoute />}> */}
      <Route element={<DashboardLayout />}>
        {privates.map(({ path, name, Element }) => {
          const Page = Element as React.FC;
          return (
            <Route
              path={path}
              element={<Page />}
              key={`route-${name}-${randomId()}`}
            />
          );
        })}
      </Route>
      {/* </Route> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
