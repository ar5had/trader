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
          <div className="lIWrapper">
            <input className="houseNo" type="text" placeholder="House"/>
            <input className="city" type="text" placeholder="City"/>
            <input className="state" type="text" placeholder="State"/>
            <input className="Landmark" type="text" placeholder="Landmark"/>
            <input className="Country" type="text" placeholder="Country"/>
            <input className="pinCode" type="text" placeholder="Pin Code"/>
          </div>
        </div>
        <div className="contactInfo">
          <h3 className="normal marB20">Contact Info</h3>
          <div className="cIWrapper">
            <input className="email" type="email" placeholder="Email"/>
            <input className="phone" type="tel" placeholder="Number"/>
          </div>
        </div>
      </div>
    );
  }
}

export default OtherInfo;
