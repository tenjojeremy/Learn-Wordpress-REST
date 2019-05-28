import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { withRouter } from 'react-router'

// Route Pages
import BlogsRoutes from '../Pages/Blogs/blogs.routes'

const Routes = withRouter(({ history }) => {
  // Set history object globally
  window.historyRouter = history

  return (
    <>
      <BlogsRoutes />
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
