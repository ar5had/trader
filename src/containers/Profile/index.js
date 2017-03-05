import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as profileActions from '../../actions/profileActions';

import BasicInfo from '../../components/BasicInfo/index';
import OtherInfo from '../../components/OtherInfo/index';
import './styles.sass';

class Profile extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <div className="infoWrapper">
        <BasicInfo data={this.props.profile} />
        <OtherInfo data={this.props.profile} />
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    profile: state.profileData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
