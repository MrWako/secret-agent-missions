import { fromJS, toJS } from 'immutable';
import React from 'react';
import { connect } from 'react-redux'

import { MissionsList } from '../components/MissionsList.js';

// this is where we should convert state to props
function mapStateToProps(state) {
  return {
    missionSummary: state.get('missionSummary')
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onPress: () => ownProps.navigation.navigate('Frontpage')
  };
}

function wrap(Component) {
  return function(props) {
    return <Component missionSummary={props.missionSummary.toJS()} onPress={props.onPress}/>
  }
}

export const Missions = connect(mapStateToProps, mapDispatchToProps)(wrap(MissionsList));
