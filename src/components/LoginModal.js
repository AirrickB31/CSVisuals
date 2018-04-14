import React, { Component } from 'react'

import SignInForm from './SignIn';
import {
  Button,
  Modal
} from 'semantic-ui-react'

class ModalLogin extends Component {
    state = { open: false }
  
    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
  
    render() {
      const { open } = this.state
  
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

