import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from './containers/Home';
import { Fila } from './containers/Fila';
import { Pilha } from './containers/Pilha';

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/fila'>
        <Fila />
      </Route>
      <Route path='/pilha'>
        <Pilha />
      </Route>
    </Switch>
  )
}
