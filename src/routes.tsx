import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Example = () => {
  return (
    <div>
      <h1>webpack Example</h1>
    </div>
  )
}

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Example} path="/" exact />
    </Switch>
  </BrowserRouter>
)
