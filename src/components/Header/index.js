import React, { Component } from 'react';

import './styles.sass';
import menuIcon from '../../assets/images/menu.svg';

class Header extends Component {
  render() {
    return(
      <header>
        <h1 className="logo">Trader</h1>
        <button className="menuBtn">
          <img src={menuIcon} alt="MENU"/>
        </button>
      </header>
    );
  }
}

export default Header;
