import React, { Component } from 'react';

import BasicInfo from '../BasicInfo/index';
import OtherInfo from '../OtherInfo/index';
import './styles.sass';

class Profile extends Component {
  componentDidMount() {
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <div className="infoWrapper">
        <BasicInfo />
        <OtherInfo />
      </div>
    );
  }
}

export default Profile;
