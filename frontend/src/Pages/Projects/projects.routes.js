import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import CoreTemplate from '../../Ui/Templates/Core/core.index'

//Components
const Project = lazy(() =>
  import(/* webpackChunkName: 'Project' */ './projects.index')
)
const ProjectDetails = lazy(() =>
  import(/* webpackChunkName: 'Project' */ './projects.details')
)

// Exports
export default () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/projects" />} />
    <Route
      path="/projects"
      render={() => (
        <CoreTemplate>
          <Suspense fallback={null}>
            <Switch>
              <Route exact path="/projects" render={() => <Project />} />
              <Route
                exact
                path="/projects/:id"
                render={() => <ProjectDetails />}
              />
            </Switch>
          </Suspense>
        </CoreTemplate>
      )}
    />
  </Switch>
)
