import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.sass';

class ItemPage extends Component {
  componentDidMount() {
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <div className="itemPageWrapper">
        <div className="itemImgWrapper">

        </div>
        <div className="itemInfoWrapper">
          <Link className="backLink" to="/"><span className="small">🢐</span> All Items</Link>
          <h3 className="itemName">Eloquent Javascript</h3>
          <p className="itemCost">$40</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nulla modi, odit explicabo hic doloremque commodi ab molestiae. Iure voluptatem labore et aliquid soluta inventore expedita quam vel a earum!
          </p>
          <p className="seller">By <span>Arshad Khan</span></p>
          <button className="reqTradeBtn">Request Trade</button>
        </div>
      </div>
    );
  }
}

export default ItemPage;
