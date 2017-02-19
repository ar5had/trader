import React, { Component, PropTypes } from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
