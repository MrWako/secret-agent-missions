import { fromJS, toJS } from 'immutable';
import React from 'react';
import { connect } from 'react-redux'

import { MissionsList } from '../components/MissionsList.js';

// this is where we should convert state to props
function mapStateToProps(state, ownProps) {
  return {
    missions: state.get('missionsReducer'),
    onPress: () => ownProps.navigation.navigate('Frontpage')
  };
}

function wrap(Component) {
  return function(props) {
    return <Component missions={props.missions.toJS()} onPress={props.onPress}/>
  }
}

export const Missions = connect(mapStateToProps)(wrap(MissionsList));
