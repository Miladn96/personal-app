import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { routes, RoutesModel } from "../routes";
import "./style.scss";

export const App = () => {
  const routeChildren = (_routes: RoutesModel[]) => (
    <>
      {_routes.map((route) =>
        route.children ? (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          >
            {routeChildren(route.children)}
          </Route>
        ) : (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        )
      )}
    </>
  );
  useEffect(()=>{
    console.log('useEffect - App')
  })
  return (
    <>
      <Routes>{routeChildren(routes)}</Routes>
    </>
  );
};
