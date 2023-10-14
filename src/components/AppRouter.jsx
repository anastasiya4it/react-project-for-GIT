import React, { useContext } from "react";
import { pablicRoutes } from '../router/pablicRoutes';
import { privateRoutes } from '../router/privateRoutes';
import { useRoutes } from 'react-router-dom';
import { AuthContext } from "../context/context";

const AppRouter = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);
    const privateAllRoutes = useRoutes(privateRoutes);
    const pablicAllRoutes = useRoutes(pablicRoutes);
    
    return (
        (isAuth) ?

            privateAllRoutes
            :
            pablicAllRoutes

    );
};

export default AppRouter;