import React, { Component } from 'react';
// import {Link} from 'react-router';
import { browserHistory } from 'react-router';

import './styles.sass';

class Item extends Component {
  render() {
    return(
      <div className="item" onClick={()=>{
          console.log('clicked');
          browserHistory.push('/item/123');
        }}/>

    );
  }
}

export default Item;
