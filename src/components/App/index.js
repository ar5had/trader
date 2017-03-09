import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from '../Header/index';
import Footer from '../Footer/index';
import './styles.sass';
import '../../styles/animation.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false
    };
  }
  componentWillMount() {
    console.log('component will mount!');

  }

  getContent() {
    const mainContent = (
      <div className="wrapper">
        <Header userLogged/>
        <ReactCSSTransitionGroup
          transitionName="content"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <div key={this.props.location.pathname}>
            {this.props.children}
            <Footer />
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );

    return mainContent;
  }

  render() {
    return this.getContent()
  }
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object,
  "location.pathname": PropTypes.string
};

export default App;
