import {createBrowserRouter, Navigate} from 'react-router-dom'
import Auth from '../../features/auth/pages/Auth'
import Register from '../../features/auth/components/Register'
import Login from '../../features/auth/components/Login'


const router = createBrowserRouter([{
    path: "/",
    element: <Navigate to="/auth" replace />,

    },
    {
    path: "/auth",
    element: <Auth/>,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>,
      },
    ],
  },
])
export default router