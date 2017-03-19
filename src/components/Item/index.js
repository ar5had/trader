import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

import './styles.sass';

class Item extends Component {
  componentDidMount() {
    Array.from(document.querySelectorAll('[data-bg]')).forEach(image => {
      const { clientWidth , clientHeight } = image;
      const imageParams = `w_${clientWidth},h_${clientHeight}`;
      const [head, end] = image.dataset.bg.split('upload');
      image.style.backgroundImage = `url('${head}upload/${imageParams}${end}')`;
    });
  }

  openItem(url) {
    browserHistory.push(url);
  }

  render() {
    const {name, price, itemId, pic} = this.props;
    const url = `/item/${itemId}`;
    const openItem = this.openItem.bind(this, url);

    return(
      <div className="item text-center" onClick={openItem}>
        <div className="content bkdPic"
          data-bg={`${pic}`}
        />
        <h3 className="itemName">
          {name}
        </h3>
        <br />
        <p className="itemCost">
          {price}
        </p>
      </div>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired,
  pic: PropTypes.string.isRequired
};

export default Item;
