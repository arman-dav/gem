import { lazy, Suspense } from "react";

import { useMoralis } from "react-moralis";
import { Route, Switch } from "react-router";
import { v4 as uuid_v4 } from "uuid";

import routes from "../../routes";
import Loader from "../loader/Loader";
const NotFound = lazy(() => import("../notFound/NotFound"));

const Routs = () => {
  const { isAuthenticated } = useMoralis();

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route
              path={path === "/profile" && !isAuthenticated ? uuid_v4() : path}
              component={component}
              key={path}
              exact={true}
            />
          ))}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default Routs;
