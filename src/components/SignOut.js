import React from 'react';

import { auth } from '../firebase';
import { ButtonCircle } from 'rebass'

const SignOutButton = () =>
  <ButtonCircle
    type="button"
    onClick={auth.doSignOut}  
  >
    Sign Out
  </ButtonCircle>

export default SignOutButton;