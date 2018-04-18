import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { Button, Form, Input, Divider } from 'semantic-ui-react';

import {SignUpLink} from './SignUp';
import {PasswordForgetLink} from './PasswordForget';
import {auth} from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({history}) => <div>
  <h1>SignIn</h1>
  <SignInForm history={history}/>
  <PasswordForgetLink/>
  <SignUpLink/>
</div>

const byPropKey = (propertyName, value) => () => ({[propertyName]: value});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    };
  }

  onSubmit = (event) => {
    console.log('hi');
    const {email, password} = this.state;

    const {history} = this.props;
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({
          ...INITIAL_STATE
        }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }
  componentWillUnmount(){
    this.setState({...INITIAL_STATE});
  }

  render() {
    const {email, password, error} = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
        <Input
          type="text"
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          placeholder='Email Address'/>
        </Form.Field>
        <Form.Field>
        <Input
          type="password"
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          placeholder='Password'/>
        </Form.Field>
        <Divider />
        <Button disabled={isInvalid} type="submit">
          Sign In
        </Button>
        {error && <p>{error.massage}</p>}
      </Form>
    );
  }
}

export default withRouter(SignInPage);

export {SignInForm};
