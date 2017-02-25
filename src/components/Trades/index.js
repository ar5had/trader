import React, { Component } from 'react';
import { Link } from 'react-router';

import TradeRequest from '../TradeRequest/index';
import ProposedTrade from '../ProposedTrade/index';
import './styles.sass';

class Trades extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
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
          <Link to="myItems"><button className="tradeBtn allItemsBtn">My Items</button></Link>
          <Link to="addItem"><button className="tradeBtn addItemBtn">+ Add Item</button></Link>
        </div>
        <div className="tradesInfoWrapper">
          <div className="tradeReqWrapper">
            <h3 className="unCap">Trade Requests</h3>
            <div className="allTradeRequestsWrapper">
              {this.getAllTradeRequests()}
            </div>
          </div>
          <div className="tradeProposedWrapper">
            <h3 className="unCap">Trades Proposed</h3>
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
