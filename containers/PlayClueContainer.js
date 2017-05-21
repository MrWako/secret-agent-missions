import { fromJS, toJS } from 'immutable';
import React from 'react';
import { connect } from 'react-redux'

import { PlayClue } from '../components/PlayClue.js';
import { addClue, setClueInfo, setClueClue } from '../store/clues.js';

// this is where we should convert state to props
function mapStateToProps(state) {
  let id = state.get('selection').get('missionId')
  let index = state.get('selection').get('clueIndex')
  return {
    clue: state.get('clues').get(id).get(index),
    selection: state.get('selection')
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBarcodePress: () => ownProps.navigation.navigate('CheckBarcode')
  };
}

function wrap(Component) {
  return function(props) {
    return <Component
      clue={props.clue.toJS()}
      selection={props.selection.toJS()}
      onBarcodePress={props.onBarcodePress}/>
  }
}

export const PlayClueContainer = connect(mapStateToProps, mapDispatchToProps)(wrap(PlayClue));
