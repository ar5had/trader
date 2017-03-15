import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './styles.sass';
import loadPageProps from '../../utils/loadPageProps';

class ItemPage extends Component {
  componentDidMount() {
    loadPageProps('Item - Trader');
  }

  getButton() {
    if(this.props.app.ownItem) {
      return (
        <div className="optionsWrapper">
          <Link className="backLink" to="/myItems">
            Back to your items
          </Link>
        </div>
      );
    } else {
      return <button className="reqTradeBtn normalBtn">Request Trade</button>;
    }
  }

  render() {
    const data = this.props.app;
    return (
      <div className="itemPageWrapper">
        <div className="itemImgWrapper"
          style={{background: `url(${data.itemPic})`}}
        />
        <div className="itemInfoWrapper">
          <Link className="backLink" to="/">
            <span className="small">
              <svg fill="#000000" height="13" viewBox="0 0 18 15" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10l5 5 5-5z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </span>All Items
          </Link>
          <h3 className="itemName">{data.itemName}</h3>
          <p className="itemCost frm">{`${data.itemCurrency.slice(0,1)}${data.itemPrice}`}</p>
          <p className="description">
            {data.itemDescription}
          </p>
          <div className="itemTags frm">
            Tags:
            {
              data.itemTags.trim().split(',').map(
                (elem, i) => <span key={i} className="tags">{elem}</span>
              )
            }
          </div>
          <p className="seller frm">By <span>{data.itemOwner}</span></p>
          {this.getButton()}
        </div>
      </div>
    );
  }
}

ItemPage.propTypes = {
  app: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    app: state.individualItemData
  };
};

export default connect(
  mapStateToProps
)(ItemPage);

