import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Container} from 'semantic-ui-react'

import AuthUserContext from './AuthUserContext';
import ResponsiveContainerAuth from './ResponsiveContainerAuth';
import ResponsiveContainerNonAuth from './ResponsiveContainerNonAuth';
import SignUpLink from './SignUp'
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = () => <AuthUserContext.Consumer>
    {authUser => authUser
        ? <NavigationAuth/>
        : <NavigationNonAuth/>
}
</AuthUserContext.Consumer>

const NavigationAuth = () => 
<ResponsiveContainerAuth /> 

const NavigationNonAuth = () => <ResponsiveContainerNonAuth />
    

export default Navigation;
