import React, { useContext } from "react";
import { pablicRoutes } from '../router/pablicRoutes';
import { privateRoutes } from '../router/privateRoutes';
import { useRoutes } from 'react-router-dom';
import { AuthContext } from "../context/context";
import Loader from "./UI/loader/Loader";
const AppRouter = () => {
    const { isAuth, isLogin } = useContext(AuthContext);
    // let isAuth = false;
    const privateAllRoutes = useRoutes(privateRoutes);
    const pablicAllRoutes = useRoutes(pablicRoutes);
    if (isLogin) {
        return <Loader />
    }

    return (
        (isAuth) ?

            privateAllRoutes
            :
            pablicAllRoutes

    );
};

export default AppRouter;