import { fromJS, toJS } from 'immutable';
import React from 'react';
import { connect } from 'react-redux'
import uuid from 'uuid'

import { Missions } from '../components/Missions.js';

import { addClue } from '../store/clues.js';
import { setMissionId } from '../store/selection.js';
import { addSummary } from '../store/summary.js';

// this is where we should convert state to props
function mapStateToProps(state) {
  return {
    summary: state.get('summary')
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMissionPress: (id) => {
      dispatch(setMissionId(id));
      ownProps.navigation.navigate('Frontpage')
    },
    onAddPress: () => {
      const id = uuid.v1()
      dispatch(addSummary(id));
      dispatch(addClue(id));
    }
  };
}

function wrap(Component) {
  return function(props) {
    return <Component
      summary={props.summary.toList().toJS()}
      onMissionPress={props.onMissionPress}
      onAddPress={props.onAddPress}/>
  }
}

export const MissionsContainer = connect(mapStateToProps, mapDispatchToProps)(wrap(Missions));
