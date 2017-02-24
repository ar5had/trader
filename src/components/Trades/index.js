import React, { Component } from 'react';
import TradeRequest from '../TradeRequest/index';
import ProposedTrade from '../ProposedTrade/index';
import './styles.sass';

class Trades extends Component {
  componentDidMount() {
    document.querySelector('.menu').classList.remove('open');
  }

  getAllProposedTrades() {
    return([
      <ProposedTrade key="1"/>,
      <ProposedTrade key="2"/>
    ]);
  }

  getAllTradeRequests() {
    return([
      <TradeRequest key="1"/>,
      <TradeRequest key="2"/>
    ]);
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
            <div className="allTradeRequestsWrapper">
              {this.getAllTradeRequests()}
            </div>
          </div>
          <div className="tradeProposedWrapper">
            <h3 className="unCap">Trade Proposed</h3>
            <div className="allProposedTradesWrapper">
              {this.getAllProposedTrades()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trades;
