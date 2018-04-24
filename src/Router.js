import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/home';

const BaseRouter = () => (
  <div className="route-wrapper">
    <Route exact path="/" component={Home} />
  </div>
);

export default BaseRouter;
