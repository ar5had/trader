import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as itemActions from '../../actions/itemActions';

import TradeRequest from '../../components/TradeRequest/index';
import ProposedTrade from '../../components/ProposedTrade/index';
import AddItemPage from '../../components/AddItemPage/index';
import './styles.sass';

class Trades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false
    };
  }

  componentDidMount() {
    document.title = 'Trades - Trader';
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }

  closeModal() {
    this.setState({ modalOpened: false });
    document.body.classList.remove('modal-opened');
    document.body.style.marginRight = 0;
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

  getModal() {
    if (this.state.modalOpened) {
      return (
        <AddItemPage
          openClass="open" close={this.closeModal.bind(this)}
          addItem={this.props.itemActions.addItem.bind(this)} />
      );
    } else {
      return;
    }
  }

  openModal() {
    const scrollBar = document.querySelector('.scrollbar-measure');
    const scrollBarWidth = scrollBar.offsetWidth - scrollBar.clientWidth;
    document.body.classList.add('modal-opened');
    document.body.style.marginRight = `${scrollBarWidth}px`;
    this.setState({ modalOpened: true });
  }

  render() {
    return (
      <div className="tradesWrapper">
        {this.getModal()}
        <div className="addTradeWrapper">
          <Link to="myItems"><button className="tradeBtn allItemsBtn">My Items</button></Link>
          <button
            onClick={() => {
              this.openModal();
            }}
            className="tradeBtn addItemBtn">
            + Add Item
          </button>
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
    itemActions: bindActionCreators(itemActions, dispatch)
  };
};

export default connect(
  /*mapStateToProps*/ undefined,
  mapDispatchToProps
)(Trades);
