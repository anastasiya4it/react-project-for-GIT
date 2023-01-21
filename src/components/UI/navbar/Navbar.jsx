import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/context';
import classes from './Navbar.module.css';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const logout = (event) => {
        event.preventDefault();
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                <Link to='/about' className={classes.links}>Home</Link>
                <Link to='/posts' className={classes.links}>Posts</Link>
                <Link to='/login' className={classes.links} onClick={logout}>Exit</Link>
            </div>
        </div>
    );
};

export default Navbar;