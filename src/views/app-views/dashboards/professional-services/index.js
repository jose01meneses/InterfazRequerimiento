import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const ProfessionalServices = ({ match }) => {
  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Redirect from={`${match.url}`} to={`${match.url}/default`} />
      </Switch>
    </Suspense>
  )
};

export default ProfessionalServices;