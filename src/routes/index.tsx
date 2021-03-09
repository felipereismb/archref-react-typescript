import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/Auth/SignIn';

import Route from './Route';

const healthcheck = require('../../healthcheck.json');
const info = require('../../info.json');

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" component={Dashboard} isPrivate />

    <Route path="/healthcheck" component={healthcheck} />
    <Route path="/info" component={info} />
  </Switch>
);

export default Routes;
