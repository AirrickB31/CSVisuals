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

  onFormSubmit = (authUser, e) => {
    e.preventDefault()
    this.fileUpload(authUser, this.state.file)
  }
  onChange = event => this.setState({ file: event.target.files[0] })

  fileUpload(authUser, file) {
    storage.uploadFile(authUser.uid, file)
  }

  render() {
    return (
      <AuthUserContext.Consumer>
        <div>
        {authUser => (
          <Label>
          {storage.retrieveFile(authUser.uid)}
          </Label>
        )}
        </div>
      </AuthUserContext.Consumer>
    )
  }
}

const authCondition = authUser => !!authUser

export default withAuthorization(authCondition)(ShowUploads);
