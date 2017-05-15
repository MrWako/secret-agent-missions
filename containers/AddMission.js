import { fromJS, toJS } from 'immutable';
import React from 'react';
import { connect } from 'react-redux'

import { AddButton} from '../components/AddButton.js';
import { addMissionSummary } from '../store/missionSummary.js';

// this is where we should convert state to props
function mapStateToProps(state) {
  return {
    missionSummary: state.get('missionSummary')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPress: () => dispatch(addMissionSummary())
  };
}

function wrap(Component) {
  return function(props) {
    return <Component onPress={props.onPress}/>
  }
}

export const AddMission = connect(mapStateToProps, mapDispatchToProps)(wrap(AddButton));
