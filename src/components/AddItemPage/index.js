import React, { Component, PropTypes } from 'react';

import './styles.sass';
import addItemPic from '../../assets/images/fileUpload.svg';

const isCurrencyValid = val => (
  val === "₹-INR" ||
  val === "$-DOLLAR" ||
  val === "€-EURO" ||
  val === "£-POUND"
);

const isPriceValid = val => (!isNaN(val) && !isNaN(parseInt(val, 10)));

class AddItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: null
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.modalWrapper.classList.add(this.props.openClass);
    }, 50);
  }

  close() {
    this.modalWrapper.classList.remove(this.props.openClass);
    setTimeout(() => {
      this.props.close();
    }, 550);
  }

  handleNewItemFormSubmit(event) {
    event.preventDefault();
    const itemData = {};
    [].forEach.call(event.target, (elem) => {
      if (elem.getAttribute('type') !== 'submit') {
        itemData[elem.getAttribute('name')] = elem.value;
      }
    });

    const currencyValidity = isCurrencyValid(itemData.itemCurrency);
    const priceValidity = isPriceValid(itemData.itemPrice);

    if(currencyValidity && priceValidity) {
      this.props.addItem(itemData);
    } else {
      if(!currencyValidity) {
        this.showErrorMessage('Enter correct currency from the given list!');
      } else if(!priceValidity) {
        this.showErrorMessage('Enter a valid price value!');
      }
    }
  }

  showErrorMessage(str) {
    this.setState({errorMsg: str});
  }

  getErrorMessage() {
    if(!this.state.errorMsg) {
      return (
        <h3 className="fullWidthFlexItem error">You are a fool!</h3>
      );
    } else {
      return;
    }
  }

  saveItem() {
    // triggers form submit
    this.submitItemFormBtn.click();
  }

  render() {
    return (
      <div className="addItemWrapper" ref={node => { this.modalWrapper = node; }}>
        <div className="hider" />
        <div className="modal">
          <div className="heading">
            <h3>Add Item</h3>
          </div>
          <form name="addItemForm" className="itemWrapper" onSubmit={this.handleNewItemFormSubmit.bind(this)}>
            {this.getErrorMessage()}
            <div className="itemPicWrapper text-center">
              <img className="img imgStyle" onClick={() => this.picInput.click()} src={addItemPic} />
              <input name="itemPic" type="file" id="itemPicInput"
                accept="image/jpeg, image/png" ref={node => this.picInput = node} />
              <label htmlFor="itemPicInput" className="imgText frm">Upload Item Picture</label>
            </div>
            <div className="itemInfoWrapper">
              <div className="inputWrapper">
                <label htmlFor="itemName">Name:</label>
                <input id="itemName" name="itemName" type="text" className="itemName" placeholder="Enter Name" required />
              </div>
              <div className="priceWrapper">
                <div className="inputWrapper">
                  <label htmlFor="itemPrice">Price:</label>
                  <input min="0" id="itemPrice" name="itemPrice" type="number" className="itemPrice" placeholder="Enter Price" required />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="itemCurrency">Currency:</label>
                  <input autoComplete={false} id="itemCurrency" list="currency" name="itemCurrency" type="search" className="itemCurrency" placeholder="Enter Currency" />
                  <datalist id="currency">
                    <option value="₹-INR" />
                    <option value="$-DOLLAR" />
                    <option value="€-EURO" />
                    <option value="£-POUND" />
                  </datalist>
                </div>
              </div>
              <div className="inputWrapper">
                <label htmlFor="itemDescription">Description:</label>
                <textarea name="itemDescription" id="itemDescription" className="itemDescription" placeholder="Enter Item Description" />
              </div>
              <div className="inputWrapper">
                <label htmlFor="itemTags">Tags(Comma Separated):</label>
                <textarea name="itemTags" id="itemTags" className="itemTags" placeholder="Enter Tags for better searchablity of Item" />
              </div>
            </div>
            <input type="submit" ref={node => (this.submitItemFormBtn = node)} style={{ display: 'none' }} />
          </form>
          <div className="buttonWrapper">
            <button className="saveItemBtn" onClick={this.saveItem.bind(this)}>Save</button>
            <button className="cancelItemBtn" onClick={this.close.bind(this)}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

AddItemPage.propTypes = {
  close: PropTypes.func,
  openClass: PropTypes.string,
  addItem: PropTypes.func.isRequired
};

export default AddItemPage;

