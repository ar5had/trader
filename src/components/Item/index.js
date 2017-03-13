import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

import './styles.sass';

class Item extends Component {
  openItem(url) {
    browserHistory.push(url);
  }

  render() {
    const {name, price, itemId} = this.props;
    const url = `/item/${itemId}`;
    const openItem = this.openItem.bind(this, url);

    return(
      <div className="item text-center">
        <div className="content" onClick={openItem} />
        <h3 className="itemName" onClick={openItem}>
          {name}
        </h3>
        <br />
        <p className="itemCost" onClick={openItem}>
          {price}
        </p>
      </div>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired
};

export default Item;
