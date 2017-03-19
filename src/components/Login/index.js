import React, { Component, PropTypes } from 'react';

import './styles.sass';
import loadPageProps from '../../utils/loadPageProps';

class Login extends Component {
  componentDidMount() {
    loadPageProps('Login - Trader');
  }

  render() {
    const last_item = this.props.location.query.l_i;
    return (
      <div className="loginWrapper">
        <h3 className="loginHeading text-center">Login with your social account to add trade items or propose a trade</h3>
        <div className="btnWrapper">
          <a href={`/auth/facebook?l_i=${last_item}`}><button className="loginBtn fbBtn">Facebook Login</button></a>
          <a href={`/auth/google?l_i=${last_item}`}><button className="loginBtn googleBtn">Google Login</button></a>
          <a href={`/auth/twitter?l_i=${last_item}`}><button className="loginBtn twitterBtn">Twitter Login</button></a>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  location: PropTypes.object.isRequired
};

export default Login;
