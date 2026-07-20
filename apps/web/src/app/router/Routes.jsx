import { createBrowserRouter, Navigate } from "react-router-dom";
import Auth from "../../features/auth/pages/Auth";
import Register from "../../features/auth/components/Register";
import Login from "../../features/auth/components/Login";
import Landing from "../../landing/Landing";
import AppLayout from "../layouts/AppLayout";
import Discover from "../../features/discover/Discover";
import PostEditor from "../../features/postEditor/PostEditor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="discover" replace />,
      },
      {
        path: "discover",
        element: <Discover />,
      },
      {
        path: "post-editor",
        element: <PostEditor />,
      },
    ],
  },
]);
export default router;
