import { fromJS, toJS } from 'immutable';
import React from 'react';
import { connect } from 'react-redux'

import { CluesList } from '../components/CluesList.js';
import { addClue } from '../store/clues.js';

// this is where we should convert state to props
function mapStateToProps(state) {
  id = state.get('selection').get('id')
  return {
    clues: state.get('clues').get(id)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onAddPress: () => dispatch(addClue())
  };
}

function wrap(Component) {
  return function(props) {
    return <Component
      clues={props.clues.toJS()}
      onAddPress={props.onAddPress}/>
  }
}

export const Clues = connect(mapStateToProps, mapDispatchToProps)(wrap(CluesList));
