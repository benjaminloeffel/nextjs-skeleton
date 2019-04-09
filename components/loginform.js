import React, { Component } from 'react';
import Button from '../components/button';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Validate Form
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  // Handle Change
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  // Handle Submit
  handleSubmit(event) {
    alert('email: ' + this.state.email);
    alert('password: ' + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your e-mail address..."
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password..."
            value={this.state.password}
            onChange={this.handleChange}
          />
          <a href="#">Forgot your password?</a>
        </div>
        <div className="text-center">
          <Button
            type="submit"
            name="login"
            text="Login"
            disabled={!this.validateForm()}
          />
        </div>
        <style jsx>{`
          form {
          }

          .form-group {
            margin-bottom: 30px;
          }

          label {
            font-size: 12px;
            text-transform: uppercase;
            font-weight: bold;
            display: block;
          }

          input {
            display: inline-block;
            width: 100%;
            padding: 4px 8px;
            border: 2px solid lightgray;
            border-radius: 3px;
          }

          input:focus {
            border: 2px solid darkgray;
            outline: none;
          }

          a {
            float: right;
            font-size: 12px;
            text-decoration: none;
          }

          .text-center {
            text-align: center;
          }
        `}</style>
      </form>
    );
  }
}

export default LoginForm;
