import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import {SignUpLink} from './SignUp';
import {PasswordForgetLink} from './PasswordForget';
import {auth, provider} from '../firebase';
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
  user: null,
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    };
  }

  async login() {
    const result = await auth().signInWithPopup(provider)
    this.setState({user: result.user});
  }

  async logout() {
    await auth().signOut()
    this.setState({user: null});
  }

  async componentWillMount() {
    const user = await auth.onAuthStateChanged();
    if(user) this.setState({user})
  }

  onSubmit = (event) => {
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

  render() {
    const {email, password, error} = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            placeholder='Email Address'/>
          <input
            type="password"
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            placeholder='Password'/>
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>
          {error && <p>{error.massage}</p>}
        </form>
        <div className="App">
          <button onClick={this
            .login
            .bind(this)}>
            Login with Facebook
          </button>

          <button onClick={this
            .logout
            .bind(this)}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {SignInForm};