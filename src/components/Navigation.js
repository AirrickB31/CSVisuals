import React from 'react';

import AuthUserContext from './AuthUserContext';
import ResponsiveContainerAuth from './ResponsiveContainerAuth';
import ResponsiveContainerNonAuth from './ResponsiveContainerNonAuth';

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
