import React, { Component } from 'react'

import SignUpForm from './SignUp';
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
          <Button as='a' inverted onClick={this.show} primary style={{ marginLeft: '0.5em' }}>Sign Up</Button>
  
          <Modal open={open} onClose={this.close}  style={{ maxWidth: '250px'}}>
            <Modal.Content>
              <SignUpForm />
            </Modal.Content>
          </Modal>
        </div>
      )
    }
  }

export default ModalLogin
