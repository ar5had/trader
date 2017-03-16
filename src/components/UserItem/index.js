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
          <div className="userImg bkdPic"
           style={{background: `url(${data.itemPic})`}} />
          <div className="itemInfo">
            <h3 className="itemName">
              <Link to={`/item/${data.key}`}>{data.itemName}</Link>
            </h3>
            <p className="itemCost frm">{`${data.itemCurrency.slice(0,1)}${data.itemPrice}`}</p>
            <p className="addDate frm">{data.itemAdditionDate}</p>
            <p className="itemDescription">
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
            <div ref={node => this.rbw = node}
              className="tradeBtnWrapper lower removeBtnWrapper">
              <div>
                <p>Are you sure?</p>
                <button onClick={() => {
                  this.itemNode.classList.add('blacklisted');
                  this.props.deleteItem(data.key, this.itemNode);
                }}>
                  Yes
                </button>
                <button onClick={() => {
                  this.rbw.classList.remove('open');
                }}>
                  No
                </button>
              </div>
              <button className="deleteBtn normalBtn"
                onClick={() => {
                  this.rbw.classList.add('open');
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
