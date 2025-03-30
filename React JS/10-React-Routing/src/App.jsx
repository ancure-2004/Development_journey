import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navigationbar from './components/Navigationbar'
import ParamComp from './components/ParamComp'
import Courses from './components/Courses'
import Mocktests from './components/Mocktests'
import Reports from './components/Reports'
import NotFound from './components/NotFound'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navigationbar/>
        <Home/>
      </div>
    },

    {
      path: "/about",
      element: <div>
      <Navigationbar/>
      <About/>
    </div>
    },

    {
      path: "/dashboard",
      element: <div>
      <Navigationbar/>
      <Dashboard/>
    </div>,
      children: [
        {
          path: 'courses',
          element: <Courses/>
        },
        {
          path: 'mockTests',
          element: <Mocktests/>
        },
        {
          path: 'reports',
          element: <Reports/>
        }
      ]
    },

    {
      path: "/student/:id",
      element: <div>
        <Navigationbar/>
        <ParamComp/>
      </div>
    },

    {
      path : '*',
      element: <NotFound/>
    }
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
   
export default App
