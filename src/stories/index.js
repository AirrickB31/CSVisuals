import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import styled from 'styled-components';
import { 
  BrowserRouter as Router,
  Route, 
} from 'react-router-dom';

import {Button, Welcome} from '@storybook/react/demo';

import {Link} from 'react-router-dom';
import {
  Toolbar,
  NavLink,
  ButtonOutline,
  Heading,
  ButtonCircle,
  Lead,
  Text
} from 'rebass';
import * as routes from '../constants/routes';

const StyledLink = styled(Link)`
  text-decoration: none;
  font-color: white;
`

const StyledText = styled(Text)`
  text-decoration: none;
  color: white;
  font-size: 36px;
`


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Button', module).add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>
).add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
);

storiesOf('rebass', module).add('auth', () => 
<Router>
<Toolbar bg="black">
    <NavLink>
      <StyledLink fontSize={5} to={routes.LANDING}>
      <StyledText>
      Landing
      </StyledText>
      </StyledLink>
    </NavLink>
    <NavLink ml='auto'>
      <StyledLink to={routes.SIGN_IN}>
        <ButtonOutline p={1}>
          <Heading fontSize={3}>
            Sign In
          </Heading>
        </ButtonOutline>
      </StyledLink>
    </NavLink>
    <NavLink>
      <ButtonCircle>
        <Link to={routes.SIGN_UP}>
          Sign Up
        </Link>

      </ButtonCircle>
    </NavLink>
  </Toolbar>
  </Router>
);