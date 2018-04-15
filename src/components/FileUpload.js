import React, { Component } from 'react';
import {firebase } from '../firebase';
import { Button, Form, Input, Label } from 'semantic-ui-react';
 
class FileUpload extends Component {
  state = {
    file: null
  };
 
  onFormSubmit = (event) => {
    event.preventDefault();
    this.fileUpload(this.state.file)
  };
  onChange = (event) => this.setState({file: event.target.files[0]});
  fileUpload = (file) => {

  };
 
  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Form.Field>
          <Label>Upload your file</Label>
          <Input type="file" onChange={this.onChange} />
          <Button type="submit">Upload</Button>
        </Form.Field>
      </Form>
    );
  }
}
 
export default FileUpload;