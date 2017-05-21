import { fromJS, toJS } from 'immutable';
import React from 'react';
import { connect } from 'react-redux'

import { EditClue } from '../components/EditClue.js';
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
    onBarcodePress: () => ownProps.navigation.navigate('SetBarcode'),
    onInfoChange: (id, index, text) => dispatch(setClueInfo(id, index, text)),
    onClueChange: (id, index, text) => dispatch(setClueClue(id, index, text))
  };
}

function wrap(Component) {
  return function(props) {
    return <Component
      clue={props.clue.toJS()}
      selection={props.selection.toJS()}
      onBarcodePress={props.onBarcodePress}
      onInfoChange={props.onInfoChange}
      onClueChange={props.onClueChange}/>
  }
}

export const EditClueContainer = connect(mapStateToProps, mapDispatchToProps)(wrap(EditClue));
