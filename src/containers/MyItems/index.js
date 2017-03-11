import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as itemActions from '../../actions/itemActions';

import UserItem from '../../components/UserItem/index';
import AddItemPage from '../../components/AddItemPage/index';
import './styles.sass';

class MyItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false
    };
  }

  componentDidMount() {
    document.title = 'My Items - Trader';
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }

  closeModal() {
    this.setState({ modalOpened: false });
    document.body.classList.remove('modal-opened');
    document.body.style.marginRight = 0;
  }

  getModal() {
    if (this.state.modalOpened) {
      return (
        <AddItemPage
          openClass="open" close={this.closeModal.bind(this)}
          addItem={this.props.actions.addItem.bind(this)} />
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
      <div className="myItemsWrapper">
        {this.getModal()}
        <div className="addTradeWrapper">
          <button
            onClick={() => {
              this.openModal();
            }}
            className="tradeBtn addItemBtn">
            + Add Item
          </button>
        </div>
        {[1, 2].map((e, i) => <UserItem key={i} />)}
      </div>
    );
  }
}

MyItems.propTypes = {
  app: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    app: state.appData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyItems);
