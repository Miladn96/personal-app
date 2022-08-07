import { Link, Navigate, Route, Routes } from "react-router-dom";
import { routes, RoutesModel } from "../routes";
import "./style.scss";

export const App = () => {
  const routeChildren = (_routes: RoutesModel[]) => (
    <>
      {_routes.map((route) => {
        if (route.redirectTo)
          return (
            <Route key={route.path} path={route.path} element={<Navigate to={route.redirectTo} replace />} />
          );
        if (route.children)
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            >
              {routeChildren(route.children)}
            </Route>
          );
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        );
      })}
    </>
  );
  return (
    <>
    <div className="btns">
      <Link to={"/home/about"}>About</Link>
      <br />
      <Link to={"/admin/messages"}>Admin</Link>
    </div>
      <Routes>{routeChildren(routes)}</Routes>
    </>
  );
};
