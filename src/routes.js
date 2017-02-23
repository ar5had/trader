import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/index';
import Main from './components/Main/index';
import Profile from './components/Profile/index';
import Login from './components/Login/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/profile" component={Profile} />
    <Route path="/login" component={Login} />
  </Route>
);
