import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { withRouter } from 'react-router'

// Route Pages
import ProjectsRoutes from '../Pages/Projects/projects.routes'

const Routes = withRouter(({ history }) => {
  // Set history object globally
  window.historyRouter = history

  return (
    <>
      <ProjectsRoutes />
    </>
  )
})

export default () => (
  <BrowserRouter>
    <>
      <Routes />
    </>
  </BrowserRouter>
)
