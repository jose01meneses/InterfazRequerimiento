import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import GeneralBalance from './general-balance';
import Revenue from './revenue';
import Expense from './expenses';


const Personal = ({ match }) => {
  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${match.url}/general-balance`} component={GeneralBalance} />
        <Route path={`${match.url}/revenue`} component={Revenue} />
        <Route path={`${match.url}/expense`} component={Expense} />
        <Redirect from={`${match.url}`} to={`${match.url}/default`} />
      </Switch>
    </Suspense>
  )
};

export default Personal;