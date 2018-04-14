import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react'

import AuthUserContext from './AuthUserContext';
import SignUpLink from './SignUp'
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = () => <AuthUserContext.Consumer>
    {authUser => authUser
        ? <NavigationAuth/>
        : <NavigationNonAuth/>
}
</AuthUserContext.Consumer>

const NavigationAuth = () => <ul>
    <li>
        <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
        <Link to={routes.HOME}>Home</Link>
    </li>
    <li>
        <Link to={routes.ACCOUNT}>Account</Link>
    </li>
    <li><SignOutButton/></li>
</ul>
const NavigationNonAuth = () => <Menu inverted>
    <Container>
    <Menu.Item>
        <Link to={routes.LANDING}>Landing</Link>
    </Menu.Item>
    <Menu.Menu position='right'>
        <Menu.Item>
            <Link to={routes.SIGN_IN}>Sign In</Link>
        </Menu.Item>
    </Menu.Menu>
    </Container>
</Menu>

export default Navigation;
