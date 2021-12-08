import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { HomeContainer } from './container/Home'

import { TodosContainer } from 'container/Todos'
import { TodosReadContainer } from 'container/Todos/read'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        component={() => <TodosReadContainer fetchPolicy="network-only" />}
        path="/read-query-network-only"
        exact
      />
      <Route
        component={() => <TodosReadContainer fetchPolicy="no-cache" />}
        path="/read-query-no-cache"
        exact
      />
      <Route component={HomeContainer} path="/" exact />
      <Route component={() => <TodosContainer />} path="/:fetchPolicy" exact />
    </Switch>
  </BrowserRouter>
)
