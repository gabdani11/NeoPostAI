import {createBrowserRouter} from 'react-router-dom'
import Auth from '../../features/auth/pages/Auth'


const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>
    },
    {
        path: "/auth",
        element: <Auth/>
    },
])
export default router