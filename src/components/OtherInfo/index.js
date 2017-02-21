import React, { Component } from 'react';

import './styles.sass';

class OtherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Arshad Khan",
      imgSrc: ""
    };
  }
  render() {
    return(
      <div className="otherInfo">
        <div className="locationInfo">
          <h3 className="normal marB20">Location Info</h3>
          <div>
            <input className="houseNo" type="text"/>
            <input className="city" type="text"/>
            <input className="state" type="text"/>
            <input className="Landmark" type="text"/>
            <input className="Country" type="text"/>
            <input className="pinCode" type="number"/>
          </div>
        </div>
        <div className="contactInfo">
          <h3 className="normal marB20">Contact Info</h3>
        </div>
      </div>
    );
  }
}

export default OtherInfo;
