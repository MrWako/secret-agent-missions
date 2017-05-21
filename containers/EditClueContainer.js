import { fromJS, toJS } from 'immutable';
import React from 'react';
import { connect } from 'react-redux'

import { EditClue } from '../components/EditClue.js';
import { addClue } from '../store/clues.js';

// this is where we should convert state to props
function mapStateToProps(state) {
  let id = state.get('selection').get('missionId')
  let index = state.get('selection').get('clueIndex')
  console.log(state.get('clues').get(id).get(index))
  return {
    clue: state.get('clues').get(id).get(index)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onAddPress: (id) => {}
  };
}

function wrap(Component) {
  return function(props) {
    return <Component
      clue={props.clue.toJS()}/>
  }
}

export const EditClueContainer = connect(mapStateToProps, mapDispatchToProps)(wrap(EditClue));
