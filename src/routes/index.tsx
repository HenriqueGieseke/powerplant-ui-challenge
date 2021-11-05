import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Clients from '../pages/Clients';
import PowerPlant from '../pages/Powerplant';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={PowerPlant} />
      <Route exact path="/clients" component={Clients} />
    </Switch>
  );
};

export default Routes;
