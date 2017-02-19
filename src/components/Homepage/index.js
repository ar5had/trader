import React, { Component } from 'react';
import './styles.sass';
import Item from '../Item/index';

class Homepage extends Component {
  render() {
    return (
      <main className="main">
        {"1234567890".split("").map((e, i) => <Item key={i}/>)}
      </main>
    );
  }
}

export default Homepage;
