import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as tradeActions from '../../actions/tradeActions';

import TradeRequest from '../../components/TradeRequest/index';
import ProposedTrade from '../../components/ProposedTrade/index';
import './styles.sass';
import loadPageProps from '../../utils/loadPageProps';

class Trades extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    loadPageProps('Trades - Trader');
  }

  getAllProposedTrades() {
    const trades = this.props.trades.proposedTrades;
    if(trades.length > 0) {
      return trades.map(
        elem =>
          <ProposedTrade
            itemPic={elem.itemPic}
            itemOwner={elem.itemOwner}
            itemId={elem.id}
            cancelProposal={this.cancelTradeRequest.bind(this)}
            itemName={elem.itemName}
            key={`${elem.id}pt`}
          />
      );
    } else {
      return (<h4 className="noitemHeading"> No trade proposal sent!</h4>);
    }

  }

  getAllTradeRequests() {
    const trades = this.props.trades.tradeRequests;
    if(trades.length > 0) {
      return trades.map(
        elem =>
          elem.itemRequests.map(
            req => (
              <TradeRequest
                itemPic={elem.itemPic}
                reqMaker={req.reqMaker}
                reqStatus={req.reqStatus}
                docId={req.docId.toString()}
                itemId={elem.key.toString()}
                declineRequest={this.declineRequest.bind(this)}
                acceptRequest={this.acceptRequest.bind(this)}
                itemName={elem.itemName}
                key={`${elem.key}tr`}
              />
            )
          )
      );
    } else {
      return (<h4 className="noitemHeading"> No trade requests!</h4>);
    }
  }

  cancelTradeRequest(id, node) {
    this.props.tradeActions.cancelTradeProposed(id, node);
  }

  declineRequest(id, docId, node) {
    this.props.tradeActions.declineTradeReq(id, docId, node);
  }

  acceptRequest() {

  }

  render() {
    return (
      <div className="tradesWrapper">
        <div className="addTradeWrapper">
          <Link to="/myItems"><button className="tradeBtn allItemsBtn">My Items</button></Link>
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

Trades.propTypes = {
  trades: PropTypes.object.isRequired,
  tradeActions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    trades: state.tradesData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tradeActions: bindActionCreators(tradeActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trades);
