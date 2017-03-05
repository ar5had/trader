import React, { Component, PropTypes } from 'react';

import './styles.sass';

class BasicInfo extends Component {
  render() {
    return(
      <div className="basicInfo">
        <div className="profilePic" />
        <div className="nameWrapper">
          <h3 className="normal">{this.props.data.name}</h3>
        </div>
      </div>
    );
  }
}

BasicInfo.propTypes = {
  data: PropTypes.object.isRequired
};

export default BasicInfo;
