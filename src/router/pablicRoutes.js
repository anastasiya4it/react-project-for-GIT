import Login from '../pages/Login';
import { Navigate } from 'react-router-dom';
export const pablicRoutes = [
    { path: '/login', element: <Login /> },
    { path: '*', element: < Navigate to="/login" /> },
]