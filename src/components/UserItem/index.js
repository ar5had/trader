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
      <div className="uIWrapper">
        <div className="upper">
          <div className="userImg" />
          <div className="itemInfo">
            <h3 className="itemName">
              <Link to={`/item/${data.itemAdditionDate.getTime()}`}>{data.itemName}</Link>
            </h3>
            <p className="itemCost frm">{`${data.itemCurrency.slice(0,1)}${data.itemPrice}`}</p>
            <p className="addDate frm">{data.itemAdditionDate.toDateString().slice(5)}</p>
            <p className="itemDescription">
              {data.itemDescription}
            </p>
            <div className="tradeBtnWrapper lower">
              <button className="deleteBtn normalBtn">Remove Item</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default UserItem;
