import { Map } from 'immutable';

const SET_MISSION_ID = 'SET_MISSION_ID'
const RESET_CLUE_INDEX = 'RESET_CLUE_INDEX'
const INCREMENT_CLUE_INDEX = 'RESET_CLUE_INDEX'

export const setMissionId = (id) => {
  return {
    type: SET_MISSION_ID,
    missionId : id
  }
}

export const resetClueIndex = (id) => {
  return {
    type: RESET_CLUE_INDEX,
    missionId : id
  }
}

export const incrementClueIndex = (id) => {
  return {
    type: INCREMENT_CLUE_INDEX,
    missionId : id
  }
}

// Initial state of the store
const initialState = Map({
  "missionId": "0",
  "clueIndex": 0
})

export const selection = (state = initialState, action) => {
  switch (action.type) {
    case SET_MISSION_ID:
      return state.set('missionId', action.missionId);
    case RESET_CLUE_INDEX:
      return state.set('clueIndex', 0);
    case INCREMENT_CLUE_INDEX:
      return state.set('clueIndex', state.get('clueIndex') + 1);
    default:
      return state;
    }
}
