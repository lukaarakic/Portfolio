import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Root from './routes/root'
import ErrorPage from './routes/errror-page'
import Index from './routes/index'
import ProjectPage from './routes/project-page'
import WorkPage from './routes/work-page'
import AboutMe from './routes/about-me'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'project/:projectName',
        element: <ProjectPage />,
      },
      {
        path: 'projects',
        element: <WorkPage />,
      },
      {
        path: 'about-me',
        element: <AboutMe />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
