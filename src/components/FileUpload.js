import React, { Component } from 'react'
import { db } from '../firebase'
import { Button, Form, Input, Label } from 'semantic-ui-react'
import withAuthorization from './withAuthorization'
import AuthUserContext from './AuthUserContext'

class FileUpload extends Component {
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
    db.uploadFile(authUser.uid, file)
  }

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <Form onSubmit={(e) => this.onFormSubmit(authUser, e)}>
            <Form.Field>
              <Label>Upload your file</Label>
              <Input type="file" onChange={this.onChange} />
              <Button type="submit">Upload</Button>
            </Form.Field>
          </Form>
        )}
      </AuthUserContext.Consumer>
    )
  }
}

const authCondition = authUser => !!authUser

export default withAuthorization(authCondition)(FileUpload)
