import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Navbar from "../components/UI/navbar/Navbar";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <PostIdPage /> },
  { path: "*", element: <Navigate to="/about" /> },
];
