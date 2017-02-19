import React, { Component } from 'react';
import {Link} from 'react-router';

import './styles.sass';

class Item extends Component {
  render() {
    return(
      <Link className="item">
        <div/>
      </Link>
    );
  }
}

export default Item;
