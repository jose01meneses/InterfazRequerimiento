import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import Faq from '../blog/faq';


const Blog = ({ match }) => {
  return(
<Faq></Faq>

  )
};

export default Blog;

/*   <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
      <Redirect from={`${match.url}`} to={`${match.url}/default`} />
      </Switch>
    </Suspense> */