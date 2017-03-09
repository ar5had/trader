import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as profileActions from '../../actions/profileActions';

import BasicInfo from '../../components/BasicInfo/index';
import OtherInfo from '../../components/OtherInfo/index';
import './styles.sass';

class Profile extends Component {
  componentWillMount() {
    this.props.actions.getInitalProfileState();
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }

  updateProfileInfo(changedInfo, editSection) {
    this.props.actions.updateProfileInfo(changedInfo, editSection);
  }

  render() {
    return (
      <div className="infoWrapper">
        {/*
          no need to pass update method to basic info as for this appm picture and
          and name of user will not be mutable and their value will be based upon
          the social account which user uses to sign in.
        */}
        <BasicInfo data={this.props.profile} />
        <OtherInfo data={this.props.profile} updateProfileInfo={this.updateProfileInfo.bind(this)} />
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
