import { fromJS, toJS } from 'immutable';
import React from 'react';
import { connect } from 'react-redux'

import { MissionsList } from '../components/MissionsList.js';

// this is where we should convert state to props
function mapStateToProps(state) {
  return {
    missions: state.get('missionsReducer')
  };
}

function wrap(Component) {
  return function(props) {
    return <Component missions={props.missions.toJS()} />
  }
}

export const Missions = connect(mapStateToProps)(wrap(MissionsList));
