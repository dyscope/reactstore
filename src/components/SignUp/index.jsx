import React, { Component } from 'react';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import styles from './signup.module.css';

export class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className={styles['signup-form']}>
        <div className={styles['signup-form-header']}>
          <h3>Sign up to Store</h3>
        </div>
        <div className={styles['signup-form-body']}>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              label="Name"
              type="text"
              name="displayName"
              id="name-field"
              value={displayName}
              onChange={this.handleChange}
              required
            />

            <FormInput
              label="Email address"
              type="email"
              name="email"
              id="email-field"
              value={email}
              onChange={this.handleChange}
              required
            />

            <FormInput
              label="Password"
              type="password"
              name="password"
              id="su-password-field"
              value={password}
              onChange={this.handleChange}
              required
            />

            <FormInput
              label="Confirm password"
              type="password"
              name="confirmPassword"
              id="su-confirm-password-field"
              value={confirmPassword}
              onChange={this.handleChange}
              required
            />

            <div className={styles['field-box']}>
              <CustomButton type="submit">Sign up</CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
