import { fromJS, toJS } from 'immutable';
import React from 'react';
import { connect } from 'react-redux'

import { MissionsList } from '../components/MissionsList.js';
import { addMissionSummary } from '../store/missionSummary.js';

// this is where we should convert state to props
function mapStateToProps(state) {
  return {
    missionSummary: state.get('missionSummary')
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMissionPress: () => ownProps.navigation.navigate('Frontpage'),
    onAddPress: () => dispatch(addMissionSummary())
  };
}

function wrap(Component) {
  return function(props) {
    return <Component
      missionSummary={props.missionSummary.toJS()}
      onMissionPress={props.onMissionPress}
      onAddPress={props.onAddPress}/>
  }
}

export const Missions = connect(mapStateToProps, mapDispatchToProps)(wrap(MissionsList));
