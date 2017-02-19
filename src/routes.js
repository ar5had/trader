import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/index';
import Homepage from './components/Homepage/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
  </Route>
);
