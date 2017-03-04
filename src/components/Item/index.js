import React, { Component } from 'react';
// import {Link} from 'react-router';
import { browserHistory } from 'react-router';

import './styles.sass';

class Item extends Component {
  render() {
    return(
      <div className="item" onClick={()=>{
          browserHistory.push('/item/123');
        }}>
        <div className="content" />
      </div>

    );
  }
}

export default Item;
