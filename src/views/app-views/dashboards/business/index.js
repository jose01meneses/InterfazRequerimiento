import React, {  Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import revenue from './revenue'

const Business = ({ match }) => {
  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
      <Route path={`${match.url}/revenue`} component={revenue} />
        <Redirect from={`${match.url}`} to={`${match.url}/default`} />
      </Switch>
    </Suspense>
  )
};

export default Business;