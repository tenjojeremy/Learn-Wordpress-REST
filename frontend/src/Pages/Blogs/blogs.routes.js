import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import CoreTemplate from '../../Ui/Templates/Core/core.index'

//Components
const Blog = lazy(() => import(/* webpackChunkName: 'Blog' */ './blogs.index'))

// Exports
export default () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/blogs" />} />
    <Route
      path="/blogs"
      render={() => (
        <CoreTemplate>
          <Suspense fallback={null}>
            <Switch>
              <Route exact path="/blogs" render={() => <Blog />} />
            </Switch>
          </Suspense>
        </CoreTemplate>
      )}
    />
  </Switch>
)
