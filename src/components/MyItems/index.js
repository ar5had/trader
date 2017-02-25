import React, { Component } from 'react';

import UserItem from '../UserItem/index';
import './styles.sass';

class MyItems extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="myItemsWrapper">
        {[1,2].map((e, i) => <UserItem key={i}/>)}
      </div>
    );
  }
}

export default MyItems;
