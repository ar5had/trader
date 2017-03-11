import React, { Component } from 'react';
import './styles.sass';

class Login extends Component {
  componentDidMount() {
    document.title = 'Login - Trader';
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <div className="loginWrapper">
        <h3 className="loginHeading text-center">Login with your social account to add trade items or propose a trade</h3>
        <div className="btnWrapper">
          <a href="/auth/facebook"><button className="loginBtn fbBtn">Facebook Login</button></a>
          <a href="/auth/google"><button className="loginBtn googleBtn">Google Login</button></a>
          <a href="/auth/twitter"><button className="loginBtn twitterBtn">Twitter Login</button></a>
        </div>
      </div>
    );
  }
}

export default Login;
