import React, { Component } from 'react'
import { Route, Switch } from 'dva/router'
import routes from './router'

class App extends Component {
  render () {
    return (
      <Switch>{routes.map(({ path, exact, component: Component }) => { return <Route key={path} path={path} exact={exact} component={Component} /> })}</Switch>
    )
  }
}

export default App
