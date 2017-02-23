import React, { Component } from 'react';
import './styles.sass';

class Trades extends Component {
  componentDidMount() {
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <div className="tradesWrapper">
        <div className="addTradeWrapper">
          <button className="tradeBtn">+ Add Trade</button>
        </div>
        <div className="tradesInfoWrapper">
          <div className="tradeReqWrapper">
            <h3 className="unCap">Trade Requests</h3>
          </div>
          <div className="tradeProposedWrapper">
            <h3 className="unCap">Trade Proposed</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Trades;
