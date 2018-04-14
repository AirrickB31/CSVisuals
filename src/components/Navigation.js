import React from 'react';
import {Link} from 'react-router-dom';
import {Toolbar, NavLink} from 'rebass';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = () => <AuthUserContext.Consumer>
    {authUser => authUser
        ? <NavigationAuth/>
        : <NavigationNonAuth/>
}
</AuthUserContext.Consumer>

const NavigationAuth = () => <Toolbar bg="black">
    <NavLink>
        <Link to={routes.LANDING}>Landing</Link>
    </NavLink>
    <NavLink ml='auto'>
        <Link to={routes.HOME}>Home</Link>
    </NavLink>
    <NavLink>
        <Link to={routes.ACCOUNT}>Account</Link>
    </NavLink>
    <NavLink>
        <SignOutButton />
    </NavLink>
</Toolbar>

const NavigationNonAuth = () => <Toolbar bg="black">
    <NavLink>
        <Link to={routes.LANDING}>Landing</Link>
    </NavLink>
    <NavLink ml='auto'>
        <Link to={routes.SIGN_IN}>Sign In</Link>
    </NavLink>
    <NavLink>
        <SignOutButton />
    </NavLink>
</Toolbar>

export default Navigation;
