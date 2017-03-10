import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

import './styles.sass';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.previousWidth = 0;
    this.menuButton = (
      <button className="menuBtn"
        onClick={
          () => {
            document.querySelector(".menu").classList.toggle("open");
          }
        }
      >
        MENU
      </button>
    );

    this.loggedInMenu = (
      <div className="menu">
        <Link onlyActiveOnIndex={true} key={1} to="/"
          activeClassName="activeNavLink" className="navLink"
          onClick={this.collapseMenu.bind(this)} >
          Home
        </Link>
        <Link onlyActiveOnIndex={true} key={2} to="/profile"
          activeClassName="activeNavLink" className="navLink"
          onClick={this.collapseMenu.bind(this)} >
          Profile
        </Link>
        <Link onlyActiveOnIndex={true} key={3} to="/trades"
          activeClassName="activeNavLink" className="navLink"
          onClick={this.collapseMenu.bind(this)} >
          Trades
        </Link>
        <Link onlyActiveOnIndex={true} key={4}
          activeClassName="activeNavLink" className="navLink"
          onClick={
            () => {
              this.collapseMenu();
              fetch('/logout', {method: 'POST', credentials: 'same-origin'})
              .then(res => res.status === 200 ? browserHistory.push('/') : '')
              .catch(err => console.error(`Error Happened while logging out- ${err}`));
            }
          }
        >
          Logout
        </Link>
      </div>
    );

    this.loggedOutMenu = (
      <div className="menu loginMenu">
        <Link onlyActiveOnIndex={true} key={1} to="/"
          activeClassName="activeNavLink" className="navLink"
          onClick={this.collapseMenu.bind(this)} >
          Home
        </Link>
        <Link onlyActiveOnIndex={true} key={5} to="/login"
          activeClassName="activeNavLink" className="navLink"
          onClick={this.collapseMenu.bind(this)} >
          LogIn/Sign Up
        </Link>
      </div>
    );

    this.setNav();
    this.setMenuState(window.innerWidth);
    this.previousWidth = window.innerWidth;

  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setMenuState(window.innerWidth);
    });
  }

  collapseMenu() {
    document.querySelector('.menu').classList.remove('open');
  }

  setMenuState(width) {
    if (this.previousWidth !== width) {
      if (width > 768) {
        const menu = document.querySelector('div.menu');
        if (menu) {
          menu.classList.remove("open");
        }
        this.setState({ menuActive: false });
      } else {
        this.setState({ menuActive: true });
      }
      this.previousWidth = width;
    }
  }

  setNav() {
    // check for auth here
    if (this.props.userlogged) {
      this.setState({ nav: this.loggedInMenu });
    } else {
      this.setState({ nav: this.loggedOutMenu });
    }
  }

  render() {
    return (
      <header className="header">
        <h1>
          <Link onlyActiveOnIndex={true} to="/" className="logo">
            Trader
          </Link>
        </h1>
        {this.state.menuActive ? this.menuButton : ""}
        {this.state.nav}
      </header>
    );
  }
}

Header.propTypes = {
  userlogged: PropTypes.bool.isRequired
};

export default Header;
