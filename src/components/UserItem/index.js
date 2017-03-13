import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './styles.sass';

class UserItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="uIWrapper" ref={node => this.itemNode = node}>
        <div className="upper">
          <div className="userImg" />
          <div className="itemInfo">
            <h3 className="itemName">
              <Link to={`/item/123`}>{data.itemName}</Link>
            </h3>
            <p className="itemCost frm">{`${data.itemCurrency.slice(0,1)}${data.itemPrice}`}</p>
            <p className="addDate frm">{data.itemAdditionDate}</p>
            <p className="itemDescription">
              {data.itemDescription}
            </p>
            <div className="tradeBtnWrapper lower">
              <button className="deleteBtn normalBtn"
                onClick={() => {
                  this.itemNode.classList.add('blacklisted');
                  this.props.deleteItem(data.key, this.itemNode);
                }}
              >
               Remove Item
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserItem.propTypes = {
  data: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default UserItem;
