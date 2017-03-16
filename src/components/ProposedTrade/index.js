import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './styles.sass';

const ProposedTrade = ({itemName, itemPic, itemId, itemOwner, cancelProposal}) => {
  let cancelBtn, wrapper;
  return (
    <div className="ptWrapper" ref={node => wrapper = node}>
      <div className="upper">
        <img className="userImg" src={itemPic}/>
        <h4>
          You have proposed <span className="name">{itemOwner}</span> for trading <Link to={`/item/${itemId}`}>{itemName}</Link>.
        </h4>
      </div>
      <div className="tradeBtnWrapper lower">
        <button
          ref={node => cancelBtn = node}
          className="cancelBtn normalBtn"
          onClick={() => {
            cancelBtn.disabled = true;
            cancelBtn.classList.add('disabled');
            wrapper.classList.add('blacklisted');
            cancelProposal(itemId, wrapper);
          }}
        >
          Cancel Proposal
        </button>
      </div>
    </div>
  );
};

ProposedTrade.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  itemPic: PropTypes.string.isRequired,
  itemOwner: PropTypes.string.isRequired,
  cancelProposal: PropTypes.func.isRequired
};

export default ProposedTrade;
