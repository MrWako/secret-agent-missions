import { fromJS, toJS } from 'immutable';
import React from 'react';
import { connect } from 'react-redux'

import { CluesList } from '../components/CluesList.js';
import { addClue } from '../store/clues.js';

// this is where we should convert state to props
function mapStateToProps(state) {
  let id = state.get('selection').get('missionId')
  console.log(state.get('clues').get(id))
  return {
    missionId: id,
    clues: state.get('clues').get(id),
    summary: state.get('summary').get(id)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onAddPress: (id) => dispatch(addClue(id)),
    onCluePress: (id) => {
      //dispatch(setMissionId(id));
      ownProps.navigation.navigate('EditClue')
    },
  };
}

function wrap(Component) {
  return function(props) {
    return <Component
      clues={props.clues.toJS()}
      summary={props.summary.toJS()}
      missionId={props.missionId}
      onCluePress={props.onCluePress}
      onAddPress={props.onAddPress}/>
  }
}

export const Clues = connect(mapStateToProps, mapDispatchToProps)(wrap(CluesList));
