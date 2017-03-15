import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './styles.sass';
import Item from '../../components/Item/index';
import loadPageProps from '../../utils/loadPageProps';

class Homepage extends Component {
  componentDidMount() {
    loadPageProps('Home - Trader');
  }

  getAllItemsData() {
    const data = this.props.app;
    if(data.length > 0) {
      return data.map((e) =>
        <Item key={e.key} itemId={e.key} pic={e.itemPic}
          price={`${e.itemCurrency.slice(0,1)}${e.itemPrice}`} name={e.itemName} />);
    } else {
      return <h3 className="noItemHeading"> No items found!</h3>;
    }
  }

  render() {
    return (
      <main className="main">
        {this.getAllItemsData()}
        {
          this.props.app.length > 0 ?
            <div className="item" /> : ""
        }
      </main>
    );
  }
}

Homepage.propTypes = {
  app: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    app: state.allItemsData
  };
};


export default connect(
  mapStateToProps
)(Homepage);
