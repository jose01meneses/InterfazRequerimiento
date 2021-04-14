import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import generalBalance from "./general-balance/";
import revenue from "./revenue";

const ProfessionalServices = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${match.url}/general-balance`}
          component={generalBalance}
        />
        <Route path={`${match.url}/revenue`} component={revenue} />
        <Redirect from={`${match.url}`} to={`${match.url}/default`} />
      </Switch>
    </Suspense>
  );
};

export default ProfessionalServices;
