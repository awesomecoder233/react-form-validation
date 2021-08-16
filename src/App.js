import { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <Register />
    );
  }
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
  }
  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" name="fullName" onChange={this.handleChange} noValidate/>
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={this.handleChange} noValidate/>
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={this.handleChange} noValidate/>
            </div>
            <div className='info'>
              <small>Password must be eight characters in length</small>
            </div>
            <div clasName='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default App;
