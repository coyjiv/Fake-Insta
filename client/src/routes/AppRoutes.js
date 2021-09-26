import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../pages/Main/Main';
import NotFound from '../pages/NotFound/NotFound';
import Profile from '../pages/Profile/Profile';

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/profile/:username" component={Profile} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}
