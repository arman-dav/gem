import { lazy, Suspense } from "react";

import { useMoralis } from "react-moralis";
import { Route, Routes } from "react-router";
import { v4 as uuid_v4 } from "uuid";

import routes from "../../routes";
import Loader from "../loader/Loader";
const NotFound = lazy(() => import("../notFound/NotFound"));

const Routs = () => {
  const { isAuthenticated } = useMoralis();

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route
              path={path === "/profile" && !isAuthenticated ? uuid_v4() : path}
              element={element()}
              key={path}
            />
          ))}
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Suspense>
    </>
  );
};

export default Routs;
