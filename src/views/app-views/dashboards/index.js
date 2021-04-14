import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Personal from './personal';
import Business from './business';
import ProfessionalServices from './professional-services';
import Blog from './blog';
import Settings from './settings';

const Dashboards = ({ match }) => {
  return(
      <Switch>
      
        <Route path={`${match.url}/personal`} component={Personal}/>
        <Route path={`${match.url}/business`} component={Business} />
        <Route path={`${match.url}/professional-services`} component={ProfessionalServices} />
        <Route path={`${match.url}/blog`} component={Blog} />
        <Route path={`${match.url}/settings`} component={Settings} />
        <Redirect from={`${match.url}`} to={`${match.url}/personal`} />
      </Switch>
  )
};
 
export default Dashboards;