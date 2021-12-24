import React, { Component } from 'react';
import styles from './signin.module.css';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className={styles['auth-form']}>
        <div className={styles['auth-form-header']}>
          <h3>Sign in to Store</h3>
        </div>
        <div className={styles['auth-form-body']}>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              label="Email address"
              type="email"
              name="email"
              id="login-field"
              value={this.state.email}
              handleChange={this.handleChange}
              required
            />

            <FormInput
              label="Password"
              type="password"
              name="password"
              id="password-field"
              value={this.state.password}
              handleChange={this.handleChange}
              required
            />

            <div className={styles['field-box']}>
              <CustomButton type="submit">Sign in</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                Sign in with Google
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
