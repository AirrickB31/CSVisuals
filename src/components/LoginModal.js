import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

import {SignUpLink} from './SignUp';
import {PasswordForgetLink} from './PasswordForget';
import {auth} from '../firebase';
import * as routes from '../constants/routes';
import SignInForm from './SignIn';
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Grid,
  Message,
  Segment,
} from 'semantic-ui-react'

class ModalLogin extends Component {
    state = { open: false }
  
    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
  
    render() {
      const { open, size } = this.state
  
      return (
        <div>
          <Button onClick={this.show}>Log In</Button>
  
          <Modal open={open} onClose={this.close}>
            <Modal.Content>
              <SignInForm />
            </Modal.Content>
          </Modal>
        </div>
      )
    }
  }

export default ModalLogin

