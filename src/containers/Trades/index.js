import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as myItemsActions from '../../actions/myItemsActions';

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
    return ([
      <ProposedTrade key="1" />,
      <ProposedTrade key="2" />
    ]);
  }

  getAllTradeRequests() {
    return ([
      <TradeRequest key="1" />,
      <TradeRequest key="2" />
    ]);
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
  // trades: PropTypes.object.isRequired,
  itemActions: PropTypes.object.isRequired
};

// const mapStateToProps = (state) => {
//   return {
//     trades: state.tradesData
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    itemActions: bindActionCreators(myItemsActions, dispatch)
  };
};

export default connect(
  /*mapStateToProps*/ undefined,
  mapDispatchToProps
)(Trades);
