import React, { Component } from 'react';
import { storage } from '../firebase';
import { Button, Form, Input, Label } from 'semantic-ui-react'
import withAuthorization from './withAuthorization'
import AuthUserContext from './AuthUserContext'

class ShowUploads extends Component {
  state = {
    file: null,
    user: null,
  }

  getFile(authUser) {
    storage.retrieveFile(authUser.uid);
  }

  render() {
    return (
      <AuthUserContext.Consumer>
      {authUser => (
        this.getFile(authUser)
      )}
      </AuthUserContext.Consumer>
    )
  }
}

const authCondition = authUser => !!authUser

export default withAuthorization(authCondition)(ShowUploads);
