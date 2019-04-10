import React, { Component } from 'react';
import Label from './partials/label';
import Input from './partials/input';
import Button from './partials/button';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return (
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    alert(this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <Label for="name" text="Name" />
          <Input
            id="name"
            type="text"
            placeholder="Enter your name..."
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <Label for="email" text="E-Mail" />
          <Input
            id="email"
            type="text"
            placeholder="Enter your e-mail..."
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <Label for="password" text="Password" />
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div className="text-center">
          <Button
            type="submit"
            name="register"
            text="Create Account"
            disabled={!this.validateForm()}
          />
        </div>
        <style jsx>{`
          .form-group {
            margin-bottom: 30px;
          }

          .text-center {
            text-align: center;
          }
        `}</style>
      </form>
    );
  }
}

export default RegisterForm;
